// // components

import CardLineChart from "src/components/Cards/CardLineChart.js";
import CardBarChart from "src/components/Cards/CardBarChart.js";
import CardPageVisits from "src/components/Cards/CardPageVisits.js";
import CardSocialTraffic from "src/components/Cards/CardSocialTraffic.js";
import { dehydrate, QueryClient } from "react-query";
import { getCompanyInfo } from "src/actions/company";
import Admin2 from "src/layouts/Admin2";
import { userAtom } from "src/recoil/user";
import { useRecoilValue, useRecoilState } from "recoil";
import { useCustomerInfo } from "src/actions/customer";

// layout for page
export default function Dashboard() {
  const userData = useRecoilValue(userAtom);
  console.log('userAtom', userData)

  const { data } = useCustomerInfo();
  console.log('customer', data);
  const [, setUser] = useRecoilState(userAtom);
  setUser(data)

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const queryClient = new QueryClient();
  // await queryClient.prefetchQuery(["companyInfo"], () =>
  //   getCompanyInfo()
  // );
  // await queryClient.prefetchQuery(["companyInfo", null], () =>
  //   getCompanyInfo()
  // );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      // ...(await serverSideTranslations(locale, [
      //   "onboarding",
      //   "addressbookpage",
      //   "billingpage",
      //   "components",
      //   "homepage",
      //   "importBulkOrder",
      //   "integrationPage",
      //   "multiPointOrder",
      //   "orderDetailsPage",
      //   "orderpage",
      //   "pageWrapper",
      //   "settings",
      //   "topuppage",
      // ])),
    },
  };
}

Dashboard.layout = Admin2;
