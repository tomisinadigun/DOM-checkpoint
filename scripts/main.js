let cartItems = document.getElementsByClassName("cart-item");
let deleteItem = document.getElementsByClassName("delete-item");
let likeBtn = document.querySelectorAll(".like-item")
let modifyProdQuantity = document.querySelectorAll(".prodQuantBtn");
let itemPrice = document.querySelectorAll(".item-price");
let priceTotal = document.getElementById("total")





// items deletion 
for(let i = 0; i < deleteItem.length; i++) {
    deleteItem[i].addEventListener("click", ()=> {
        deleteItem[i].parentElement.remove()
    })
}

function likedItem(likedItem) {
    if(likedItem.style.color != "red"){
        likedItem.style.color = "red";
    }else if(likedItem.style.color == "red"){
        likedItem.style.color = "grey";
    }
}


likeBtn.forEach((item) => {
    item.addEventListener("click", ()=> {
        likedItem(item)
    })
})


// modify product quantity 
modifyProdQuantity.forEach((item, itemId) => {
    item.addEventListener("click", () => {
        if(item.classList.contains("add")){
            let itemCounter = Number(item.previousElementSibling.innerHTML);
            itemCounter += 1;
            item.previousElementSibling.innerHTML = itemCounter;
            

            let thisItemPrice = item.parentElement.nextElementSibling;
            let originalPrice = thisItemPrice.nextElementSibling
            addUpPrice(thisItemPrice, itemCounter, originalPrice);

        } else if(item.classList.contains("minus")) {
            if(Number(item.nextElementSibling.innerHTML) < 2){
                
            }else{
                let itemCounter = Number(item.nextElementSibling.innerHTML);
                itemCounter -= 1;
                item.nextElementSibling.innerHTML = itemCounter;

                
                let thisItemPrice = item.parentElement.nextElementSibling;
                let originalPrice = thisItemPrice.nextElementSibling
                breakDownPrice(thisItemPrice, itemCounter, originalPrice);
            }
        }
    })
})



// this function updates price after item is increased
function addUpPrice(thisItemPrice, itemCounter, originalPrice) {
    currentItemPrice = Number(thisItemPrice.innerHTML);
    originalPrice = Number(originalPrice.innerHTML)
    subtotal = originalPrice * itemCounter;
    thisItemPrice.innerHTML = subtotal;

    currentsubtotal()
}


// this function updates price after item is reduced 
function breakDownPrice(thisItemPrice, itemCounter, originalPrice) {
    originalPrice = Number(originalPrice.innerHTML)
    currentItemPrice = Number(thisItemPrice.innerHTML);
    subtotal = originalPrice * itemCounter;
    thisItemPrice.innerHTML = subtotal;

    currentsubtotal()
}


// update total price 
function currentsubtotal() {
    let total = 0;
    for(let eachPrice of itemPrice){
        total += Number(eachPrice.innerHTML)
    }
    priceTotal.innerHTML = total
}