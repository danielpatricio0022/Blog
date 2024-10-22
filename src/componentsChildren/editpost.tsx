import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

interface Post {
  id: number | string;
  title: string;
  content: string;
  imageUrl: string | null;
}

export function Edit() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [updatedContent, setUpdatedContent] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const cachedPosts = localStorage.getItem("posts");
    if (cachedPosts) {
      const posts = JSON.parse(cachedPosts) as Post[];
      const selectedPost = posts.find((p) => p.id.toString() === postId);
      if (selectedPost) {
        setPost(selectedPost);
        setUpdatedContent(selectedPost.content);
      }
    }
  }, [postId]);

  const handleSave = () => {
    if (post) {
      const cachedPosts = localStorage.getItem("posts");
      if (cachedPosts) {
        const posts = JSON.parse(cachedPosts) as Post[];
        const updatedPosts = posts.map((p) =>
          p.id === post.id ? { ...p, content: updatedContent } : p
        );
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
        setMessage("Post updated successfully!");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    }
  };

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="p-5">
      <h1>Edit Post: {post.title}</h1>
      <div>
        <h3>Description:</h3>
        <textarea
          value={updatedContent} // Use textarea to avoid contentEditable issues
          onChange={(e) => setUpdatedContent(e.target.value)}
          style={{
            width: "100%",
            minHeight: "150px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        />
      </div>
      <Button
        sx={{
          width: 150,
          color: "success.main",
          mt: 2,
        }}
        onClick={handleSave}
      >
        Save
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
}
