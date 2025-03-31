export const getPosts = async () => {
return [
    { id: 1, title: "Post 1", excerpt: "Resumo do post 1...", category: "Tech" },
    { id: 2, title: "Post 2", excerpt: "Resumo do post 2...", category: "Lifestyle" },
];
};

export const getCategories = async () => {
return ["Tech", "Lifestyle", "Saúde", "Negócios"];
};
  