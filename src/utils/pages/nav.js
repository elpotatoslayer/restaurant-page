
const navbar = () => {
  const nav = document.createElement('nav');

  const navContent = document.createElement('ul');
  navContent.className = 'nav nav-content justify-content-center';
  navContent.innerHTML = `  
  <li class="nav-item">
  <a class="nav-link active text-white" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="#">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="#">Contact</a>
  </li>
  `;

  nav.appendChild(navContent);
  return nav.outerHTML;
}

export default navbar;