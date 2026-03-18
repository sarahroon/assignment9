// src/app/users/[id]/page.js
import { db } from "@/utils/connect.js";
import { getUser } from "@/utils/getUser.js";
import Link from "next/link";

export default async function UserPage({ params }) {
  const user = await getUser();

  if (!user) {
    return <p>Please log in</p>;
  }

  const res = await db.query("SELECT * FROM user_account WHERE id = $1", [params.id]);
  const viewedUser = res.rows[0];

  if (!viewedUser) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h1>{viewedUser.name}</h1>
      <p>{viewedUser.email}</p>
      <Link href="/dashboard">Back to Dashboard</Link>
    </div>
  );
}
