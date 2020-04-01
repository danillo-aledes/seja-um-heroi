import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'
import logoImg from '../../assets/logo.png'
import heroImg from '../../assets/hero.png'

export default function Logon() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { user, password });

            localStorage.setItem('instId', response.data.id);
            localStorage.setItem('instName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Seja um Herói" />

                <form onSubmit={handleLogin}>
                    <input
                        placeholder="Usuário"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />

                    <input
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="buttonLogin" type="submit">Entrar</button>

                    <Link to="/register" className="back-link" >
                        <FiLogIn size={16} color="#235e4b" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroImg} alt="Hero" />
        </div>
    );
}