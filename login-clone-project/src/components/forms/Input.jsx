import styles from "./Input.module.css";

function Input({type, placeholder, onChange, name}){
    return(
        <>
            <input className={styles.input} name={name} type={type} placeholder={placeholder} onChange={onChange} />
        </>
    )
}

export default Input;