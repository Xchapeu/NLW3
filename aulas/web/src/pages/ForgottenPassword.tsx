import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import MainTheme from '../components/MainTheme';
import '../styles/pages/forgotten-password.css';

export default function ForgottenPassword() {
    return (
        <div id="page-forgotten-password">
            <MainTheme />

            <aside>
                <Link to="/login" className="to-login-page">
                    <FiArrowLeft size={24} color='#15C3D6' />
                </Link>
                <form>
                    <fieldset>
                        <legend className="title-forgotten-password">Esqueci a senha</legend>
                        <p className="recovery-message">Sua redefinição de senha será enviada para o e-mail cadastrado.</p>
                        <div className="input-block">
                            <label htmlFor="email-to-recover-password">E-mail</label>
                            <input type="text" id="email-to-recover-password"/>
                        </div>

                        <Link to="/recovery-password" className="send-email-button">Enviar</Link>
                    </fieldset>
                </form>
            </aside>

        </div>
    );
}