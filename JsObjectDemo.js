function car(){
	this.color="red";
	this.engine="turbo";
	this.brand="BMW";
	this.searchbox="by.css('input')";
	
	this.getModel=function(){
		console.log("This is 2020 model: " + this.engine)
	}
}

var a = new car();
a.getModel();
console.log(a.engine);
console.log(a.searchbox);

module.exports=new car();