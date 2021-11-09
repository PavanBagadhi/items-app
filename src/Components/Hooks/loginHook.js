import { useState } from 'react';

const useBlur = () => {
  const [isBlur, setIsBlur] = useState(false);
  const blurHandler = (event) => {
    if (!event.target.value) {
      setIsBlur(true);
    }
  };
  const focusHandler=(event)=>{
    setIsBlur(false)
  }
  return { isBlur, blurHandler, focusHandler };
};

export default useBlur;
