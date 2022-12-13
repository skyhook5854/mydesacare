import { useEffect, useState } from 'react';
import { message } from "antd";

import { get } from "Util/API";

const useGenerateAddress = ({
  accessor=['country', 'city', 'state'],
  setIsLoading,
  countryList,
  country,
  postcode,
  setFieldValue,
  customerCountry,
  companycountry
}) => {
  const [fetch, setFetch] = useState()

  useEffect(() => {
    let mount = true;
    if (country && postcode) {
      clearTimeout(fetch);
      const getAddress = async () => {
        setIsLoading(true);
        const fetch = await get(`/parameters/q/postcode?countryCode=${country}&postcode=${postcode}`)
        if (fetch.status === 200) {
          const { data } = fetch.data;
          let chosenCountry = countryList.find((item) => item.countryCode === country);
          if (!chosenCountry) {
            chosenCountry = countryList.find((item) => (
              item.countryCode === customerCountry ||
              item.countryCode === companycountry
            ));
          }
          setFieldValue(accessor[0], chosenCountry.countryCode)
          setFieldValue(accessor[1], data[0] ? data[0].city : null);
          setFieldValue(accessor[2], data[0] ? data[0].state : null);
        } else message.error(fetch);
        setIsLoading(false);
      }
      mount && setFetch(setTimeout(() => getAddress(), 750));
    }
    return () => {
      mount = false;
    }
  }, [country, postcode])

  return null;
}

export default useGenerateAddress;
