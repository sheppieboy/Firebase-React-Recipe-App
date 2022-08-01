import RecipeCard from "../components/RecipeCard";
import { Grid, Button, Typography, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase-config";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recipesRef = collection(db, "recipes");
    const recipesQuery = query(recipesRef, orderBy("createdAt", "desc"));
    onSnapshot(recipesQuery, (snapshot) => {
      const recipes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecipes(recipes);
    });
  }, []);

  return (
    <Grid container spacing={3} sx={{ mt: 12 }}>
      {/*LEFT HAND SIDE */}
      <Grid item xs={2}>
        <Typography variant="h6" sx={{ m: 4 }}>
          Order Recipes By:
        </Typography>
        <Container>
          <Button variant="contained" sx={{ ml: 3 }}>
            NEWEST
          </Button>
        </Container>
        <Container>
          <Button variant="contained" sx={{ ml: 3, mt: 4 }}>
            TOP RATED
          </Button>
        </Container>
        <Container sx={{ mr: 5 }}>
          <Button variant="contained" sx={{ ml: 3, mt: 4 }}>
            MOST ACTIVE
          </Button>
        </Container>
      </Grid>

      {/*MIDDLE GRID */}
      <Grid item xs={6} sx={{ mt: 3, ml: 4 }}>
        <Grid container spacing={3}>
          {recipes.map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
        </Grid>
      </Grid>

      {/*RIGHT HAND SIDE */}
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Home;
