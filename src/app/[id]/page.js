// src/app/[id]/page.js
import { db } from "@/utils/connect.js";
import { getUser } from "@/utils/getUser.js";
import { redirect } from "next/navigation";

export default async function SingleBookPage({ params }) {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const bookId = params.id;
  const res = await db.query("SELECT * FROM books WHERE id = $1", [bookId]);
  const book = res.rows[0];

  if (!book) {
    redirect("/not-found");
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </div>
  );
}
