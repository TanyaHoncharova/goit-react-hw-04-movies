import { useHistory } from "react-router-dom";
import styles from './BtnGoBack.module.css'

const BtnGoBack = () => {
  const { push, location } = useHistory();

  const handleGoBack = () => push(location.state?.from || "/");

  return <button title='Go back' type='button' onClick={handleGoBack}className={styles.backBtn}> Go back </button>;
};

export default BtnGoBack;