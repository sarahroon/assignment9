import { db } from "./connect";

export async function getUser(id) {
  if (!id) return null;

  const result = await db.query("SELECT * FROM user_account WHERE id = $1", [id]);
  return result.rows[0] || null;
}
