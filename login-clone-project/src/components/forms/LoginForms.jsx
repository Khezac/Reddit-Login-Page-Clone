import Input from "./Input";
import styles from "./LoginForms.module.css";
import { useEffect, useState } from "react";

function LoginForms() {

  const [confirmaEmail,setconfirmaEmail] = useState();
  const [confirmaSenha,setconfirmaSenha] = useState();
  const [checaLogin, setChecaLogin] = useState(0);

  const loginRegistrado = ["email@email.com", "123456"];

  function handleEmail(e) {
    setconfirmaEmail(e.target.value);
  }

  function handleSenha(e) {
    setconfirmaSenha(e.target.value);
  }

  function handleSubmit(){
    setChecaLogin(checaLogin+1);
  }

  useEffect(() => {
    if(checaLogin > 0){
      if(confirmaEmail == loginRegistrado[0]){
        if(confirmaSenha == loginRegistrado[1]) {
          alert("Usuário Logado com sucesso!")
        } else {
          alert("Senha incorreta!");
        }
      } else {
        alert("Email incorreto ou não registrado!")
      }
    }
  },[checaLogin]);

  return (
    <>
      <div className={styles.loginContainer}>
        <section className={styles.otherPlatformsSection}>
          <h1>Entrar</h1>
          <p>
            Ao continuar, você concorda com nosso{" "}
            <a href="https://www.redditinc.com/policies/user-agreement">
              Contrato de Usuário{" "}
            </a>{" "}
            e reconhece que compreende nossa{" "}
            <a href="https://www.reddit.com/policies/privacy-policy">
              Política de Privacidade
            </a>
            .
          </p>
          <button className={styles.otherPlatformButton}>
          <img className={styles.otherPlatformIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" />
          Continuar com o Google
          </button>
          <button className={styles.otherPlatformButton}>
          <img className={styles.otherPlatformIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" />
            Continuar com Apple
          </button>
        </section>

        <p className={styles.beetweenSections}>ou</p>

        <form action="">
          <Input type="text" name="email" placeholder="Email ou nome de usuário" onChange={handleEmail}/>
          <Input type="password" name="senha" placeholder="Senha" onChange={handleSenha}/>
          <p>Esqueceu a senha?</p>
          <p>
            Primeira vez usando Reddit? <a>Cadastre-se</a>
          </p>
        </form>
      </div>
      <button className={styles.submitButton} onClick={handleSubmit}>Entrar</button>
    </>
  );
}

export default LoginForms;
