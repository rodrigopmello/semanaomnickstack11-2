import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.svg';

import { FiPower,FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

export default function Profile(){

    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory()


    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]); //TODA VEZ QUE AS VARS DENTRO ARRAY MUDAM
    //VAI EXECUTAR FUNCAO

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao deletar caso')
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
        

    }
    
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem-vindo, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastro</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#e02041"></FiPower>
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
               {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>Caso:</strong>
                    <p>{incident.title}</p>

                    <strong>Descricao</strong>
                    <p>{incident.description}</p>

                    <strong>Valor</strong>
                    <p>
                        {Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p> 

                    <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
               ))}
               
            </ul>
        </div>
    );
}