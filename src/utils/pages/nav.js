
const navbar = () => {
  const nav = document.createElement('nav');

  const navContent = document.createElement('ul');
  navContent.className = 'nav justify-content-center bd-dark text-white';
  navContent.innerHTML = `  
  <li class="nav-item">
  <a class="nav-link active" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
  `;

  nav.appendChild(navContent);
  return nav.outerHTML;
}

export default navbar;