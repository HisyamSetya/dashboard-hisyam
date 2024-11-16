"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function getUserAccess(formData) {
  try {
    await signIn("credentials", formData, "/scanner");
    // return redirect("/scanner");
  } catch (error) {
    if (error) {
      return redirect("/login");
    }
    throw error;
  }
  //   console.log(formData);
}
