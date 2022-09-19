import React from 'react';
import { Main } from '../../components/Main';
import Gatenho from '../../assets/img/gatenho.png';
import styles from './styles.module.scss';

export const Home = () => {
    return (
        <Main className={styles.home}>
            <h1>Gatenho</h1>
            <img src={Gatenho} alt="Gatenho"/>
        </Main>
    )
}