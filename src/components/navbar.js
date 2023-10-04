import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import headerLogo from '../assets/images/logo.png';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from "./home";
import Top from "./top";
import Trending from "./trending";
import Science from "./science";
import Entertainment from "./entertainment";
import Sports from "./sports";

export default class Navigationbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar className="bg-body-tertiary main-nav" bg="primary" data-bs-theme="dark" fixed="top" variant="dark">
                        <Container className="nav-sub-container">
                            <Navbar.Brand as={Link} to="/">
                                <img src={headerLogo} alt="News App" height={30} />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link as={Link} to="/" className="nav-link-a">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/science" className="nav-link-a">Science</Nav.Link>
                                    <Nav.Link as={Link} to="/sports" className="nav-link-a">Sports</Nav.Link>
                                    <Nav.Link as={Link} to="/top" className="nav-link-a">Top</Nav.Link>
                                    <Nav.Link as={Link} to="/trending" className="nav-link-a">Trending</Nav.Link>
                                    <Nav.Link as={Link} to="/entertainment" className="nav-link-a">Entertainment</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className="mt-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/science" element={<Science />} />
                        <Route path="/sports" element={<Sports />} />
                        <Route path="/top" element={<Top />} />
                        <Route path="/trending" element={<Trending />} />
                        <Route path="/entertainment" element={<Entertainment />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}





