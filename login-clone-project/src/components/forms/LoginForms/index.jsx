import styles from "./style.module.css";
import { useEffect, useState } from "react";
import Google from "../../../assets/google-original.svg"
import Apple from "../../../assets/apple-original.svg"

function LoginForms() {

  const [confirmaEmail,setconfirmaEmail] = useState();
  const [confirmaSenha,setconfirmaSenha] = useState();
  const [checaLogin, setChecaLogin] = useState(0);
  const [naoPodeEntrar, setNaoPodeEntrar] = useState(true);
  const [error, setError] = useState(false);

  let loginRegistrado = [
    {email: "email@email.com", senha: "123456"},
    {email: "@.com", senha: "1"}
  ];

  function handleEmail(e) {
    setconfirmaEmail(e.target.value);
    setError(false);
    setChecaLogin(0);
  }

  function handleSenha(e) {
    setconfirmaSenha(e.target.value);
    setError(false);
    setChecaLogin(0);
  }

  function handleSubmit(){
    setChecaLogin(checaLogin+1);
  }

  function handleFocus(){
    setError(false);
  }

  useEffect(() => {

    if(confirmaEmail&&confirmaSenha){
      setNaoPodeEntrar(false);
    } else {
      setNaoPodeEntrar(true);
    }

    if(checaLogin > 0){
      if(loginRegistrado.find((obj) => obj.email == confirmaEmail) != undefined && loginRegistrado.find((obj) => obj.senha == confirmaSenha) != undefined){
        alert("Usuário Logado com sucesso!")
      } else {
        setError(true);
      }
    }

  },[checaLogin, confirmaEmail, confirmaSenha]);

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
          <img className={styles.otherPlatformIcon} src={Google} />
          Continuar com o Google
          </button>

          <button className={styles.otherPlatformButton}>
          <img className={styles.otherPlatformIcon} src={Apple} />
            Continuar com Apple
          </button>
        </section>

        <p className={styles.beetweenSections}>ou</p>

        <form action="">
          {error
            ?
              <>
                <input className={styles.inputError} type="text" name="email" placeholder="Email ou nome de usuário*" onChange={handleEmail} onFocus={handleFocus}/>
                <input className={styles.inputError} type="password" name="senha" placeholder="Senha*" onChange={handleSenha} onFocus={handleFocus}/>
                <p className={styles.error}>Nome de usuario ou senha inválido!</p>
              </>
            :
              <>
                <input className={styles.input} type="text" name="email" placeholder="Email ou nome de usuário*" onChange={handleEmail} onFocus={handleFocus}/>
                <input className={styles.input} type="password" name="senha" placeholder="Senha*" onChange={handleSenha} onFocus={handleFocus}/>
              </>
          }
          <p>Esqueceu a senha?</p>
          <p>
            Primeira vez usando Reddit? <a>Cadastre-se</a>
          </p>
        </form>
      </div>
      <button disabled={naoPodeEntrar} className={styles.submitButton} onClick={handleSubmit}>Entrar</button>
    </>
  );
}

export default LoginForms;