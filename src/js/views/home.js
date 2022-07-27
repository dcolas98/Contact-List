import React, {useState, useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import {Context} from "../store/appContext"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	const {store, actions} = useContext(Context)
	const [contact, setContact] = useState({
		full_name: "",
		email: "",
		address: "",
		phone: "",
		agenda_slug: "class_agenda",
	})
	console.log(contact)

	let history = useHistory()
	return (
		<form>
			<h1 className='title' >Add a New Contact </h1>
			<div className='bigDiv'>
				<div class="form-group mb-3">
					<label for="exampleFormControlInput1">Email address:</label>
					<input type="text" onChange={(event)=> setContact({...contact, email: event.target.value})} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
				</div>
				<div class="form-group mb-3">
					<label for="exampleFormControlInput1">Full Name:</label>
					<input type="text" onChange={(event)=> setContact({...contact, full_name: event.target.value})} class="form-control" id="exampleFormControlInput1" placeholder="John Doe"/>
				</div>
				<div class="form-group mb-3">
					<label for="exampleFormControlInput1">Phone Number:</label>
					<input type="text" onChange={(event)=> setContact({...contact, phone: event.target.value})} class="form-control" id="exampleFormControlInput1" placeholder="(XXX)XXX-XXXX"/>
				</div>
				<div class="form-group mb-3">
					<label for="exampleFormControlInput1">Address:</label>
					<input type="text" onChange={(event)=> setContact({...contact, address: event.target.value})} class="form-control" id="exampleFormControlInput1" placeholder="123 N Appleseed Ln, Miami, FL 33147 "/>
				</div>
				<div class="form-group form-check">
				</div>
				<button type="submit" onClick={()=> {
						actions.createContact(contact)
						// history.push("/")
					}} class="butt btn btn-primary">Submit</button>
				<div class= "btc">
				<Link to="/contact">Back to Contacts</Link>
				</div>
			</div>
		</form>
	);
};