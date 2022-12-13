import React from "react";
import { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";

import { indigo } from "@mui/material/colors";

const color = indigo[900];
// import MenuIcon from "@mui/icons-material/Menu";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";

// import Logo from "./Logo.js";

// import sidebar_action from "./navList";
import {
  others_pages,
  sidebar_action,
  sidebar_pages,
} from "src/data/sidebar.js";
import Link from "next/link";
import { useCommonHooks } from "src/hooks/translation/useCommonHooks";

const drawerWidthOpen = 240;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
  (paddingIconButton + marginIconButton) * 2 + iconFontSize;

export default function Sidebar2(children) {
  const [margin, setMargin] = useState("md:ml-64");
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const refFocus = useRef();
  const { sidebarMenus } = useCommonHooks();

  function toogleOpen() {
    setOpen(!open);
  }

  function toogleOpenSearch() {
    setOpen(false);
    setTimeout(() => {
      refFocus.current.focus();
    }, 500);
  }

  const drawerContent = (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // height: "42px",
          width: "auto",
          backgroundColor: "transparent",
          margin: "20px 14px",
          // padding: "15px 0px",
          // borderBottom: "1px solid lightgray",
          alignItems: "flex-center",
        }}>
        <Box
          sx={{
            flexShrink: 0,
            display: open ? "none" : { xs: "none", sm: "initial" },
            marginBottom: "9px",
          }}>
          {/* <Logo /> */}
        </Box>
        <Typography
          variant="h1"
          noWrap={true}
          // gutterBottom
          sx={{
            display: { xs: "none", sm: "initial" },
            fontSize: "18px",
            fontWeight: 600,
            color: "lightgray",
            width: "154px",
            marginLeft: open ? "0px" : "8px",
            // paddingTop: "4px",
            paddingBottom: "0px",
          }}>
          <img src="/img/logo.svg" alt="Delyva logo" className="" />
        </Typography>

        <Button
          onClick={toogleOpen}
          sx={{
            minWidth: "initial",
            padding: "10px",
            // color: "red",
            borderRadius: "8px",
            backgroundColor: open ? "transparent" : "transparent",
            "&:hover": {
              backgroundColor: "#26284687",
            },
          }}>
          <a className="text-primary">
            <svg
              className="hidden md:block h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </a>
        </Button>
      </Box>

      <List dense={true}>
        {sidebar_action.map((key, index) => (
          <>
            {index === !1 ? (
              <>
                <Tooltip
                  title={open ? key.name : ""}
                  placement={"right"}
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: "gray",
                        color: "white",
                        marginLeft: "22px !important",
                        boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
                      },
                    },
                  }}>
                  <Link href={key.links}>
                    <ListItemButton
                      sx={{
                        margin: "6px 14px",
                        padding: "10px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: "#26284687",
                        },
                      }}>
                      <ListItemIcon sx={{ minWidth: "48px", margin: "0 -2px" }}>
                        <Badge
                          badgeContent={key.badge}
                          color="primary"
                          variant="dot">
                          {key.icons}
                          <key.icons sx={{ fontSize: "20px", color: "lightgray" }} />
                        </Badge>
                      </ListItemIcon>

                      <ListItemText
                        className="text-gray-600 font-semibold"
                        primary={key.name}
                        primaryTypographyProps={{
                          variant: "body2",
                        }}
                        sx={{
                          display: "inline",
                          margin: "0px",
                          overflowX: "hidden",
                          // color: "black",
                          whiteSpace: "nowrap",
                          minWidth: "126px",
                        }}
                      />
                      {key.badge !== 0 ? (
                        <Chip
                          label={key.badge}
                          color={"primary"}
                          size="small"
                          sx={{ height: "auto" }}
                        />
                      ) : (
                        <></>
                      )}
                    </ListItemButton>
                  </Link>
                </Tooltip>
              </>
            ) : (
              <Tooltip
                title={open ? key.name : ""}
                placement={"right"}
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: "gray",
                      color: "white",
                      marginLeft: "22px !important",
                      boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
                    },
                  },
                }}>
                <Link href={key.links}>
                  <ListItemButton
                    sx={{
                      margin: "6px 14px",
                      padding: "10px",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#26284687",
                      },
                    }}>
                    <ListItemIcon sx={{ minWidth: "48px", margin: "0 -2px" }}>
                      <Badge
                        badgeContent={key.badge}
                        color="primary"
                        variant="dot">
                        {key.icons}
                        {/* <key.icons sx={{ fontSize: "20px", color: "lightgray" }} /> */}
                      </Badge>
                    </ListItemIcon>

                    <ListItemText
                      className="text-gray-600 font-semibold"
                      primary={sidebarMenus[key.name.toLowerCase()]}
                      primaryTypographyProps={{
                        variant: "body2",
                      }}
                      sx={{
                        display: "inline",
                        margin: "0px",
                        overflowX: "hidden",
                        // color: "black",
                        whiteSpace: "nowrap",
                        minWidth: "126px",
                      }}
                    />
                    {key.badge !== 0 ? (
                      <Chip
                        label={key.badge}
                        color={"primary"}
                        size="small"
                        sx={{ height: "auto" }}
                      />
                    ) : (
                      <></>
                    )}
                  </ListItemButton>
                </Link>
              </Tooltip>
            )}
          </>
        ))}
        {/* <Divider variant="middle" light={true} /> */}
      </List>
      {/* Divider */}
      {/* <hr className="my-4 md:min-w-full" /> */}
      <List dense={true}>
        {sidebar_pages.map((key, index) => (
          <>
            {index === !1 ? (
              <>
                <Tooltip
                  title={open ? key.name : ""}
                  placement={"right"}
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: "gray",
                        color: "white",
                        marginLeft: "22px !important",
                        boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
                      },
                    },
                  }}>
                  <Link href={key.links}>
                    <ListItemButton
                      sx={{
                        margin: "6px 14px",
                        padding: "10px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: "#26284687",
                        },
                      }}>
                      <ListItemIcon sx={{ minWidth: "48px", margin: "0 -2px" }}>
                        <Badge
                          badgeContent={key.badge}
                          color="primary"
                          variant="dot">
                          {key.icons}
                          {/* <key.icons sx={{ fontSize: "20px", color: "lightgray" }} /> */}
                        </Badge>
                      </ListItemIcon>

                      <ListItemText
                        className="text-gray-600 font-semibold"
                        primary={key.name}
                        primaryTypographyProps={{
                          variant: "body2",
                        }}
                        sx={{
                          display: "inline",
                          margin: "0px",
                          overflowX: "hidden",
                          // color: "black",
                          whiteSpace: "nowrap",
                          minWidth: "126px",
                        }}
                      />
                      {key.badge !== 0 ? (
                        <Chip
                          label={key.badge}
                          color={"primary"}
                          size="small"
                          sx={{ height: "auto" }}
                        />
                      ) : (
                        <></>
                      )}
                    </ListItemButton>
                  </Link>
                </Tooltip>
              </>
            ) : (
              <Tooltip
                title={open ? key.name : ""}
                placement={"right"}
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: "gray",
                      color: "white",
                      marginLeft: "22px !important",
                      boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
                    },
                  },
                }}>
                <Link href={key.links}>
                  <ListItemButton
                    sx={{
                      margin: "6px 14px",
                      padding: "10px",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#26284687",
                      },
                    }}>
                    <ListItemIcon sx={{ minWidth: "48px", margin: "0 -2px" }}>
                      <Badge
                        badgeContent={key.badge}
                        color="primary"
                        variant="dot">
                        {key.icons}
                        {/* <key.icons sx={{ fontSize: "20px", color: "lightgray" }} /> */}
                      </Badge>
                    </ListItemIcon>

                    <ListItemText
                      className="text-gray-600 font-semibold"
                      primary={sidebarMenus[key.name.toLowerCase()]}
                      primaryTypographyProps={{
                        variant: "body2",
                      }}
                      sx={{
                        display: "inline",
                        margin: "0px",
                        overflowX: "hidden",
                        // color: "black",
                        whiteSpace: "nowrap",
                        minWidth: "126px",
                      }}
                    />
                    {key.badge !== 0 ? (
                      <Chip
                        label={key.badge}
                        color={"primary"}
                        size="small"
                        sx={{ height: "auto" }}
                      />
                    ) : (
                      <></>
                    )}
                  </ListItemButton>
                </Link>
              </Tooltip>
            )}
          </>
        ))}
        {/* <Divider variant="middle" light={true} /> */}
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          alignContents: "center",
          margin: "14px 14px",
          padding: "12px 4px",
          borderTop: "1px solid lightgray",
        }}>
        <Box
          sx={{
            display: "flex",
            marginRight: "18px",
            paddingLeft: "0px",
            alignItems: "center",
            alignContent: "center",
          }}>
          {/* <StyledAvatar /> */}
        </Box>

        <IconButton contained="true" sx={{ color: "lightGray" }}>
          {/* <ExitToAppIcon /> */}
        </IconButton>
      </Box>
    </>
  );

  return (
    <Box
    // sx={{ display: "flex" }}
    >
      <Drawer
        className="hidden md:block"
        variant="permanent"
        open={open}
        sx={{
          width: open
            ? { xs: "0px", sm: drawerWidthClose }
            : { xs: drawerWidthClose, sm: drawerWidthOpen },
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: open
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
          "& .MuiDrawer-paper": {
            justifyContent: "space-between",
            overflowX: "hidden",
            width: open
              ? { xs: "0px", sm: drawerWidthClose }
              : { xs: drawerWidthClose, sm: drawerWidthOpen },
            borderRight: "0px",
            borderRadius: "0px 0 0 0px",
            boxShadow: theme.shadows[8],
            // backgroundColor: open ? "#0000FF" : "#0000FF",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: open
                ? theme.transitions.duration.leavingScreen
                : theme.transitions.duration.enteringScreen,
            }),
          },
        }}>
        {drawerContent}
      </Drawer>
      {/* <Box
        component="main"
        sx={{
          backgroundColor: "lightblue",
          padding: "8px",
          margin: "6px 14px",
        }}> */}
      {/* <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
          Header
          <div className="relative bg-bluelight-100 md:pt-32 pb-32 pt-12">
            {children}
            <FooterAdmin />
          </div>
        </div> */}

      {/* <Typography>
          Lorem ipsum sir dolor Ullamco veniam consequat mollit cupidatat
          voluptate sint voluptate enim laborum Lorem sint dolore. Sit sit aute
          nulla aute dolore duis in sit qui in exercitation cupidatat ea dolore.
          Culpa sunt pariatur officia cupidatat tempor consectetur ea commodo
          excepteur veniam tempor. Consectetur duis veniam eiusmod id ipsum
          velit irure. Sint sint ipsum esse occaecat. officia.
        </Typography>
        <Switch
          checked={open}
          onChange={() => setOpen((prevOpen) => !prevOpen)}>
          switch
        </Switch> */}
      {/* </Box> */}
    </Box>
  );
}
