"use client";
import getUserAccess from "@/actions/getUserAccess";

export default function SignIn() {
  return (
    <form action={getUserAccess}>
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  );
}
