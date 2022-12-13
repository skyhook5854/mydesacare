import { useEffect, useState } from 'react';
import usePrevious from 'src/utils/usePrevious';
import { useField } from 'formik';

const useValidateField = (name, val, validateField, isValidate) => {
  const [validate, setValidate] = useState()
  useField({ name });

  const prevVal = usePrevious(val);
  useEffect(() => {
    let mount = true;
    if (isValidate && (prevVal || val) && mount) {
      clearTimeout(validate);
      setValidate(setTimeout(() => mount && validateField(name), 750));
    }
    return () => {
      mount = false
    }
  }, [val]);

  return null;
}

export default useValidateField;
