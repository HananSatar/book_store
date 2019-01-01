import React, { Component } from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import 'whatwg-fetch'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading:true,
           name:'',
            age:'',
           email: '',
          password: ''
         // user:[]
        };
      }
      handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
          })
    }

    render() {
        return (
            
                <form method="post" action="#">
        <Col xs={12} sm={6} md={4}>
          <Well style={{'margin':'30px'}}>
         
            <Panel Register=' Register'>
              <FormGroup controlId="name">
                <ControlLabel>name</ControlLabel>
                <FormControl type="text" placeholder="Enter name" ref="name" />
              </FormGroup>
              <FormGroup controlId="age">
                <ControlLabel>age</ControlLabel>
                <FormControl type="text" placeholder="Enter Age" ref="age" />
              </FormGroup>
              <FormGroup controlId="email">
                <ControlLabel>email *</ControlLabel>
                <FormControl type="text" placeholder="Email" ref="email"/>
              </FormGroup>
              <FormGroup controlId="password">
                <ControlLabel>passwordr *</ControlLabel>
                <FormControl type="text" placeholder="Enter password" ref="password"/>
              </FormGroup>
            </Panel>
          </Well>
        </Col>
        </form>
      
        )
    }
}

export default Register;