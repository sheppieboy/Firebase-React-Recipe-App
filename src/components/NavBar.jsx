import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";

import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

import { Link } from "react-router-dom";

import { RestaurantMenuRounded } from "@mui/icons-material";

export default function ButtonAppBar() {
  const [user] = useAuthState(auth);

  const signUserOut = () => {
    signOut(auth);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {/*HOME BUTTON/LOGO */}

          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <RestaurantMenuRounded />

                  <Typography variant="h6" sx={{ ml: 2 }}>
                    YUMMY TUMMY
                  </Typography>
                </IconButton>
              </Link>
            </Grid>
            {!user ? (
              <Box
                sx={{
                  mt: 2.5,
                }}
              >
                <Link to="signin" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ ml: 5, mr: 5, display: "center", mt: 1 }}
                  >
                    Sign In
                  </Button>
                </Link>
              </Box>
            ) : (
              <>
                <Grid item xs={4}>
                  {/*NAVIGATION BUTTONS */}
                  <Link to="/createrecipe" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ ml: 5, mr: 5, display: "center", mt: 1 }}
                    >
                      Create Recipe
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={4}>
                  <Link to="/signin" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ mt: 1 }}
                      onClick={signUserOut}
                    >
                      Sign Out
                    </Button>
                  </Link>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
