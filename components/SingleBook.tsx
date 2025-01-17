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

function SingleBook() {
  return (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>F. Scott Fitzgerald</CardTitle>
        <CardDescription>Priority: 4</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl">The Great Gatsby</p>
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
