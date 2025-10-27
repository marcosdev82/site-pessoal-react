import { useContext } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../components/sidebar";
import Pagination from "../../../components/pagination";
import Post from "../post";
import { Content, EntryContent } from "../styles";
import EntryTitle from "../../../components/entrytitle";
import { BlogContext } from "../../../contexts/BlogContext";
import { BlogContextType } from "../../../types/posts";

const Category = () => {
  const { posts, currentPage, itemsPerPage, totalPosts, changePage, isLoading } =
    useContext(BlogContext) as BlogContextType;

  const { category_slug } = useParams();
  const formattedTitle = category_slug || "Categoria"; // Adjust as needed

  return (
    <>
      <section className="entry-title">
        <EntryTitle title={formattedTitle} />
      </section>

      <EntryContent>
        <Sidebar />
        <Content>
       
          {posts.length > 0 && (
            posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                media_details={post.media_details}
                categories_details={post.categories_details}
                author_data={post.author_data}
                slug={post.slug}
              />
            ))
          )}
        </Content>
      </EntryContent>

      {posts.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalItems={totalPosts}
          itemsPorPagina={itemsPerPage}
          mudarPagina={changePage}
        />
      )}
    </>
  );
};

export default Category;