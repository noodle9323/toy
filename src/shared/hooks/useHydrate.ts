import { useEffect, useState } from 'react';

export const useHydrate = () => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return isMount;
};

export default useHydrate;
