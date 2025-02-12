import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const AddUser = () => {
  return (
    <div>
      <h2>Create User Form</h2>
      <form action="">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder="Nama" className="w-52 mr-5" />
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Email" className="w-52 mr-5" />
        <Label htmlFor="role">Role</Label>
        <Input type="text" id="role" name="role" placeholder="Role" className="w-52 mr-5" />
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default AddUser;
