import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLaptopCode,
    faCogs,
    faMobileAlt,
    faPlug,
    faTachometerAlt,
    faCloud
} from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';

function ListarSevicos() {
    return (
        <ul className="space-y-2">
            <li>
                <div className="bg">
                    <div className="icon">
                        <FontAwesomeIcon icon={faLaptopCode} className="text-blue-600 mr-2" size="2x" />
                    </div>
                    Sites institucionais e landing pages
                </div>
            </li>
            <li>
                <div className="bg">
                    <div className="icon">
                        <FontAwesomeIcon icon={faCogs} className="text-green-600 mr-2" size="2x" />
                    </div>
                    Sistemas personalizados com React, Node.js e Laravel
                </div>
            </li>
            <li>
                <div className="bg">
                    <div className="icon">
                        <FontAwesomeIcon icon={faMobileAlt} className="text-indigo-600 mr-2" size="2x" />
                    </div>
                    Criação de Aplicativos com React
                </div>
            </li>
            <li>
                <div className="bg">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPlug} className="text-yellow-600 mr-2" size="2x" />
                    </div>
                    Integrações com APIs e automações
                </div>
            </li>
            <li>
                <div className="bg">
                    <div className="icon">
                        <FontAwesomeIcon icon={faTachometerAlt} className="text-red-600 mr-2" size="2x" />
                    </div>
                    Otimização de performance e SEO técnico
                </div>
            </li>
            <li>
                <div className="bg">
                    <div className="icon">
                        <FontAwesomeIcon icon={faWordpress} className="text-purple-600 mr-2" size="2x" />
                    </div>
                    Criação e manutenção de temas e plugins WordPress
                </div>
            </li>
            <li>
                <div className="bg">
                    <div className="icon">
                        <FontAwesomeIcon icon={faCloud} className="text-gray-600 mr-2" size="2x" />
                    </div>
                    Hospedagem de sites e sistemas
                </div>
            </li>
        </ul>
    );
}

export default ListarSevicos;
