import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../../Services/authService';
import { getCurrentUser } from '../../Services/authService';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Input from '../Input/Input';
import {
    LoginContainer, 
    LoginTitle,
    LoginSlogan,
    LoginForm,
    Button,
    ForgetPassword,
    SigInHint,
    Span
} from './LoginStyledComponents';


class Login extends Component {
    state = { 
        data: { email: '', password: '' },
		errors: { email: '', password: '' }
     }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state.data;
        if (password.length < 8) {
            const errors = { email: "", password: "The Password must be 8 characters length" }
			this.setState({ errors });
            return ;
        }
        const response = await login(email, password);
        if (response.status === 200) {
            // this.props.history.location.pathname = "/attendence";
            // this.props.history.push('/attendence');
            const {state} = this.props.location;
			window.location= state? state.from.pathname: '/';

		}
		else {
			const errors = { email: "Not Valid Email or Password", password: "Not Valid Email or Password" }
			this.setState({ errors });
		}

    }
    handleChange = (event) => {
		const data = { ...this.state.data };
        const { name, value } = event.currentTarget;
		switch (name) {
			case "email":
				data.email = value;
				break;
			case "password":
				data.password = value;
				break;

			default:
				break;
        }
        this.setState({ data });
	};
    render() { 
		if (getCurrentUser()) return <Redirect to="/" />
		const { data, errors } = this.state;

        return ( 
            <Container>
                <Row>
                    <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={8}>
                        <LoginContainer>
                            <LoginTitle>Login</LoginTitle>
                            <LoginSlogan>Join Thousands of Companies That Use You in Every Day!</LoginSlogan>
                            <Row>
                                <Col xs={12} lg={8} lgOffset={2}>
                                    <LoginForm onSubmit={this.handleSubmit}>
                                        <Input onChange={this.handleChange} name="email" id="email" value={data.email} type="text" label="E-mail" error={errors.email} placeholder="enter your e-mail" focus={true}/>
                                        <Input onChange={this.handleChange} name="password" id="password" value={data.password} type="password" label="Password" error={errors.password} placeholder="enter your password" />
                                        <Row>
                                            <Col col={10} offset={1}>
                                                <ForgetPassword>Forget Password!</ForgetPassword>
                                            </Col>
                                        </Row>
                                        <Button>Login</Button>
                                        <SigInHint>Already User? <Span>Sign in now</Span></SigInHint>
                                    </LoginForm>
                                </Col>
                            </Row>
                        </LoginContainer>
                    </Col>
                    
                </Row>
            </Container>
         );
    }
}
 
export default Login;