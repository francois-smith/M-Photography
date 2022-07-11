import React, { useEffect }  from "react";
import { ContactContainer, NoticeContainer } from "./contact-styles"
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ContactImage from "../../media/images/contact/contact-image.jpg"
import GiftImage from "../../media/svgs/present.svg"
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';


const theme = createTheme({
	palette: {
		primary: {
			main: '#d8cfd0',
		}
	},
	typography: {
		fontFamily: [
		  'Nunito',
		  'Roboto',
		  '"Helvetica Neue"',
		  'Arial',
		  'sans-serif'
		].join(','),
	  }
});

function Contact() {
	useEffect(() => {
		document.title = "M Photography | Contact";
	}, []);

	const [session, setSession] = React.useState('');

	const handleChange = (event) => {
		setSession(event.target.value);
	};

	const submitForm = () => {
		if(validateName() && validateEmail() && validatePhone() && validateSession() && validateMessage()){
			let name = document.getElementsByName("name-field")[0].value;
			let email = document.getElementsByName("email-field")[0].value;
			let phone = document.getElementsByName("phone-field")[0].value;
			let message = document.getElementsByName("message-field")[0].value;

			const request = new XMLHttpRequest();
            request.open("POST", "https://maryna-m-photography.com/contact.php");
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send("name="+name+"&email="+email+"&session="+session.replaceAll(" ", "+")+"&phone="+phone+"&message="+message+"");
			showSuccess();
		}
	}

	function validateName(){
		if(document.getElementsByName("name-field")[0].value.length < 3){
			showError("Provided Name Is Too Short");
			return false;
		}
		else{
			return true;
		}
	}

	function validateEmail(){
		let email = document.getElementsByName("email-field")[0].value;
		let format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(!email.match(format)){
			showError("Invalid Email Adress Entered");
			return false;
		}
		else{
			return true;
		}
	}

	function validatePhone(){
		let phone = document.getElementsByName("phone-field")[0].value;
		let format = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

		if(!phone.match(format)){
			showError("Invalid Phone Number Entered");
			return false;
		}
		else{
			return true;
		}
	}

	function validateSession(){
		if(session === ""){
			showError("Please Select Session Type");
			return false;
		}
		else{
			return true;
		}
	}

	function validateMessage(){
		if(document.getElementsByName("message-field")[0].value.length < 20){
			showError("Provided Message Is Too Short");
			return false;
		}
		else{
			return true;
		}
	}


	const showError = (message) => {
		toast.error(message, {
			position: "top-center",
			autoClose: 3500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	}

	const showSuccess = () => {
		toast.success('Message Sent Successfully', {
			position: "top-center",
			autoClose: 3500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	}

	return (
		<div className="contact-body">
			<ContactContainer>
				<div className="form-container">
					<h2>Let's Start Your Journey</h2>
					<form>
						<ThemeProvider theme={theme}>
							<div className="form-input">
								<TextField name="name-field" required fullWidth label="Name" id="name-input" variant="standard"/>
							</div>
							<div className="contact-input" >
								<div className="form-input">
									<TextField name="email-field" required type={"email"} fullWidth label="Email" id="email-input" variant="standard"/>
								</div>
								<div className="form-input">
									<TextField name="phone-field" required fullWidth label="Phone" id="phone-input" variant="standard"/>
								</div>
							</div>
							<div className="form-input">
								<FormControl name="session-field" required variant="standard" fullWidth>
									<InputLabel id="session-type-input-label">Session Type</InputLabel>
									<Select
										id="session-type-input"
										value={session}
										onChange={handleChange}
										label="Session"
									>
									<ListSubheader style={{paddingLeft: "30px"}}>Studio</ListSubheader>
									<MenuItem value={"Studio Portfolio"}>Portfolio</MenuItem>
									<MenuItem value={"Studio Newborn"}>Newborn</MenuItem>
									<MenuItem value={"Studio Cakesmash"}>Cakesmash</MenuItem>
									<MenuItem value={"Studio Milkbath"}>Milkbath</MenuItem>
									<MenuItem value={"Studio Milestone"}>Milestone</MenuItem>
									<ListSubheader style={{paddingLeft: "30px"}}>On Location</ListSubheader>
									<MenuItem value={"Couple/Engagement"}>Couple or Engagement</MenuItem>
									<MenuItem value={"Family"}>Family</MenuItem>
									<MenuItem value={"Graduation"}>Graduation</MenuItem>
									<MenuItem value={"Maternity"}>Maternity</MenuItem>
									<MenuItem value={"Matric Farewell"}>Matric Farewell</MenuItem>
									<MenuItem value={"Mommy & Me"}>Mommy & Me</MenuItem>
									<MenuItem value={"Portrait/Portfolio"}>Portrait or Portfolio</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div className="form-input">
								<TextField name="message-field" required id="message-input" label="Message" multiline fullWidth rows={3} variant="standard" />
							</div>
							<div className="form-input">
								<Button onClick={submitForm} variant="contained" style={{color: "#413f3d"}}>Send Message</Button>
							</div>
						</ThemeProvider>
					</form>
				</div>
				<div className="form-image">
					<img src={ContactImage} alt="Baby Shoot" />
				</div>
			</ContactContainer>
			<NoticeContainer>
				<img src={GiftImage} alt="Presetn Image" />
				<p>Vouchers for any type of photoshoot also available on request</p>
			</NoticeContainer>
			<ToastContainer
				position="top-center"
				autoClose={3500}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
			/>
		</div>
	);
}

export default Contact;