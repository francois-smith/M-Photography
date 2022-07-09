import React, { useEffect }  from "react";
import { ContactContainer } from "./contact-styles"
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ContactImage from "../../media/images/contact/contact-image.jpg"
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

	return (
		<div className="contact-body">
			<ContactContainer>
				<div className="form-container">
					<h2>Let's Start Your Journey</h2>
					<form>
						<ThemeProvider theme={theme}>
							<div className="form-input">
								<TextField fullWidth label="Name*" id="name-input" variant="standard"/>
							</div>
							<div className="contact-input" >
								<div className="form-input">
									<TextField fullWidth label="Email*" id="email-input" variant="standard"/>
								</div>
								<div className="form-input">
									<TextField fullWidth label="Phone*" id="phone-input" variant="standard"/>
								</div>
							</div>
							<div className="form-input">
								<FormControl variant="standard" fullWidth>
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
									<MenuItem value={"Studio Milkbath/Cakesmash"}>Newborn or Cakesmash</MenuItem>
									<ListSubheader style={{paddingLeft: "30px"}}>On Location</ListSubheader>
									<MenuItem value={"On Location Couple/Engagement"}>Couple or Engagement</MenuItem>
									<MenuItem value={"On Location Family"}>Family</MenuItem>
									<MenuItem value={"On Location Graduation"}>Graduation</MenuItem>
									<MenuItem value={"On Location Maternity"}>Maternity</MenuItem>
									<MenuItem value={"On Location Matric Farewell"}>Matric Farewell</MenuItem>
									<MenuItem value={"On Location Mommy & Me"}>Mommy & Me</MenuItem>
									<MenuItem value={"On Location Portrait/Portfolio"}>Portrait or Portfolio</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div className="form-input">
								<TextField id="message-input" label="Message*" multiline fullWidth rows={3} variant="standard" />
							</div>
							<div className="form-input">
								<Button variant="contained" style={{color: "#413f3d"}}>Send Message</Button>
							</div>
						</ThemeProvider>
					</form>
				</div>
				<div className="form-image">
					<img src={ContactImage} alt="Baby Shoot" />
				</div>
			</ContactContainer>
		</div>
	);
}

export default Contact;