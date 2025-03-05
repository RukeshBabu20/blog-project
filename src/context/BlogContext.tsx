import React, { createContext, useState, ReactNode } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
}

export const BlogContext = createContext<BlogContextType | undefined>(
  undefined
);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const addBlog = (blog: Blog) => {
    setBlogs((prevBlogs) => [blog, ...prevBlogs]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
