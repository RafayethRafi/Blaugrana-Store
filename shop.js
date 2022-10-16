let subtotal = 0;
let count = 0;
let total = 0;

const calculateTax = subtotal => {
    const tax = subtotal * 0.15;
    const formattedTax = tax.toFixed(2);
    return formattedTax;
};

const calculateTotal = subtotal => {
    const tax = calculateTax(subtotal);
    const total = parseFloat(subtotal) + parseFloat(tax) + 70;
    const formattedTotal = total.toFixed(2);
    return formattedTotal;
};


function myFunction(price) {
    subtotal = subtotal + price;
    count += 1;
    const formattedSubtotal = subtotal.toFixed(2);
    const tax = calculateTax(subtotal);
    total = calculateTotal(subtotal);

    document.getElementById("total_price").innerHTML = (`
        <table class="table table-bordered table-responsive display-4">
        <thead>
        <tr>
            <th colspan="2">My Cart</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><span><i class="fa-solid fa-shirt"></i></span><span>Total Products</span></td>
            <td>${count}</td>
        </tr>
        <tr>
        <td><i class="fas fa-sharp fa-solid fa-dollar-sign"></i><span>Price</span></td>
            <td>$${formattedSubtotal}</td>
        </tr>
        <tr>
        <td><i class="fa-solid fa-truck"></i> <span>Delivery</span></td>
            <td>$20</td>
        </tr>
        <tr>
        <td><i class="fa-solid fa-truck-arrow-right"></i><span>Shipping</span></td>
            <td>$50</td>
        </tr>
        <tr>
        <td><i class="fas fa-sharp fa-solid fa-dollar-sign"></i><span>Total Price</span></td>
            <td>$${formattedSubtotal + 70}</td>
        </tr>
        <tr>
        <td><i class="fas fa-sharp fa-solid fa-dollar-sign"></i><span>Tax</span></td>
            <td>$${tax}</td>
        </tr>
        <tr>
        <td><i class="fas fa-sharp fa-solid fa-dollar-sign"></i><span>Total Price with Tax</span></td>
            <td>$${total}</td>
        </tr>
        </tbody>
        </table>
  `);
};

function checkOut(){
    alert("Yout total bill was "+ total +".");
    document.getElementById("total_price").innerHTML = (
        `<table class="table table-bordered table-responsive display-3">
        <thead>
          <tr>
            <th colspan="2">My Cart</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><i class="fa-solid fa-shirt"></i><h4>Total Products</h4></td>
            <td>0</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Delivery</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Total Price</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Total Price with Tax</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>`
    )
    total=0;
    subtotal=0;
    count=0;
}
