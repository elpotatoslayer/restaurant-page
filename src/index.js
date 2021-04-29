import navbar from './utils/pages/nav';
import food from './utils/img/board.jpg';
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
  ${menu()}
  </div>
`;
};

const loadEventListers = () => {
  const switchTabs = event => {
    const content = document.getElementById('display-text');
    switch (event.target.element) {
      case 'Menu':
        content.innerHTML = menu();
        break;
      case 'Contact':
        content.innerHTML = contact();
      default:
        content.innerHTML = homeItems();
        break;
    }
  }
}

// loadEventListers();
display();

