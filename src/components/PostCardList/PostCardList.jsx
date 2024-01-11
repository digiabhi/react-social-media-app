import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../PostCard";

function PostCardList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post", {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      })
      .then((response) => {
        console.log(response);
        const responseObject = response.data;
        setPosts([...responseObject.data]);
      });
  }, []);

  return posts.length == 0
    ? "loading...."
    : posts.map((post) => (
        <PostCard
          key={post.id}
          content={post.text}
          image={post.image}
          authorFirstName={post.owner.firstName}
        />
      ));
}

export default PostCardList;
