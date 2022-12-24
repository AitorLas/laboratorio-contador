// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent
  const quantity = product.querySelector('.quantity input').value

  const subtotal = price * quantity
  product.querySelector('.subtotal span').textContent = subtotal
  
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll('.product')
  let total = 0

  allProducts.forEach(product => total += updateSubtotal(product))

  document.querySelector('#total-value span').textContent = total
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentElement.parentElement;
  product.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll('.btn-remove').forEach(btn => {
    btn.addEventListener('click', removeProduct)
  })
  //... your code goes here
});
