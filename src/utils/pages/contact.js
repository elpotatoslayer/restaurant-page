const contact = () => {
  const info = document.createElement('div');
  info.className = 'contact p-4 row';
  info.innerHTML = `
    <div class="col-md-5 jumbotron mx-auto p-3" >
      <h2 class="py-4">Reach Us</h2>
      <form>
        <div class="form-group">
          <label for="name" >Name</lable>
          <input class="form-control" type="text" id="name" placeholder="Enter name" required>
        </div>
        <div class="form-group">
          <label for="email" >Email address</lable>
          <input class="form-control" type="email" name="gender" id="email" placeholder="Enter Email" required>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3 placeholder="Message" ></textarea>
        </div>
        <div class=" pt-3 mx-auto">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
       
      </form>
    </div>
  `
  return info.outerHTML;
}

export default contact;