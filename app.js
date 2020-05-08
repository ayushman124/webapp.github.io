var express = require("express");
var app = express();
var request =require("request");

app.set("view engine","ejs");
app.use(express.static("public"));


app.get("/",function(req,res){
	res.render("search");
	
	
});


app.get("/result",function(req,res){
	var test = req.query.search;
	console.log(test);
	request("https://covid19api.io/api/v1/IndiaCasesByStates",function(error,response,body){
	  if(!error && response.statusCode == 200){
		    var data=JSON.parse(body);
		  res.render("result",{data : data,test : test});
	  }  
	});	
});

app.listen(process.env.PORT ||3000 ,process.env.IP,function(){
	console.log("Server Started");
});