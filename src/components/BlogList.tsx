// import React from "react";
// import { Stack, Box } from "@mui/material";
// import BlogCard from "./BlogCard";

// interface Blog {
//   id: number;
//   title: string;
//   content: string;
//   author: string;
//   date: string;
// }

// interface BlogListProps {
//   blogs: Blog[];
// }

// const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
//   return (
//     <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center">
//       {blogs.map((blog) => (
//         <Box key={blog.id} width={{ xs: "100%", sm: "48%", md: "23%" }}>
//           <BlogCard {...blog} />
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// export default BlogList;

import React from "react";
import { Stack, Box } from "@mui/material";
import BlogCard from "./BlogCard";

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

interface BlogListProps {
  blogs: Blog[];
  onBlogClick: (blog: Blog) => void;
}

const BlogList: React.FC<BlogListProps> = ({ blogs, onBlogClick }) => {
  return (
    <Box
      sx={{
        maxHeight: "500px",
        overflowY: "auto",
        p: 2,
      }}
    >
      <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center">
        {blogs.map((blog) => (
          <Box key={blog.id} width={{ xs: "100%", sm: "48%", md: "23%" }}>
            <BlogCard {...blog} onClick={() => onBlogClick(blog)} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default BlogList;
