function showDiv() {
    document.getElementById('button_1').style.display = "block";
    document.getElementById('leader').style.display = "block";
    document.getElementById('category').style.display = "block";
    document.getElementById('p').style.display = "block";
    
    document.getElementById('h3').style.display = "none";

    var leaders = new Array("Uber", "AirBnB", "ProductHunt", "Tinder", "BirchBox", "Shazam", "Waze");
    var categories = new Array("Cars", "Taxis", "Pets", "House", "Hotels", "Coffee", "Trees", "Programming", "Comics", "Laundry", "Parking", "Massage", "Beards", "Storage", "Boats", "Drones", "Bodily Fluids", "Worksapce", "Shipping", "Flowers", "Jobs", "Gamers", "Pizza", "Condiments", "Underwear", "Socks", "Kids", "Shoes", "Camping", "Adult Fun");
    var random_leader = leaders[Math.floor(Math.random() * leaders.length)];
    var random_categories = categories[Math.floor(Math.random() * categories.length)];
    document.getElementById("leader").innerHTML=random_leader;
    document.getElementById("category").innerHTML=random_categories;
    document.getElementById("button_1").innerHTML="Another One";
    



}


