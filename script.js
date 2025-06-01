function placeOrder(){
    const coffee= parseInt(document.getElementById("coffeeQty").value);
    const tea= parseInt(document.getElementById("teaQty").value);
    const sandwich= parseInt(document.getElementById("sandwichQty").value);
    const cake= parseInt(document.getElementById("cakeQty").value);
    const pastry= parseInt(document.getElementById("pastryQty").value);
    const pasta= parseInt(document.getElementById("pastaQty").value);
    const pizza= parseInt(document.getElementById("pizzaQty").value);
    const iceCream= parseInt(document.getElementById("iceCreamQty").value);
    const total = coffee*40 + tea*20 + sandwich*120 + cake*350 + pastry*90 + pasta*80 + pizza*200 + iceCream*50;
    document.getElementById("orderTotal").textContent = "Total: Rs" + total;
    return false; // Prevent form submission
}