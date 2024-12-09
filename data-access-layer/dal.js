import pool from "@/utils/postgres";

async function getUserFromDb(email, password) {
  const table_name = "masteruser"; // name of table

  /* fetch all data from specified table */
  //   const client = await pool.connect();
  try {
    const res = await pool.query(`SELECT * FROM ${table_name} where email=$1 `, [email]);
    // console.log("🚀 ~ getUserFromDb ~ res:", res.rows);

    if (res.rows == "") {
      console.log("no data from DAL action");
      return null;
    }
    // console.log(res.rows[0].email);
    const result = res.rows[0];

    return result;
  } catch (error) {
    console.log(error);
  }
}

export { getUserFromDb };
