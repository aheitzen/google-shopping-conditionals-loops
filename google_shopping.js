var data = require("./products.json")
var counter = 0
for(var i = 0; i < 25; i++) {
	console.log(data.items[i].kind)
	if(data.items[i].kind === "shopping#product") {
		counter += 1;
	}
}
console.log(counter)
//console.log(data["items"]);

var counter2 = 0;

for(var i = 0; i < data.items.length; i++){
	if(data.items[i].product.inventories[0].availability === "backorder"){
		counter2 +=1;
	}
}
console.log("Question 2: ***************************")
console.log(counter2);

var counter3 = 0;

for(var i = 0; i < data.items.length; i++){
	if(data.items[i].product.images.length > 1 ){
		counter3 += 1;
	}
}
console.log("Question 3: ***************************")
console.log(counter3);

var counter4 = 0;

for(var i = 0; i < data.items.length; i++){
	if(data.items[i].product.brand.toLowerCase() === "canon"){
		counter4 +=1;
	}

}

console.log("Question 4: ***************************")
console.log(counter4);

var counter5 = 0;

for(var i = 0; i < data.items.length; i++){
	if(data.items[i].product.brand.toLowerCase() === "canon"){
		
		if(data.items[i].product.author.name.indexOf("eBay")!=-1) {
			counter5 +=1;

		}
		
	}

}
console.log("Question 5: ***************************")
console.log(counter5);


console.log("Question 6: ***************************")

for(var i = 0; i < data.items.length; i++){
	console.log("Brand: " + data.items[i].product.brand);
	console.log("Price " + data.items[i].product.inventories[0].price);
	console.log("Image link " + data.items[i].product.images[0].link);
	
}



















