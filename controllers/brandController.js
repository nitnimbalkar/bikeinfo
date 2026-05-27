const bikeModel = require("../models/brandModel");
const isLoggedIn = require("../middlewares/isLoggedIn");

module.exports.addbrand = async (req, res) => {
  try {
    const { brandName, brandOrigin } = req.body;

    if (!brandName || !brandOrigin) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });
    }

    const file = req.file;

    let brandImage = "";

    if (file) {
      brandImage = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
    }

    const addbrand = await bikeModel.create({
      brandName,
      brandOrigin,
      brandImage
    });

    return res.status(201).json({
      success: true,
      message: "Brand Added Successfully",
      brand: addbrand
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};