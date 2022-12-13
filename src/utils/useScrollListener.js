import { useEffect, useState } from 'react';

function useScrollListener() {
  const [scroll, setScroll] = useState(null);
  useEffect(() => {
    function updateScroll(val) {
      setScroll(val);
    }

    window.addEventListener('scroll', updateScroll);

    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  return scroll;
}

export default useScrollListener;
