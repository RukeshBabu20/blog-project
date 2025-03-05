import React from "react";
import { Skeleton, Box } from "@mui/material";

const Loader: React.FC = () => {
  return (
    <Box>
      <Skeleton variant="rectangular" width={345} height={200} />
      <Skeleton width="80%" />
      <Skeleton width="60%" />
    </Box>
  );
};

export default Loader;
