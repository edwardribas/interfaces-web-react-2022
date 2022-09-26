import React, { useState, useRef } from 'react';
import { Main } from '../../components/Main';
import styles from './styles.module.scss';
import { Broadcast } from '../../components/Broadcast';

export const Home = () => {

    const [nome, setNome] = useState('');
    const Input = useRef()

    const handleSubmit = () => {
        const isNameEmpty = nome.trim() === "";
        if (!isNameEmpty) console.log({nome})
    }
    document.onkeydown = (e) => {
        const isInputActive = document.activeElement === Input.current;
        if (e.key === "Enter" && isInputActive) handleSubmit();
    }

    return (
        <Main className={styles.home}>
            <h1>Formulário</h1>

            <div className={styles.buttons}>
                <Broadcast mensagem="Hey, there!"/>
                <Broadcast mensagem="How are you doing?"/>
            </div>

            <div className={styles.form}>
                <input
                    ref={Input}
                    type="text"
                    defaultValue={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Seu nome completo"
                    spellCheck={false}
                />
                <button
                    onClick={() => handleSubmit()}
                >
                    Enviar
                </button>
            </div>
        </Main>
    )
}