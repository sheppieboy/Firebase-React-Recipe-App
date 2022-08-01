import { Container, Typography, Box, Paper, TextField } from "@mui/material";

const ViewRecipe = () => {
  return (
    <Container>
      <Paper elevation={12}>
        <Box sx={{ mt: 4, ml: 4, mr: 4 }}>
          <Typography variant="h6">Recipe Title</Typography>
        </Box>
        <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
          <TextField name="title" label="Add Recipe Title" value={"title"} />
        </Box>
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
            label="Recipe Description"
            value={"description"}
            multiline
            maxRows={20}
          />
        </Box>
        <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
          <TextField
            name="ingredients"
            label="Ingredients"
            value={"ingredients"}
            multiline
            maxRows={20}
          />
        </Box>
        <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
          <TextField
            name="instructions"
            label="Recipe Instructions"
            value={"Instructions"}
            multiline
            maxRows={20}
          />
        </Box>
      </Paper>
    </Container>
  );
};
export default ViewRecipe;
