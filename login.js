import React, {Component} from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
          })
    }

    render() {
        return (
            <React.Fragment>
            
                        <form method="post" action="#">
            <Panel Login=' Login'>
              <FormGroup controlId="email">
                <ControlLabel>email</ControlLabel>
                <input onChange={this.handleChange.bind(this)} value={this.state.email} type="email" name="email" id="email" placeholder="Email Address" />
              </FormGroup>
              <FormGroup controlId="Password">
                <ControlLabel>email</ControlLabel>  
              <input onChange={this.handleChange.bind(this)} value={this.state.password} type="password" name="password" id="password" placeholder="Password" />
              </FormGroup>                

                   <button><input type="submit" value="Login" /></button>
                   
                       
                    </Panel>
                    </form>
            </React.Fragment>
        )
    }
}

export default Login;