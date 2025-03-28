import { EntryAvatar } from './styles';

interface AvatarContent{
    id: number;
    name?: string;
    slug?: string;
    foto?: { [key: string]: any } | null;
    link?: string;
    size?: 24 | 48 | 96;
}

const Avatar = ({ id, name, slug, foto, link, size = 24 }: AvatarContent) => {
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