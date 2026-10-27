require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { HoldingsModel } = require("./models/HoldingsModel");

const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const authRoute = require("./routes/AuthRoutes");

app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001","https://stoxivo-frontend.onrender.com","https://stoxivo-dashboard.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));
app.use(bodyParser.json());
app.use(express.json());

app.get("/abc",(req,res)=>{
  res.send("hello");
})
app.set("trust proxy", 1);
// Routes
app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
    newOrder.save();

  res.send("Order saved!");
  });

  app.get("/Order/:uid",async(req,res)=>{
    let {uid}=req.params;
    let stock=await OrdersModel.find({"name":uid})
    if(stock.length>0){
      res.json(stock);
    }else{
      res.json("not found");
  };
}
  );


app.get("/allOrders",async(req,res)=>{
  let allOrders=await OrdersModel.find({});
  res.json(allOrders);
});

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});
