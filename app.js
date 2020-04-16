//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
let imageID = "";
const app = express();
var router = express.Router();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.render("index");
});
app.get("/cart", function(req, res){
  res.render("cart");
});
app.get("/checkout", function(req, res){
  res.render("checkout");
});
app.get("/product-details", function(req, res){
  res.render("product-details");
});
app.get("/shop", function(req, res){
  res.render("shop");
});
app.get("/rotate", function(req, res){
  res.render("rotate");
});
app.post("/rotate", function(req, res){
  imageID = req.body.butt;
  //console.log(imageID);
  let imagePath = "img360/"+imageID+"/";
  res.render("rotate", {imagePath: imagePath});
});
app.post("/ARView", function(req, res){
  console.log("Post method working");
});
module.exports = router;

app.listen("3000", function(){
  console.log("Server up and running on port 3000");
});
