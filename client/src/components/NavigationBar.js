import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class NavigationBar extends Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar></Collapse>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="http://s3694787.freevnn.com">
                                    Github
                        </NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );

    };

}

export default NavigationBar;

