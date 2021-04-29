const home = () => {
  const UIhome = document.createElement('div');
  UIhome.className = 'main-banner';

  UIhome.innerHTML = `
    <div class="container-fluid pt-5 bg-dark text-center banner" >
      <h1 class="display-1 text-white mt-4 mb-4 m-h1">Table For Two<h1>
      <div class="mt-5">
        <input type="button" value="Reserve Table" class="btn __btn bg-white text-dark p-4"</input>
        <input type="button" value="Browser Menu" class="btn __btn text-white p-4"</input>
      </div>
    
    </div>
  
  `;
return UIhome.outerHTML;
}

export default home;