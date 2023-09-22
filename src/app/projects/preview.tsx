import React from 'react'
import styles from './preview.module.css';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function preview(props:any) {
  return (
    <div className={styles.container}>
        <img src={props.image} alt="" className={styles.photo} />
        <div className={styles.language}>
            <p className={styles.text}>{props.text}</p>
        </div>
        <div className={styles.bottom}>
            <p className={styles.title}>
                {props.title}
            </p>
            <p className={styles.description}>
                {props.description}
            </p>
        </div>
        <a href={props.href} className="link">
        <Button className={styles.button}>
            <p className={styles.textButton}>
                View the code
            </p>
                <GitHubIcon className={styles.logo}/>
        </Button>
        </a>
    </div>
  )
}

export default preview