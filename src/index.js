import navbar from './utils/pages/nav';
import food from './utils/img/board.jpg';
import './utils/css/style.css';
import home from './utils/pages/home';


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
    const content = document.getElementById('display-text');
    switch (event.target.element) {
      case 'Home':
        content.innerHTML = home();
        break;
    
      default:
        break;
    }
  }
}

// loadEventListers();
display();

