import React from 'react';
import { ListSkills, List, IconSkill } from './styles';
import javascript from '../../assets/images/js.png';
import typescript from '../../assets/images/ts.png';
import node from '../../assets/images/node.png';
import react from '../../assets/images/react.png';
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

const Skills: React.FC = () => {
    return (
        <ListSkills>
            <List>
                <ul>
                    <li><IconSkill src={javascript} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                    <li><IconSkill src={typescript} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                    <li><IconSkill src={node} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                    <li><IconSkill src={react} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                    <li><IconSkill src={jest} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                    <li><IconSkill src={cypress} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                    <li><IconSkill src={laravel} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                    <li><IconSkill src={php} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                    <li><IconSkill src={wordpress} alt="Marcos Tavares Desenvolvedor Fulstack" /></li> 
                    <li><IconSkill src={postgres} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                    <li><IconSkill src={mysql} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                    <li><IconSkill src={mongodb} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                    <li><IconSkill src={docker} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                    <li><IconSkill src={redis} alt="Marcos Tavares Desenvolvedor Fulstack" /></li>
                </ul>
            </List>
        </ListSkills>
    );
  
}

export default Skills;