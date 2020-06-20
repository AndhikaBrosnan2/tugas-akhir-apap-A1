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
                                {/*<Link to={"/edit/"+this.state.simpanan.id} className="btn btn-sm btn-outline-info float-right">Edit</Link>*/}
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            <div className="row">
                                <div className="col">
                                    <h6>Tanggal Setor</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.simpanan.tanggal_setor}</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6>Jumlah</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.simpanan.jumlah}</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6>Id Jenis Simpanan</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.simpanan.id_jenis_simpanan}</li>
                                    </ul>
                                </div>
                            </div>
                            <br></br>
                            <h6>Id Penyetor</h6>
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.simpanan.id_anggota_penyetor}</li>
                            </ul>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <h6>Id Anggota Penerima</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.state.simpanan.id_anggota_penerima}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}