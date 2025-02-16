"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useActionState } from "react";
import { useForm, Controller } from "react-hook-form";
import { addUser } from "@/actions/addUser";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AddUser = () => {
  const [state, action, isPending] = useActionState(addUser, {});
  const isSuccess = {
    email: state.error?.email,
  };

  const errorFormatted = isSuccess.email;
  // console.log("🚀 ~ AddUser ~ errorFormatted:", errorFormatted);

  const listItem = errorFormatted?.map((e) => {
    return <li className="text-red-500 text-xs">{e}</li>;

    // console.log(e);
  });

  return (
    <div className="flex justify-center ">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Create User Form</CardTitle>
          <CardDescription>Please Input Valid Data</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action}>
            {/* <Input type="text" id="name" name="name" placeholder="Nama" className="w-52 mr-5" /> */}

            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              className={isSuccess.email && " border-red-400"}
            />
            {isSuccess && <ol className="mt-3">{listItem}</ol>}
            <Button type="submit" disable={isPending} className="mt-5">
              {isPending ? "Loading..." : "Add"}
            </Button>
          </form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default AddUser;
