document.getElementById('runBtn').addEventListener('click', function () {
  const productName = prompt('Product name:') || '';
  const brand = prompt('Brand:') || '';
  const price = Number(prompt('Price:') || 0);
  const category = prompt('Category:') || '';
  const inStock = confirm('Is this product in stock?');

  const productInfo = {
    productName: productName,
    brand: brand,
    price: price,
    category: category,
    inStock: inStock
  };

  const message = `Card Product\nProduct: ${productName}\nBrand: ${brand}\nPrice: ${price}\nCategory: ${category}\nIn Stock: ${inStock}\nFirst Letter: ${productName[0] || ''}`;

  document.getElementById('mainTitle').innerText = 'Card Product';
  alert(message);
  console.log(productInfo);
  document.getElementById('result').innerText = message;
});