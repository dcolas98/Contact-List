import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<form>
		<div class="form-group">
		  <label for="exampleInputEmail1">Full Name</label>
		  <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp"/>
		  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
		</div>
		<div class="form-group">
		  <label for="exampleInputEmail1">Email address</label>
		  <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
		  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
		</div>
		<div class="form-group">
		  <label for="exampleInputPassword1">Phone Number</label>
		  <input type="text" id="exampleInputPassword1"/>
		</div>
		<div class="form-group">
		  <label for="exampleInputPassword1">Address</label>
		  <input type="text" id="exampleInputPassword1"/>
		</div>
		<div class="form-group form-check">
		  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
		  <label class="form-check-label" for="exampleCheck1">Check me out</label>
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
	  </form>
	);
};

export default Home;
