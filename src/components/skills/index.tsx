import React from 'react';
import { ListSkills, List, IconSkill } from './styles';
import javascript from '../../assets/images/js.png';
import typescript from '../../assets/images/ts.png';
import node from '../../assets/images/node.png';
import react from '../../assets/images/react.png';
import nest from '../../assets/images/nest.png';
import redux from '../../assets/images/redux.png';
import jest from '../../assets/images/jest.png';
import cypress from '../../assets/images/cy.png';
import laravel from '../../assets/images/laravel.png';
import php from '../../assets/images/php.png';
import postgres from '../../assets/images/postgres.png';
import mysql from '../../assets/images/mysql.png';
import mongodb from '../../assets/images/mongodb.png';
import docker from '../../assets/images/docker.png';
import redis from '../../assets/images/redis.png';
import wordpress from '../../assets/images/wordpress.png';

const Skills = () => {
    return (
        <ListSkills>
            <List>
                <div className='group'>
                    <h2>Linguagens de Programação</h2>
                    <ul>    
                        <li><IconSkill src={javascript} alt="JavaScript (Vanilla)" width={45} height={45} /></li>
                        <li><IconSkill src={typescript} alt="TypeScript" width={45} height={45} /></li>
                        <li><IconSkill src={php} alt="PHP" width={45} height={45}/></li>
                    </ul>
                </div>

                <div className='group'>
                    <h2>Frameworks e Bibliotecas</h2>
                    <ul>
                        <li><IconSkill src={node} alt="Node.js" width={45} height={45}/></li>
                        <li><IconSkill src={react} alt="React e React Native" width={45} height={45}/></li>
                        <li><IconSkill src={nest} alt="NestJS" width={45} height={45}/></li>
                        <li><IconSkill src={redux} alt="Redux" width={45} height={45}/></li>
                        <li><IconSkill src={laravel} alt="Laravel" width={45} height={45}/></li>
                        <li><IconSkill src={wordpress} alt="WordPress" width={45} height={45}/></li> 
                    </ul>
                </div>

                <div className='group'>
                    <h2>Bancos de Dados</h2>
                    <ul>
                        <li><IconSkill src={postgres} alt="PostgreSQL" width={45} height={45}/></li>
                        <li><IconSkill src={mysql} alt="MySQL" width={45} height={45}/></li>
                        <li><IconSkill src={mongodb} alt="MongoDB" width={45} height={45}/></li>
                        <li><IconSkill src={redis} alt="Redis" width={45} height={45}/></li>
                    </ul>
                </div>

                <div className='group'>
                    <h2>Testes</h2>
                    <ul>
                        <li><IconSkill src={jest} alt="Jest" width={45} height={45}/></li>
                        <li><IconSkill src={cypress} alt="Cypress" width={45} height={45}/></li>
                    </ul>
                </div>
                
                <div className='group'>
                    <h2>DevOps</h2>
                    <ul>
                        <li><IconSkill src={docker} alt="Docker" width={45} height={45}/></li>
                    </ul>
                </div>
            </List>
        </ListSkills>
    );
  
}

export default Skills;