import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar bg="light" variant="light" expand="lg">
                <Link to={""} className="navbar-brand">
                APAP-Koperasi
                </Link>
                <Nav className="mr-auto">
                    <Link to={"/Beranda"} className="nav-link">Anggota</Link>
                    <Link to={"/addAnggota"} className="nav-link">Tambah Anggota</Link>
                    <Link to={"/Pinjaman"} className="nav-link">Pinjaman</Link>
                    <Link to={"/addPinjaman"} className="nav-link">Tambah Pinjaman</Link>
                    <Link to={"/Simpanan"} className="nav-link">Simpanan</Link>
                    <Link to={"/addSimpanan"} className="nav-link">Tambah Simpanan</Link>
                </Nav>
                    <Button variant="outline-danger">Logout</Button>
            </Navbar>
        );
    }
}

export default NavigationBar;