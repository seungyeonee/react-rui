import { useState, useEffect } from 'react';

const useOutsideClick = (ref) => {
  const [isOutsideClicked, setIsOutsideClicked] = useState(false);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOutsideClicked(true);
    } else {
      setIsOutsideClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return isOutsideClicked;
};

export default useOutsideClick;