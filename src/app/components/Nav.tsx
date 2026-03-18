import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link href="/">Home</Link>
      {" | "}
      <Link href="/sign-in">Sign In</Link>
      {" | "}
      <Link href="/sign-up">Sign Up</Link>
    </nav>
  );
}
