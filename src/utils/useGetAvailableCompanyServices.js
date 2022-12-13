import { useEffect, useContext, useState } from 'react';

import { get } from 'Util/API';
import { GlobalContext } from "Store/store";

const useGetAvailableCompanyServices = (props) => {
  const [state] = useContext(GlobalContext);
  const { customerId, serviceCompanies } = state.global;
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  useEffect(() => {
    let mount = true;
    const fetch = async () => {
      const getAvailableServiceCompanyCodes = await get(`/customer/${customerId}/allServiceCompany`);
      const selected = getAvailableServiceCompanyCodes.status === 200 ?
        serviceCompanies.filter(x => getAvailableServiceCompanyCodes.data.data.includes(x.id)) :
        [];
      setSelectedCompanies(selected);
    }
    mount && fetch();
    return () => {
      mount = false;
    }
  }, [customerId])

  return selectedCompanies;
}

export default useGetAvailableCompanyServices;
