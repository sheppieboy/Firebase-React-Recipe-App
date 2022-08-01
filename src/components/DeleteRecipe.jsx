import { IconButton } from "@mui/material";
import { DeleteForeverRoundedIcon } from "@mui/icons-material";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { deleteObject, ref } from "firebase/storage";

const DeleteRecipe = ({ recipe: { id, image } }) => {
  const deleteRecipe = async () => {
    try {
      await deleteDoc(doc(db, "recipes", id));
      const storageRef = ref(storage, image);
      await deleteObject(storageRef);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <IconButton>
      <DeleteForeverRoundedIcon onClick={deleteRecipe} />
    </IconButton>
  );
};

export default DeleteRecipe;
