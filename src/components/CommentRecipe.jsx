import { TextField } from "@mui/material";
import { onSnapshot, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";

const CommentRecipe = ({ id }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const commentRef = doc(db, "recipes", id);
    onSnapshot(commentRef, (snapshot) => {
      setCommentList(snapshot.data().comments);
    });
  }, []);
};
