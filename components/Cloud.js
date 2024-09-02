import React from 'react'
import styles from "./../styles/Cloud.module.css"; // Import the CSS module

const Cloud = () => {
    return (
        <>
            <div class={styles.x1}>
                <div class={styles.cloud}></div>
            </div>

            <div class={styles.x2}>
                <div class={styles.cloud}></div>
            </div>

            <div class={styles.x3}>
                <div class={styles.cloud}></div>
            </div>

            <div class={styles.x4}>
                <div class={styles.cloud}></div>
            </div>

            <div class={styles.x5}>
                <div class={styles.cloud}></div>
            </div>
        </>
    )
}

export default Cloud
