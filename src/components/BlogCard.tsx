// // src/components/BlogCard.tsx
// import React from "react";
// import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// interface BlogCardProps {
//   id: number;
//   title: string;
//   content: string;
//   author: string;
//   date: string;
// }

// const BlogCard: React.FC<BlogCardProps> = ({
//   id,
//   title,
//   content,
//   author,
//   date,
// }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/blog/${id}`);
//   };

//   return (
//     <Card sx={{ maxWidth: 345, cursor: "pointer" }} onClick={handleClick}>
//       <CardActionArea>
//         <CardContent>
//           <Typography variant="h6" gutterBottom>
//             {title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             {date} - {author}
//           </Typography>
//           <Typography variant="body1" sx={{ mt: 1 }}>
//             {content.substring(0, 100)}...
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// export default BlogCard;

import React from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";

interface BlogCardProps {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  author,
  date,
  onClick,
}) => {
  return (
    <Card sx={{ cursor: "pointer", backgroundColor: "lavender" }}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="body2" color="textSecondary">
            By {author} | {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
