"use client";
import BookAdd from "@/components/BookAdd";
import BookList from "@/components/BookList";
import Header from "@/components/Header";

function Page() {
  return (
    <main>
      <Header />
      <BookAdd />
      <BookList />
    </main>
  );
}

export default Page;
