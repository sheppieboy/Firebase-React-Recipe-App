import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Paper, Typography, Grid } from "@mui/material";

function SignIn({ user }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    provider.setCustomParameters({
      prompt: "select_account",
    });
    signInWithPopup(auth, provider).then((result) => {
      navigate("/");
    });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      margin={10}
    >
      <Paper elevation={4} sx={{ m: 3, w: 10 }}>
        <Typography variant="h3" m={3}>
          {"Sign in to see some yummy recipes!"}
        </Typography>
        <Button
          variant="contained"
          sx={{ m: 2, p: 2 }}
          onClick={signInWithGoogle}
        >
          Google Sign In
        </Button>
      </Paper>
    </Grid>
  );
}

export default SignIn;
