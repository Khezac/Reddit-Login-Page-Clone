import LoginForms from "../forms/LoginForms";
import styles from "./Login.module.css"

function Login() {
  return (
    <div className={styles.formContainer}>
      <LoginForms/>
    </div>
  );
}

export default Login;
