import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface BlogFormProps {
  onGenerate: (topic: string) => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ onGenerate }) => {
  const [topic, setTopic] = useState("");

  const handleGenerate = () => {
    if (topic.trim() === "") return;
    onGenerate(topic);
    setTopic("");
  };

  return (
    <>
      <TextField
        id="standard-multiline-static"
        label="Your blog.."
        multiline
        rows={2}
        fullWidth
        variant="standard"
        onChange={(e) => setTopic(e.target.value)}
        value={topic}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerate}
        size="small"
        sx={{
          borderRadius: "2rem",
          color: "black",
          background:
            "linear-gradient(135deg,rgb(125, 180, 223),rgb(210, 184, 184),rgb(186, 173, 173))",
        }}
      >
        Post
      </Button>
    </>
  );
};

export default BlogForm;
