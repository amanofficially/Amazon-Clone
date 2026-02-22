// ===== CART COUNT =====
let cartCount = 0;

// Update cart count in navbar
function updateCartDisplay() {
  const cartSpan = document.querySelector(".nav-cart span");
  cartSpan.textContent = cartCount > 0 ? `Cart (${cartCount})` : "Cart";
}

// Show toast notification
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-msg");
  toastMsg.textContent = message;
  toast.classList.add("show");

  // Hide toast after 2.5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


// ===== CARD LINK — ADD TO CART ON CLICK =====
// All "See more", "Explore all", "Create account" links add to cart
document.querySelectorAll(".card-link").forEach((link) => {
  link.addEventListener("click", function () {
    cartCount++;
    updateCartDisplay();
    showToast("Item added to cart!");
  });
});


// ===== PRODUCT IMAGES — CLICK TO SHOW TOAST =====
// Clicking any product image inside image-grid shows a quick view message
document.querySelectorAll(".image-grid img").forEach((img) => {
  img.addEventListener("click", function () {
    showToast("Quick view: " + (this.alt || "Product"));
  });
});


// ===== SEARCH — ENTER KEY SUPPORT =====
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

function handleSearch() {
  const query = searchInput.value.trim();
  if (query) {
    showToast(`Searching for "${query}"...`);
    searchInput.value = "";
  } else {
    showToast("Please enter something to search!");
  }
}

// Trigger search on Enter key
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") handleSearch();
});

// Trigger search on icon click
searchIcon.addEventListener("click", handleSearch);


// ===== NAV CART CLICK =====
document.querySelector(".nav-cart").addEventListener("click", function () {
  const msg =
    cartCount > 0
      ? `You have ${cartCount} item(s) in your cart.`
      : "Your cart is empty.";
  showToast(msg);
});


// ===== SCROLL TO TOP — FOOTER LINK =====
document.querySelector(".footer-top-link").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ===== PRODUCT ROW IMAGES — CLICK =====
document.querySelectorAll(".product-row-images img").forEach((img) => {
  img.addEventListener("click", function () {
    showToast("Viewing: " + (this.alt || "Product"));
  });
});


// ===== NAVBAR SIGN IN CLICK =====
document.querySelector(".nav-signin").addEventListener("click", function () {
  showToast("Sign in feature coming soon!");
});