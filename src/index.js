import navbar from './utils/pages/nav';


const display = () => {
  const content = document.querySelector('#content');

  content.innerHTML = `
<div>
  ${navbar()}
</div>
<div id="display-text">

</div>
`;
};


display();
