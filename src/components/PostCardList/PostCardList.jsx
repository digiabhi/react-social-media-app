import { useContext } from "react";
import PostCard from "../PostCard";
import PostCardContext from "../../providers/PostsProvider";

function PostCardList() {
  // const [posts, setPosts] = useState([]);
  const { posts } = useContext(PostCardContext);

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
