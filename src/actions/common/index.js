import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { baseUrl } from "src/config";
import { authAtom } from "src/recoil/auth";
import request from "../../../lib/axios";
import { useQueryClient } from "react-query";

const useIndustryType = () => {
  return useQuery(["IndustryType"], () => fetchIndustryType());
};

const useCustomerType = () => {
  return useQuery(["CustomerType"], () => fetchCustomerType());
};

const useCountries = () => {
  return useQuery(["Countries"], () => fetchCountries());
};

const usePersonalAccesToken = () => {
  return useQuery(["personalAccessToken"], () => fetchPersonalAccesToken());
};

const useTopupPlan = () => {
  return useQuery(["topupPlan"], () => fetchTopupPlan());
};

const usePaymentMethod = () => {
  return useQuery(["paymentMethod"], () => fetchPaymentMethod());
};

const useCreateApiKey = () => {
  const queryClient = useQueryClient();
  return useMutation(createApiKeyRequest, {
    onSuccess: (data) => {
      queryClient.setQueryData(["newApiKeyInfo"], data.data)
    },
  });
};

const createApiKeyRequest = async (credentials) => {
  try {
    let res = await request({
      url: `${baseUrl}/auth/personalAccessToken`,
      method: "post",
      data: credentials,
    });
    return res;
  } catch (err) {
    console.log("err", err);
    // throw new Error(error.message);
    throw err;
  }
};

const fetchIndustryType = async () => {
  try {
    let res = await request({
      url: `${baseUrl}/parameters/industry`,
      method: "get",
    });
    return res.data;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

const fetchCustomerType = async () => {
  try {
    let res = await request({
      url: `${baseUrl}/parameters/customerType`,
      method: "get",
    });
    return res.data;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

const fetchCountries = async () => {
  try {
    let res = await request({
      url: `${baseUrl}/parameters/q/country`,
      method: "get",
    });
    return res.data;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

const fetchPersonalAccesToken = async () => {
  try {
    let res = await request({
      url: `${baseUrl}/auth/personalAccessToken`,
      method: "get",
    });
    return res.data;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

const fetchTopupPlan = async () => {
  try {
    let res = await request({
      url: `${baseUrl}/topup/plan/customer`,
      method: "get",
    });
    return res.data;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

const fetchPaymentMethod = async () => {
  try {
    let res = await request({
      url: `${baseUrl}/topup/paymentMethod`,
      method: "get",
    });
    return res.data;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

export { 
  useIndustryType, 
  useCustomerType, 
  useCountries, 
  usePersonalAccesToken,
  useTopupPlan,
  usePaymentMethod,
  useCreateApiKey 
};
