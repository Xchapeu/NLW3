import React from 'react';
import { Link } from 'react-router-dom';

import happyGirl from '../images/page-succeded.svg';

import '../styles/pages/register-succeded.css';

export default function RegisterSucceded() {
    return (
        <div id="page-register-succeded">
            <main>
                
                <div className="container">
                    <h1>Ebaaa!</h1>
                    
                    <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado.</p>
                    <p>Agora é só esperar :)</p>
                    
                    <Link to="/app">Voltar para o mapa</Link>
                </div>
                
                <img src={happyGirl} alt="Orfanato cadastrado"/>

            </main>
        </div>
    );
}