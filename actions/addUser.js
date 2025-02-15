"use server";
import { z } from "zod";

export const addUser = async (formData) => {
  const addUserSchema = z.object({
    email: z
      .string()
      .email({ message: "Please enter valid email" })
      .max(30, { message: "Must be 30 or fewer characters long" })
      .trim(),
  });

  const data = {
    email: formData.get("email"),
  };
  //   const email = formData.get("email");
  //   console.log("🚀 ~ addUser ~ email:", email);
  const result = addUserSchema.safeParse(data);
  //   console.log("🚀 ~ addUser ~ result:", result);

  if (!result.success) {
    // console.log("🚀 ~ addUser ~ formData:", result.error.issues);
    console.log("🚀 ~ addUser ~ formData:", result.error.flatten().fieldErrors);
  }
};
