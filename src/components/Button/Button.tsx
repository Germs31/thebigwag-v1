import React from 'react'
import styles from './button.module.css'

interface IButton {
  text: string
  primary: boolean
}
const Button = (props: IButton) => {
  return (
    <button className={styles.button}>
      {props.text}
    </button>
  )
}

export default Button