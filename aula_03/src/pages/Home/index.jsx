import React from 'react';
import { ListItem } from '../../components/ListItem';
import { Main } from '../../components/Main';
import styles from './styles.module.scss';

export const Home = () => {
    return (
        <Main className={styles.home}>
            <h1>Sabores</h1>

            <ul className={styles.sabores}>
                <ListItem/>
                <ListItem sabor="Chocolate"/>
                <ListItem/>
                <ListItem sabor="Morango"/>
                <ListItem sabor="Baunilha"/>
            </ul>
        </Main>
    )
}