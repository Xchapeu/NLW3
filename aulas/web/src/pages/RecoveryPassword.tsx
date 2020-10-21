import React from'react';

import MainTheme from '../components/MainTheme';
import '../styles/pages/recovery-password.css';

export default function RecoveryPassword() {
    return (
        <div id="page-recovery-password">
            <MainTheme />

            <aside>
                <form>
                    <fieldset>
                        <legend className="title-reset-password">Redefinição de senha</legend>
                        <p className="reset-password-message">
                            Escolha uma nova senha para você acessar o dashboard do Happy.
                        </p>

                        <div className="input-block">
                            <label htmlFor="new-password">Nova senha</label>
                            <input type="password" id="new-password"/>

                            <label htmlFor="repeat-password">Repetir senha</label>
                            <input type="password" id="repeat-password"/>
                        </div>

                        <button className="reset-password-button">Redefinir</button>

                    </fieldset>
                </form>
            </aside>
        </div>
    );
}