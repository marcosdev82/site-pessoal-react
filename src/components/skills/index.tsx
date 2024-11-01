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
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Skills: React.FC = () => {
    return (
        <ListSkills>
            <List>
                <ul>
                    <li><Logo /></li>
                    <li><IconSkill src={typescript} alt="Type Script" /></li>
                    <li><IconSkill src={node} alt="Node JS" /></li>
                    <li><IconSkill src={react} alt="React and React Native" /></li>
                    <li><IconSkill src={jest} alt="Jest" /></li>
                    <li><IconSkill src={cypress} alt="Cypress" /></li>
                    <li><IconSkill src={laravel} alt="Laravel" /></li>
                    <li><IconSkill src={php} alt="PHP" /></li>
                    <li><IconSkill src={wordpress} alt="Wordpress" /></li> 
                    <li><IconSkill src={postgres} alt="Postifres" /></li>
                    <li><IconSkill src={mysql} alt="Mysql" /></li>
                    <li><IconSkill src={mongodb} alt="MongoDB" /></li>
                    <li><IconSkill src={docker} alt="Docker" /></li>
                    <li><IconSkill src={redis} alt="Redis" /></li>
                </ul>
            </List>
        </ListSkills>
    );
  
}

export default Skills;