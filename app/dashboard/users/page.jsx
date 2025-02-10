import Link from "next/link";
import upload from "@/actions/upload";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { data } from "@/data-access-layer/MOCK_DATA";

const masterProduct = () => {
  return (
    <div>
      <form action={upload} className="flex mb-5">
        <Input type="file" name="file" className="w-52 mr-5" />
        <Button type="submit">Upload</Button>
      </form>
      <Link href="/api/post" className={buttonVariants({ variant: "default" })}>
        Download User
      </Link>
      {/* <Link href="/api/post">Export</Link> */}
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default masterProduct;
