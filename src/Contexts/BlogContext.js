import {createContext, useState} from "react"
export const BlogContext =createContext();
function BlogContextProvider(props) {
  const[posts, setPosts]=useState([
    {
        header:"Boil Potatoes",
        content:"Boil Potatoes",
        like:0
    },
    {
        header:"Boil Carrots",
        content:"Boil Carrots",
        like:0
    },
    {
        header:"Bake Potatoes",
        content:"Bake Potatoes",
        like:0
    },
  ]);

  const values ={
    posts,
  }
  
  return (
    <div>
      <BlogContext.Provider value={values}>
        {props.children}
      </BlogContext.Provider>
    </div>
  )
}

export default BlogContextProvider
