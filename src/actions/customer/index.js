import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { baseUrl } from "src/config";
import { authAtom } from "src/recoil/auth";
import { companyAtom } from "src/recoil/company";
import request from "../../../lib/axios";

const useCustomerInfo = () => {
  const auth = useRecoilValue(companyAtom);
  return useQuery(["customerInfo"], () =>
    fetchCustomerInfo(auth?.data?.companyId)
  );
};

const useRegister = () => {
  const router = useRouter();
  const [, setAuth] = useRecoilState(authAtom);
  return useMutation(registerRequest, {
    onSuccess: (data) => {
      setAuth(data.data);
      router.push("/welcome");
    },
  });
};

const useUpdateCustomer = () => {
  return useMutation(updateUser);
};

const registerRequest = async (credentials) => {
  try {
    let res = await request({
      url: `${baseUrl}/user/register`,
      method: "post",
      data: credentials,
    });
    return res;
  } catch (err) {
    console.log("err", err);
    throw new Error(err.message);
  }
};

const updateUser = async (data) => {
  try {
    let res = await request({
      url: `${baseUrl}/customer`,
      method: "patch",
      data,
    });
    return res;
  } catch (err) {
    console.log("err", err);
    // throw new Error(error.message);
    throw err;
  }
};

const fetchCustomerInfo = async (companyId) => {
  const customerId = parseInt(localStorage.getItem("customerId"));
  try {
    let res = await request({
      url: `${baseUrl}${
        customerId
          ? `/customer/${customerId}?companyId=${companyId}`
          : "/customer"
      }`,
      method: "get",
    });
    return res.data;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

export { useRegister, useUpdateCustomer, useCustomerInfo, fetchCustomerInfo };
