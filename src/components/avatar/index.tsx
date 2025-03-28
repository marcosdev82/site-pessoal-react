import { EntryAvatar } from './styles';

interface AvatarContent{
    id: number;
    name?: string;
    slug?: string;
    foto: string;
    link?: string;
    size?: 24 | 48 | 96;
}

const Avatar = ({id, name, slug, foto, link, size}: AvatarContent) => {

    return (
        <EntryAvatar style={{ width: size || 24, height: size || 24 }}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={foto} alt={name} style={{ width: size || 24, height: size || 24 }} />
            </a>
            {name ? (<span>{name}</span>) : null}
        </EntryAvatar>
    );
}

export default Avatar;