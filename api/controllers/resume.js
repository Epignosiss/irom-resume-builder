const { db } = require("../database");

// Create
exports.createResume = async (req, res, next) => {
  const { fullname, email, designation, address, phone, skills, experience, education } = req.body;

  if (!fullname || !email || !designation || !address || !phone || !skills || !experience || !education) {
    return res.status(404).json("All fields are required Love !!");
  }

  const SqlCreate =
    "INSERT INTO userResume(fullname, email, designation, address, phone, skills, experience, education)VALUES($1, $2, $3, $4, $5, $6, $7, $8)";
  try {
    const resume = await db.query(SqlCreate, [
      fullname,
      email,
      designation,
      address,
      phone,
      skills,
      { experience },
      { education },
    ]);
    res.status(200).json("Users Resume Saved Successfully To DB");
  } catch (error) {
    next(error);
  }
};

// Get convo
// exports.getConvo = async (req, res, next) => {
//   const { vendorid, customerMail } = req.body;

//   try {
//     const SqlSelect = "SELECT * FROM conversationTable WHERE vendorId = $1 or customerMail = $2";
//     const response = await db.query(SqlSelect, [vendorid, customerMail]);

//     res.json({ status: "success", result: response.rows });
//   } catch (error) {
//     return next(error);
//   }
// };
