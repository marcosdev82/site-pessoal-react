import { EntryTitleProps } from '../../types/posts';
import { SectionEntryTitle } from './style';

const EntryTitle = ({ title = "Título da Página", icon = "" }: EntryTitleProps) => {
    // console.log('Current title:', title);  // Verifique no console
    return (
        <SectionEntryTitle >
            <h1>{icon || ""} {title || "Fallback Title"}</h1>
        </SectionEntryTitle>
    );
};
export default EntryTitle; 