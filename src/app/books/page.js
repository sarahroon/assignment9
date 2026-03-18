// app/books/page.js
import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY, // Use service role key for server-side fetch
);

export default async function BooksPage() {
  // Fetch books from Supabase
  const { data: books, error } = await supabase.from("books").select("*");

  if (error) {
    console.error("Supabase error:", error);
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Books List</h1>
        <p className="text-red-600">Failed to load books: {error.message}</p>
      </div>
    );
  }

  const booksList = Array.isArray(books) ? books : [];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Books List</h1>

      {booksList.length === 0 ? (
        <p>No books found</p>
      ) : (
        <ul className="space-y-2">
          {booksList.map((book) => (
            <li
              key={book.id}
              className="p-4 border rounded hover:bg-gray-50 transition"
            >
              <strong>{book.title}</strong> by {book.author} (
              {book.published_year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
