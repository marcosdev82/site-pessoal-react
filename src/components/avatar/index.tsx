import { EntryAvatar } from './styles';
import { AvatarContent } from '../../types/posts';

const Avatar = (props: AvatarContent) => {
    const { id, name, foto, link, size = 24 } = props;

    return (
        <EntryAvatar key={id} style={{ width: size, height: size }}>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={foto} alt={name || "Avatar"} width={size} height={size} />
                </a>
            ) : (
                <img src={foto} alt={name || "Avatar"} width={size} height={size} />
            )}
            {name && <span>{name}</span>}
        </EntryAvatar>
    );
};

export default Avatar;