import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src='/astronaut.png' alt='' fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboad?</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam, numquam nisi quos, nostrum ut ullam</p>
          <button className={styles.button}><MdPlayCircleFilled /> Watch</button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>Coming Soon</span>
          <h3 className={styles.title}>New sever actions are available, partial pre-rendering is coming!!</h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam, numquam nisi quos, nostrum ut ullam</p>
          <button className={styles.button}><MdPlayCircleFilled /> Watch</button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
