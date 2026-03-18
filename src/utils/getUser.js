// src/utils/getUser.js
import { db } from "./connect.js";

export async function getUser() {
  // Simulate a logged-in user
  const userId = 1; // Replace with real auth logic if needed

  const result = await db.query("SELECT * FROM user_account WHERE id = $1", [userId]);
  return result.rows[0] || null;
}
