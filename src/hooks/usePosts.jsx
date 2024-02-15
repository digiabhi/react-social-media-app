import axios from "axios";
import { useEffect, useState } from "react";

export default function usePosts() {
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
  return [posts, setPosts];
}
