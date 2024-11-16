import pool from "@/utils/postgres";

async function getUserFromDb(email, password) {
  const table_name = "masteruser"; // name of table

  /* fetch all data from specified table */
  //   const client = await pool.connect();
  try {
    const res = await pool.query(`SELECT * FROM ${table_name} where email=$1 and password=$2`, [
      email,
      password,
    ]);

    // console.log(res.rows);

    if (res.rows == "") {
      console.log("no data");
    } else {
      return res.rows;
    }

    return false;
    // { message: "NO DATA" };

    // console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export { getUserFromDb };
