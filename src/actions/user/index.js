import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { baseUrl } from "src/config";
import { userAtom } from "src/recoil/user";
import { initMixpanel } from "src/utils/mixpanel";
import request from "../../../lib/axios";
import { useCompany } from "../company";

const useUser = () => {
  const [user, setuser] = useRecoilState(userAtom);

  return useMutation(getUser, {
    onSuccess: (data) => {
      // setuser();
      // router.push("/settings");
      // console.log(getUser);
    },
  });
};

const getUser = async (credentials) => {
  try {
    let res = await request({
      url: `${baseUrl}/user`,
      method: "get",
      data: credentials,
    });
    return res;
  } catch (err) {
    console.log("err", err);
    // throw new Error(error.message);
    // throw err;
  }
  console.log("getUser", getUser);
};

export { useUser };

// const useGetUserInformation = () => {
//   const [state, dispatch] = useContext(GlobalContext);
//   const { companyDetails, userDetails } = state.global;
//   const customerId = parseInt(useLocalStorage.getItem("customerId"));

//   const getUserInformation = async () => {
//     const getAllCustomerAccount = await get("/user/customers");
//     if (getAllCustomerAccount.status === 200) {
//       const getCustomerDetails = await get(
//         customerId
//           ? `/customer/${customerId}?companyId=${companyDetails.id}`
//           : "/customer"
//       );
//       if (getCustomerDetails.status === 200) {
//         useLocalStorage.setItem("customerId", getCustomerDetails.data.data.id);
//         dispatch({
//           type: "AUTH_SUCCESS",
//           payload: {
//             ...state.global,
//             allCustomerAccounts: getAllCustomerAccount.data.data,
//             customerDetails: getCustomerDetails.data.data,
//             customerId: getCustomerDetails.data.data.id,
//             authFinish: true,
//           },
//         });
//       } else message.error(getCustomerDetails);
//     } else message.error(getAllCustomerAccount);
//   };

//   useEffect(() => {
//     companyDetails?.id && userDetails?.id && getUserInformation();
//   }, [companyDetails, userDetails]);

//   return null;
// };
