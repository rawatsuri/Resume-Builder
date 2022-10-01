import React from 'react'
import styles from './control.module.css'

const Control = ({label, ...props }) => {
  return (
    <div className={styles.container}>
    {label && <label>{label}</label>}
    <input type="text" {...props} />
  </div>
  )
}

export default Control