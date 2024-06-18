"use client";


import Link from "next/link";
import styles from "./loginForm.module.css";


const LoginForm = () => {
  

  return (
    <form  className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
     <Link className={styles.link} href='/dashboard'>Login</Link>
     
    </form>
  );
};

export default LoginForm;