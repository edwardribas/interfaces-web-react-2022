import React from 'react';
import { Main } from '../../components/Main';
import { Pessoa } from '../../components/Pessoa';
import styles from './styles.module.scss';

export const Home = () => {
    return (
        <Main className={styles.home}>
            <h1>Pessoas</h1>
            <div className={styles.pessoas}>
                <Pessoa nome="Anderson Vanin" idade={46} profissao="Professor"/>
                <Pessoa nome="Cíntia Pinho" idade={42} profissao="Professora"/>
                <Pessoa nome="Hoender" idade={48} profissao="Professor"/>
                <Pessoa nome="Nikolau" idade={41} profissao="Professor"/>
            </div>
        </Main>
    )
}