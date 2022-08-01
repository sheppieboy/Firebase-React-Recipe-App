import {
  Grid,
  Paper,
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import "./recipe-card.css";
import LikeRecipe from "./LikeRecipe";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";
import DeleteRecipe from "./DeleteRecipe";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 10,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});

const RecipeCard = ({
  recipe: {
    id,
    likes,
    image,
    title,
    description,
    likesCount,
    commentCount,
    createdAt,
    userName,
    userId,
  },
}) => {
  const [user] = useAuthState(auth);
  return (
    <Grid item xs={4}>
      <ThemeProvider theme={theme}>
        <Paper elevation={12}>
          <img src={image} alt={title} className="img" />
          <Grid container spacing={5} sx={{ pr: 1, pl: 0.5 }}>
            <Grid item>
              <Typography variant="subtitle1">{title}</Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              {user ? (
                <Link to={`/recipe/${id}`} style={{ textDecoration: "none" }}>
                  <Button size="small" variant="contained">
                    Go To
                  </Button>
                </Link>
              ) : (
                <Button size="small" variant="contained" disabled>
                  Go To
                </Button>
              )}
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" sx={{ ml: 0.5, pr: 4 }}>
              Created By: {userName}
            </Typography>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {createdAt}
            </Typography>
          </Box>
          <Box sx={{ mt: 2, ml: 0.5, mr: 1 }}>
            <Typography> {description}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 3,
            }}
          ></Box>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <LikeRecipe likes={likes} id={id} />
              <Typography sx={{ ml: 1 }}> {likesCount} likes</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>{`${commentCount} comments`}</Typography>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default RecipeCard;
