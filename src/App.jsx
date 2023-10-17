import React, { useState } from "react";
import styled from "styled-components";

import "./reset.css";
import "./App.css";

function App() {
	const [useForm, setUseForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const [useFormErrors, setUseFormErrors] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const inputHandler = (e) => {
		const { value, name } = e.target;

		setUseForm({
			...useForm,
			[name]: value,
		});
	};
	const submitHandler = (e) => {
		e.preventDefault();
		errorHandler();
	};

	const errorHandler = () => {
		const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		const errors = {};

		if (useForm.firstName.trim() === "") {
			errors.firstName = `First Name cannot be empty`;
		}
		if (useForm.lastName.trim() === "") {
			errors.lastName = `Last Name cannot be empty`;
		}
		if (!emailRegex.test(useForm.email)) {
			errors.email = `Looks like this is not an email`;
		}
		if (useForm.password.trim() === "") {
			errors.password = `Password cannot be empty`;
		}
		setUseFormErrors(errors);
		if (Object.keys(errors).length === 0) {
			console.log(`login succesful`);
		}
	};
	return (
		<div className="body-container">
			<TextWrapper>
				<TextTitle>Learn to code by watching others</TextTitle>
				<TextP>
					See how experienced developers solve problems in real-time. Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.
				</TextP>
			</TextWrapper>

			<FormWrapper>
				<p className="form-title">
					<span>Try it free 7 days</span> then $20/mo. thereafter
				</p>
				<FormCard>
					<Form onSubmit={submitHandler}>
						<Input
							onChange={inputHandler}
							type="text"
							name="firstName"
							placeholder="First Name"
							hasError={useFormErrors.firstName}
						/>
						{useFormErrors.firstName && (
							<span className="error"> {useFormErrors.firstName}</span>
						)}
						<Input
							onChange={inputHandler}
							type="text"
							name="lastName"
							placeholder="Last Name"
							hasError={useFormErrors.lastName}
						/>
						{useFormErrors.lastName && (
							<span className="error"> {useFormErrors.lastName}</span>
						)}
						<Input
							onChange={inputHandler}
							type="mail"
							name="email"
							placeholder="Email Address"
							hasError={useFormErrors.email}
						/>
						{useFormErrors.email && (
							<span className="error"> {useFormErrors.email}</span>
						)}
						<Input
							onChange={inputHandler}
							type="password"
							name="password"
							placeholder="Password"
							hasError={useFormErrors.password}
						/>
						{useFormErrors.password && (
							<span className="error"> {useFormErrors.password}</span>
						)}
						<div className="button-wrapper">
							<Button type="submit">CLAIM YOUR FREE TRIAL </Button>
							<p className="button-text">
								By clicking the button, you are agreeing to our
								<span className="btn-span">Terms and Services</span>
							</p>
						</div>
					</Form>
				</FormCard>
			</FormWrapper>
		</div>
	);
}

export default App;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 52.5rem;
	gap: 1.1rem;
`;
const TextTitle = styled.h1`
	font-size: 50px;
	font-weight: 700;
	line-height: 55px;
	letter-spacing: -0.5208333134651184px;
	text-align: left;
	color: #ffffff;
	@media (max-width: 1000px) {
		text-align: center;
	}
`;
const TextP = styled.p`
	font-size: 16px;
	font-weight: 500;
	line-height: 26px;
	letter-spacing: 0px;
	text-align: left;
	color: white;
	max-width: 90%;
	@media (max-width: 1000px) {
		text-align: center;
	}
`;
const FormWrapper = styled.div`
	displey: flex;
	flex-direction: column;
	gap: 2.4rem;
	align-items: center;
	jusify-content: center;
	max-width: 54rem;
`;
const FormCard = styled.div`
	background-color: #ffffff;
	width: 100%;
	padding: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	box-shadow: 0 8px 0 0 #00000025;
	border-radius: 1.2rem;
	margin-top: 2.4rem;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
const Input = styled.input`
	background-color: transparent;
	padding: 1.5rem 3.2rem;
	font-size: 14px;
	font-weight: 600;
	line-height: 26px;
	letter-spacing: 0.25px;
	text-align: left;
	color: #3d3b48;
	width: 100%;
	border-radius: 1.2rem;
	border: solid 1px ${(props) => (props.hasError ? "#dc3545" : "#dedede")};
	&:focus {
		border-color: #5e54a4;
	}
`;
const Button = styled.button`
	padding: 1.5rem 3.2rem;
	background-color: #38cc8b;
	font-size: 15px;
	font-weight: 600;
	line-height: 26px;
	letter-spacing: 0.25px;
	text-align: center;
	color: white;
	width: 100%;
	border-radius: 1.2rem;
	border: solid 1px #dedede;
	box-shadow: 0 -4px 0 0 #00000017;
	cursor: pointer;
`;
