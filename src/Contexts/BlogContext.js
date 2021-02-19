import {createContext} from "react"
export const BlogContext =createContext();
function BlogContextProvider(props) {
  return (
    <div>
      <BlogContext.Provider>
        {props.children}
      </BlogContext.Provider>
    </div>
  )
}

export default BlogContextProvider
