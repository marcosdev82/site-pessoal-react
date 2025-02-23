import {SectionEntryTitle} from './style';  

interface TitleProps {
    title?: string;
}

const EntryTitle = ({ title = "Título da Página" }: TitleProps) => {
    return (
        <SectionEntryTitle>
            <h1>{title}</h1>
        </SectionEntryTitle>
    );
};

export default EntryTitle;
