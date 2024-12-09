"use server";
import bcrypt from "bcrypt";
import { signIn } from "@/auth";

export default async function getUserAccess(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    // return redirect("/scanner");
    return response;
  } catch (error) {
    // throw new Error(error);
    // console.log("No User Access");
    throw error;
    // return null;
  }
  //   console.log(formData);
}
