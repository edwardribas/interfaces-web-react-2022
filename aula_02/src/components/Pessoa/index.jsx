import React from 'react';
import styles from './styles.module.scss';

export const Pessoa = ({nome, idade, profissao}) => {
    return (
        <div className={styles.pessoa}>
            <h2>{nome}</h2>
            <p>{profissao}</p>
            <p>{idade} anos</p>
        </div>
    )
}