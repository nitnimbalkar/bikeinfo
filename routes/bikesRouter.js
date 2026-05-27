const express=require('express');
const router = express.Router();
const bikeModel=require("../models/bikeModel");
const { addbike } = require('../controllers/bikeController');


router.get("/",async(req,res)=>{
    res.render("indexCopy.ejs");
})
router.get("/userprofile",(req,res)=>{
    res.render("userProfileTest.ejs");
})

router.get("/bikeview",(req,res)=>{
    res.render("bikeview.ejs");
})


router.get("/addbike",async(req,res)=>{
    res.render("addbike.ejs");
})

router.get("/newscopy",(req,res)=>{
    res.render("newscopy.ejs");
})


router.get("/review",async(req,res)=>{
    res.render("userReview.ejs");
})
router.get("/news",async(req,res)=>{
    res.render("news.ejs");
})

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Create a new bike
 *     description: Adds a new bike with detailed specifications to the database
 *     tags:
 *       - Bike
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - brand
 *               - name
 *               - engineCapacity
 *             properties:
 *               brand:
 *                 type: string
 *                 example: Yamaha
 *               name:
 *                 type: string
 *                 example: R15 V4
 *               engineCapacity:
 *                 type: number
 *                 example: 155
 *               transmission:
 *                 type: string
 *                 example: Manual
 *               isAvailableIndia:
 *                 type: boolean
 *                 example: true
 *               bProfileImg:
 *                 type: string
 *                 example: https://example.com/profile.jpg
 *               bikeImgs:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["https://example.com/img1.jpg", "https://example.com/img2.jpg"]
 *               bReview:
 *                 type: string
 *                 example: Great performance bike
 *               mileage:
 *                 type: number
 *                 example: 45
 *               weight:
 *                 type: number
 *                 example: 142
 *               fuelTankCapacity:
 *                 type: number
 *                 example: 11
 *               seatHeight:
 *                 type: number
 *                 example: 815
 *               maxPower:
 *                 type: string
 *                 example: 18.4 PS
 *               maxTorque:
 *                 type: string
 *                 example: 14.2 Nm
 *               noOfCylinder:
 *                 type: number
 *                 example: 1
 *               compressRatio:
 *                 type: string
 *                 example: 11.6:1
 *               emissionStandard:
 *                 type: string
 *                 example: BS6
 *               fuelType:
 *                 type: string
 *                 example: Petrol
 *               qShifter:
 *                 type: boolean
 *                 example: true
 *               mConnect:
 *                 type: boolean
 *                 example: true
 *               gps:
 *                 type: boolean
 *                 example: false
 *               tracControl:
 *                 type: boolean
 *                 example: true
 *               cControl:
 *                 type: boolean
 *                 example: false
 *               serCost:
 *                 type: number
 *                 example: 3000
 *               fService:
 *                 type: number
 *                 example: 500
 *               sService:
 *                 type: number
 *                 example: 3000
 *               tService:
 *                 type: number
 *                 example: 6000
 *               sInterval:
 *                 type: number
 *                 example: 6000
 *               vWarentyKm:
 *                 type: number
 *                 example: 30000
 *     responses:
 *       201:
 *         description: Bike successfully added
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Server error
 */
router.post("/create",addbike);
module.exports=router;

router.get("/addbike",(req,res)=>{
    res.render("addbike.ejs");
})
