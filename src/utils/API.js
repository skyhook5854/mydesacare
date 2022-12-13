import axios from "axios";
import { MESSAGE_404 } from "./ErrorMessage";
import { TEXT_SERVER_DOWN } from "./Text";
import { useLocalStorage } from "./Hooks/useLocalStorage";
const prod = false;

export const useApiHooks = () => {
  const { getItem, setItem } = useLocalStorage();
  var API_ROOT;
  var image_url_root;
  if (!prod) {
    API_ROOT = "https://staging-api.delyva.app/v1.0/";
    image_url_root = "https://md-test.sgp1.digitaloceanspaces.com";
  } else {
    API_ROOT = "https://api.delyva.app/v1.0/";
    image_url_root = "https://cdn.delyva.app";
  }

  function getErrorMessage(e) {
    if (e?.response?.data?.error && e?.response.data.error.message) {
      return e?.response?.data.error.message;
    }
    return TEXT_SERVER_DOWN;
  }

  const getCompanyInfo = async () => {
    try {
      const response = await axios.get(
        process.env.NODE_ENV === "development"
          ? API_ROOT +
              "company/info?url=https://matdespatch-my.staging.delyva.app/admin"
          : // API_ROOT + "company/info?url=https://my.delyva.app/customer" :
            // API_ROOT + "company/info?url=https://demo.delyva.app/customer" :
            API_ROOT + "company/info"
      );
      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        const companyId = getItem("companyId");
        if (companyId) {
          return await getCompanyInfoById(companyId);
        }
        return getErrorMessage(e);
      }
      if (e.response?.status === 404) {
        return MESSAGE_404;
      } else return getErrorMessage(e);
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        process.env.NODE_ENV === "development"
          ? API_ROOT + "user"
          : // API_ROOT + "company/info?url=https://my.delyva.app/customer" :
            // API_ROOT + "company/info?url=https://demo.delyva.app/customer" :
            API_ROOT + "user/customer"
      );
      return response;
    } catch (e) {}
  };

  const getCompanyInfoById = async (id) => {
    try {
      const response = await axios.get(API_ROOT + "company/" + id, {
        headers: {
          Authorization: `Bearer ` + getItem("accessToken"),
        },
      });
      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        return getErrorMessage(e);
      }
      if (e.response?.status === 401) {
        const renewTokenRes = await renewToken();
        if (renewTokenRes?.status === 200) {
          return await getCompanyInfoById(id);
        }
        return renewTokenRes;
      }
      if (e.response?.status === 404) {
        return MESSAGE_404;
      } else return getErrorMessage(e);
    }
  };

  const get = async (endpoint) => {
    try {
      const response = await axios.get(API_ROOT + endpoint, {
        headers: {
          Authorization: `Bearer ` + getItem("accessToken"),
        },
      });

      if (!response.data.data) {
        console.error(`Missing 'data' key, ${endpoint}`);
        // return TEXT_SERVER_DOWN
      }

      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        return getErrorMessage(e);
      }
      if (e.response?.status === 401) {
        const renewTokenRes = await renewToken();
        if (renewTokenRes?.status === 200) {
          return await get(endpoint);
        }
        return renewTokenRes;
      }
      if (e.response?.status === 404) {
        return MESSAGE_404;
      } else return getErrorMessage(e);
    }
  };

  const post = async (endpoint, data) => {
    try {
      const response = await axios.post(API_ROOT + endpoint, data || null, {
        headers: {
          Authorization: `Bearer ` + getItem("accessToken"),
          "Content-Type": "application/json",
        },
      });

      if (!response.data.data) {
        console.error(`Missing 'data' key, ${endpoint}`);
        // return TEXT_SERVER_DOWN
      }

      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        return getErrorMessage(e);
      }
      if (e.response?.status === 401) {
        const renewTokenRes = await renewToken();
        if (renewTokenRes?.status === 200) {
          return await post(endpoint, data);
        }
        return renewTokenRes;
      }
      if (e.response?.status === 404) {
        return MESSAGE_404;
      } else return getErrorMessage(e);
    }
  };

  const update = async (endpoint, data) => {
    try {
      const response = await axios.patch(API_ROOT + endpoint, data, {
        headers: {
          Authorization: `Bearer ` + getItem("accessToken"),
        },
      });
      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        return getErrorMessage(e);
      }
      if (e.response?.status === 401) {
        const renewTokenRes = await renewToken();
        if (renewTokenRes?.status === 200) {
          return await update(endpoint, data);
        }
        return renewTokenRes;
      }
      if (e.response?.status === 404) {
        return MESSAGE_404;
      } else return getErrorMessage(e);
    }
  };

  const remove = async (endpoint, data) => {
    try {
      let payload = {
        headers: {
          Authorization: `Bearer ` + getItem("accessToken"),
        },
      };
      if (data) {
        if (Object.keys(data)) {
          payload = Object.assign(payload, { data });
        }
      }
      const response = await axios.delete(`${API_ROOT}${endpoint}`, payload);
      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        return getErrorMessage(e);
      }
      if (e.response?.status === 401) {
        const renewTokenRes = await renewToken();
        if (renewTokenRes?.status === 200) {
          return await remove(endpoint);
        }
        return renewTokenRes;
      }
      if (e.response?.status === 403) {
        return e.response;
      }
      if (e.response?.status === 404) {
        return e.response;
      } else return getErrorMessage(e);
    }
  };

  const register = async (data) => {
    try {
      const response = await axios.post(API_ROOT + "user/register", data);
      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        return getErrorMessage(e);
      }
      if (e.response?.status === 404) {
        return MESSAGE_404;
      } else getErrorMessage(e);
    }
  };

  const forgotPassword = async (data) => {
    try {
      const response = await axios.post(API_ROOT + "user/forgotPassword", data);
      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        return getErrorMessage(e);
      }
      if (e.response?.status === 404) {
        return MESSAGE_404;
      } else return getErrorMessage(e);
    }
  };

  const resetPassword = async (data) => {
    try {
      const response = await axios.post(API_ROOT + "user/resetPassword", data);

      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        return getErrorMessage(e);
      }
      if (e.response?.status === 404) {
        return MESSAGE_404;
      } else return getErrorMessage(e);
    }
  };

  const login = async (endpoint, data) => {
    try {
      const response = await axios.post(API_ROOT + endpoint, data);
      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        const {
          response: { data },
        } = e;
        if (Object.keys(data).length > 0) {
          return data;
        }
        return TEXT_SERVER_DOWN;
      }
      if (e.response?.status === 404) {
        return MESSAGE_404;
      } else return getErrorMessage(e);
    }
  };

  const queryAddress = async (query) => {
    try {
      const response = await axios.get(
        "https://api.matdespatch.my/api/address?" + query
      );
      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        return getErrorMessage(e);
      }
      if (e.response?.status === 404) {
        return MESSAGE_404;
      } else return getErrorMessage(e);
    }
  };

  const getInstantQuote = async (isLoggedIn, data) => {
    try {
      const response = await axios.post(
        API_ROOT + "service/instantQuote/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        return getErrorMessage(e);
      }
      if (e.response?.status === 404) {
        return MESSAGE_404;
      } else return getErrorMessage(e);
    }
  };

  const cancelOrder = async (ids) => {
    try {
      const response = await axios.post(
        API_ROOT + "order/" + ids.join() + "/cancel",
        null,
        {
          headers: {
            Authorization: `Bearer ` + getItem("accessToken"),
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (e) {
      if (e.response?.status === 400) {
        return getErrorMessage(e);
      }
      if (e.response?.status === 401) {
        const renewTokenRes = await renewToken();
        if (renewTokenRes?.status === 200) {
          return await cancelOrder(ids);
        }
        return renewTokenRes;
      }
      if (e.response?.status === 404) {
        return MESSAGE_404;
      } else return getErrorMessage(e);
    }
  };

  const getPaymentUrl = async (endpoint) => {
    await axios.get(API_ROOT + endpoint, {
      headers: {
        Authorization: `Bearer ` + getItem("accessToken"),
      },
    });
  };

  const openApiUrl = async (url) => {
    window.open(API_ROOT + url, "_blank");
  };

  const renewToken = async () => {
    try {
      const fetchRes = await axios.post(
        API_ROOT + "auth/refreshToken",
        {
          refreshToken: getItem("refreshToken"),
        },
        {
          headers: {
            Authorization: `Bearer ` + getItem("accessToken"),
          },
        }
      );

      setItem("accessToken", fetchRes.data.data.accessToken);
      return fetchRes;
    } catch (e) {
      // clear();
      return e.response;
    }
  };

  return {
    getUserInfo: () => getUserInfo(),
    getErrorMessage: () => getErrorMessage(),
    getCompanyInfo: () => getCompanyInfo(),
    getCompanyInfoById: () => getCompanyInfoById(),
    get: (v) => get(v),
    post: () => post(),
    update: () => update(),
    remove: () => remove(),
    forgotPassword: () => forgotPassword(),
    register: () => register(),
    resetPassword: () => resetPassword(),
    login: (k, v) => login(k, v),
    queryAddress: () => queryAddress(),
    getInstantQuote: () => getInstantQuote(),
    cancelOrder: () => cancelOrder(),
    getPaymentUrl: () => getPaymentUrl(),
    openApiUrl: () => openApiUrl(),
    renewToken: () => renewToken(),
  };
};
