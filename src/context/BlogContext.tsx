import { createContext, useState, useEffect } from "react";
import { getPosts, getCategories } from "../service/api";

// Tipos para os dados
interface Post {
  id: number;
  title: string;
  content: string;
  categoryId: number;
};

interface Category {
  id: number;
  name: string;
};

// Tipagem do contexto
interface BlogContextType {
  posts: Post[];
  categories: Category[];
};

export const BlogContext = createContext<BlogContextType | null>(null);


export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
    getCategories().then(setCategories);
  }, []);

  return (
    <BlogContext.Provider value={{ posts, categories }}>
      {children}
    </BlogContext.Provider>
  );
};
