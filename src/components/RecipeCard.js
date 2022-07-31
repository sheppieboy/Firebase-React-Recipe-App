import {
  Grid,
  Paper,
  Box,
  Typography,
  Rating,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import "./recipe-card.css";

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

const RecipeCard = ({ fakeData, fakeData: { image, title, description } }) => {
  return (
    <Grid item xs={4}>
      <ThemeProvider theme={theme}>
        <Paper elevation={12}>
          <img src={image} alt={title} className="img" />
          <Grid container spacing={5} sx={{ pr: 1, pl: 0.5 }}>
            <Grid item>
              <Typography variant="subtitle1">{title}</Typography>
            </Grid>
            <Grid item xs>
              <Button size="small" variant="contained">
                Go To
              </Button>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" sx={{ ml: 0.5, pr: 4 }}>
              Created By: UserName
            </Typography>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
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
          >
            <Rating
              size="small"
              name="read-only"
              value={4.5}
              precision={0.5}
              readOnly
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {4.5}
            </Typography>
            <Typography variant="body3" component="p" marginLeft={1.5}>
              {500} reviews
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: 0.5,
            }}
          >
            <Typography variant="h6" component="h3" marginTop={1.5}>
              From C ${400}
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default RecipeCard;
