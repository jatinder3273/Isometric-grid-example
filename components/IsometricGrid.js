import React from "react";
import styles from "./../styles/IsometricGrid.module.css"; // Import the CSS module

const IsometricGrid = () => {
    const handleOnClick = (index) => {
        alert(index);
    }

    return (
        <div className={styles.gridContainer}>
            {Array.from({ length: 64 }).map((_, index) => (
                <div key={index} className={styles.gridItem} onClick={() => handleOnClick(index)}></div>
            ))}
        </div>
    );
};

export default IsometricGrid;
