const crypto = require("crypto");
const { getSecretFromDB } = require("./mockDb");

const generateToken = async (email) => {
  try {
    const secret = await getSecretFromDB();

    return crypto
      .createHmac("sha256", secret)
      .update(email)
      .digest("base64");
  } catch (error) {
    // FIXED: throw error
    console.error("Error in generating token:", error);
    throw new Error("Error in generating token");
  }
};

module.exports = { generateToken };
