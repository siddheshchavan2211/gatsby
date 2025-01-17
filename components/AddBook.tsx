"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(title, author);

    // Empty the input fields
    setTitle("");
    setAuthor("");
  };

  return (
    <form className="flex gap-1 flex-col" onSubmit={handleSubmit}>
      <Input
        placeholder="Book title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <Input
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        required
      />
      <div className="flex gap-1">
        <Button variant="outline">Sort</Button>
        <Button>Add</Button>
      </div>
    </form>
  );
}

export default AddBook;
