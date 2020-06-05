import React, { Component } from 'react';
import { Card, Table, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import MyToast from '../MyToast';
import { Link } from 'react-router-dom';

export default class Beranda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listPinjaman: []
        };
    }

    componentDidMount() {

        this.getAllPinjaman();

    }

    getAllPinjaman() {
        axios.get("http://localhost:8080/pinjaman/viewall")
            .then(response => response.data)
            .then((data) => {
                this.setState({ listPinjaman: data });
                console.log(data);
            });
    }

    deletePinjaman = (pinjamanId) => {
        axios.delete("http://localhost:8080/pinjaman/delete/" + pinjamanId)
            .then(response => {
                if (response.data !== null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 2000);
                    this.setState({
                        listPinjaman: this.state.listPinjaman.filter(pinjaman => pinjaman.id !== pinjamanId)
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
                    <MyToast  show = {this.state.show} message= {"Pinjaman berhasil dihapus."}  />
                </div>
                <Card>
                    <Card.Header className="border bg-gray"><h5>Daftar Pinjaman</h5></Card.Header>
                    <Card.Body>
                        <Table bordered hover>
                            <thead>
                            <tr>
                                <th>Nomor</th>
                                <th>Id Anggota</th>
                                <th>Status</th>
                                <th>Jumlah Kembali</th>
                                <th>Jumlah Pinjaman</th>
                                <th>Tanggal Disetujui</th>
                                <th>Tanggal Pengajuan</th>
                                <th>Tanggal Pengembalian</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.listPinjaman.length === 0 ?
                                    <tr align="center">
                                        <td colSpan="9">No Data available</td>
                                    </tr> :
                                    this.state.listPinjaman.map((pinjaman, index) => (
                                        <tr key={pinjaman.id}>
                                            <td>{index + 1}</td>
                                            <td>{pinjaman.id_anggota}</td>
                                            <td>{pinjaman.status}</td>
                                            <td>{pinjaman.jumlah_pengembalian}</td>
                                            <td>{pinjaman.jumlah_pinjaman}</td>
                                            <td>{pinjaman.tanggal_disetujui}</td>
                                            <td>{pinjaman.tanggal_pengajuan}</td>
                                            <td>{pinjaman.tanggal_pengembalian}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <Link to={"detailPinjaman/" + pinjaman.id} className="btn btn-sm btn-outline-primary mr-2">Detail</Link>
                                                    <Button size="sm" variant="outline-danger" onClick={this.deletePinjaman.bind(this, pinjaman.id)}>Delete</Button>
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