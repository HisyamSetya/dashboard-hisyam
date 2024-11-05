"use server";
import pool from "@/utils/postgres";
import * as XLSX from "xlsx";

const exportFile = async () => {
  const table_name = "masteruser"; // name of table

  /* fetch all data from specified table */
  const client = await pool.connect();

  const res = await client.query(`SELECT * FROM ${table_name}`);
  client.release();
  const worksheet = XLSX.utils.json_to_sheet(res.rows);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "MySheet");

  const buf = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

  // return new Response(buf, {
  //   status: 200,
  //   headers: {
  //     "Content-Disposition": `attachment; filename="${table_name}.xlsx"`,
  //     "Content-Type": "application/vnd.ms-excel",
  //   },
  // });
};

export default exportFile;
