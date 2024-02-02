import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import PostCardContext from "../../providers/PostsProvider";

function Input() {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { posts, setPosts } = useContext(PostCardContext);
  async function createPost() {
    setLoading(true);
    console.log("Inside createPost");
    axios
      .post(
        "https://dummyapi.io/data/v1/post/create",
        {
          owner: "60d21b4667d0d8992e610c85",
          text: postText,
          image: imageUrl,
          likes: 0,
          publishDate: new Date(),
        },
        {
          headers: { "app-id": import.meta.env.VITE_APP_ID },
        }
      )
      .then((response) => {
        const responseObject = response.data;
        setPosts([response.data, ...posts]);
        console.log(response.data);
        setLoading(false);
        setPostText("");
        setImageUrl("");
      });
  }

  return (
    <Box sx={{ mt: "1rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Your next post..."
        variant="outlined"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <TextField
        sx={{ mt: "1rem", mb: "1rem" }}
        fullWidth
        id="outlined-basic"
        label="Image for your post..."
        variant="outlined"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      {!loading ? (
        <Button variant="contained" onClick={createPost}>
          Submit
        </Button>
      ) : (
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
      )}
    </Box>
  );
}

export default Input;
