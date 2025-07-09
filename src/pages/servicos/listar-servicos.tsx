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
                <div>
                    <FontAwesomeIcon icon={faLaptopCode} className="text-blue-600 mr-2" size="3x" />
                    Desenvolvimento de sites institucionais e landing pages
                </div>
            </li>
            <li>
                <div>
                    <FontAwesomeIcon icon={faCogs} className="text-green-600 mr-2" size="3x" />
                    Criação de sistemas personalizados com React, Node.js e Laravel
                </div>
            </li>
            <li>
                <div>
                    <FontAwesomeIcon icon={faMobileAlt} className="text-indigo-600 mr-2" size="3x" />
                    Criação de Aplicativos com React
                </div>
            </li>
            <li>
                <div>
                    <FontAwesomeIcon icon={faPlug} className="text-yellow-600 mr-2" size="3x" />
                    Integrações com APIs e automações
                </div>
            </li>
            <li>
                <div>
                    <FontAwesomeIcon icon={faTachometerAlt} className="text-red-600 mr-2" size="3x" />
                    Otimização de performance e SEO técnico
                </div>
            </li>
            <li>
                <div>
                    <FontAwesomeIcon icon={faWordpress} className="text-purple-600 mr-2" size="3x" />
                    Criação e manutenção de temas e plugins WordPress
                </div>
            </li>
            <li>
                <div>
                    <FontAwesomeIcon icon={faCloud} className="text-gray-600 mr-2" size="3x" />
                    Hospedagem de sites e sistemas
                </div>
            </li>
        </ul>
    );
}

export default ListarSevicos;
