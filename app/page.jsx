import LoginForm from "./components/login/loginForm/loginForm"
import styles from "./components/login/login.module.css"

const Homepage = () => {
  return (
    <div className={styles.container}>
    <LoginForm />
    </div>
  )
}

export default Homepage