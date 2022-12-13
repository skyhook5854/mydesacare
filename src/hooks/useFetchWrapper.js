import { baseUrl } from "src/config";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { authAtom } from "../recoil/auth";
// import { useAlertActions } from "../actions/common/useAlertActions";
import { useRecoilState } from "recoil";

export const useFetchWrapper = () => {
  // const alertActions = useAlertActions();
  const router = useRouter();
  const [auth, setAuth] = useRecoilState(authAtom);

  return {
    get: request("GET"),
    post: request("POST"),
    put: request("PUT"),
    delete: request("DELETE"),
  };

  function request(method) {
    return (url, body) => {
      const requestOptions = {
        method,
        headers: authHeader(url),
      };
      if (body) {
        requestOptions.headers["Content-Type"] = "application/json";
        requestOptions.body = JSON.stringify(body);
      }
      return fetch(url, requestOptions).then(handleResponse);
    };
  }

  // helper functions

  function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const token = auth?.token;
    const isLoggedIn = !!token;
    const isApiUrl = url.startsWith(baseUrl);
    if (isLoggedIn && isApiUrl) {
      return { Authorization: `Bearer ${token}` };
    } else {
      return {};
    }
  }

  function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);

      if (!response.ok) {
        if ([401, 403].includes(response.status) && auth?.token) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          localStorage.removeItem("user");
          setAuth(null);
          router.push("/auth/login");
        }

        const error = (data && data.message) || response.statusText;
        // alertActions.error(error);
        return Promise.reject(error);
      }

      return data;
    });
  }
};
