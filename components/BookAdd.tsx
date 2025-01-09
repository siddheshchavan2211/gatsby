import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { ArrowDown01, Cross } from "lucide-react";

function BookAdd() {
  const [bookInput, setBookInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Don't proceed if empty
    if (!bookInput.trim() || !authorInput.trim()) return;

    // MARK: Data is here
    console.log(bookInput, authorInput);

    // Empty the input fields
    setBookInput("");
    setAuthorInput("");
  };

  return (
    <form
      className="w-80 mx-auto mt-10 flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Add a book"
        value={bookInput}
        onChange={(e) => setBookInput(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Add author info"
        value={authorInput}
        onChange={(e) => setAuthorInput(e.target.value)}
        required
      />
      <div className="flex gap-2">
        <Button variant="secondary" type="button">
          <Cross /> Sort
        </Button>
        <Button>
          <ArrowDown01 /> Add
        </Button>
      </div>
    </form>
  );
}

export default BookAdd;
