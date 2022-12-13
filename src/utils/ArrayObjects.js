import {
  TEXT_CONTACT_INFORMATION,
  TEXT_BUSINESS_INFORMATION,
  TEXT_BILLING_BANK_INFORMATION,
  TEXT_SERVICES,
  TEXT_NOTIFICATIONS,
  TEXT_CUSTOM_BRANDING,
  TEXT_CHANGE_EMAIL_ADDRESS,
  TEXT_CHANGE_PHONE_NUMBER,
  TEXT_CHANGE_PASSWORD,
  TEXT_LOGOUT,
  TEXT_HOME,
  TEXT_ORDERS,
  TEXT_ADDRESS_BOOK,
  TEXT_BIILING,
  TEXT_PAYMENT,
  TEXT_SETTINGS,
  TEXT_INTEGRATION,
  TEXT_IMPORT_BULK_ORDERS,
  TEXT_IMPORTED_BULK_ORDERS,
  TEXT_DEBIT,
  TEXT_CREDIT,
  TEXT_COD,
  TEXT_NEW,
  TEXT_CONNECT_TO_ECOMMERCE,
  TEXT_DRAFTS
} from "./Text";

export const settingMenus = [
  {
    key: "1",
    icon: "far fa-address-book menu-icon",
    title: TEXT_CONTACT_INFORMATION
  },
  {
    key: "2",
    icon: "fas fa-briefcase menu-icon",
    title: TEXT_BUSINESS_INFORMATION
  },
  {
    key: "3",
    icon: "fas fa-file-invoice-dollar menu-icon",
    title: TEXT_BILLING_BANK_INFORMATION
  },
  {
    key: "4",
    icon: "fas fa-tools menu-icon",
    title: TEXT_SERVICES
  },
  {
    key: "5",
    icon: "far fa-bell menu-icon",
    title: TEXT_NOTIFICATIONS
  },
  {
    key: "6",
    icon: "fas fa-copyright menu-icon",
    title: TEXT_CUSTOM_BRANDING
  },
  {
    key: "7",
    icon: "fas fa-cogs menu-icon",
    title: TEXT_INTEGRATION
  },
  // {
  //   key: "8",
  //   icon: "fas fa-shield-alt menu-icon",
  //   title: TEXT_TWO_FACTOR_SOCIAL_LOGINS
  // },
  {
    key: "9",
    icon: "far fa-envelope menu-icon",
    title: TEXT_CHANGE_EMAIL_ADDRESS
  },
  {
    key: "10",
    icon: "fas fa-mobile-alt menu-icon",
    title: TEXT_CHANGE_PHONE_NUMBER
  },
  {
    key: "11",
    icon: "fas fa-lock menu-icon",
    title: TEXT_CHANGE_PASSWORD
  },
  {
    key: "12",
    icon: "fas fa-sign-out-alt menu-icon",
    title: TEXT_LOGOUT
  }
];

export const submenus = [
  //   {
  //     key: "1",
  //     path: `${process.env.PUBLIC_URL}/orders/new-order`,
  //     icon: "fas fa-plus-square submenu-icon",
  //     title: TEXT_NEW_ORDER
  //   },
  //   {
  //     key: "3",
  //     path: `${process.env.PUBLIC_URL}/orders/guide-order`,
  //     icon: "far fa-file-alt submenu-icon",
  //     title: TEXT_GUIDE_ORDER
  //   },
  // {
  //   key: "7",
  //   path: `${process.env.PUBLIC_URL}/orders/multiple`,
  //   icon: "fa fa-list-ol submenu-icon",
  //   title: 'Multiple order'
  // },
  {
    key: "singleOrder",
    path: `${process.env.PUBLIC_URL}/orders/new-order`,
    icon: "fas fa fa-shopping-cart submenu-icon",
    title: 'Single order'
  },
  {
    key: "multipoint",
    path: `${process.env.PUBLIC_URL}/orders/multipoint`,
    icon: "fas fa-map-pin submenu-icon",
    title: 'Instant delivery'
  },
  {
    key: "bulkOrders",
    path: `${process.env.PUBLIC_URL}/orders/import-order`,
    icon: "fas fa-file-upload submenu-icon",
    title: 'Bulk orders'
  },
  {
    key: "processBulkOrders",
    path: `${process.env.PUBLIC_URL}/orders/bulk-orders`,
    icon: "far fa-list-alt submenu-icon",
    title: 'Process bulk orders'
  }
];

export const sidebarMenus = [
  {
    key: "home",
    menu: "home-submenu-item",
    path: `${process.env.PUBLIC_URL}/`,
    icon: "icon fa fa-home sidebar-menu-icon",
    title: TEXT_HOME
  },
  {
    key: "new",
    menu: "home-submenu-item",
    path: `${process.env.PUBLIC_URL}/orders/bulk-orders`,
    icon: "icon fa fa-send sidebar-menu-icon",
    title: TEXT_DRAFTS
  },
  {
    key: "orders",
    menu: "home-submenu-item",
    path: `${process.env.PUBLIC_URL}/orders`,
    icon: "icon fas fa-shipping-fast sidebar-menu-icon",
    title: TEXT_ORDERS
  },
  {
    key: "payment",
    menu: "home-submenu-item",
    path: `${process.env.PUBLIC_URL}/payment`,
    icon: "icon fas fa-wallet sidebar-menu-icon",
    title: TEXT_PAYMENT
  },
  {
    key: "address-book",
    menu: "home-submenu-item",
    path: `${process.env.PUBLIC_URL}/contacts`,
    icon: "icon fa fa-address-book sidebar-menu-icon",
    title: TEXT_ADDRESS_BOOK
  },
  {
    key: "billing",
    menu: "home-submenu-item",
    path: `${process.env.PUBLIC_URL}/billing`,
    icon: "icon fa fa-list-alt sidebar-menu-icon",
    title: TEXT_BIILING
  },
    // {
    //   key: "7",
    //   menu: "home-submenu-item",
    //   path: `${process.env.PUBLIC_URL}/tracking`,
    //   icon: "icon fa fa-location-arrow sidebar-menu-icon",
    //   title: 'Tracking'
    // },
  //   {
  //     key: "9",
  //     menu: "home-submenu-item",
  //     path: `${process.env.PUBLIC_URL}/analytics`,
  //     icon: "icon fa fa-signal sidebar-menu-icon",
  //     title: TEXT_ANALYTICS
  //   },
  //   {
  //     key: "10",
  //     menu: "home-submenu-item",
  //     path: `${process.env.PUBLIC_URL}/marketings/marketings`,
  //     icon: "icon fas fa-poll sidebar-menu-icon",
  //     title: TEXT_MARKETING
  //   },
  // {
  //   key: "earn",
  //   menu: "home-submenu-item",
  //   path: `${process.env.PUBLIC_URL}/refer-earn`,
  //   icon: "icon fas fa-user-friends sidebar-menu-icon",
  //   title: "Refer & Earn"
  // },
  //   {
  //     key: "12",
  //     menu: "home-submenu-item",
  //     path: `${process.env.PUBLIC_URL}/apps`,
  //     icon: "icon fa fa-cloud sidebar-menu-icon",
  //     title: TEXT_APPS
  //   },
  {
    key: "analytics",
    menu: "home-submenu-item",
    path: `${process.env.PUBLIC_URL}/analytics`,
    icon: "icon fa fa-signal sidebar-menu-icon",
    title: 'Analytics'
  },
  {
    key: "ecommerce",
    menu: "home-submenu-item",
    path: `${process.env.PUBLIC_URL}/integration`,
    icon: "icon fa fa-link sidebar-menu-icon",
    title: "Integration"
  },
  {
    key: "settings",
    menu: "home-submenu-item",
    path: `${process.env.PUBLIC_URL}/settings/account-information`,
    icon: "icon fa fa-cog sidebar-menu-icon",
    title: TEXT_SETTINGS
  }
];

export const homeList = [
  {
    key: "2",
    path: `${process.env.PUBLIC_URL}/orders/new-order`,
    title: 'Single order',
    labelKey: 'singleOrder'
  },
  {
    key: "multipoint",
    path: `${process.env.PUBLIC_URL}/orders/multipoint`,
    icon: "fas fa-map-pin submenu-icon",
    title: 'Instant delivery',
    labelKey: 'multipoint'
  },
  {
    key: "1",
    path: `${process.env.PUBLIC_URL}/orders/import-order`,
    title: 'Bulk orders',
    labelKey: 'bulkOrders'
  },
  {
    key: "3",
    path: `${process.env.PUBLIC_URL}/orders/bulk-orders`,
    title: "Process bulk orders",
    labelKey: 'processBulkOrders'
  },
  // {
  //   key: "3",
  //   path: `${process.env.PUBLIC_URL}/orders/connect-ecommerce`,
  //   title: TEXT_CONNECT_TO_ECOMMERCE
  // }
];

export const paymentTermList = [
  {
    key: TEXT_DEBIT.toLowerCase(),
    title: TEXT_DEBIT
  },
  {
    key: TEXT_CREDIT.toLowerCase(),
    title: TEXT_CREDIT
  },
  {
    key: TEXT_COD.toLowerCase(),
    title: TEXT_COD
  }
];

export const instantQuoteList = [
  {
    key: 1,
    logo: "fab fa-usps fa-2x",
    name: "USPS",
    description: "Same day delivery",
    type: ["Pick-up", "Drop-off"],
    price: 9
  },
  {
    key: 2,
    logo: "fab fa-fedex fa-2x",
    name: "Fedex",
    description: "Next day delivery",
    type: ["Pick-up"],
    price: 14
  },
  {
    key: 3,
    logo: "fab fa-ups fa-2x",
    name: "UPS",
    description: "Same week delivery",
    type: ["Drop-off"],
    price: 50
  }
];

export const testingList = [
  {
    name: "lalala"
  },
  {
    name: "kakaka"
  }
];

export const trackingList = [
  [
    {
      id: 1,
      key: 1,
      serviceId: 1,
      driverId: null,
      companyId: "bbd52c49-d5d9-46da-b82f-0fd76a7adb46",
      trackingNo: "abc112233",
      status: "Order cancelled by sender",
      description: null,
      location: null,
      coord: [null, null],
      date: "2019-06-28T08:54:11.813Z",
      deleted: false,
      created_at: "2019-06-28T08:54:11.813Z",
      updated_at: "2019-06-28T08:54:11.813Z"
    },
    {
      id: 2,
      key: 2,
      serviceId: 1,
      driverId: 1,
      companyId: "bbd52c49-d5d9-46da-b82f-0fd76a7adb46",
      trackingNo: "abc112233",
      status: "Picked Up",
      description: "Baru lepas pikap",
      location: "Ara Dam",
      coord: [101.586212753206, 3.11504018601858],
      date: "2019-06-28T07:47:35.000Z",
      deleted: false,
      created_at: "2019-06-28T07:47:40.000Z",
      updated_at: "2019-06-28T08:26:53.438Z"
    },
    {
      id: 3,
      key: 3,
      serviceId: 1,
      driverId: 1,
      companyId: "bbd52c49-d5d9-46da-b82f-0fd76a7adb46",
      trackingNo: "abc112233",
      status: "On the way",
      description: "Dalam perjalanan",
      location: "PJ",
      coord: [101.586212753206, 3.11504018601858],
      date: "2019-06-28T07:47:35.000Z",
      deleted: false,
      created_at: "2019-06-28T07:47:40.000Z",
      updated_at: "2019-06-28T08:27:26.798Z"
    }
  ],
  [
    {
      id: 4,
      key: 4,
      serviceId: 1,
      driverId: 1,
      companyId: "bbd52c49-d5d9-46da-b82f-0fd76a7adb46",
      trackingNo: "abc123456",
      status: "Arrived",
      description: "Sudah sampai",
      location: "KL",
      coord: [101.586212753206, 3.11504018601858],
      date: "2019-06-28T07:47:35.000Z",
      deleted: false,
      created_at: "2019-06-28T07:47:40.000Z",
      updated_at: "2019-06-28T08:27:59.142Z"
    }
  ],
  [
    {
      id: 5,
      key: 5,
      serviceId: 1,
      driverId: 1,
      companyId: "bbd52c49-d5d9-46da-b82f-0fd76a7adb46",
      trackingNo: "abc221452",
      status: "Arrived",
      description: "Sudah sampai",
      location: "KL",
      coord: [101.586212753206, 3.11504018601858],
      date: "2019-06-28T07:47:35.000Z",
      deleted: false,
      created_at: "2019-06-28T07:47:40.000Z",
      updated_at: "2019-06-28T09:58:33.367Z"
    }
  ]
];

export const itemTypeResponse = {
  data: [
    {
      id: 1,
      companyId: "4d902f7c-7306-41d2-98a0-23ee10524949",
      name: "Cold Storage",
      description: "Parcel",
      measurement: "BOTH",
      minWeight: "0.10",
      maxWeight: "10.00",
      minDimension: {
        width: 100,
        height: 40,
        length: 200
      },
      maxDimension: {
        width: 300,
        height: 120,
        length: 600
      },
      vehicleType: ["VAN", "LORRY"],
      feature: ["FROZEN", "FRESH"],
      createdAt: "2019-10-08T10:11:33.266Z",
      updatedAt: "2019-10-08T10:11:33.266Z",
      deletedAt: null
    }
  ]
};
