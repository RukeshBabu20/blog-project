import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  TextField,
  Paper,
  IconButton,
} from "@mui/material";
import { Edit, Delete, Save, Cancel } from "@mui/icons-material";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const Home: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBlog, setEditedBlog] = useState<Blog | null>(null);

  const generateBlog = (topic: string) => {
    const newBlog: Blog = {
      id: blogs.length + 1,
      title: `AI-Generated Blog on ${topic}`,
      content: `This is a mock AI-generated blog post about ${topic}. The content would normally be generated using AI.`,
      author: "AI Writer",
      date: new Date().toLocaleDateString(),
    };
    setBlogs([newBlog, ...blogs]);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleBlogClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setEditedBlog(blog);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedBlog) {
      setBlogs(
        blogs.map((blog) => (blog.id === editedBlog.id ? editedBlog : blog))
      );
      setSelectedBlog(editedBlog);
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    setEditedBlog(selectedBlog);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    if (selectedBlog) {
      setBlogs(blogs.filter((blog) => blog.id !== selectedBlog.id));
      setSelectedBlog(null);
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container sx={{ maxHeight: "500px" }}>
      <Typography variant="h6" gutterBottom>
        AI-Powered Blog Generator
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
        <BlogForm onGenerate={generateBlog} />
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={2}
        mt={2}
      >
        <Box flex={2}>
          {blogs.length > 0 ? (
            <>
              <BlogList blogs={filteredBlogs} onBlogClick={handleBlogClick} />
            </>
          ) : (
            <>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                CREATE A BLOG WITH THE HELP OF AI . . !
              </Typography>
            </>
          )}
        </Box>
        <Divider orientation="vertical" flexItem />

        <Box flex={1}>
          {selectedBlog ? (
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                height: "400px",
                position: "relative",
                backgroundColor: "lavender",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                {isEditing ? (
                  <TextField
                    variant="outlined"
                    value={editedBlog?.title || ""}
                    onChange={(e) =>
                      setEditedBlog((prev) => ({
                        ...prev!,
                        title: e.target.value,
                      }))
                    }
                    fullWidth
                  />
                ) : (
                  <Typography variant="h6">{selectedBlog.title}</Typography>
                )}
                <Box>
                  {isEditing ? (
                    <>
                      <IconButton onClick={handleSaveClick} color="success">
                        <Save />
                      </IconButton>
                      <IconButton onClick={handleCancelClick} color="error">
                        <Cancel />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <IconButton onClick={handleEditClick} color="primary">
                        <Edit />
                      </IconButton>
                      <IconButton onClick={handleDeleteClick} color="error">
                        <Delete />
                      </IconButton>
                    </>
                  )}
                </Box>
              </Box>

              <Typography variant="subtitle2" color="textSecondary">
                By {selectedBlog.author} | {selectedBlog.date}
              </Typography>
              <Divider sx={{ my: 1 }} />

              {isEditing ? (
                <TextField
                  variant="outlined"
                  value={editedBlog?.content || ""}
                  onChange={(e) =>
                    setEditedBlog((prev) => ({
                      ...prev!,
                      content: e.target.value,
                    }))
                  }
                  multiline
                  fullWidth
                  sx={{ mt: 1 }}
                />
              ) : (
                <Typography>{selectedBlog.content}</Typography>
              )}
            </Paper>
          ) : (
            // <Paper elevation={2} sx={{ height: "350px", padding: "10px" }} />
            <Paper
              elevation={2}
              sx={{
                height: "400px",
                padding: "10px",
                backgroundImage: "url('public/view.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></Paper>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
