import React from 'react'
import Card from '../components/dashboard/card/card'
import Transaction from '../components/dashboard/transaction/transaction'
import Chart from '../components/dashboard/chart/chart'
import Rightbar from '../components/dashboard/rightbar/rightbar'
import styles from '../components/dashboard/dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <div className={styles.card}>
      <Card />
      <Card />
      <Card />
      </div>
      <Transaction />
      <Chart />
      </div>
      <div className={styles.rightbar}>
      <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard
