function nextSupply() {
    // randomly grab next product
    var supply = supplyList[Math.floor(Math.random()*supplyList.length)];
    
    // get and post product ID
    var supplyID = supply.productID;
    document.getElementById("supplyID").innerHTML = "Product ID: " + supplyID;
    
    // name of product
    var supplyName = supply.name;
    document.getElementById("supplyName").innerHTML = supplyName;
    
    // description of product
    var supplyDescription = supply.description;
    document.getElementById("supplyDescription").innerHTML = supplyDescription;
    
    // photo of product
    var supplyPhoto = supply.photo;
    document.getElementById("supplyPhoto").innerHTML = "<img src='" + supplyPhoto +
        "' alt='" + supplyName + "'>";
    
    // price of product
    var supplyPrice = supply.price;
    document.getElementById("supplyPrice").innerHTML = "Only: " + supplyPrice;
    
    // link to buy product 
    var supplyLink = supply.link;
    document.getElementById("supplyLink").innerHTML = "<a href='" + supplyLink +
        "' target='_blank'><button>Buy now</button></a>";
}
