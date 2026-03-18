import express from 'express';
const { createClient } from '@supabase/supabase-js';

const app = express();
app.use(express.json());

const supabaseUrl = "https://dxcvywssrrqznatmrxph.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4Y3Z5d3NzcnJxem5hdG1yeHBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MTA1NzUsImV4cCI6MjA4Njk4NjU3NX0.s-ycfwF5HaRVhaAfRIArJuibNSmNYhgVJmckUbxEv5I";
const supabase = createClient(supabaseUrl, supabaseKey);

app.post("/user", async (req, res) => {
  const { name, bio } = req.body;
  const { data, error } = await supabase.from("users").insert([{ name, bio }]);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default function Home() {
  return <div>Hello</div>;
}
