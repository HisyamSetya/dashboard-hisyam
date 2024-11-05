"use server";
import date from "date-and-time";
import * as XLSX from "xlsx";
import format from "pg-format";
import pool from "@/utils/postgres";

const upload = async (FormData) => {
  const getFile = FormData.get("file");
  const now = new Date();
  const getDate = date.format(now, "YYYY-MM-DD HH:mm:ss");

  if (getFile.size == 0) {
    console.log({ error: "no file uploaded" });
  }

  const bytes = await getFile.arrayBuffer();

  const workBook = XLSX.read(bytes);
  const workSheet = workBook.Sheets[workBook.SheetNames[0]];
  const raw_data = XLSX.utils.sheet_to_json(workSheet);

  const table_name = "masteruser"; // name of table

  /* loop through the data rows */
  for (let row of raw_data) {
    /* generate format helper strings */
    const ent = Object.entries(row);
    const addDate = [...ent, ["createddate", getDate]];

    const Istr = Array.from({ length: addDate.length }, () => "%I").join(", ");
    const Lstr = Array.from({ length: addDate.length }, () => "%L").join(", ");

    /* generate INSERT statement */
    let query = format.withArray(`INSERT INTO %I (${Istr}) VALUES(${Lstr})`, [
      table_name,
      ...addDate.map((x) => x[0]),
      ...addDate.map((x) => x[1]),
    ]);

    /* execute INSERT statement */
    const client = await pool.connect();
    await client.query(query);
    client.release();

    // console.log(insert);
    // console.log(Lstr);
  }
};
export default upload;
