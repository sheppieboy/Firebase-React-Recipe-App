import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { RestaurantMenuRounded } from "@mui/icons-material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {/*HOME BUTTON/LOGO */}
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

          {/*NAVIGATION BUTTONS */}

          <Button
            variant="contained"
            color="secondary"
            sx={{ ml: 5, mr: 5, display: "flex", justifyContent: "flex-end" }}
          >
            Profile
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ ml: 5, mr: 5, display: "center" }}
          >
            Create Recipe
          </Button>

          <Button variant="contained" color="secondary" sx={{ ml: 5, mr: 5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
