// Get the menu items
const menuItems = document.querySelectorAll('.menu-item');

// Calculate the total and generate the invoice
function calculateTotal() {
  // Clear the invoice items
  const invoiceItems = document.getElementById('invoice-items');
  invoiceItems.innerHTML = '';

  let total = 0;

  // Loop through each menu item
  menuItems.forEach((menuItem, index) => {
    const quantityInput = menuItem.querySelector('input[type="number"]');
    const quantity = parseInt(quantityInput.value);

    // Only include items with a quantity greater than 0
    if (quantity > 0) {
      const itemName = menuItem.querySelector('h3').textContent;
      const price = 5; // Replace with the actual price for each item

      const itemTotal = quantity * price;
      total += itemTotal;

      // Create a row for the item in the invoice
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${itemName}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td>${itemTotal}</td>
      `;
      invoiceItems.appendChild(row);
    }
  });

  // Display the total in the invoice
  const totalCell = document.getElementById('total');
  totalCell.textContent = total;
}
