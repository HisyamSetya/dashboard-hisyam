"use server";
import { z } from "zod";

export const addUser = async (prevState, formData) => {
  const addUserSchema = z.object({
    email: z
      .string()
      .email({ message: "Please enter valid email" })
      .max(50, { message: "Must be 50 or fewer characters long" })
      .trim(),
  });

  const data = {
    email: formData.get("email"),
  };
  //   const email = formData.get("email");
  // console.log("🚀 ~ addUser ~ email:", email);
  const result = addUserSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: "Please enter valid email",
      error: result.error.flatten().fieldErrors,
    };
  }

  if (result.success) return { success: true, message: "Success insert data" };
};
