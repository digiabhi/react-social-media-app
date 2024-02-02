import MainContainer from "./MainContainer/MainContainer";
import Navbar from "./Navbar/Navbar";
import Input from "./Input/Input";
import axios from "axios";
import PostCardContext from "../providers/PostsProvider";
import { useState, useEffect } from "react";

function SocialApp() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post", {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      })
      .then((response) => {
        const responseObject = response.data;
        setPosts([...responseObject.data]);
      });
  }, []);
  return (
    <>
      <PostCardContext.Provider value={{ posts, setPosts }}>
        <Navbar />
        <Input />
        <MainContainer />
      </PostCardContext.Provider>
    </>
  );
}

export default SocialApp;
