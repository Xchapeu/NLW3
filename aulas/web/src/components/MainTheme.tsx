import React from 'react';

import '../styles/components/maintheme.css';
import logotipo from '../images/logotipo.svg';

export default function MainTheme() {
    return (
        <div className="main-theme">
            <main>
                <img src={logotipo} alt="Logo happy" />

                <div className="location">
                    <strong>Osasco</strong>
                    <span>São Paulo</span>
                </div>
            </main>
        </div>

    );
}