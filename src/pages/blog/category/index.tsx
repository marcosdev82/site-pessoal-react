import { BlogProvider } from "../../../context/BlogContext";
import ListPostCategory from "./ListPostCategory";

const Category = () => {
    return (
        <BlogProvider>
            <ListPostCategory />
        </BlogProvider>

    );
}

export default Category;