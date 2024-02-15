import MainContainer from "./MainContainer/MainContainer";
import Input from "./Input/Input";
import axios from "axios";
import PostCardContext from "../providers/PostsProvider";
import usePosts from "../hooks/usePosts";

function SocialApp() {
  const [posts, setPosts] = usePosts();
  return (
    <>
      <PostCardContext.Provider value={{ posts, setPosts }}>
        <Input />
        <MainContainer />
      </PostCardContext.Provider>
    </>
  );
}

export default SocialApp;
