const menu = () => {
  const menuItems = document.createElement('ul');
  menuItems.className = 'menu-list';
  menuItems.innerHTML = `
  <li class="list-group-item d-flex justify-content-between">
    <strong class="font-weight-bold">#</strong>
    <span class="font-weight-bold">Item </span>
    <span class="font-weight-bold">Ingredients</span>
    <span class="font-weight-bold">Price</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
    <strong class="font-weight-bold">1</strong>
    <span>Pizza Salami </span>
    <span>Salami, Cheese, Ketchup</span>
    <span>1.99$</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
    <strong class="font-weight-bold">2</strong>
    <span>Pasta </span>
    <span>Pasta, Cheese, Olives</span>
    <span>2.99$</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
    <strong class="font-weight-bold">3</strong>
    <span>French Fries </span>
    <span>Curly Fried with Cheese</span>
    <span>0.99$</span>
  </li>
  <li class="list-group-item d-flex justify-content-between">
  <strong class="font-weight-bold">4</strong>
  <span>Pizza Salami </span>
  <span>Salami, Cheese, Ketchup</span>
  <span>1.99$</span>
</li>
<li class="list-group-item d-flex justify-content-between">
  <strong class="font-weight-bold">5</strong>
  <span>Pasta </span>
  <span>Pasta, Cheese, Olives</span>
  <span>2.99$</span>
</li>
<li class="list-group-item d-flex justify-content-between">
  <strong class="font-weight-bold">6</strong>
  <span>French Fries </span>
  <span>Curly Fried with Cheese</span>
  <span>0.99$</span>
</li>

  
  `;
  return menuItems.outerHTML;
};

export default menu;