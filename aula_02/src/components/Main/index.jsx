import React from 'react';
import styles from './styles.module.scss';

export const Main = ({children, className}) => {
    return (
        <main className={!className ? styles.main : `${styles.main} ${className}`}>
            {children}
        </main>
    )
}