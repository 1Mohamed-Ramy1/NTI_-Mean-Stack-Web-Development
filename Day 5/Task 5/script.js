// ============================================================
// NTI Mini Store - CRUD without DOM
// ============================================================

var products = [
  { id: 1, name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
  { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
  { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
  { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
];

var nextProductId = 5;

// ------------------------- Helpers --------------------------

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
    return "Error: name is required";
  }

  if (!isValidPrice(price)) {
    return "Error: price must be greater than 0";
  }

  if (!isValidText(category)) {
    return "Error: category is required";
  }

  if (!isValidQuantity(quantity)) {
    return "Error: quantity must be a non-negative integer";
  }

  return null;
}

function printProducts(list) {
  console.table(list);
  return list;
}

function toNumber(value) {
  var number = Number(value);
  return isNaN(number) ? NaN : number;
}

// --------------------------- CRUD ----------------------------

function createProduct(name, price, category, quantity) {
  var cleanName = typeof name === "string" ? name.trim() : name;
  var cleanCategory = typeof category === "string" ? category.trim() : category;
  var error = validateProduct(cleanName, price, cleanCategory, quantity);

  if (error) {
    console.log(error);
    return error;
  }

  var product = {
    id: nextProductId,
    name: cleanName,
    price: price,
    category: cleanCategory,
    quantity: quantity
  };

  products.push(product);
  nextProductId++;
  return product;
}

function getAllProducts() {
  return printProducts(products);
}

function getProductById(id) {
  var product = products.find(function (item) {
    return item.id === id;
  });

  if (!product) {
    console.log("Error: product not found");
    return null;
  }

  return product;
}

function updateProduct(id, name, price, category, quantity) {
  var product = getProductById(id);

  if (!product) {
    return "Error: product not found";
  }

  var cleanName = typeof name === "string" ? name.trim() : name;
  var cleanCategory = typeof category === "string" ? category.trim() : category;
  var error = validateProduct(cleanName, price, cleanCategory, quantity);

  if (error) {
    console.log(error);
    return error;
  }

  product.name = cleanName;
  product.price = price;
  product.category = cleanCategory;
  product.quantity = quantity;
  return product;
}

function deleteProduct(id) {
  var productIndex = products.findIndex(function (item) {
    return item.id === id;
  });

  if (productIndex === -1) {
    console.log("Error: product not found");
    return null;
  }

  var product = products[productIndex];
  if (!confirm("Delete " + product.name + "?")) {
    return null;
  }

  products.splice(productIndex, 1);
  return product;
}

function filterProducts(keyword) {
  var searchTerm = String(keyword).trim().toLowerCase();

  return products.filter(function (product) {
    return product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);
  });
}

// ---------------------- Required B tasks ---------------------

function hasDuplicateName(name) {
  var searchName = name.trim().toLowerCase();

  return products.some(function (product) {
    return product.name.trim().toLowerCase() === searchName;
  });
}

function sortByPrice(order = "asc") {
  var sortedProducts = products.toSorted(function (firstProduct, secondProduct) {
    return firstProduct.price - secondProduct.price;
  });

  if (order.toLowerCase() === "desc") {
    sortedProducts.reverse();
  }

  return sortedProducts;
}

function getStoreStats() {
  var totalValue = products.reduce(function (total, product) {
    return total + product.price * product.quantity;
  }, 0);

  return {
    productCount: products.length,
    totalStockValue: totalValue.toFixed(2),
    averagePrice: (products.reduce(function (total, product) {
      return total + product.price;
    }, 0) / products.length).toFixed(2),
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

function filterByPriceRange(min = 0, max = Infinity) {
  return products.filter(function (product) {
    return product.price >= min && product.price <= max;
  });
}

var filterOdds = function (list) {
  return list.filter((product) => product.quantity > 0);
};

function withAfterAction(action, callback) {
  var result = action();
  callback(result);
  return result;
}

// IIFE keeps the store methods together and demonstrates private setup code.
var store = (function () {
  return {
    products: products,
    createProduct: createProduct,
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    filterProducts: filterProducts
  };
})();

function addMany(...items) {
  return items.map(function (item) {
    return createProduct(item.name, item.price, item.category, item.quantity);
  });
}

// ---------------------- Interactive menu ---------------------

function readProductData() {
  var name = prompt("Product name:");
  var price = prompt("Product price:");
  var category = prompt("Product category:");
  var quantity = prompt("Product quantity:");

  if (name === null || price === null || category === null || quantity === null) {
    return null;
  }

  return {
    name: name,
    price: toNumber(price),
    category: category,
    quantity: toNumber(quantity)
  };
}

function startApp() {
  var choice;

  while (true) {
    choice = prompt(
      "===== NTI Mini Store =====\n" +
      "1) Add product\n" +
      "2) Show all products\n" +
      "3) Show product by ID\n" +
      "4) Update product\n" +
      "5) Delete product\n" +
      "6) Search / Filter\n" +
      "0) Exit"
    );

    if (choice === null || choice.trim() === "0") {
      console.log("Application closed");
      return;
    }

    switch (choice.trim()) {
      case "1": {
        var newProduct = readProductData();
        if (newProduct) {
          console.log(createProduct(
            newProduct.name,
            newProduct.price,
            newProduct.category,
            newProduct.quantity
          ));
        }
        break;
      }
      case "2":
        getAllProducts();
        break;
      case "3": {
        var productId = toNumber(prompt("Product ID:"));
        console.log(getProductById(productId));
        break;
      }
      case "4": {
        var updateId = toNumber(prompt("Product ID:"));
        var updatedProduct = readProductData();
        if (updatedProduct) {
          console.log(updateProduct(
            updateId,
            updatedProduct.name,
            updatedProduct.price,
            updatedProduct.category,
            updatedProduct.quantity
          ));
        }
        break;
      }
      case "5": {
        var deleteId = toNumber(prompt("Product ID:"));
        console.log(deleteProduct(deleteId));
        break;
      }
      case "6": {
        var keyword = prompt("Search by name or category:");
        if (keyword !== null) {
          printProducts(filterProducts(keyword));
        }
        break;
      }
      default:
        console.log("Error: choose a number from 0 to 6");
    }
  }
}

// startApp() is intentionally not called automatically.
