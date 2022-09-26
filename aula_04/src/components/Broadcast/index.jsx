import React from 'react';
import styles from './styles.module.scss';

export const Broadcast = ({mensagem}) => {
    return (
        <button
            className={styles.button}
            onClick={() => console.log(mensagem)}    
        >
            Recado
        </button>
    )
}