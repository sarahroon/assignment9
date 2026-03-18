// src/utils/getUser.js
import { db } from "./connect.js";

/**
 * Fetches the currently logged-in user.
 * 
 * For now, this is a placeholder that returns the first user in the database.
 * Replace this logic with your authentication/session handling as needed.
 */
export async function getUser() {
  try {
    const result = await db.query("SELECT * FROM user_account LIMIT 1");
    const user = result.rows[0] || null;
    return user;
  } catch (err) {
    console.error("Error fetching user:", err);
    return null;
  }
}
