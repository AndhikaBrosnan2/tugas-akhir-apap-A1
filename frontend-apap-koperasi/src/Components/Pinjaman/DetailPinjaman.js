import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import moment from 'moment';

export default class DetailPinjaman extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pinjaman: {}
        };

        // const tglLahir = new Date(this.state.Pinjaman.tanggal_lahir);
    }



    componentDidMount() {
        this.getPinjaman();
    }

    getPinjaman() {
        const { match: { params } } = this.props;
        Axios.get("http://localhost:8080/pinjaman/view/" + params.id)
            .then(response => response.data)
            .then((data) => {
                this.setState({ pinjaman: data });
                console.log(data);
            });
    }


    render() {
        return (
            <div>
                <Card>
                    <Card.Header>
                        <div className="row">
                            <div className="col">
                                <h5>Detail Pinjaman</h5>
                            </div>
                            <div className="col">
                                {/*<Link to={"/edit/"+this.pinjaman.id} className="btn btn-sm btn-outline-info float-right">Edit</Link>*/}
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            <div className="row">
                                <div className="col">
                                    <h6>Id Anggota</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.pinjaman.id_anggota}</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6>Status</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.pinjaman.status}</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6>Jumlah Kembali</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.pinjaman.jumlah_pengembalian}</li>
                                    </ul>
                                </div>
                            </div>
                            <br></br>
                            <h6>Jumlah Pinjaman</h6>
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.pinjaman.jumlah_pinjaman}</li>
                            </ul>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <h6>Tanggal Disetujui</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.pinjaman.tanggal_disetujui}</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6>Tanggal Pengajuan</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.pinjaman.tanggal_pengajuan}</li>
                                    </ul>
                                </div>
                            </div>
                            <br></br>
                            <h6>Tanggal Pengembalian</h6>
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.pinjaman.tanggal_pengembalian}</li>
                            </ul>

                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}