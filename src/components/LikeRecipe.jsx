import { ThumbUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase-config";

const LikeRecipe = ({ id, likes, likesCount }) => {
  const [user] = useAuthState(auth);

  const likesRef = doc(db, "recipes", id);

  const handleLike = () => {
    //remove the like from the likes array in the db
    if (likes?.includes(user.uid)) {
      const count = likes.length - 1;
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
        likesCount: count,
      });
    } //add a like to the likes array in the db
    else {
      const count = likes.length + 1;
      updateDoc(likesRef, {
        likes: arrayUnion(user.uid),
        likesCount: count,
      }).catch((err) => {
        console.error(err);
      });
    }
  };
  return (
    <IconButton>
      <ThumbUp
        sx={{ color: likes?.includes(user.uid) ? "blue" : null }}
        onClick={handleLike}
      />
    </IconButton>
  );
};

export default LikeRecipe;
