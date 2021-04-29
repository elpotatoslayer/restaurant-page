import navbar from './utils/pages/nav';
import food from './utils/img/board.jpg';
import './utils/css/style.css';
import home from './utils/pages/home';
import homeItems from './utils/pages/home-items';
import contact from './utils/pages/contact';


const display = () => {
  const content = document.querySelector('#content');

  content.innerHTML = `
  <div>
    ${navbar()}
    ${home()}
  </div>
  <div id="display-text">
  ${contact()}
  </div>
`;
};

const loadEventListers = () => {
  const switchTabs = event => {
    const content = document.getElementById('display-text');
    switch (event.target.element) {
      case 'Home':
        content.innerHTML = home();
        break;
      case 'Contact':
        content.innerHTML = contact();
      default:
        break;
    }
  }
}

// loadEventListers();
display();

