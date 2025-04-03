import { EntryAvatar } from './styles';
import { AvatarContent, AvatarUrls } from '../../types/posts';


const Avatar = (props: AvatarContent) => {

    const { id, name, slug, foto, link, size = 24 } = props
    const imageUrl = foto && typeof foto === "object" ? foto[size] || foto[24] : ""; // Usa tamanho padrão

    return (
        <EntryAvatar style={{ width: size, height: size }}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt={name || "Avatar"} width={size} height={size} />
            </a>
            {name && <span>{name}</span>}
        </EntryAvatar>
    );
};


export default Avatar;