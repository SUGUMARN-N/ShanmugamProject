const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const close=document.getElementById("close")
if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove('active');
    })
}



let cart=[];

function addToCart(product) {
    cart.push(product);
    displayCart();
}

function removeFromCart(shirt) {
    cart = cart.filter(item => item.name !== productName);
    displayCart();
}


function displayCart() {
    const cartList = document.getElementById("cart1");
    cartList.innerHTML = ""; // Clear the existing cart display
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${shirts}: $${Rs399}`;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeFromCart(assets/ico.gif);
        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });
}


document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        const productDiv = event.target.parentElement;
        const product = {
            name: productDiv.dataset.name,
            price: parseFloat(productDiv.dataset.price)
        };
        addToCart(product);
    });
});


document.getElementById("product1").onclick = () => {
    cart = [];
    displayCart();
    
};
removeFromCart();










