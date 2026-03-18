// src/app/you/page.js
import { db } from "@/utils/connect.js";
import { getUser } from "@/utils/getUser.js";
import Link from "next/link";

export default async function YouPage() {
  const user = await getUser();

  if (!user) {
    return <p>Please log in</p>;
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <Link href="/dashboard">Back to Dashboard</Link>
    </div>
  );
}
