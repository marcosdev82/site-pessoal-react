import React, {Suspense} from 'react';
import { BlogProvider } from "../../../contexts/BlogContext";
import ListPostCategory from "./ListPostCategory";
import PreloaderContent from '../../../components/preloader';

const Category = () => {
    return (
        <BlogProvider>
            <Suspense fallback={<PreloaderContent />}>
                <ListPostCategory />
            </Suspense>
        </BlogProvider>

    );
}

export default Category;