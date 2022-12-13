import { useEffect, useState } from 'react';
import moment from 'moment';

const usePickupDate = (timeNow) => {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    timeNow > 12 && setDate(moment().add(1, 'day'))
  }, [timeNow])

  return date;
}

export default usePickupDate;
