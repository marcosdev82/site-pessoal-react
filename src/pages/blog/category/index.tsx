import React, {Suspense} from 'react';
import { BlogProvider } from "../../../contexts/BlogContext";
import ListPostCategory from "./ListPostCategory";

const Category = () => {
    return (
        <BlogProvider>
            <Suspense fallback={<p>Carregando posts...</p>}>
                <ListPostCategory />
            </Suspense>
        </BlogProvider>

    );
}

export default Category;