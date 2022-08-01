import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { deleteObject, ref } from "firebase/storage";

const DeleteRecipe = ({ id, image }) => {
  const deleteRecipe = async () => {
    await deleteDoc(doc(db, "recipes", id));
    const storageRef = ref(storage, image);
    await deleteObject(storageRef);
  };
  return (
    <IconButton>
      <DeleteForeverIcon onClick={deleteRecipe} />
    </IconButton>
  );
};

export default DeleteRecipe;
