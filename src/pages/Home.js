import RecipeCard from "../components/RecipeCard";
import { Grid, Button, Typography, Container } from "@mui/material";

const fakeData = {
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFz8HnkDgiAeZ41W2rG5aMKEo2Du0eKFGhg&usqp=CAU",
  title: "Delicious Chicken Breast",
  description:
    "The yummiest and juiciest chicken oven baked chicken breast.  This recipe takes only 10 minutes to prepare and will be a guaranteed hit with the family! ",
};

const Home = () => {
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
          <RecipeCard fakeData={fakeData} />
          <RecipeCard fakeData={fakeData} />
          <RecipeCard fakeData={fakeData} />
          <RecipeCard fakeData={fakeData} />
          <RecipeCard fakeData={fakeData} />
          <RecipeCard fakeData={fakeData} />
          <RecipeCard fakeData={fakeData} />
          <RecipeCard fakeData={fakeData} />
        </Grid>
      </Grid>

      {/*RIGHT HAND SIDE */}
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Home;
