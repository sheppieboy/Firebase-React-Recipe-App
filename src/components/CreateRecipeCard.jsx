import { TextField, Paper, Box, Button, Typography, Grid } from "@mui/material";
import { addDoc, Timestamp, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { storage, db, auth } from "../firebase-config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
const CreateRecipeCard = () => {
  const [imageUploadStatus, setImageUploadStatus] =
    useState("No Image Uploaded");

  const [user] = useAuthState(auth);
  const [recipeData, setRecipeData] = useState({
    title: "",
    image: "",
    description: "",
    ingredients: "",
    instructions: "",
    createdAt: Timestamp.now().toDate(),
  });

  let navigate = useNavigate();
  //check that you can't navigate to this page unless you are signed in
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //   }
  // }, []);
  const handleImageChange = (e) => {
    setRecipeData({ ...recipeData, image: e.target.files[0] });
    setImageUploadStatus("Image Uploaded");
  };

  const handleChange = (e) => {
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };

  const handleCreateRecipe = () => {
    //add some checks to make sure fields are filled out
    if (
      !recipeData.title ||
      !recipeData.description ||
      !recipeData.image ||
      !recipeData.ingredients ||
      !recipeData.instructions
    ) {
      alert(
        "Please fill in all the fields to ensure Yummy Tummy has great recipes!"
      );
      return;
    }

    const imageFolderPath = `/images/${Date.now()}${recipeData.image.name}`;
    const storageRef = ref(storage, imageFolderPath);
    const storeImage = uploadBytesResumable(storageRef, recipeData.image); //returns an Upload task
    storeImage.on(
      "state_changed",
      (snapshot) => {
        getDownloadURL(storeImage.snapshot.ref).then((url) => {
          const recipesRef = collection(db, "recipes");
          addDoc(recipesRef, {
            title: recipeData.title,
            image: url,
            createdAt: Timestamp.now().toDate(),
            userName: user.displayName,
            userId: user.uid,
            description: recipeData.description,
            ingredients: recipeData.ingredients,
            instructions: recipeData.instructions,
            likes: [],
            likesCount: 0,
            comments: [],
            commentCount: 0,
          });
          navigate("/");
        });
      },
      (err) => {
        console.error(err);
      }
    );
  };
  return (
    <Paper elevation={12}>
      <Box sx={{ mt: 4, ml: 4, mr: 4 }}>
        <Typography variant="h6"> Create a Delicious Recipe</Typography>
      </Box>
      <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
        <TextField
          name="title"
          label="Add Recipe Title"
          value={recipeData.title}
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <Grid container>
        <Grid item>
          <Button
            sx={{ mt: 4, ml: 4, mr: 4 }}
            variant="contained"
            component="label"
          >
            Upload Image
            <input
              type="file"
              accept="image/*"
              name="image"
              hidden
              onChange={(e) => handleImageChange(e)}
            />
          </Button>
        </Grid>
        <Grid item>
          <Typography sx={{ mt: 5, ml: 4, mr: 4 }}>
            {imageUploadStatus} : {recipeData.image.name}
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
        <img
          src="https://media.istockphoto.com/photos/cook-taking-ready-chicken-from-the-oven-picture-id1036815628?k=20&m=1036815628&s=612x612&w=0&h=RY171tLJa7Psd2Abu_9FfCX3pmEaTcNSCl_vkaHZh2w="
          alt="Inputted Recipe"
          className=""
        />
      </Box>
      <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
        <TextField
          name="description"
          label="Add Recipe Description"
          value={recipeData.description}
          multiline
          fullWidth
          maxRows={20}
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
        <TextField
          name="ingredients"
          label="Add a List of Ingredients"
          value={recipeData.ingredients}
          multiline
          maxRows={20}
          fullWidth
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
        <TextField
          name="instructions"
          label="Add Instructions"
          value={recipeData.instructions}
          multiline
          maxRows={20}
          onChange={(e) => handleChange(e)}
          fullWidth
        />
      </Box>
      <Box sx={{ m: 4 }}>
        <Button variant="contained" onClick={handleCreateRecipe}>
          Upload Your Delicious Recipe
        </Button>
      </Box>
    </Paper>
  );
};

export default CreateRecipeCard;
