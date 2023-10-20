function addItem() {
    var candyName = document.getElementById("candyName").value;
    var category = document.getElementById("category").value;
    var price = document.getElementById("price").value;
    var quantity = parseInt(document.getElementById("quantity").value);

    if (quantity <= 0) {
        alert("Quantity must be greater than 0.");
        return;
    }

    var newItem = document.createElement("div");
    newItem.textContent = candyName + " - " + category + " - Price: $" + price + " - Quantity: " + quantity;

    var expenseList = document.getElementById("expenseList");
    expenseList.appendChild(newItem);

    
    for (var i = 1; i <= 3; i++) {
        var buyButton = document.createElement("button");
        buyButton.textContent = "Buy" + i;
        buyButton.onclick = function() {
            reduceQuantity(i, newItem);
        };
        newItem.appendChild(buyButton);
    }

    document.getElementById("candyName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
}

function reduceQuantity(reduceBy, item) {
    var currentText = item.textContent;
    var matches = currentText.match(/Quantity: (\d+)/);
    
    if (matches && matches.length > 1) {
        var currentQuantity = parseInt(matches[1]);
        
        if (currentQuantity >= reduceBy) {
            var newQuantity = currentQuantity - reduceBy;
            item.textContent = currentText.replace(/Quantity: \d+/, "Quantity: " + newQuantity);
        } else {
            var additionalReduction = parseInt(prompt("Not enough quantity. Enter an additional reduction:"));
            if (additionalReduction) {
                reduceQuantity(additionalReduction, item);
            }
        }
    }
}
