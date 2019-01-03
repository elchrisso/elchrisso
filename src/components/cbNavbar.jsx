import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./cbNavbar.css";

class CbNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="fixed-top" color="dark" light expand="md">
          <NavbarBrand href="/">elChrisso</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/musicbox" action>
                  MusicBox
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tracks" action>
                  Tracks
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/mixes">Mixes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/gratitudinator">Gratitudinator</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/devjournal">cb's Dev Journal</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/practicetools">Practice Tools</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/deliberateclimber">Deliberate Climber</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CbNavbar;
