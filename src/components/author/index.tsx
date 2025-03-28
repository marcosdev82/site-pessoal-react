import { Avatar } from './styles';

interface AvatarContent{
    id: number;
    name: string;
    slug: string;
    avatarUrl: string;
    link: string;
}

const Author = ({id, name, slug, avatarUrl, link}: AvatarContent) => {

    return (
        <Avatar>
            <a href="{link}" target="_blank" rel="noopener noreferrer">
                <img src="{avatarUrl}" alt="{name}" />
            </a>

            {name ? (<span>{name}</span>) : null}

        </Avatar>
    );
}

export default Author;