import { PostsProvider } from "../../../contexts/PostsContext";
import ListPostCategory from "./ListPostCategory";

const Category = () => {
    return (
        <PostsProvider>
            <ListPostCategory />
        </PostsProvider>

    );
}

export default Category;