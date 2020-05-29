import React from "react"
import styles from "./about.module.scss"
// let avatar_img = require("@/assets/resume/photo.jpg")
 function About(){
  return(
    <div className={styles.container}>
      <head className ={styles.header}>
        <div className={styles.avatar} />
      </head>
      <div className={styles.content}></div>
    </div>
  )
}


export default About