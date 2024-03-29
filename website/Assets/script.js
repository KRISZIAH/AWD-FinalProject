
/*==================== Navbar section ====================*/
document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        var header = document.querySelector("header");
        var nav = document.querySelector(".nav");
        var navbar = document.querySelector(".navbar");
        var navtog = document.querySelector(".nav-toggle");
        var logo = document.querySelector(".logo");
        var icons = document.querySelectorAll(".nav-icons .bx");
        if (window.pageYOffset > 0) { 
            header.classList.add("floating");
            nav.style.background = "var(--text-color)";
            navbar.style.background = "var(--text-color)";
            navtog.style.color = "var(--container-color)";
            logo.style.color = "var(--container-color)"; 
            icons.forEach(function(icon) {
                icon.style.color = "var(--container-color)"; 
            });
        } else {
            header.classList.remove("floating");
            nav.style.background = "transparent"; 
            navbar.style.background = "var(--bg-color)"; 
            navtog.style.color = "var(--text-color)";
            logo.style.color = "var(--text-color)";
            icons.forEach(function(icon) {
                icon.style.color = "var(--text-color)"; 
            });
        }
    };
});

document.querySelector('.nav-toggle').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar.style.display === "none") {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }
});

/*==================== Card section ====================*/
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
}
let autoPlay = setInterval(() => {
    next.click();
}, 5000);

/*==================== Card section ====================*/
document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        var header = document.querySelector("header");
        var nav = document.querySelector(".nav");
        var navbar = document.querySelector(".navbar");
        var navtog = document.querySelector(".nav-toggle");
        var logo = document.querySelector(".logo");
        var icons = document.querySelectorAll(".nav-icons .bx");
        if (window.pageYOffset > 0) { 
            header.classList.add("floating");
            nav.style.background = "var(--text-color)";
            navbar.style.background = "var(--text-color)";
            navtog.style.color = "var(--container-color)";
            logo.style.color = "var(--container-color)"; 
            icons.forEach(function(icon) {
                icon.style.color = "var(--container-color)"; 
            });
        } else {
            header.classList.remove("floating");
            nav.style.background = "transparent"; 
            navbar.style.background = "var(--bg-color)"; 
            navtog.style.color = "var(--text-color)";
            logo.style.color = "var(--text-color)";
            icons.forEach(function(icon) {
                icon.style.color = "var(--text-color)"; 
            });
        }
    };
  });
  
  document.querySelector('.nav-toggle').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar.style.display === "none") {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }
  });
  
  function handleCardClick(cardId, redirectUrl) {
    // Check if the card is already expanded
    var isChecked = document.getElementById(cardId).checked;
    if (isChecked) {
        // Redirect to the specified URL
        window.location.href = redirectUrl;
    }
  }
  
  
  const tabButtons = document.querySelectorAll('.tab');
  const tabs = document.querySelectorAll('.tab-content')
  
  tabButtons.forEach(tab => {
  tab.addEventListener('click', (e) => {
    const { price } = e.currentTarget.dataset;
  
    tabs.forEach(content => {
      const {name} = content.dataset;
      if(name === price) {
        content.classList.remove('hidden');
        content.classList.add('show');
      }
      else {
        content.classList.add('hidden');
        content.classList.remove('show');
      }
    });
  
    tabButtons.forEach(button => {
      if(button.dataset['price'] === price) {
        button.classList.add('active');
      } else button.classList.remove('active');
    })
  })
  });

// ================== Menu Section ==================
// Select filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".products-container .product");

// Define the filterCards function
const filterCards = e => {
    // Remove the "active" class from the previously active button
    document.querySelector(".filter_buttons button.active").classList.remove("active");
    // Add the "active" class to the clicked button
    e.target.classList.add("active");

    // Get the category name to filter
    const categoryName = e.target.dataset.name;

    // Iterate over each filterable card
    filterableCards.forEach(product => {
        const productCategories = product.dataset.name.split(", "); // Split categories by comma and space
        // Check if the product belongs to the selected category
        if (productCategories.includes(categoryName)) {
            product.classList.remove("hide");
        } else {
            product.classList.add("hide");
        }
    });
};

// By default, make the first button active and show its corresponding cards
filterButtons[0].classList.add("active");

// Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards));

let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".products-container .product").forEach(product=>{
    product.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute("data-name");
        previewBox.forEach(preview =>{
            let target = preview.getAttribute("data-target");
            if(name == target){
                preview.classList.add("active");
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector(".fa-times").onclick = () =>{
        close.classList.remove("active");
        previewContainer.style.display = 'none';
    }
})

// ================== Cart Section ==================
// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

// Cart Working JS
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}


//Making Function 
function ready() {
    // Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    // Quantity Changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    // Add To Cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    
    // Buy Button Work
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}

// Bu Button
function buyButtonClicked() {
    alert("Your Order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}
// Remove Items From Cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Quantity Changes
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

// Add To Cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.querySelector(".product-title").innerText;
    var price = shopProducts.querySelector(".price").innerText;
    var productImg = shopProducts.querySelector(".product-img").src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.querySelector(".cart-content");
    cartShopBox.innerHTML = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>`;
    cartItems.appendChild(cartShopBox);
    cartShopBox.querySelector(".cart-remove").addEventListener("click", removeCartItem);
    cartShopBox.querySelector(".cart-quantity").addEventListener("change", quantityChanged);
}

// Update Total
function updateTotal() {
    var cartContent = document.querySelector(".cart-content");
    var cartBoxes = cartContent.querySelectorAll(".cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.querySelector(".cart-price");
        var quantityElement = cartBox.querySelector(".cart-quantity");
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total += price * quantity;
        // If price Contain some Cents Value
        total = Math.round(total * 100) / 100;
    }
    document.querySelector(".total-price").innerText = "$" + total.toFixed(2);
}



