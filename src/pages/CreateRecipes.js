import { Container } from "@mui/material";
import CreateRecipeCard from "../components/CreateRecipeCard";

const CreateRecipe = () => {
  return (
    <Container
      sx={{
        width: 1000,
        mt: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CreateRecipeCard />
    </Container>
  );
};
export default CreateRecipe;
