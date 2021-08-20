

//Funtion to get the extra memory cost
function memoryInput(memory, price) {
    const memoryCost = document.getElementById('memory-cost');
    //condition for different memory cost
    if (memory == "8GB") {
        memoryCost.innerText = price;
    }
    else {
        memoryCost.innerText = price;
    }
    calculateTotal();
}

//Funtion to get the extra storage cost
function storageInput(storage, price) {
    const storageCost = document.getElementById('storage-cost');
    //condition for different storage cost
    if (storage == "256GB") {
        storageCost.innerText = price;
    }
    else if (storage == "512GB") {
        storageCost.innerText = price;
    }
    else {
        storageCost.innerText = price;
    }
    calculateTotal();   //calling function for total calculation
}

//Funtion to get the delivery cost
function deliveryInput(delivery, price) {
    const deliveryCost = document.getElementById('delivery-cost');
    //condition for different delivery type cost
    if (delivery == "Free") {
        deliveryCost.innerText = price;
    }
    else {
        deliveryCost.innerText = price;
    }
    calculateTotal(); //calling function for total calculation
}
// total cost calcultion
function calculateTotal() {
    const memoryCostText = document.getElementById('memory-cost').innerText;
    const memoryCost = parseInt(memoryCostText);
    const storageCostText = document.getElementById('storage-cost').innerText;
    const storageCost = parseInt(storageCostText);
    const deliveryCostText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseInt(deliveryCostText);
    const bestCostText = document.getElementById('best-cost').innerText;
    const bestCost = parseInt(bestCostText);
    const totalCostText = document.getElementById('total-cost');
    totalCostText.innerText = memoryCost + storageCost + deliveryCost + bestCost;
    Promo(); //calling Promo function to get the total cost value

}

//Bonus Part with promo code
function Promo() {
    const promoText = document.getElementById('promo-input');
    const promoCode = promoText.value;
    const totalCostText = document.getElementById('total-cost');
    const totalCostInnerText = totalCostText.innerText;
    const totalCost = parseInt(totalCostInnerText);
    const totalWithPromo = document.getElementById('total-after-promo');
    //conditon to get the promo value
    if (promoCode == "stevekaku") {
        totalWithPromo.innerText = totalCost * .80;
    }
    else {
        totalWithPromo.innerText = totalCost;
    }

}


//8GB Memory
document.getElementById('8GB-Memory').addEventListener('click', function () {

    memoryInput('8GB', 0);
})


//16GB Memory
document.getElementById('16GB-Memory').addEventListener('click', function () {

    memoryInput('16GB', 180);
})


//256GB SSD
document.getElementById('256GB-SSD').addEventListener('click', function () {
    storageInput('256GB', 0)
})


//512GB SSD
document.getElementById('512GB-SSD').addEventListener('click', function () {
    storageInput('512GB', 100)
})


//1TB SSD
document.getElementById('1TB-SSD').addEventListener('click', function () {
    storageInput('1TB', 180)
})


//Free delivery
document.getElementById('Free-Delivery').addEventListener('click', function () {
    deliveryInput("Free", 0)
})


//Paid Delivery
document.getElementById('Paid-Delivery').addEventListener('click', function () {
    deliveryInput("Paid", 20)
})




