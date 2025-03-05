export const generateMockBlog = (topic: string) => {
  return {
    id: Date.now(),
    title: `AI-Generated Blog on ${topic}`,
    content: `This is a mock AI-generated blog post about ${topic}. The content would normally be generated using AI APIs.`,
    author: "AI Writer",
    date: new Date().toLocaleDateString(),
  };
};
