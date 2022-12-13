// import React, { useState } from "react";

import { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import {
  others_pages,
  sidebar_action,
  sidebar_pages,
} from 'src/data/sidebar.js';
import Link from 'next/link';
import { useCommonHooks } from 'src/hooks/translation/useCommonHooks';

const drawerWidthOpen = 240;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
  (paddingIconButton + marginIconButton) * 2 + iconFontSize;

// components

import AdminNavbar from 'src/components/Navbars/AdminNavbar.js';
import Sidebar from 'src/components/Sidebar/Sidebar.js';
import Sidebar2 from 'src/components/Sidebar/Sidebar2';
import FooterAdmin from 'src/components/Footers/FooterAdmin.js';
import { flex } from 'tailwindcss/defaultTheme';

export default function Admin({ children }) {
  //   const colors = {
  //   primary: "#ff0000"
  // };

  // const theme = useTheme({
  //   palette: {
  //     primary: {
  //       // light: will be calculated from palette.primary.main,
  //       main: colors.primary
  //       // dark: will be calculated from palette.primary.main,
  //     }
  //   },
  //   components: {
  //     MuiListItemButton: {
  //       styleOverrides: {
  //         root: {
  //           "&.Mui-selected": {
  //             borderLeft: `5px solid ${colors.primary}`
  //           }
  //         }
  //       }
  //     }
  //   }
  // });

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const refFocus = useRef();
  const { newOrder, questionnaire, sidebarMenus } = useCommonHooks();

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

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
          display: 'flex',
          // justifyContent: "space-between",
          // height: "42px",
          width: 'auto',
          backgroundColor: 'transparent',
          margin: '20px 14px',
          // padding: "15px 0px",
          // borderBottom: "1px solid lightgray",
          alignItems: 'flex-center',
        }}>
        <Box
          sx={{
            flexShrink: 0,
            display: open ? 'none' : { xs: 'none', sm: 'initial' },
            marginBottom: '9px',
          }}>
          {/* <Logo /> */}
        </Box>
        <Typography
          variant='h1'
          noWrap={true}
          // gutterBottom
          sx={{
            display: { xs: 'none', sm: 'initial', flex },
            // fontSize: "18px",
            // fontWeight: 600,
            color: 'lightgray',
            // width: "154px",
            // marginLeft: open ? "2px" : "8px",
            // paddingTop: "4px",
            paddingBottom: '0px',
          }}>
          <img src='/img/logo/MyDesaCare.svg' alt='MyDesa Care' className='' />
        </Typography>

        <Button
          onClick={toogleOpen}
          sx={{
            minWidth: 'initial',
            // padding: "10px 12px",
            // color: "red",
            borderRadius: '8px',
            // backgroundColor: open ? "transparent" : "transparent",
            // "&:hover": {
            //   backgroundColor: "#26284687",
            // },
          }}>
          <a className='text-primary'>
            <svg
              className='hidden md:block h-6 '
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </a>
        </Button>
      </Box>

      {/* New Order */}

      <List dense={true}>
        {sidebar_action.map((key, index) => (
          <Tooltip
              title={open ? key.name : ''}
              placement={'right'}
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: 'gray',
                    color: 'white',
                    marginLeft: '22px !important',
                    boxShadow: '0px 0px 22px -2px rgba(0,0,0,0.20)',
                  },
                },
              }}>
              <Link href={key.links}>
                <ListItemButton
                  // selected={selectedIndex}
                  // onClick={() => setSelectedIndex((prev) => !prev)}
                  sx={{
                    margin: '6px 14px',
                    padding: '10px',
                    borderRadius: '8px',
                    // color: 'black',
                    // // border: '1px solid #694BF1',
                    '&.Mui-selected': {
                      // backgroundColor: '#694BF1',
                      // borderColor: 'red',
                      border: '1px solid #694BF1',
                    },
                    '&.Mui-focusVisible': {
                      // backgroundColor: '#694BF1',
                      // borderColor: 'red',
                      border: '1px solid #694BF1',
                    },
                    ':hover': {
                      border: '1px solid #694BF1',
                      // color: '#eeee',
                    },
                  }}>
                  <ListItemIcon sx={{ minWidth: '48px', margin: '0 -2px' }}>
                    <Badge
                      badgeContent={key.badge}
                      color='primary'
                      variant='dot'>
                      {key.icons}
                      {/* <key.icons sx={{ fontSize: "20px", color: "lightgray" }} /> */}
                    </Badge>
                  </ListItemIcon>

                  <ListItemText
                    className='text-gray-600 font-semibold'
                    primary={sidebarMenus[key.name.toLowerCase()]}
                    primaryTypographyProps={{
                      variant: 'body2',
                    }}
                    sx={{
                      display: 'inline',
                      margin: '0px',
                      overflowX: 'hidden',
                      // color: "black",
                      whiteSpace: 'nowrap',
                      minWidth: '126px',
                    }}
                  />
                  {key.badge !== 0 ? (
                    <Chip
                      label={key.badge}
                      color={'primary'}
                      size='small'
                      sx={{ height: 'auto' }}
                    />
                  ) : (
                    <></>
                  )}
                </ListItemButton>
              </Link>
            </Tooltip>
        ))}
      </List>
      {/* <hr className="my-4 md:min-w-full" /> */}
    </>
  );
  return (
    <>
      {/* <Sidebar className="block md:hidden" /> */}
      {/* <Sidebar2 className="hidden md:block" /> */}

      <Box className='w-full' sx={{ display: 'flex' }}>
        <Drawer
          className='hidden md:block'
          variant='permanent'
          open={open}
          sx={{
            width: open
              ? { xs: '0px', sm: drawerWidthClose }
              : { xs: drawerWidthClose, sm: drawerWidthOpen },
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: open
                ? theme.transitions.duration.leavingScreen
                : theme.transitions.duration.enteringScreen,
            }),
            '& .MuiDrawer-paper': {
              // justifyContent: "space-between",
              overflowX: 'hidden',
              width: open
                ? { xs: '0px', sm: drawerWidthClose }
                : { xs: drawerWidthClose, sm: drawerWidthOpen },
              borderRight: '0px',
              borderRadius: '0px 0 0 0px',
              boxShadow: theme.shadows[8],
              // backgroundColor: open ? "#0000FF" : "#0000FF",
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: open
                  ? theme.transitions.duration.leavingScreen
                  : theme.transitions.duration.enteringScreen,
              }),
            },
          }}>
          {drawerContent}
        </Drawer>
        <div
          className='w-full relative  bg-blueGray-100 px-0 '
          // style={{ marginLeft: "3rem" }}
        >
          <AdminNavbar />
          {/* Header */}
          <div className='relative bg-bluelight-100 md:pt-32 pb-32 pt-12'>
            {children}
          </div>
          <FooterAdmin />
        </div>
      </Box>
    </>
  );
}
