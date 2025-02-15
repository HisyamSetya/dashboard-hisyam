"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { addUser } from "@/actions/addUser";

const AddUser = () => {
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     name: "",
  //     select: {},
  //   },
  // });

  // const handleSubmit = (data) => {
  //   console.log("🚀 ~ AddUser ~ data:", data);
  // };

  return (
    <div>
      <h2>Create User Form</h2>
      <form action={addUser}>
        {/* <Label htmlFor="name">Name</Label>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input {...field} id="name" placeholder="Nama" />}
        />
        {errors.name && <span>This field is required</span>} */}
        {/* <Input type="text" id="name" name="name" placeholder="Nama" className="w-52 mr-5" /> */}
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          minlength="8"
          maxlength="30"
          required
          className="w-52 mr-5"
        />
        {/* <Label htmlFor="role">Role</Label>
        <Input type="text" id="role" name="role" placeholder="Role" className="w-52 mr-5" /> */}
        <Button type="submit">Add</Button>
      </form>

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}

      {/* test react form */}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />

        <input {...register("exampleRequired", { required: true, minLength: 2 })} />

        {errors.exampleRequired && <span>This field is required</span>}

        {console.log("🚀 ~ AddUser ~ errors.exampleRequired:", errors.exampleRequired)}

        <input type="submit" />
      </form> */}
    </div>
  );
};

export default AddUser;
