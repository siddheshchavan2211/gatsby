import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import {
  BadgeMinus,
  CrossIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";

interface SingleBookProps {
  book: Book;
}

function SingleBook({ book }: SingleBookProps) {
  return (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>{book.author}</CardTitle>
        <CardDescription>Priority: {book.likes}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl">{book.title}</p>
      </CardContent>
      <CardFooter className="flex gap-1">
        <Button variant="outline">
          <ThumbsUpIcon />
        </Button>
        <Button variant="outline">
          <ThumbsDownIcon />
        </Button>
        <Button variant="destructive">
          <BadgeMinus />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SingleBook;
