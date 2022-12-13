import { baseUrl } from "src/config";
import { useQuery } from "react-query";
import request from "lib/axios";
import { useCustomerInfo } from "../customer";

const useCompany = () => {
  return useQuery(["CompanyInfo"], () => getCompanyInfo());
};

const useServiceCompanies = () => {
  return useQuery(["ServiceCompanies"], () => getServiceCompanies());
};

const useAvailableServiceCompanyId = (id) => {
  const customerDetails = useCustomerInfo();
  return useQuery(["AvailableServiceCompanyId"], () =>
    getAvailableServiceCompanyId(customerDetails.data?.data?.id)
  );
};

const useCompanyAppUrl = () => {
  const { data: companyDetails } = useCompany();
  return useQuery(["CompanyAppUrl"], () => getCompanyAppUrl(), {
    enabled: !!companyDetails,
    select: (data) => {
      const getStartedDataObj = data.reduce((acc, item) => {
        acc[item.company_code] = item;
        return acc;
      }, {});
      const newGetStartedData =
        getStartedDataObj[companyDetails.code] ||
        getStartedDataObj.default ||
        {};
      return newGetStartedData;
    },
  });
};

const getCompanyInfo = () => {
  return fetch(
    `${baseUrl}/company/info?url=https://demo.delyva.app/admin`
  ).then((x) => x.json());
};

const getCompanyAppUrl = () => {
  return fetch(`https://delyvax.com/external/webs.json`).then((x) => x.json());
};

const getServiceCompanies = async () => {
  try {
    let res = await request({
      url: `${baseUrl}/service/serviceCompanies?limit=1000`,
      method: "get",
    });
    return res.data;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

const getAvailableServiceCompanyId = async (id) => {
  try {
    let res = await request({
      url: `${baseUrl}/customer/${id}/allServiceCompany`,
      method: "get",
    });
    return res.data;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

export {
  useCompany,
  getCompanyInfo,
  useCompanyAppUrl,
  getCompanyAppUrl,
  useServiceCompanies,
  useAvailableServiceCompanyId,
};
