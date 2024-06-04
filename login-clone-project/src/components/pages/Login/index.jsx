import LoginForms from "../../forms/LoginForms/index";
import styles from "./style.module.css"

function Login() {
  return (
    <div className={styles.formContainer}>
      <LoginForms/>
    </div>
  );
}

export default Login;
