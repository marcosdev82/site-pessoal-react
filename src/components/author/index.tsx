import { Avatar } from './styles';

interface AvatarContent{
    id: number;
    name?: string;
    slug?: string;
    foto: string;
    link?: string;
}

const Author = ({id, name, slug, foto, link}: AvatarContent) => {

    return (
        <Avatar>
            <a href="{link}" target="_blank" rel="noopener noreferrer">
                <img src="{foto}" alt="{name}" />
            </a>

            {name ? (<span>{name}</span>) : null}

        </Avatar>
    );
}

export default Author;