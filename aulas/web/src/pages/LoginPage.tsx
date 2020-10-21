import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import MainTheme from '../components/MainTheme';
import '../styles/pages/pagelogin.css';

export default function LoginPage() {

    return (
        <div id="page-login">
            
            <MainTheme />

            <aside>
                <Link to="/" className="to-landing-page">
                    <FiArrowLeft size={24}  color='#15C3D6'/>
                </Link>
                <form>
                    <fieldset>
                        <legend className="title-login">Fazer login</legend>

                        <div className="input-block">
                            <label htmlFor="email-login">E-mail</label>
                            <input type="text" id="email-login"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="senha-login">Senha</label>
                            <input type="password" id="senha-login"/>
                        </div>

                        <div className="checkbox-container">
                            <div className="container">
                                <label htmlFor="remember-me-checkbox">Lembrar-me</label>
                                <input type="checkbox" id="remember-me-checkbox" />
                            </div>

                            <Link to="/forgotten-password">
                                Esqueci minha senha
                            </Link>
                        </div>

                        <button className="login-button" disabled>Entrar</button>

                    </fieldset>
                </form>
            </aside>
        </div>
    );
}