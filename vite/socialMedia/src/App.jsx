import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"
import Footer from "./components/Footer"
import PostListProvider from "./store/Social-media"

function App() {
  const [activeValue, setActiveValue] = useState("Home")

  return (
    <>
    <PostListProvider>
    <div className="container_flex">
      <SideBar activeValue = {activeValue} setActiveValue = {setActiveValue}></SideBar>
      <div className="content">
        <NavBar></NavBar>
        {activeValue === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
    </>
  )
}

export default App
