import { TextField, Paper, Box, Button } from "@mui/material";

const CreateRecipeCard = () => {
  return (
    <Paper elevation={12}>
      <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
        <TextField id="title" label="Add Recipe Title" value={"dbsbd"} />
      </Box>
      <Button
        sx={{ mt: 4, ml: 4, mr: 4 }}
        variant="contained"
        component="label"
      >
        Upload Image
        <input type="file" accept="image/*" name="image" hidden />
      </Button>
      <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
        <img
          src="https://media.istockphoto.com/photos/cook-taking-ready-chicken-from-the-oven-picture-id1036815628?k=20&m=1036815628&s=612x612&w=0&h=RY171tLJa7Psd2Abu_9FfCX3pmEaTcNSCl_vkaHZh2w="
          alt="Inputted Recipe"
          className=""
        />
      </Box>
      <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
        <TextField
          id="description"
          label="Add Recipe Description"
          value={"sndknsdk"}
          multiline
          maxRows={4}
        />
      </Box>
      <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
        <TextField
          id="ingredients"
          label="Add a List of Ingredients"
          value={"sndknsdk"}
          multiline
        />
      </Box>
      <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
        <TextField
          id="instructions"
          label="Give Us Some Instructions on How to Make Your Yummy Recipe"
          value={"sndknsdk"}
          multiline
        />
      </Box>
      <Box sx={{ m: 4 }}>
        <Button variant="contained">Upload Your Delicious Recipe</Button>
      </Box>
    </Paper>
  );
};

export default CreateRecipeCard;
