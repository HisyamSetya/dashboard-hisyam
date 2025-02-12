import Link from "next/link";
import upload from "@/actions/upload";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { data } from "@/data-access-layer/MOCK_DATA";
import { getUserDetail } from "@/data-access-layer/dal";

const masterUser = async () => {
  const dataUserDetail = await getUserDetail();
  // console.log("🚀 ~ masterUser ~ data1:", dataUserDetail);

  return (
    <>
      <div className="flex">
        <form action={upload} className="flex mb-5">
          <Input type="file" name="file" className="w-52 mr-5" />
          <Button type="submit">Upload</Button>
        </form>
        <Link href="/api/post" className={buttonVariants({ variant: "default", size: "ml3" })}>
          Download User
        </Link>
      </div>
      <Link href="/dashboard/users/add" className={buttonVariants({ variant: "default" })}>
        Add User
      </Link>
      {/* <Link href="/api/post">Export</Link> */}
      <DataTable columns={columns} data={dataUserDetail} />
    </>
  );
};

export default masterUser;
