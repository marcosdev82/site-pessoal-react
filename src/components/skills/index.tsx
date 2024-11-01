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
                    <li><IconSkill src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASLSURBVHic7Zl9TJVVHMc/1wyVF8lhiIJBLSJZXvsjy8owsYKwWpDilkbDuZovZc7VqOQauGy5BDWz4WAuREtboZGxcCjTas5qZS0sRRBLM4vxKm8XvP1xducunOc+l8uV81x5vv89v/M7z/mez73PebU46nAwjDVCtQHVMgGoNqBaJgDVBlTLBKDagGqZAFQbUC0TgGoDqmUCUG1AtUwAqg2olglAtQHVMgGoNqBaJgDVBlTLBKDagGqZAFQbUC0TgGoDqjXsAYwc6gb/vgRvbeofDw+Ddav16/91EUpKoeoYnKmHhiYIDoTICIiJgpTZkD4XRgV45scy1LfDJ2sg/tH+8dgYOHVYu15nF2S9Cx+WQLfdfRuTJsDWHEhN0vfjF59ASxskpMPmHfqdB7jwDzyzFDYU6Of6BYBnV8L3vwysjsMh/jGflLnPMzyArw7DgUPe1XU4YFk2NDRq5wz5IDhQFe6Rx8eMhhUZcI8VLrdD6ddQVumaEx4G+dkQNk77/YYHUPmtPF5aAEkJV58z54sx4pVc8ZyRBnlr3HceDA6g9bIYAPsq4mbXzju1MhPqz0PyLHjsIc/aMDSAK1fk8fYO8X1bLP3L8tYMrA1DD4Jjg+ULmpY22PGpb9owNACLBaZb5WUvvgFvvgdt7YNrw9AAAOalyOM9vbD+A4iZCWvz4eK/3r3f8ACWLBDrfC01NELuFoh+EJZkQd2fA3u/4QEEBcLuzfqbm247FO2BuERY/JrnIAwPACDhXviiEEJD9HPtPWKAvCsJthbr5/sFABDz+olymJvoWX57B7y0FpbbxJSpJb8BABAdCV8WwbFSeMJDENt2ut8V+hUAp+67G8qK4Ph+WPg03KiznLPlwbkL8jK/BODUdCuU5EPtUbEM1gLRbRcHKTL5NQCnoiJgkw1+KIMJ4+U5B7+Rx68LAE5Z74SPNsrLas7K49cEwKHvtMv+0zicCA7SrvNHLaRkwu79+m0/PEMeb2mTb658CuBUHSRlwJyFsPeAPEfrlxgv2bc3t8Lqt2FqEpRXidOdEyfde9BaAIWGwAhJb30CoKMTsjeCNRkqjorYC6/Dz9WuefYe2P6x/B1xt7k+F38Od8yGvEJRDwSQWQvgs3L53N7UAs9rHK3fOlkeH/R5QFc3THscTp91jTe3woxUWJQK06aINfu+Cu1fMPEB1+fac3CpoX9ecyvMWwZT4yAtWdwFtLXD72dg1z4BQaYn58jjPrkXWG4TCw5vFRkBNVUwetTVWGcXzJwPP/46WHcQOAaqD4qFVF/55BPYkAXxsd7Xz13l2nkQz6UFcHv04LwBrH9V3nnwEYCgQKgo9g7CigxYnC4vmzwRjuzVHtn1ZLGA7WWxSNKSz2aByAixRl+6CEbeoJ8fGgLb1sH7Oe7zJoZD5S7Y/g7cMslzP/GxULETcla5z7smd4P158WAdOQ4VJ+GxmYICICwm8A6BRLvh+fSIMTN3C9Tb6+4FC2rhJ9+EwNlUws4gHFjITpK7BOeekRsoWWHpn015JejRtN1tRT2RiYA1QZUa9gD+B+ejy7SkCazDAAAAABJRU5ErkJggg==" alt="Java Script Vanila" /></li>
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