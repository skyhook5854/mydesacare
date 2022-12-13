import { useEffect } from 'react';
import { message } from 'antd';

const useShowMessage = (isLoading, locationState) => {
  useEffect(() => {
    if (!isLoading && locationState?.showMsg) {
      const { type, time, message: msg } = locationState.showMsg;
      message[type](msg, time);
    }
  }, [locationState])

  return null
}

export default useShowMessage;
