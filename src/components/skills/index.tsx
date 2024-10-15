import React from 'react';
import { ListSkills, List, IconSkill } from './styles';
import javascript from '../../assets/images/js.png';
import typescript from '../../assets/images/ts.png';
import node from '../../assets/images/node.png';
import react from '../../assets/images/react.png';
import jest from '../../assets/images/jest.png';

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
                    <li>skill 4</li>
                    <li>skill 5</li>
                    <li>skill 6</li>
                    <li>skill 7</li>
                    <li>skill 8</li>
                    <li>skill 9</li>
                    <li>skill 10</li>
                </ul>
            </List>
        </ListSkills>
    );
  
}

export default Skills;