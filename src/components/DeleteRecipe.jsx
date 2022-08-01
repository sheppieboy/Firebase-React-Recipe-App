import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { deleteObject, ref } from "firebase/storage";

const DeleteRecipe = ({ recipe: { id, image } }) => {
  const deleteRecipe = async () => {
    try {
      console.log(image, id);
      await deleteDoc(doc(db, "recipes", id));
      const storageRef = ref(storage, image);
      await deleteObject(storageRef);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <IconButton>
      <DeleteForeverIcon onClick={deleteRecipe} />
    </IconButton>
  );
};

export default DeleteRecipe;
