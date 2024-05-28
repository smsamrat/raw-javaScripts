import {createContext, useReducer } from "react";

const PostListContext= createContext([])

const PostListReducer =(currentPostList,action) =>{
    return currentPostList;
}

const PostListProvider= ({children}) =>{
    const [postList,dispacthPostListReducer] = useReducer(PostListReducer,[])

    const addPost = ()=>{
        
    }
    const deletePost = ()=>{
        
    }

    return (
        <PostListContext.Provider value={
            {
                postList,
                addPost,
                deletePost,
            }
        }>{children}</PostListContext.Provider>
    )
}
export default PostListProvider;