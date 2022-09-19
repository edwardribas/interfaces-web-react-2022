import React from 'react';
import styles from './styles.module.scss';

export const ListItem = ({sabor = 'Não definido'}) => {
    return (
        <>
            <li className={styles.item}>
                {sabor}
            </li>
        </>
    )
}