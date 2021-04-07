import React, { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'


const Goal = () => {
  return (
    <>
      <section className={styles.section_goal}>
        <nav className={styles.nav}>
          <img src="/images/baboo.png" className="logo1" />
          <img src="/images/Casestudylogo.png" className="logo2" />
        </nav>
        <h1 className={styles.boldtext2}>goal</h1>
        <div className={styles.container_goal}>
          <div className={styles.container_goal_text}>
            <h3>SALE SOLUTION</h3>
            <p>
              The Bamboo E-commerce site provide a digital space were digital transaction can take
              place between the buyer and seller.
            </p>
          </div>
          <br />
          <div className={styles.container_goal_text}>
            <h3>PRODUCT HUB</h3>
            <p>
              The Platform provide a single source of truth for all all things furniture to
              interested parties and eventually be converted to a Lead
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Goal

 