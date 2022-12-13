import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// layout for page
import Admin from "src/layouts/Admin";
import Referrals from "./referrals";
import Earnings from "./earnings";
import { useRouter } from "next/router";
import Link from "next/link";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ReferFriends(href) {
  const router = useRouter();
  const { t } = useTranslation("homepage");
  const { t: t1 } = useTranslation("refer");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="px-4 md:px-10 mx-auto w-full min-h-screen">
        {/* Refer form */}
        <div className="bg-white rounded-md mb-10">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            {/* Refer_friends */}

            <div className="flex-col md:flex items-center justify-center text-center mx-auto px-10 md:px-0 py-4">
              <h3 className="text-black font-bold text-4xl">
                {t1("content.title")}
              </h3>

              <p className="">{t1("content.subTitle")}</p>
            </div>
            <div className="flex-col md:flex items-center justify-start py-4">
              <img className="mx-auto" src="/img/vector/Refer.svg" alt="" />
              {/* Form */}
              <div className=" w-full bg-white rounded-lg  md:border border-gray-200 shadow md:shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 px-8 py-8">
                <form>
                  <div className="flex justify-between items-center gap-6 mb-3">
                    <div className="w-full mb-8">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        {t1("content.form.email")}
                      </label>
                      <input
                        type="email"
                        className="border border-gray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder={t1("content.form.email")}
                      />
                    </div>
                    <div className="w-full text-center">
                      <button
                        className="bg-primary text-white active:bg-blueGray-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button">
                        {t1("content.form.sendInvites")}
                      </button>
                    </div>
                  </div>
                </form>
                <div className="rounded-t py-2">
                  <div className="relative flex justify-center items-center w-full border-b border-gray-300 my-10 mb-12">
                    <span className="absolute bg-white px-2">
                      {t1("content.form.via")}
                    </span>
                  </div>
                  <div className="flex-col md:flex-col text-center w-full items-center">
                    <button
                      className=" bg-white border border-gray-200 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded-md outline-none focus:outline-none mr-2 mb-1  hover:shadow-md inline-flex items-center justify-center text-sm ease-linear transition-all duration-150"
                      type="button">
                      <i className="mr-1 fab fa-facebook text-lg"></i>
                      Facebook
                    </button>
                    <button
                      className=" bg-white border border-gray-200 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded-md outline-none focus:outline-none mr-2 mb-1  hover:shadow-md inline-flex items-center justify-center text-sm ease-linear transition-all duration-150"
                      type="button">
                      <i className="mr-1 fab fa-google text-lg"></i>
                      Google
                    </button>
                    <button
                      className=" bg-white border border-gray-200 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded-md outline-none focus:outline-none mr-2 mb-1  hover:shadow-md inline-flex items-center justify-center text-sm ease-linear transition-all duration-150"
                      type="button">
                      <i className="mr-1 fab fa-twitter text-lg"></i>
                      Twitter
                    </button>
                    <button
                      className=" bg-white border border-gray-200 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded-md outline-none focus:outline-none mr-2 mb-1  hover:shadow-md inline-flex items-center justify-center text-sm ease-linear transition-all duration-150"
                      type="button">
                      <i className="mr-1 fas fa-link text-lg"></i>
                      Copy link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md ">
          {/* muiTabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ThemeProvider theme={theme}>
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    textTransform: "lowercase",
                  }}>
                  <Tabs
                    defaultValue={0}
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example">
                    <Tab
                      label={t1("content.tabs.referrals")}
                      {...a11yProps(0)}
                    />
                    <Tab
                      textTransform
                      // className="lowercase"
                      label={t1("content.tabs.earnings")}
                      {...a11yProps(1)}
                      // style={{ textTransform: "lowercase" }}
                    />
                    {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Referrals />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Earnings />
                </TabPanel>
                {/* <TabPanel value={value} index={2}>
                Item Three
              </TabPanel> */}
              </Box>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
}
ReferFriends.layout = Admin;
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "onboarding",
        "addressbookpage",
        "billingpage",
        "components",
        "homepage",
        "importBulkOrder",
        "integrationPage",
        "multiPointOrder",
        "orderDetailsPage",
        "orderpage",
        "pageWrapper",
        "settings",
        "topuppage",
        "refer",
      ])),
    },
  };
}
