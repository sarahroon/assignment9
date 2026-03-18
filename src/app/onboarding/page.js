// src/app/onboarding/page.js
import { db } from "@/utils/connect.js";
import { redirect } from "next/navigation";

export default function OnboardingPage() {
  async function handleSubmitNewUser(formData) {
    await db.query(
      "INSERT INTO user_account (name, email) VALUES ($1, $2)",
      [formData.get("name"), formData.get("email")]
    );
    redirect("/dashboard");
  }

  return (
    <form onSubmit={handleSubmitNewUser}>
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}
