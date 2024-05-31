import React from 'react'
import styles from '../../../components/dashboard/users/singleuser/singleuser.module.css'
import Image from 'next/image'

const Singleuser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt='' fill />
        </div>
        Gbenga Oyelami
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
        <label>Username</label>
        <input type='text' name='username' placeholder='Gbenga Oyelami' />
        <label>Email</label>
        <input type='email' name='email' placeholder='Gbengaoyelami@gmail.com' />
        <label>Password</label>
        <input type='password' name='password' />
        <label>Phone</label>
        <input type='phone' name='phone' placeholder='+234850309' />
        <label>Address</label>
        <input type='address' name='address' placeholder='lagos' />
        <label>Is Admin</label>
        <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>
        <label>Is Active</label>
        <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>
        <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Singleuser
