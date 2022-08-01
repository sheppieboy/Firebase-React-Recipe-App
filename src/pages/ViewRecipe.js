import {
  Container,
  Paper,
  TextField,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

// import LikeRecipe from "../components/LikeRecipe";
import DeleteRecipe from "../components/DeleteRecipe";
import CommentRecipe from "../components/CommentRecipe";

const ViewRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getPost = (id) => {
      const recipeRef = doc(db, "recipes", id);
      onSnapshot(recipeRef, (snapshot) => {
        setRecipe({ ...snapshot.data(), id: snapshot.id });
      });
    };
    getPost(id);
  }, []);

  return (
    <Container sx={{ mt: 15 }}>
      <Paper elevation={16}>
        <Box sx={{ pt: 2, mt: 5, ml: 4, mr: 4 }}>
          <Typography variant="h6"> {recipe.title}</Typography>
        </Box>
        <Box sx={{ mt: 4, ml: 4, mr: 4 }}>
          <TextField
            sx={{ pr: 2 }}
            label="Created By:"
            multiline
            maxRows={5}
            InputLabelProps={{ shrink: true }}
            value={recipe.userName}
          />

          {user && user.uid === recipe.userId && (
            <DeleteRecipe id={id} image={recipe.image} />
          )}
        </Box>
        <Box sx={{ mt: 4, ml: 4, mr: 4 }}>
          <img src={recipe.image} alt={recipe.title} className="" />
        </Box>
        <Box sx={{ mt: 4, ml: 4, mr: 4 }}>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Recipe Description"
            multiline
            maxRows={5}
            value={recipe.description}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 4, ml: 4, mr: 4 }}>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Recipe Ingredients"
            multiline
            maxRows={5}
            value={recipe.ingredients}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 4, ml: 4, mr: 4 }}>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Recipe Instructions"
            multiline
            maxRows={5}
            value={recipe.instructions}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 4, ml: 4, mr: 4 }}>
          <Grid container>
            <Typography variant="body1">{recipe.likesCount} likes</Typography>
            <Typography variant="body1" sx={{ pl: 2 }}>
              {recipe.commentCount} comments
            </Typography>
          </Grid>
        </Box>
        {/* <Box sx={{ mt: 4, ml: 4, mr: 4, pb: 4 }}>
          <CommentRecipe id={recipe.id} />
        </Box> */}
      </Paper>
    </Container>
  );
};
export default ViewRecipe;
