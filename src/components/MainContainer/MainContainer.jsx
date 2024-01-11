import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import PostCardList from "../PostCardList/PostCardList";
import UserList from "../UserList/UserList";

export default function MainContainer() {
  return (
    <Box sx={{ width: "100%", mt: "3rem" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="start"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Grid>
          <UserList />
        </Grid>
        <Grid
          container
          justifyContent="center"
          direction="column"
          alignItems="center"
          md={8}
        >
          {/* Posts */}
          <PostCardList />
        </Grid>
      </Grid>
    </Box>
  );
}
