// app/books/page.js
import { supabase } from "../../lib/supabase";

export default async function BooksPage() {
  // Fetch books from Supabase
  const { data: books, error } = await supabase.from("books").select("*");

  if (error) {
    console.error("Supabase error:", error);
    return <div>Failed to load books</div>;
  }

  // Return JSX with the list of books
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Books List</h1>
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        <ul className="space-y-2">
          {books.map((book) => (
            <li key={book.id} className="p-2 border rounded">
              <strong>{book.title}</strong> by {book.author} (
              {book.published_year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
