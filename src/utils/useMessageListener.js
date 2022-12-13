import { useEffect, useState, useRef } from "react";

import { API_ROOT } from "src/utils/API";
import { useLocalStorage } from "./Hooks/useLocalStorage";

const useMessageListener = (customerId) => {
  const [message, setMessage] = useState(null);
  const { getItem } = useLocalStorage();
  const [isListen, setIsListen] = useState(false);
  const [accessToken, setAccessToken] = useState(getItem("accessToken"));
  const eventUrl = new URL(`${API_ROOT}/events`);
  let es = useRef();
  const readyState = typeof es?.current?.readyState === "number";

  const onReceiveMessage = (message) => {
    const data = JSON.parse(message.data);
    setMessage(data);
  };

  const onError = (err) => {
    const newAccessToken = getItem("accessToken");
    if (newAccessToken !== accessToken) {
      es.current.close();
      setAccessToken(newAccessToken);
    }
  };

  useEffect(() => {
    if (readyState) {
      setIsListen(true);
    }
  }, [readyState]);

  useEffect(() => {
    if (customerId) {
      eventUrl.searchParams.set("jwt", accessToken);
      es.current = new EventSource(eventUrl);
      es.current.addEventListener("message", onReceiveMessage);
      es.current.addEventListener("error", onError);
    }
  }, [customerId, accessToken]);

  return [message, isListen];
};

export default useMessageListener;
