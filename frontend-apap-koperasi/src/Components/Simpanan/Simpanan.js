import React, { Component } from 'react';
import { Card, Table, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import MyToast from '../MyToast';
import { Link } from 'react-router-dom';

export default class Beranda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listSimpanan: []
        };
    }

    componentDidMount() {

        this.getAllSimpanan();

    }

    getAllSimpanan() {
        axios.get("http://localhost:8080/simpanan/viewall")
            .then(response => response.data)
            .then((data) => {
                this.setState({ listSimpanan: data });
                console.log(data);
            });
    }

    deleteSimpanan = (simpananId) => {
        axios.delete("http://localhost:8080/simpanan/delete/" + simpananId)
            .then(response => {
                if (response.data !== null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 2000);
                    this.setState({
                        listSimpanan: this.state.listSimpanan.filter(simpanan => simpanan.id !== simpananId)
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
                    <MyToast  show = {this.state.show} message= {"Simpanan berhasil dihapus."}  />
                </div>
                <Card>
                    <Card.Header className="border bg-gray"><h5>Daftar Simpanan</h5></Card.Header>
                    <Card.Body>
                        <Table bordered hover>
                            <thead>
                            <tr>
                                <th>Nomor</th>
                                <th>Id Anggota Penerima</th>
                                <th>Id Anggota Penyetor</th>
                                <th>Id Jenis Simpanan</th>
                                <th>Jumlah</th>
                                <th>Tanggal Setor</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.listSimpanan.length === 0 ?
                                    <tr align="center">
                                        <td colSpan="7">No Data available</td>
                                    </tr> :
                                    this.state.listSimpanan.map((simpanan, index) => (
                                        <tr key={simpanan.id}>
                                            <td>{index + 1}</td>
                                            <td>{simpanan.id_anggota_penerima}</td>
                                            <td>{simpanan.id_anggota_penyetor}</td>
                                            <td>{simpanan.id_jenis_simpanan}</td>
                                            <td>{simpanan.jumlah}</td>
                                            <td>{simpanan.tanggal_setor}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <Link to={"detailSimpanan/" + simpanan.id} className="btn btn-sm btn-outline-primary mr-2">Detail</Link>
                                                    <Button size="sm" variant="outline-danger" onClick={this.deleteSimpanan.bind(this, simpanan.id)}>Delete</Button>
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