import axios from "axios";
import { baseUrl } from "src/config";
import Router from "next/router";

// import createAuthRefreshInterceptor from "axios-auth-refresh";

// Create axios instance.
const axiosInstance = axios.create({
  baseURL: baseUrl,
  // https://api.delyva.app/v1.0/
});

const request = async ({ ...options }) => {
  const { url = "" } = options;
  // let accessToken = await JSON.parse(localStorage.getItem("accessToken"));
  // if (!url.includes("login")) {
  //   axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  // }
  const onSuccess = (res) => res;
  const onError = async ({ response }) => {
    const { error } = response.data;
    if (response.status === 401) {
      let renewTokenRes = await renewToken();
      if (renewTokenRes?.status === 200) {
        return await request({ ...options });
      }
      return renewTokenRes;
    }
    // { status: response.status, message: error.message }
    throw { status: response.status, message: error.message };
  };
  return axiosInstance(options).then(onSuccess).catch(onError);
};

const renewToken = async () => {
  let res = await localStorage.getItem("current_auth");
  const {
    data: { refreshToken = "" },
  } = JSON.parse(res);
  const data = {
    refreshToken,
  };
  try {
    let response = await request({
      url: `${baseUrl}/auth/refreshToken`,
      method: "post",
      data,
    });
    await localStorage.setItem(
      "accessToken",
      JSON.stringify(response.data.data.accessToken)
    );
    return response;
  } catch (err) {
    console.log("err", err);
    if (err.status === 400) {
      localStorage.clear();
      Router.reload();
    }
  }
};

// const handleRequest = async (config) => {
//   let mama = await localStorage.getItem("persist:root");
//   let koko = mama;
//   let accessToken = JSON.parse(koko.auth);
//   console.log("aa", accessToken);
//   config.headers["Content-Type"] = `application/json`;
//   config.headers["Authorization"] = `Bearer ${accessToken}`;
//   return config;
// };
// axiosInstance.interceptors.request.use(handleRequest);

// // Create axios interceptor
// createAuthRefreshInterceptor(axiosInstance, (failedRequest) =>
//   // 1. First try request fails - refresh the token.
//   axiosInstance.get("/auth/refreshToken").then((resp) => {
//     // 1a. Clear old helper cookie used in 'authorize.ts' higher order function.
//     if (axiosInstance.defaults.headers.setCookie) {
//       delete axiosInstance.defaults.headers.setCookie;
//     }
//     const { accessToken } = resp.data;
//     // 2. Set up new access token
//     const bearer = `Bearer ${accessToken}`;
//     axiosInstance.defaults.headers.Authorization = bearer;
//     console.log("bearer", bearer);
//     // 3. Set up new refresh token as cookie
//     const responseCookie = setCookie.parse(resp.headers["set-cookie"])[0]; // 3a. We can't just acces it, we need to parse it first.
//     axiosInstance.defaults.headers.setCookie = resp.headers["set-cookie"]; // 3b. Set helper cookie for 'authorize.ts' Higher order Function.
//     axiosInstance.defaults.headers.cookie = cookie.serialize(
//       responseCookie.name,
//       responseCookie.value
//     );
//     // 4. Set up access token of the failed request.
//     failedRequest.response.config.headers.Authorization = bearer;

//     // 5. Retry the request with new setup!
//     return Promise.resolve();
//   })
// );

export default request;
