import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import Blog from "./BlogPost"


const BlogList = () => {

 const { blogs } = useContext(BlogContext)

  return (
    <div>
     {blogs.map((blog, i) => (
       <Blog key={i} blog={blog} />
     ))}
    </div>
  );
}
 
export default BlogList;