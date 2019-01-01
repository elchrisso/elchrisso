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
              <NavItem className="active">
                <NavLink href="/musicbox">
                  MusicBox <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink href="/tracks">
                  Tracks <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink href="/mixes">
                  Mixes <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink href="/gratitudinator">
                  Gratitudinator <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink href="/devjournal">
                  cb's Dev Journal <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink href="/practicetools">
                  Practice Tools <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CbNavbar;
