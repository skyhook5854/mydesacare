import React, { useState } from "react";

// layout for page
import Admin from "src/layouts/Admin";
import Transactions from "./transactions";
import Receipts from "./receipts";
import Invoices from "./invoices";
import CreditNotes from "./credit-notes";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme, makeStyles } from "@mui/material/styles";
import { useBillingHooks } from "src/hooks/translation/useBillingHooks";

const theme = createTheme({
  root: {
    justifyContent: "center",
  },

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

export default function Billing() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { tabs } = useBillingHooks();

  return (
    <>
      <div className="px-4 md:px-10 mx-auto w-full min-h-screen ">
        {/*  */}
        <div className="bg-white rounded-md ">
          {/* muiTabs */}
          <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  // display: "flex",
                  // justifyContent: "center",
                  borderBottom: 1,
                  borderColor: "divider",
                  textTransform: "lowercase",
                }}>
                <Tabs
                  // centered
                  // defaultValue={0}
                  value={value}
                  onChange={handleChange}
                  // variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable  tabs ">
                  <Tab label={tabs.transaction} {...a11yProps(0)} />
                  <Tab label={tabs.receipts} {...a11yProps(1)} />
                  <Tab label={tabs.invoice} {...a11yProps(2)} />
                  <Tab label={tabs.creditNotes} {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Transactions />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Receipts />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Invoices />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <CreditNotes />
              </TabPanel>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
Billing.layout = Admin;
