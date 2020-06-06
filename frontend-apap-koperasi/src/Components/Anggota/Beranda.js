import React, { Component } from 'react';
import { Card, Table, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import MyToast from '../MyToast';
import { Link } from 'react-router-dom';

export default class Beranda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listAnggota: []
        };
    }

    componentDidMount() {

        this.getAllAnggota();

    }

    getAllAnggota() {
        axios.get("http://localhost:8080/anggota/viewall")
            .then(response => response.data)
            .then((data) => {
                this.setState({ listAnggota: data });
                console.log(data);
            });
    }

    deleteAnggota = (anggotaId) => {
        axios.delete("http://localhost:8080/anggota/delete/" + anggotaId)
            .then(response => {
                if (response.data !== null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 2000);
                    this.setState({
                        listAnggota: this.state.listAnggota.filter(anggota => anggota.id !== anggotaId)
                    });
                } else {
                    this.setState({ "show": false });
                }
            })
    }

    render() {
        return (
            <div>
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <MyToast  show = {this.state.show} message= {"Anggota berhasil dihapus."}  />
                </div>
                <Card>
                    <Card.Header className="border bg-gray"><h5>Daftar Anggota</h5></Card.Header>
                    <Card.Body>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>Nomor</th>
                                    <th>Nama</th>
                                    <th>Nia</th>
                                    <th>Alamat</th>
                                    <th>Pengurus</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listAnggota.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="6">No Data available</td>
                                        </tr> :
                                        this.state.listAnggota.map((anggota, index) => (
                                            <tr key={anggota.id}>
                                                <td>{index + 1}</td>
                                                <td>{anggota.nama}</td>
                                                <td>{anggota.nia}</td>
                                                <td>{anggota.alamat}</td>
                                                <td>{anggota.is_pengurus ? "Ya" : "Tidak"}</td>
                                                <td>
                                                    <ButtonGroup>
                                                        <Link to={"detailAnggota/" + anggota.id} className="btn btn-sm btn-outline-primary mr-2">Detail</Link>
                                                        <Button size="sm" variant="outline-danger" onClick={this.deleteAnggota.bind(this, anggota.id)}>Delete</Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>

        );
    }
}