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

import LikeRecipe from "../components/LikeRecipe";

const ViewRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [user] = useAuthState(auth);

  useEffect(() => {
    console.log(id);
    const docRef = doc(db, "recipes", id);
    onSnapshot(docRef, (snapshot) => {
      setRecipe({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);

  return (
    <Container sx={{ mt: 15 }}>
      <Paper elevation={12}>
        <Box sx={{ pt: 3, mr: 4, ml: 4 }}>
          <Grid container space={2}>
            <TextField label=" Recipe Title" value={recipe.title} />
            <Typography>test</Typography>
          </Grid>
        </Box>
        <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
          <img src={recipe.image} alt={recipe.title} />
        </Box>
        <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
          <TextField
            label="Recipe Description"
            value={recipe.description}
            multiline
            maxRows={20}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
          <TextField
            label="Ingredients"
            value={recipe.ingredients}
            multiline
            maxRows={20}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
          <TextField
            label="Recipe Instructions"
            value={recipe.instructions}
            fullWidth
            multiline
            maxRows={20}
          />
        </Box>
        <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
          <Grid container spacing={2}>
            <LikeRecipe
              id={id}
              likes={recipe.likes}
              likesCount={recipe.likesCount}
            />
            <Typography
              sx={{ pl: 2, pt: 1.5 }}
              variant="body2"
            >{`${recipe.likesCount} likes`}</Typography>

            <Typography sx={{ pl: 75, pt: 1.5 }} variant="body2">
              {`${recipe.commentCount} comments`}
            </Typography>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};
export default ViewRecipe;
