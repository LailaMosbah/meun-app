import React from "react";
import styles from "../styles/header.module.css";

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Chef’s Table Eatery</h1>
            </div>
        </header>
    );
};

export default Header;
