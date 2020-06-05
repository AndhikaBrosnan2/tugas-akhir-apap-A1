import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import moment from 'moment';

export default class DetailSimpanan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            simpanan: {}
        };

        // const tglLahir = new Date(this.state.simpanan.tanggal_lahir);
    }



    componentDidMount() {
        this.getSimpanan();
    }

    getSimpanan() {
        const { match: { params } } = this.props;
        Axios.get("http://localhost:8080/simpanan/view/" + params.id)
            .then(response => response.data)
            .then((data) => {
                this.setState({ simpanan: data });
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
                                <h5>Detail Simpanan</h5>
                            </div>
                            <div className="col">
                                <Link to={"/edit/"+this.state.simpanan.id} className="btn btn-sm btn-outline-info float-right">Edit</Link>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            <div className="row">
                                <div className="col">
                                    <h6>NIA</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.simpanan.nia}</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6>KTP</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.simpanan.ktp}</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6>UUID</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.simpanan.uuid_user}</li>
                                    </ul>
                                </div>
                            </div>
                            <br></br>
                            <h6>Nama</h6>
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.simpanan.nama}</li>
                            </ul>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <h6>Tempat Lahir</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.simpanan.tempat_lahir}</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6>Tanggal Lahir</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{moment(this.tglLahir).format('DD-MM-YYYY')}</li>
                                    </ul>
                                </div>
                            </div>
                            <br></br>
                            <h6>Alamat</h6>
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.simpanan.alamat}</li>
                            </ul>
                            <br></br>
                            <h6>Pengurus</h6>
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.simpanan.is_pengurus ? "Ya" : "Tidak"}</li>
                            </ul>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}