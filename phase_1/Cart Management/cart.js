function storeinSession(cartObj) {
    var obj = sessionStorage.getItem("cart-item");
    if (obj != undefined) {
        var dataObj = JSON.parse(obj);
        if (cartObj.length > 0) {
            dataObj.push(cartObj[0]);
            sessionStorage.setItem("cart-item", JSON.stringify(dataObj));
        }
    }
    else {
        sessionStorage.setItem("cart-item", JSON.stringify(cartObj));
    }
}
function add(index) {
    var cartObj = [];
    var item = readformData(index);
    cartObj.push(item);
    storeinSession(cartObj);
}
function readformData(index) {
    var item = {};
    item.name = document.getElementById("name" + index).textContent;
    item.price = document.getElementById("price" + index).textContent;
    console.log(item);
    return item;
}
