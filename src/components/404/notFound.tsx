import React from 'react'
import { Link } from 'react-router-dom'

import greenMan from '@/assets/404.png'
import styles from "@/components/404/notFound.module.scss"

const PageNotFound = () => {
  return (
    <div className={styles.nofoundwrapper}>
      <img src={greenMan} alt="" className={styles.green_man} />
      {/* <i className="iconfont icon-back" style={{ color: 'green', marginRight: 6 }} /> */}
      <Link to="/">返回首页</Link>
    </div>
  )
}

export default PageNotFound
