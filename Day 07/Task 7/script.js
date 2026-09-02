
// ============================================================
// NTI Mini Store - Day 7 - GUI with DOM
// ============================================================

var products = [
  { id: 1, name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
  { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
  { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
  { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
];

var nextProductId = 5;
var currentSearchResults = products.slice();

var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productQuantityInput = document.getElementById("productQuantity");
var addProductBtn = document.getElementById("addProductBtn");
var formMessage = document.getElementById("formMessage");

var productsTableBody = document.getElementById("productsTableBody");
var statProductCount = document.getElementById("statProductCount");
var statTotalValue = document.getElementById("statTotalValue");
var statAvgPrice = document.getElementById("statAvgPrice");
var statOutOfStock = document.getElementById("statOutOfStock");

var searchInput = document.getElementById("searchInput");
var searchBtn = document.getElementById("searchBtn");
var resetSearchBtn = document.getElementById("resetSearchBtn");
var sortBtn = document.getElementById("sortBtn");
var sortOrder = document.getElementById("sortOrder");
var filterBtn = document.getElementById("filterBtn");
var categoryFilter = document.getElementById("categoryFilter");

var editModal = document.getElementById("editModal");
var closeModalBtn = document.getElementById("closeModalBtn");
var cancelEditBtn = document.getElementById("cancelEditBtn");
var saveEditBtn = document.getElementById("saveEditBtn");
var editProductId = document.getElementById("editProductId");
var editProductName = document.getElementById("editProductName");
var editProductPrice = document.getElementById("editProductPrice");
var editProductCategory = document.getElementById("editProductCategory");
var editProductQuantity = document.getElementById("editProductQuantity");
var editMessage = document.getElementById("editMessage");

var categoryGroups = document.getElementById("categoryGroups");

function toNumber(value) {
  var parsed = Number(value);
  return isNaN(parsed) ? 0 : parsed;
}

function isValidText(value) {
  return typeof value === "string" && value.trim() !== "";
}

function isValidPrice(value) {
  return typeof value === "number" && !isNaN(value) && value > 0;
}

function isValidQuantity(value) {
  return typeof value === "number" && !isNaN(value) && value >= 0 && value % 1 === 0;
}

function validateProduct(name, price, category, quantity) {
  if (!isValidText(name)) {
    return "Error: Product name is required";
  }

  if (!isValidPrice(price)) {
    return "Error: Price must be greater than zero";
  }

  if (!isValidText(category)) {
    return "Error: Category is required";
  }

  if (!isValidQuantity(quantity)) {
    return "Error: Quantity must be a valid non-negative integer";
  }

  return null;
}

function createProduct(name, price, category, quantity) {
  var cleanName = typeof name === "string" ? name.trim() : name;
  var cleanCategory = typeof category === "string" ? category.trim() : category;
  var error = validateProduct(cleanName, price, cleanCategory, quantity);

  if (error) {
    return { success: false, message: error };
  }

  var newProduct = {
    id: nextProductId,
    name: cleanName,
    price: Number(price),
    category: cleanCategory,
    quantity: Number(quantity)
  };

  products.push(newProduct);
  nextProductId += 1;
  return { success: true, product: newProduct, message: "Product added successfully!" };
}

function getProductById(id) {
  return products.find(function (product) {
    return product.id === id;
  }) || null;
}

function updateProduct(id, name, price, category, quantity) {
  var product = getProductById(id);

  if (!product) {
    return { success: false, message: "Error: Product not found" };
  }

  var cleanName = typeof name === "string" ? name.trim() : name;
  var cleanCategory = typeof category === "string" ? category.trim() : category;
  var error = validateProduct(cleanName, price, cleanCategory, quantity);

  if (error) {
    return { success: false, message: error };
  }

  product.name = cleanName;
  product.price = Number(price);
  product.category = cleanCategory;
  product.quantity = Number(quantity);

  return { success: true, product: product, message: "Product updated successfully!" };
}

function deleteProduct(id) {
  var index = products.findIndex(function (product) {
    return product.id === id;
  });

  if (index === -1) {
    return { success: false, message: "Error: Product not found" };
  }

  products.splice(index, 1);
  return { success: true, message: "Product deleted successfully!" };
}

function filterProducts(keyword) {
  var searchTerm = String(keyword || "").trim().toLowerCase();

  if (!searchTerm) {
    return products.slice();
  }

  return products.filter(function (product) {
    return product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);
  });
}

function hasDuplicateName(name) {
  var searchName = String(name || "").trim().toLowerCase();

  return products.some(function (product) {
    return product.name.trim().toLowerCase() === searchName;
  });
}

function sortByPrice(order) {
  var sorted = products.slice().sort(function (a, b) {
    return a.price - b.price;
  });

  if ((order || "asc").toLowerCase() === "desc") {
    sorted.reverse();
  }

  return sorted;
}

function getStoreStats() {
  var totalValue = products.reduce(function (sum, product) {
    return sum + (product.price * product.quantity);
  }, 0);

  var avgPrice = products.length > 0 ?
    products.reduce(function (sum, product) {
      return sum + product.price;
    }, 0) / products.length : 0;

  return {
    productCount: products.length,
    totalStockValue: totalValue.toFixed(2),
    averagePrice: avgPrice.toFixed(2),
    outOfStockCount: products.filter(function (product) {
      return product.quantity === 0;
    }).length
  };
}

function groupByCategory() {
  return products.reduce(function (groups, product) {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }

    groups[product.category].push(product);
    return groups;
  }, {});
}

function showMessage(element, message, isSuccess) {
  if (!element) return;
  element.textContent = message;
  element.hidden = false;
  element.setAttribute("data-status", isSuccess ? "success" : "error");
}

function clearMessage(element) {
  if (!element) return;
  element.textContent = "";
  element.hidden = true;
  element.removeAttribute("data-status");
}

function renderTable(productsToRender) {
  productsToRender = Array.isArray(productsToRender) ? productsToRender : products.slice();
  productsTableBody.innerHTML = "";

  productsToRender.forEach(function (product) {
    var row = document.createElement("tr");
    var stockBadge = product.quantity > 0 ?
      "In Stock (" + product.quantity + ")" :
      "Out of Stock";

    var actionButtons = document.createElement("div");

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      openEditModal(product.id);
    });

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteProductFromUI(product.id);
    });

    actionButtons.appendChild(editButton);
    actionButtons.appendChild(deleteButton);

    var cells = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td")
    ];

    cells[0].textContent = product.id;
    cells[1].textContent = product.name;
    cells[2].textContent = product.price.toFixed(2) + " EGP";
    cells[3].textContent = product.category;
    cells[4].textContent = product.quantity;
    cells[5].textContent = stockBadge;
    cells[6].appendChild(actionButtons);

    cells.forEach(function (cell) {
      row.appendChild(cell);
    });

    productsTableBody.appendChild(row);
  });
}

function updateStats() {
  var stats = getStoreStats();
  statProductCount.textContent = stats.productCount;
  statTotalValue.textContent = stats.totalStockValue + " EGP";
  statAvgPrice.textContent = stats.averagePrice + " EGP";
  statOutOfStock.textContent = stats.outOfStockCount;
}

function updateCategoryFilter() {
  var categories = {};
  products.forEach(function (product) {
    categories[product.category] = true;
  });

  var currentValue = categoryFilter.value;
  categoryFilter.innerHTML = '<option value="">All Categories</option>';

  Object.keys(categories).forEach(function (category) {
    var option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  if (Object.keys(categories).indexOf(currentValue) !== -1) {
    categoryFilter.value = currentValue;
  }
}

function renderCategoryGroups() {
  var groups = groupByCategory();
  categoryGroups.innerHTML = "";

  Object.keys(groups).forEach(function (category) {
    var groupBox = document.createElement("div");
    var title = document.createElement("h3");
    title.textContent = category;

    var list = document.createElement("ul");

    groups[category].forEach(function (product) {
      var item = document.createElement("li");

      var name = document.createElement("span");
      name.textContent = product.name;

      var price = document.createElement("span");
      price.textContent = product.price.toFixed(2) + " EGP";

      item.appendChild(name);
      item.appendChild(price);
      list.appendChild(item);
    });

    groupBox.appendChild(title);
    groupBox.appendChild(list);
    categoryGroups.appendChild(groupBox);
  });
}

function refreshAllUI() {
  updateStats();
  updateCategoryFilter();
  renderTable(currentSearchResults);
  renderCategoryGroups();
}

function openEditModal(id) {
  var product = getProductById(id);
  if (!product) return;

  editProductId.value = product.id;
  editProductName.value = product.name;
  editProductPrice.value = product.price;
  editProductCategory.value = product.category;
  editProductQuantity.value = product.quantity;
  clearMessage(editMessage);
  editModal.hidden = false;
}

function closeEditModal() {
  editModal.hidden = true;
}

function deleteProductFromUI(id) {
  if (!confirm("Are you sure you want to delete this product?")) {
    return;
  }

  var result = deleteProduct(id);
  if (result.success) {
    currentSearchResults = products.slice();
    refreshAllUI();
    showMessage(formMessage, result.message, true);
    setTimeout(function () {
      clearMessage(formMessage);
    }, 2500);
  }
}

addProductBtn.addEventListener("click", function () {
  var name = productNameInput.value;
  var price = toNumber(productPriceInput.value);
  var category = productCategoryInput.value;
  var quantity = toNumber(productQuantityInput.value);

  if (hasDuplicateName(name)) {
    showMessage(formMessage, "Error: Product name already exists!", false);
    return;
  }

  var result = createProduct(name, price, category, quantity);

  if (result.success) {
    showMessage(formMessage, result.message, true);
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productQuantityInput.value = "";
    currentSearchResults = products.slice();
    refreshAllUI();
    setTimeout(function () {
      clearMessage(formMessage);
    }, 2500);
  } else {
    showMessage(formMessage, result.message, false);
  }
});

searchBtn.addEventListener("click", function () {
  var keyword = searchInput.value;
  if (keyword.trim() === "") {
    showMessage(formMessage, "Please enter a search term", false);
    return;
  }

  currentSearchResults = filterProducts(keyword);
  renderTable(currentSearchResults);
  showMessage(formMessage, "Found " + currentSearchResults.length + " result(s)", true);
  setTimeout(function () {
    clearMessage(formMessage);
  }, 2500);
});

resetSearchBtn.addEventListener("click", function () {
  searchInput.value = "";
  currentSearchResults = products.slice();
  renderTable(currentSearchResults);
  clearMessage(formMessage);
});

sortBtn.addEventListener("click", function () {
  var order = sortOrder.value;
  currentSearchResults = sortByPrice(order);
  renderTable(currentSearchResults);
  showMessage(formMessage, "Sorted by price (" + order + ")", true);
  setTimeout(function () {
    clearMessage(formMessage);
  }, 2500);
});

filterBtn.addEventListener("click", function () {
  var selectedCategory = categoryFilter.value;
  currentSearchResults = selectedCategory ?
    products.filter(function (product) {
      return product.category === selectedCategory;
    }) : products.slice();

  renderTable(currentSearchResults);
  showMessage(formMessage, "Filtered by: " + (selectedCategory || "All"), true);
  setTimeout(function () {
    clearMessage(formMessage);
  }, 2500);
});

closeModalBtn.addEventListener("click", function () {
  closeEditModal();
});

cancelEditBtn.addEventListener("click", function () {
  closeEditModal();
});

window.addEventListener("click", function (event) {
  if (event.target === editModal) {
    closeEditModal();
  }
});

saveEditBtn.addEventListener("click", function () {
  var id = Number(editProductId.value);
  var name = editProductName.value;
  var price = toNumber(editProductPrice.value);
  var category = editProductCategory.value;
  var quantity = toNumber(editProductQuantity.value);

  var result = updateProduct(id, name, price, category, quantity);

  if (result.success) {
    showMessage(editMessage, result.message, true);
    setTimeout(function () {
      closeEditModal();
      currentSearchResults = products.slice();
      refreshAllUI();
      clearMessage(editMessage);
    }, 1200);
  } else {
    showMessage(editMessage, result.message, false);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  refreshAllUI();
});
