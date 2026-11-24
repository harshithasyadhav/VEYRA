
/* =====================================================
   VEYRA - PREMIUM WOMEN'S FASHION STORE
   VERSION 3
   20 PRODUCTS | EXACT NAMES AND IMAGE ORDER
===================================================== */

const $ = (id) => document.getElementById(id);

/* =====================================================
   1. PRODUCT CATALOGUE
===================================================== */

const defaultProducts = [

  // WESTERN WEAR

  {
    id: 1,
    name: "Floral Midi Dress",
    category: "western",
    price: 1499,
    oldPrice: 1899,
    stock: 15,
    sizes: ["S", "M", "L", "XL"],
    colours: ["Pink", "Cream"],
    image: "images/01.jpg",
    description: "A beautiful floral midi dress perfect for brunches and summer outings."
  },
  {
    id: 2,
    name: "Chic Summer Top",
    category: "western",
    price: 1199,
    oldPrice: 1499,
    stock: 18,
    sizes: ["S", "M", "L", "XL"],
    colours: ["White", "Cream"],
    image: "images/02.jpg",
    description: "A chic summer top designed for effortless everyday elegance."
  },
  {
    id: 3,
    name: "Pleated Maxi Dress",
    category: "western",
    price: 1999,
    oldPrice: 2399,
    stock: 9,
    sizes: ["S", "M", "L", "XL"],
    colours: ["Green"],
    image: "images/03.jpg",
    description: "A graceful pleated maxi dress with a flowing silhouette."
  },
  {
    id: 4,
    name: "Minimalist Black Top",
    category: "western",
    price: 1099,
    oldPrice: 1399,
    stock: 17,
    sizes: ["XS", "S", "M", "L", "XL"],
    colours: ["Black"],
    image: "images/04.jpg",
    description: "A timeless minimalist black top for versatile styling."
  },
  {
    id: 5,
    name: "Elegant Wrap Dress",
    category: "western",
    price: 2199,
    oldPrice: 2599,
    stock: 12,
    sizes: ["S", "M", "L", "XL"],
    colours: ["Beige"],
    image: "images/05.jpg",
    description: "An elegant wrap dress combining sophistication and contemporary style."
  },

  // ETHNIC WEAR

  {
    id: 6,
    name: "Traditional Anarkali",
    category: "ethnic",
    price: 2499,
    oldPrice: 2999,
    stock: 10,
    sizes: ["S", "M", "L", "XL"],
    colours: ["Maroon"],
    image: "images/06.jpg",
    description: "A traditional Anarkali outfit perfect for festive celebrations."
  },
  {
    id: 7,
    name: "Printed Ethnic Kurta",
    category: "ethnic",
    price: 1199,
    oldPrice: 1499,
    stock: 18,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colours: ["Blue"],
    image: "images/07.jpg",
    description: "A beautifully printed ethnic kurta combining traditional style and comfort."
  },
  {
    id: 8,
    name: "Festive Silk Suit",
    category: "ethnic",
    price: 3199,
    oldPrice: 3599,
    stock: 6,
    sizes: ["S", "M", "L", "XL"],
    colours: ["Green"],
    image: "images/08.jpg",
    description: "A festive silk suit designed for celebrations and special occasions."
  },
  {
    id: 9,
    name: "Soft Cotton Kurta",
    category: "ethnic",
    price: 999,
    oldPrice: 1299,
    stock: 22,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colours: ["Peach"],
    image: "images/09.jpg",
    description: "A comfortable soft cotton kurta for everyday ethnic wear."
  },
  {
    id: 10,
    name: "Pastel Palazzo Set",
    category: "ethnic",
    price: 1799,
    oldPrice: 2099,
    stock: 14,
    sizes: ["S", "M", "L", "XL"],
    colours: ["Pastel"],
    image: "images/10.jpg",
    description: "A graceful pastel palazzo set for a stylish ethnic look."
  },

  // PARTY WEAR

  {
    id: 11,
    name: "Elegant Black Gown",
    category: "party",
    price: 2799,
    oldPrice: 3299,
    stock: 8,
    sizes: ["XS", "S", "M", "L"],
    colours: ["Black"],
    image: "images/11.jpg",
    description: "An elegant black gown designed for glamorous evening occasions."
  },
  {
    id: 12,
    name: "Satin Evening Dress",
    category: "party",
    price: 2299,
    oldPrice: 2699,
    stock: 7,
    sizes: ["XS", "S", "M", "L"],
    colours: ["Burgundy"],
    image: "images/12.jpg",
    description: "A luxurious satin evening dress for parties and special events."
  },
  {
    id: 13,
    name: "Sequin Party Dress",
    category: "party",
    price: 3499,
    oldPrice: 3999,
    stock: 5,
    sizes: ["XS", "S", "M", "L"],
    colours: ["Silver"],
    image: "images/13.jpg",
    description: "A sparkling sequin party dress for a glamorous celebration look."
  },
  {
    id: 14,
    name: "Rose Gold Occasion Dress",
    category: "party",
    price: 3299,
    oldPrice: 3799,
    stock: 6,
    sizes: ["XS", "S", "M", "L"],
    colours: ["Rose Gold"],
    image: "images/14.jpg",
    description: "A beautiful rose gold occasion dress for elegant celebrations."
  },
  {
    id: 15,
    name: "Emerald Party Dress",
    category: "party",
    price: 2899,
    oldPrice: 3399,
    stock: 9,
    sizes: ["XS", "S", "M", "L"],
    colours: ["Emerald Green"],
    image: "images/15.jpg",
    description: "A sophisticated emerald party dress for a bold and elegant look."
  },

  // CASUAL WEAR

  {
    id: 16,
    name: "Classic Beige Co-ord",
    category: "casual",
    price: 1899,
    oldPrice: 2199,
    stock: 12,
    sizes: ["S", "M", "L", "XL"],
    colours: ["Beige"],
    image: "images/16.jpg",
    description: "A classic beige coordinated outfit combining comfort and minimal elegance."
  },
  {
    id: 17,
    name: "Everyday White Shirt",
    category: "casual",
    price: 899,
    oldPrice: 1199,
    stock: 20,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colours: ["White"],
    image: "images/17.jpg",
    description: "A classic white shirt designed for comfortable everyday styling."
  },
  {
    id: 18,
    name: "Brown Casual Dress",
    category: "casual",
    price: 1299,
    oldPrice: 1599,
    stock: 14,
    sizes: ["S", "M", "L", "XL"],
    colours: ["Brown"],
    image: "images/18.jpg",
    description: "A versatile brown casual dress for relaxed outings and everyday wear."
  },
  {
    id: 19,
    name: "Relaxed Linen Trousers",
    category: "casual",
    price: 1599,
    oldPrice: 1899,
    stock: 11,
    sizes: ["S", "M", "L", "XL"],
    colours: ["Beige"],
    image: "images/19.jpg",
    description: "Relaxed-fit linen trousers designed for comfort and effortless styling."
  },
  {
    id: 20,
    name: "Everyday Denim Outfit",
    category: "casual",
    price: 1499,
    oldPrice: 1799,
    stock: 16,
    sizes: ["S", "M", "L", "XL"],
    colours: ["Blue"],
    image: "images/20.jpg",
    description: "A stylish everyday denim outfit for a comfortable contemporary look."
  }

];


/* =====================================================
   2. LOCAL STORAGE AND APP DATA
   VERSION 4 - FORCE EXACT 20 PRODUCT CATALOGUE
===================================================== */

const CATALOG_VERSION = "4";

const readStorage = (key, fallback) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
};

// Force the browser to load the latest exact catalogue.
if (localStorage.getItem("veyra_catalog_version") !== CATALOG_VERSION) {
  localStorage.setItem(
    "veyra_products",
    JSON.stringify(defaultProducts)
  );

  localStorage.setItem(
    "veyra_catalog_version",
    CATALOG_VERSION
  );
}

let products = readStorage("veyra_products", defaultProducts);
let cart = readStorage("veyra_cart", []);
let wishlist = readStorage("veyra_wishlist", []);
let orders = readStorage("veyra_orders", []);
let currentProduct = null;
let toastTimer;

function saveData() {
  localStorage.setItem("veyra_products", JSON.stringify(products));
  localStorage.setItem("veyra_cart", JSON.stringify(cart));
  localStorage.setItem("veyra_wishlist", JSON.stringify(wishlist));
  localStorage.setItem("veyra_orders", JSON.stringify(orders));
}

function money(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function updateCounts() {
  $("cartCount").textContent = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );
  $("wishCount").textContent = wishlist.length;
}

function getProduct(id) {
  return products.find(product => product.id === Number(id));
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}


/* =====================================================
   3. PRODUCT DISPLAY, SEARCH AND FILTERS
===================================================== */

function renderProducts() {
  const grid = $("productGrid");
  const search = $("searchInput").value.trim().toLowerCase();
  const category = $("categoryFilter").value;
  const size = $("sizeFilter").value;
  const price = $("priceFilter").value;
  const sort = $("sortFilter").value;

  let filtered = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      (product.description || "").toLowerCase().includes(search);

    const matchesCategory =
      category === "all" || product.category === category;

    const matchesSize =
      size === "all" || product.sizes.includes(size);

    let matchesPrice = true;

    if (price === "under1000") matchesPrice = product.price < 1000;
    if (price === "1000-2000") matchesPrice = product.price >= 1000 && product.price <= 2000;
    if (price === "2000-3000") matchesPrice = product.price > 2000 && product.price <= 3000;
    if (price === "above3000") matchesPrice = product.price > 3000;

    return matchesSearch && matchesCategory && matchesSize && matchesPrice;
  });

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);
  if (sort === "newest") filtered.sort((a, b) => b.id - a.id);

  $("productCount").textContent = `${filtered.length} pieces to discover`;

  $("activeCategory").textContent =
    category === "all"
      ? "ALL PRODUCTS"
      : category.toUpperCase() + " COLLECTION";

  $("emptyProducts").hidden = filtered.length !== 0;

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${escapeHTML(product.image)}"
             alt="${escapeHTML(product.name)}"
             loading="lazy"
             onerror="this.onerror=null;this.src='https://placehold.co/600x800/e9dfd0/735541?text=VEYRA'">

        <span class="product-tag">${escapeHTML(product.category)}</span>

        <button class="wish-product ${wishlist.includes(product.id) ? "active" : ""}"
                data-wish="${product.id}" aria-label="Add to wishlist">
          ${wishlist.includes(product.id) ? "♥" : "♡"}
        </button>
      </div>

      <div class="product-info">
        <p class="product-category">${escapeHTML(product.category)} collection</p>
        <h3>${escapeHTML(product.name)}</h3>
        <span class="product-price">${money(product.price)}</span>

        ${product.oldPrice
          ? `<span class="product-old-price">${money(product.oldPrice)}</span>`
          : ""}

        <button class="view-product" data-product="${product.id}">
          VIEW PRODUCT
        </button>
      </div>
    </article>
  `).join("");
}

function resetFilters() {
  $("categoryFilter").value = "all";
  $("sizeFilter").value = "all";
  $("priceFilter").value = "all";
  $("sortFilter").value = "default";
  $("searchInput").value = "";
  renderProducts();
}

/* =====================================================
   4. PRODUCT MODAL
===================================================== */

function openModal(content) {
  $("modalBody").innerHTML = content;
  $("modal").classList.add("open");
  $("modal").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("modal").classList.remove("open");
  $("modal").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

$("modalClose").addEventListener("click", closeModal);

$("modal").addEventListener("click", event => {
  if (event.target.dataset.close === "true") closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

/* =====================================================
   5. PRODUCT DETAILS
===================================================== */

function showProduct(id) {
  const product = getProduct(id);
  if (!product) return;

  currentProduct = product;

  openModal(`
    <div class="modal-product">
      <img src="${escapeHTML(product.image)}"
           alt="${escapeHTML(product.name)}"
           onerror="this.onerror=null;this.src='https://placehold.co/600x800/e9dfd0/735541?text=VEYRA'">

      <div>
        <p class="eyebrow">${escapeHTML(product.category)} COLLECTION</p>
        <h2>${escapeHTML(product.name)}</h2>
        <div class="modal-price">${money(product.price)}</div>
        <p>${escapeHTML(product.description)}</p>
        <p style="margin-top:12px">Available stock: ${product.stock}</p>

        <label for="productSize">Select your size</label>
        <select id="productSize">
          ${product.sizes.map(size =>
            `<option value="${escapeHTML(size)}">${escapeHTML(size)}</option>`
          ).join("")}
        </select>

        <label for="productQuantity">Quantity</label>
        <input type="number" id="productQuantity"
               min="1" max="${product.stock}" value="1">

        <button class="dark-button" id="addToCartFromModal"
                ${product.stock < 1 ? "disabled" : ""}>
          ${product.stock < 1 ? "OUT OF STOCK" : "ADD TO BAG"}
        </button>
      </div>
    </div>
  `);

  $("addToCartFromModal").addEventListener("click", () => {
    const selectedSize = $("productSize").value;
    const quantity = Number($("productQuantity").value);

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > product.stock) {
      showToast("Please enter a valid quantity.");
      return;
    }

    addToCart(product.id, selectedSize, quantity);
    closeModal();
  });
}

/* =====================================================
   6. WISHLIST
===================================================== */

function toggleWishlist(id) {
  id = Number(id);

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    showToast("Removed from wishlist.");
  } else {
    wishlist.push(id);
    showToast("Added to wishlist!");
  }

  saveData();
  updateCounts();
  renderProducts();
}

function showWishlist() {
  const items = wishlist.map(id => getProduct(id)).filter(Boolean);

  openModal(`
    <h2>Your wishlist ♡</h2>

    ${items.length ? items.map(product => `
      <div class="cart-line">
        <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}">
        <div>
          <h4>${escapeHTML(product.name)}</h4>
          <p>${money(product.price)}</p>
          <button data-remove-wish="${product.id}">Remove</button>
          <button data-wish-view="${product.id}">View product</button>
        </div>
      </div>
    `).join("") : "<p>Your wishlist is waiting for something lovely.</p>"}
  `);
}

/* =====================================================
   7. SHOPPING CART
===================================================== */

function addToCart(id, size, quantity = 1) {
  const product = getProduct(id);
  if (!product) return;

  const existing = cart.find(
    item => item.id === Number(id) && item.size === size
  );

  const existingQuantity = existing ? existing.quantity : 0;

  if (existingQuantity + quantity > product.stock) {
    showToast("Not enough stock available.");
    return;
  }

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: Number(id), size, quantity });
  }

  saveData();
  updateCounts();
  showToast("Added to your shopping bag!");
}

function changeCartQuantity(id, size, change) {
  const item = cart.find(
    entry => entry.id === Number(id) && entry.size === size
  );

  const product = getProduct(id);
  if (!item || !product) return;

  const next = item.quantity + change;

  if (next < 1) {
    cart = cart.filter(
      entry => !(entry.id === Number(id) && entry.size === size)
    );
  } else if (next <= product.stock) {
    item.quantity = next;
  } else {
    showToast("Maximum available stock reached.");
    return;
  }

  saveData();
  updateCounts();
  showCart();
}

function removeCartItem(id, size) {
  cart = cart.filter(
    item => !(item.id === Number(id) && item.size === size)
  );

  saveData();
  updateCounts();
  showCart();
}

function showCart() {
  const validItems = cart.map(item => ({
    ...item,
    product: getProduct(item.id)
  })).filter(item => item.product);

  const total = validItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  openModal(`
    <h2>Your shopping bag</h2>

    ${validItems.length ? validItems.map(item => `
      <div class="cart-line">
        <img src="${escapeHTML(item.product.image)}"
             alt="${escapeHTML(item.product.name)}">

        <div>
          <h4>${escapeHTML(item.product.name)}</h4>
          <p>Size: ${escapeHTML(item.size)} · ${money(item.product.price)}</p>

          <button data-quantity="${item.id}"
                  data-size="${escapeHTML(item.size)}"
                  data-change="-1">−</button>

          <strong>${item.quantity}</strong>

          <button data-quantity="${item.id}"
                  data-size="${escapeHTML(item.size)}"
                  data-change="1">+</button>

          <button data-remove-cart="${item.id}"
                  data-size="${escapeHTML(item.size)}">Remove</button>
        </div>

        <strong>${money(item.product.price * item.quantity)}</strong>
      </div>
    `).join("") : "<p>Your shopping bag is empty. Find something you love!</p>"}

    ${validItems.length ? `
      <div class="cart-total">
        <span>Subtotal</span>
        <span>${money(total)}</span>
      </div>

      <p style="color:#83796f;font-size:11px;margin-bottom:15px">
        Shipping and applicable charges are not included in this demo.
      </p>

      <button class="dark-button" id="checkoutButton" style="width:100%">
        PROCEED TO CHECKOUT →
      </button>
    ` : ""}
  `);
}

/* =====================================================
   8. CHECKOUT AND ORDER PLACEMENT
===================================================== */

function showCheckout() {
  const total = cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  if (!cart.length) {
    showToast("Your bag is empty.");
    return;
  }

  openModal(`
    <div class="account-form">
      <p class="eyebrow">ALMOST YOURS</p>
      <h2>Checkout</h2>
      <p>Order total: <strong>${money(total)}</strong></p>

      <form id="checkoutForm">
        <label>Full name
          <input id="checkoutName" required placeholder="Your name">
        </label>

        <label>Email address
          <input id="checkoutEmail" type="email" required placeholder="you@example.com">
        </label>

        <label>Phone number
          <input id="checkoutPhone" type="tel"
                 pattern="[0-9]{10}" required placeholder="10-digit mobile number">
        </label>

        <label>Delivery address
          <input id="checkoutAddress" required placeholder="House no., street, area">
        </label>

        <label>City
          <input id="checkoutCity" required placeholder="City">
        </label>

        <label>PIN code
          <input id="checkoutPin" inputmode="numeric"
                 pattern="[0-9]{6}" required placeholder="6-digit PIN code">
        </label>

        <button class="dark-button" type="submit">PLACE DEMO ORDER</button>
      </form>

      <p style="font-size:10px;margin-top:15px">
        Demo checkout only. No real payment will be collected.
      </p>
    </div>
  `);

  $("checkoutForm").addEventListener("submit", event => {
    event.preventDefault();

    for (const item of cart) {
      const product = getProduct(item.id);

      if (!product || product.stock < item.quantity) {
        showToast("Stock changed. Please review your bag.");
        return;
      }
    }

    const order = {
      id: "VY" + Date.now().toString().slice(-8),
      customer: $("checkoutName").value.trim(),
      email: $("checkoutEmail").value.trim(),
      phone: $("checkoutPhone").value.trim(),
      address: $("checkoutAddress").value.trim(),
      city: $("checkoutCity").value.trim(),
      pin: $("checkoutPin").value.trim(),
      items: cart.map(item => ({ ...item })),
      total,
      date: new Date().toLocaleString("en-IN"),
      status: "Placed"
    };

    cart.forEach(item => {
      const product = getProduct(item.id);
      product.stock -= item.quantity;
    });

    orders.unshift(order);
    cart = [];

    saveData();
    updateCounts();
    renderProducts();
    closeModal();
    showToast("Your demo order has been placed!");
  });
}

/* =====================================================
   9. CUSTOMER ACCOUNT
===================================================== */

function showAccount() {
  const savedUser = readStorage("veyra_user", null);

  if (savedUser) {
    openModal(`
      <div class="account-form">
        <p class="eyebrow">WELCOME BACK</p>
        <h2>Hello, ${escapeHTML(savedUser.name)}</h2>
        <p>You are signed in to your VEYRA demo account.</p>

        <button class="dark-button" id="myOrdersButton"
                style="width:100%;margin-top:20px">MY ORDERS</button>

        <button class="outline-button" id="logoutButton"
                style="width:100%;margin-top:10px">LOG OUT</button>
      </div>
    `);

    $("logoutButton").addEventListener("click", () => {
      localStorage.removeItem("veyra_user");
      closeModal();
      showToast("You have logged out.");
    });

    $("myOrdersButton").addEventListener("click", showMyOrders);
    return;
  }

  openModal(`
    <div class="account-form">
      <p class="eyebrow">WELCOME TO VEYRA</p>
      <h2>Create your account</h2>

      <form id="accountForm">
        <label>Your name
          <input id="accountName" required placeholder="Full name">
        </label>

        <label>Email address
          <input id="accountEmail" type="email" required placeholder="Email address">
        </label>

        <button class="dark-button" type="submit">CONTINUE</button>
      </form>

      <p style="font-size:10px;margin-top:15px">
        Demo account only. No secure server-side authentication is used.
      </p>
    </div>
  `);

  $("accountForm").addEventListener("submit", event => {
    event.preventDefault();

    const user = {
      name: $("accountName").value.trim(),
      email: $("accountEmail").value.trim()
    };

    localStorage.setItem("veyra_user", JSON.stringify(user));
    closeModal();
    showToast("Welcome to VEYRA, " + user.name + "!");
  });
}

function showMyOrders() {
  const user = readStorage("veyra_user", null);

  const userOrders = user
    ? orders.filter(
        order => order.email.toLowerCase() === user.email.toLowerCase()
      )
    : [];

  openModal(`
    <h2>Your orders</h2>

    ${userOrders.length ? userOrders.map(order => `
      <div class="cart-line">
        <div>
          <h4>Order ${escapeHTML(order.id)}</h4>
          <p>${escapeHTML(order.date)}</p>
          <p>Status: ${escapeHTML(order.status)}</p>
        </div>
        <strong>${money(order.total)}</strong>
      </div>
    `).join("") : "<p>No orders found for this account yet.</p>"}
  `);
}

/* =====================================================
   10. SEARCH AND FILTER EVENTS
===================================================== */

$("searchToggle").addEventListener("click", () => {
  $("searchRow").classList.toggle("visible");

  if ($("searchRow").classList.contains("visible")) {
    $("searchInput").focus();
  }
});

$("searchButton").addEventListener("click", () => {
  renderProducts();
  $("shop").scrollIntoView({ behavior: "smooth" });
});

$("searchInput").addEventListener("input", renderProducts);

["categoryFilter", "sizeFilter", "priceFilter", "sortFilter"].forEach(id => {
  $(id).addEventListener("change", renderProducts);
});

$("clearFilters").addEventListener("click", resetFilters);
$("emptyReset").addEventListener("click", resetFilters);

/* =====================================================
   11. NAVIGATION AND CATEGORY CARDS
===================================================== */

document.querySelectorAll("[data-collection], [data-nav-category]").forEach(button => {
  button.addEventListener("click", () => {
    const category =
      button.dataset.collection || button.dataset.navCategory;

    $("categoryFilter").value = category;
    $("sizeFilter").value = "all";
    $("priceFilter").value = "all";
    $("sortFilter").value = "default";
    $("searchInput").value = "";

    renderProducts();
    $("shop").scrollIntoView({ behavior: "smooth" });
    $("mainNav").classList.remove("open");
  });
});

$("menuToggle").addEventListener("click", () => {
  $("mainNav").classList.toggle("open");
});

/* =====================================================
   12. HEADER BUTTONS
===================================================== */

$("cartButton").addEventListener("click", showCart);
$("wishlistButton").addEventListener("click", showWishlist);
$("accountButton").addEventListener("click", showAccount);

/* =====================================================
   13. PRODUCT GRID BUTTONS
===================================================== */

$("productGrid").addEventListener("click", event => {
  const wishButton = event.target.closest("[data-wish]");
  const productButton = event.target.closest("[data-product]");

  if (wishButton) toggleWishlist(wishButton.dataset.wish);

  if (productButton) showProduct(productButton.dataset.product);
});

/* =====================================================
   14. MODAL BUTTON EVENTS
===================================================== */

$("modalBody").addEventListener("click", event => {
  const removeWish = event.target.closest("[data-remove-wish]");
  const viewWish = event.target.closest("[data-wish-view]");
  const removeCart = event.target.closest("[data-remove-cart]");
  const quantityButton = event.target.closest("[data-quantity]");
  const checkoutButton = event.target.closest("#checkoutButton");

  if (removeWish) {
    wishlist = wishlist.filter(
      id => id !== Number(removeWish.dataset.removeWish)
    );

    saveData();
    updateCounts();
    showWishlist();
    renderProducts();
  }

  if (viewWish) {
    showProduct(viewWish.dataset.wishView);
  }

  if (removeCart) {
    removeCartItem(
      removeCart.dataset.removeCart,
      removeCart.dataset.size
    );
  }

  if (quantityButton) {
    changeCartQuantity(
      quantityButton.dataset.quantity,
      quantityButton.dataset.size,
      Number(quantityButton.dataset.change)
    );
  }

  if (checkoutButton) showCheckout();
});

/* =====================================================
   15. NEWSLETTER SUBSCRIPTION
===================================================== */

$("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();

  const email = $("newsletterEmail").value.trim();

  if (!email) return;

  const subscribers = readStorage("veyra_subscribers", []);

  if (subscribers.includes(email.toLowerCase())) {
    $("newsletterMessage").textContent = "You're already subscribed!";
    return;
  }

  subscribers.push(email.toLowerCase());

  localStorage.setItem(
    "veyra_subscribers",
    JSON.stringify(subscribers)
  );

  $("newsletterMessage").textContent =
    "Thank you! You're on the list!";

  $("newsletterEmail").value = "";
});

/* =====================================================
   16. ADMIN LOGIN
===================================================== */

$("adminAccess").addEventListener("click", () => {
  openModal(`
    <div class="account-form">
      <p class="eyebrow">RESTRICTED ACCESS</p>
      <h2>Admin login</h2>

      <form id="adminLoginForm">
        <label>Username
          <input id="adminUsername" required>
        </label>

        <label>Password
          <input id="adminPassword" type="password" required>
        </label>

        <button class="dark-button" type="submit">LOGIN</button>
      </form>

      <p style="font-size:10px;margin-top:15px">
        Demo credentials: admin / Veyra@123
      </p>
    </div>
  `);

  $("adminLoginForm").addEventListener("submit", event => {
    event.preventDefault();

    if (
      $("adminUsername").value === "admin" &&
      $("adminPassword").value === "Veyra@123"
    ) {
      closeModal();
      $("adminSection").hidden = false;
      $("adminSection").scrollIntoView({ behavior: "smooth" });
      renderAdmin();
      showToast("Admin dashboard opened.");
    } else {
      showToast("Incorrect username or password.");
    }
  });
});

/* =====================================================
   17. ADMIN DASHBOARD
===================================================== */

$("closeAdmin").addEventListener("click", () => {
  $("adminSection").hidden = true;
});

function renderAdmin() {
  $("adminProductCount").textContent = products.length;

  $("adminStockCount").textContent = products.reduce(
    (sum, product) => sum + Number(product.stock), 0
  );

  $("adminOrderCount").textContent = orders.length;

  $("adminRevenue").textContent = money(
    orders.reduce((sum, order) => sum + order.total, 0)
  );

  $("adminProductList").innerHTML = products.map(product => `
    <div class="admin-product-row">
      <div>
        <strong>${escapeHTML(product.name)}</strong>
        <small>
          ${escapeHTML(product.category)} · ${money(product.price)}
          · Stock: ${product.stock}
        </small>
      </div>

      <div>
        <button data-edit-product="${product.id}">Edit</button>
        <button data-delete-product="${product.id}">Delete</button>
      </div>
    </div>
  `).join("");

  $("adminOrders").innerHTML = orders.length
    ? orders.slice(0, 10).map(order => `
        <div class="order-row">
          <strong>${escapeHTML(order.id)}</strong> —
          ${escapeHTML(order.customer)}
          <br>
          <span>
            ${escapeHTML(order.date)} · ${money(order.total)}
            · ${escapeHTML(order.status)}
          </span>
        </div>
      `).join("")
    : "<p>No orders placed yet.</p>";
}

function resetAdminForm() {
  $("productForm").reset();
  $("editProductId").value = "";
  $("adminFormTitle").textContent = "Add a product";
  $("adminSave").textContent = "Save product";
}

$("adminCancel").addEventListener("click", resetAdminForm);

/* =====================================================
   18. ADD AND EDIT PRODUCTS
===================================================== */

$("productForm").addEventListener("submit", event => {
  event.preventDefault();

  const id = $("editProductId").value;
  const existing = id ? getProduct(id) : null;

  const productData = {
    id: existing ? existing.id : Date.now(),
    name: $("adminName").value.trim(),
    category: $("adminCategory").value,
    price: Number($("adminPrice").value),
    oldPrice: existing ? existing.oldPrice : null,
    stock: Number($("adminStock").value),

    sizes: $("adminSizes").value
      .split(",")
      .map(size => size.trim().toUpperCase())
      .filter(Boolean),

    colours: $("adminColours").value
      .split(",")
      .map(colour => colour.trim())
      .filter(Boolean),

    image: $("adminImage").value.trim() ||
      "https://placehold.co/600x800/e9dfd0/735541?text=VEYRA",

    description: $("adminDescription").value.trim()
  };

  if (
    !productData.name ||
    productData.price <= 0 ||
    productData.stock < 0 ||
    !productData.sizes.length
  ) {
    showToast("Please enter valid product details.");
    return;
  }

  if (existing) {
    products = products.map(product =>
      product.id === existing.id ? productData : product
    );

    showToast("Product updated!");
  } else {
    products.unshift(productData);
    showToast("New product added!");
  }

  saveData();
  resetAdminForm();
  renderProducts();
  renderAdmin();
});

/* =====================================================
   19. ADMIN EDIT AND DELETE BUTTONS
===================================================== */

$("adminProductList").addEventListener("click", event => {
  const editButton = event.target.closest("[data-edit-product]");
  const deleteButton = event.target.closest("[data-delete-product]");

  if (editButton) {
    const product = getProduct(editButton.dataset.editProduct);
    if (!product) return;

    $("editProductId").value = product.id;
    $("adminName").value = product.name;
    $("adminCategory").value = product.category;
    $("adminPrice").value = product.price;
    $("adminStock").value = product.stock;
    $("adminSizes").value = product.sizes.join(", ");
    $("adminColours").value = (product.colours || []).join(", ");
    $("adminImage").value = product.image;
    $("adminDescription").value = product.description || "";

    $("adminFormTitle").textContent = "Edit product";
    $("adminSave").textContent = "Update product";

    $("productForm").scrollIntoView({ behavior: "smooth" });
  }

  if (deleteButton) {
    const id = Number(deleteButton.dataset.deleteProduct);
    const product = getProduct(id);

    if (product && confirm(`Delete "${product.name}"?`)) {
      products = products.filter(item => item.id !== id);
      wishlist = wishlist.filter(item => item !== id);
      cart = cart.filter(item => item.id !== id);

      saveData();
      updateCounts();
      renderProducts();
      renderAdmin();

      showToast("Product deleted.");
    }
  }
});

/* =====================================================
   20. INITIALISE APPLICATION
===================================================== */

$("copyright").textContent = new Date().getFullYear();

updateCounts();
renderProducts();

console.log("VEYRA successfully loaded!");
console.log("Catalogue Version: 3");
console.log("Total products:", products.length);
console.log("Western Wear:", products.filter(p => p.category === "western").length);
console.log("Ethnic Wear:", products.filter(p => p.category === "ethnic").length);
console.log("Party Wear:", products.filter(p => p.category === "party").length);
console.log("Casual Wear:", products.filter(p => p.category === "casual").length);
