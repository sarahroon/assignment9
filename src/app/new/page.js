// src/app/new/page.js
import { db } from "@/utils/connect.js";
import { getUser } from "@/utils/getUser.js";
import { redirect } from "next/navigation";

export default async function NewBookPage() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Add a New Book</h1>
      {/* Form goes here */}
    </div>
  );
}
