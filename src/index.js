import navbar from './utils/pages/nav';
import './utils/css/style.css';
import home from './utils/pages/home';
import homeItems from './utils/pages/home-items';
import contact from './utils/pages/contact';
import menu from './utils/pages/menu';


const display = () => {
  const content = document.querySelector('#content');

  content.innerHTML = `
  <div>
    ${navbar()}
    ${home()}
  </div>
  <div id="display-text">
  
  </div>
`;
};

const loadEventListers = () => {
  const switchTabs = event => {
    const content = document.querySelector('#display-text');
    switch (event.target.textContent) {
      case 'Menu':
        content.innerHTML = menu();
        break;
      case 'Contact':
        content.innerHTML = contact();
        break;
      default:
        content.innerHTML = homeItems();
    }

    const currentActive = document.querySelectorAll('.nav-links a.active');
    currentActive.forEach(node => node.classList.remove('active'));
    event.target.classList.add('active');
  }

  const navLinks = document.querySelectorAll('.nav-item a');
  navLinks.forEach(navLink => navLink.addEventListener('click', switchTabs));
}

display();
loadEventListers();
