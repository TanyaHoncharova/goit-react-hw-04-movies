// import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from './BtnGoBack.module.css'

const BtnGoBack = () => {
  const history = useHistory();
  const location = useLocation();
  
  const handleGoBack = () => {
    history.push(location?.state?.from ?? '/');
  }

  return <button title='Go back' type='button' onClick={handleGoBack}className={styles.backBtn}> Go back </button>;
};

export default BtnGoBack;