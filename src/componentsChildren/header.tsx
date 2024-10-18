import React, { useState, useEffect } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FullScreenDialog } from "@/components/ui/modal";

export function HeaderMenu() {
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null as File | null,
  });

  interface Post {
    id: number | string;
    title: string;
    content: string;
    imageUrl: string | null;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
    setFormData({ name: '', description: '', image: null });
    setImageUrl(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const cachedPosts = localStorage.getItem('posts');
    if (cachedPosts) {
      setPosts(JSON.parse(cachedPosts));
    }

    const cachedImage = localStorage.getItem('image');
    if (cachedImage) {
      setImageUrl(cachedImage);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    const updatedData = {
      ...formData,
      [name]: files ? files[0] : value,
    };

    setFormData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));

    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem('image', reader.result as string);
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSavePost = () => {
    const newPost: Post = {
      id: Date.now(),
      title: formData.name,
      content: formData.description,
      imageUrl: imageUrl,
    };

    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    setFormData({ name: '', description: '', image: null });
    setImageUrl(null);
    handleClose();
  };

  return (
      <>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Post</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <div id="openDialog" onClick={handleClickOpen}>
                  New Post <MenubarShortcut>P</MenubarShortcut>
                </div>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Home</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <div id="goHome" onClick={() => console.log('Home clicked')}>
                  Go to Home <MenubarShortcut>H</MenubarShortcut>
                </div>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>About</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Contact</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <FullScreenDialog
            open={open}
            handleClose={handleClose}
            formData={formData}
            handleChange={handleChange}
            handleSavePost={handleSavePost}
        />
      </>
  );
}
