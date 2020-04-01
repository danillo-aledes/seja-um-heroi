import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'
import logoImg from '../../assets/logo.png'

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const instId = localStorage.getItem('instId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('cases', data, {
                headers: {
                    Authorization: instId
                }
            })

            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.');
        }
    }

    return (
        <div className="new-case-container ">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Seja Um Herói" />

                    <h1>Cadastrar um novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para doar.</p>

                    <Link to="/profile" className="back-link" >
                        <FiArrowLeft size={16} color="#04d361" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="buttonLogin" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}