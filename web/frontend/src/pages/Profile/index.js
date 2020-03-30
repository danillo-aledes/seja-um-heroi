import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg'

export default function Profile() {
    const [cases, setCasos] = useState([]);

    const history = useHistory();

    const instId = localStorage.getItem('instId');
    const instName = localStorage.getItem('instName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: instId
            }
        }).then(response => {
            setCasos(response.data);
        })
    }, [instId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`cases/${id}`, {
                headers: {
                    Authorization: instId
                }
            });

            setCasos(cases.filter(incident => incident.id !== id))
        } catch (err) {
            alert('Erro ao deletar o caso, tente novamente');
        }
    }

    async function handleLogOut() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Seja Um Herói" />
                <span>Bem vindo(a), {instName}!</span>

                <Link className="buttonLogin" to="/cases/new">Cadastrar novo caso</Link>

                <button onClick={handleLogOut} type="button" title="Sair">
                    <FiPower size={25} color="#e02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {cases.map(caso => (
                    <li key={caso.id}>
                        <strong>Caso:</strong>
                        <p>{caso.title}</p>

                        <strong>Descrição:</strong>
                        <p>{caso.description}</p>

                        <strong>Valor:</strong>
                        <p>
                            {
                                Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                    .format(caso.value)
                            }
                        </p>

                        <button type="button" onClick={() => handleDeleteIncident(caso.id)} title="Deletar Caso">
                            <FiTrash2 size={22} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}