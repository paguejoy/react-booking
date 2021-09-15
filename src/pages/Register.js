import React, {useState, useEffect} from 'react';

/*react-bootstrap components*/
import {Container, Form, Button} from 'react-bootstrap';

export default function Register(){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [verifyPassword, setVerifyPassword] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);

	useEffect( () => {
		if(email !== '' && password !== '' && verifyPassword !== '' && password === verifyPassword){
			setIsDisabled(false)
		} else {
			setIsDisabled(true)
		}
	}, [email, password, verifyPassword]);


	function register(e){
		e.preventDefault();

		alert('Registration Successful, you may now log in');

		setEmail('');
		setPassword('');
		setVerifyPassword('');
	}

	return(
		<Container className="mb-5">
			<h1 className="text-center">Register</h1>
			<Form onSubmit={register}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" value={email}
					onChange={(e)=> setEmail(e.target.value) }/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" value={password}
					onChange={(e)=> setPassword(e.target.value) }/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formVerifyPassword">
					<Form.Label>Verify Password</Form.Label>
					<Form.Control type="password" placeholder="Verify Password"  value={verifyPassword}
					onChange={(e)=> setVerifyPassword(e.target.value)}/>
				</Form.Group>

				<Button variant="primary" type="submit" disabled={isDisabled}>Submit</Button>
			</Form>
		</Container>
	)
}