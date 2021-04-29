const homeItems = () => {
  const details = document.createElement('div');
  details.className = 'grid container-fluid';
  details.innerHTML =  `

  <div class="card text-center">
    <div class="card-body">
        <h3 class="card-title">Cheap prices</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <a href="#" class="btn btn-primary w-50 m-auto">Book A Table</a>
    </div>
  </div>

  <div class="card text-center">
    <div class="card-body">
        <h3 class="card-title">Michelin Stars</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <a href="#" class="btn btn-primary w-50 m-auto">Book A Table</a>
    </div>
  </div>
  <div class="card text-center">
    <div class="card-body">
        <h3 class="card-title">Takeaway</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <a href="#" class="btn btn-primary w-50 m-auto">Book A Table</a>
    </div>
  </div>
  <div class="card text-center">
    <div class="card-body">
        <h3 class="card-title">Cheap prices</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <a href="#" class="btn btn-primary w-50 m-auto">Book A Table</a>
    </div>
  </div>
  <div class="card text-center">
    <div class="card-body">
        <h3 class="card-title">Michelin Stars</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <a href="#" class="btn btn-primary w-50 m-auto">Book A Table</a>
    </div>
  </div>
  <div class="card text-center">
  <div class="card-body">
      <h3 class="card-title">Takeaway</h3>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      <a href="#" class="btn btn-primary w-50 m-auto">Book A Table</a>
  </div>
</div>  
  `;

  return details.outerHTML;
}

export default homeItems;