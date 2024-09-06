import React, { useEffect } from 'react';


interface SpinnerProps {
  spinner: boolean;
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
}

const Spinner: React.FC<SpinnerProps> = ({ spinner, setSpinner }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinner(false);
    }, 11500);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [setSpinner]);

  if (!spinner) return null; // Optionally, return null if spinner is false

  return (
    <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
    </div>
  )
}

export default Spinner