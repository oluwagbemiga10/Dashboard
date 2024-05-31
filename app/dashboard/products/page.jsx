import React from 'react'
import styles from "../../components/dashboard/products/product.module.css"
import Search from '../../components/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../../components/dashboard/pagination/pagination'

const ProductPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder="Search for a user..." />
      <Link href="/dashboard/products/add">
        <button className={styles.addButton}>Add New</button>
      </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
        <td>Title</td>
        <td>Description</td>
        <td>Price</td>
        <td>Created At</td>
        <td>Stock</td>
        <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={styles.product}>
              <Image src="/noproduct.jpg" alt='' width={40} height={40} className={styles.productImage} />
              Iphone
            </div>
          </td>
          <td>Desc</td>
          <td>2000</td>
          <td>13.04.2024</td>
          <td>72</td>
          <td>
            <div className={styles.buttons}>
              <Link href='/dashboard/products/test'>
                <button className={`${styles.button} ${styles.view}`} >view</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination />
  </div>
  )
}

export default ProductPage
