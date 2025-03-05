import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const mockBlogs: Blog[] = [
  {
    id: 1,
    title: "Sample Blog Post",
    content:
      "This is a detailed view of a sample blog post generated for testing purposes.",
    author: "AI Writer",
    date: "03/03/2025",
  },
];

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = mockBlogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <Typography variant="h6">Blog not found.</Typography>;
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          {blog.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          By {blog.author} on {blog.date}
        </Typography>
        <Box mt={2}>
          <Typography variant="body1">{blog.content}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogDetail;
