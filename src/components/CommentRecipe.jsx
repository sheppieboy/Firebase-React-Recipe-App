import DeleteForever from "@mui/icons-material/DeleteForever";
import { TextField, Paper, Box, IconButton } from "@mui/material";
import {
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase-config";
import { v4 as uuidv4 } from "uuid";

const CommentRecipe = ({ id }) => {
  const [commentList, setCommentList] = useState([]);
  const [loggedInUser] = useAuthState(auth);
  const [comment, setComment] = useState("");
  const commentRef = doc(db, "recipes", id);

  useEffect(() => {
    const commentRef = doc(db, "recipes", id);
    onSnapshot(commentRef, (snapshot) => {
      setCommentList(snapshot.data().comments);
    });
  }, []);

  const handleChangeComment = (e) => {
    if (e.key === "Enter") {
      updateDoc(commentRef, {
        comments: arrayUnion({
          user: loggedInUser.uid,
          userName: loggedInUser.displayName,
          comment: comment,
          createdAt: new Date(),
          commentId: uuidv4(),
        }),
      }).then(() => {
        setComment("");
      });
    }
  };

  const handleDeleteComment = (comment) => {
    console.log(comment);
    updateDoc(commentRef, {
      comments: arrayRemove(comment),
    })
      .then((e) => {
        console.log(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Paper>
      {commentList !== null &&
        commentList.map(({ commentId, user, comment, userName, createdAt }) => (
          <Box key={commentId}>
            <Box>
              <TextField>
                sx={{ pr: 2 }}
                label="Created By:" multiline maxRows={5}
                InputLabelProps={{ shrink: true }}
                value={userName}
              </TextField>
            </Box>
            <Box>
              <TextField>
                sx={{ pr: 2 }}
                label="Commented:" multiline maxRows={5}
                InputLabelProps={{ shrink: true }}
                value={comment}
              </TextField>
            </Box>
            <Box>
              {user === loggedInUser.uid && (
                <IconButton>
                  <DeleteForever
                    onClick={() =>
                      handleDeleteComment({
                        commentId,
                        user,
                        comment,
                        userName,
                        createdAt,
                      })
                    }
                  />
                </IconButton>
              )}
            </Box>
          </Box>
        ))}

      {loggedInUser && (
        <Box sx={{ mt: 4, mr: 4, ml: 4 }}>
          <TextField
            label="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyUp={(e) => {
              handleChangeComment(e);
            }}
          />
        </Box>
      )}
    </Paper>
  );
};
export default CommentRecipe;
