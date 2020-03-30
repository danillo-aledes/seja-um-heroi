import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('instId', id);
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
                        placeholder="Token de Acesso"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="buttonLogin" type="submit">Entrar</button>

                    <Link to="/register" className="back-link" >
                        <FiLogIn size={16} color="#235e4b" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        </div>
    );
}