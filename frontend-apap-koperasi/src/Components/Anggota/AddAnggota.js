import React, { Component } from 'react'
import { Card, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import MyToast from '../MyToast';
export default class AddAnggota extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.anggotaChange = this.anggotaChange.bind(this);
        this.submitAnggota = this.submitAnggota.bind(this);
    }

    initialState = {
        id: '', nama: '', ktp: '', tempat_lahir: '', tanggal_lahir: '', alamat: '', telepon: '', is_pengurus: ''
    }

    componentDidMount() {
        const anggotaId = +this.props.match.params.id;
        if (anggotaId) {

            this.getAnggotabyId();

        }
    };

    getAnggotabyId = (anggotaId) => {
        axios.get("http://localhost:8080/anggota/view/1")
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        id: response.data.id,
                        nama: response.data.nama,
                        ktp: response.data.ktp,
                        tempat_lahir: response.data.tempat_lahir,
                        tanggal_lahir: response.data.tanggal_lahir,
                        alamat: response.data.alamat,
                        telepon: response.data.telepon,
                        is_pengurus: response.data.is_pengurus? "Ya" : "Tidak"
                    });
                }
            }).catch((error) => {
                console.log("Ada error -" + error);
            })
    };

    resetAnggota = () => {
        this.setState(() => this.initialState);
    };

    submitAnggota = event => {
        event.preventDefault();

        const anggota = {
            nama: this.state.nama,
            ktp: this.state.ktp,
            tempat_lahir: this.state.tempat_lahir,
            tanggal_lahir: new Date(this.state.tanggal_lahir),
            alamat: this.state.alamat,
            telepon: this.state.telepon,
            is_pengurus: this.state.is_pengurus
        };

        axios.post("http://localhost:8080/anggota/add", anggota)
            .then(response => {
                if (response.data != null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 2000);

                } else {
                    this.setState({ "show": false });
                }
            })
        this.setState(this.initialState);
    };

    anggotaChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        const { nama, ktp, tempat_lahir, tanggal_lahir, alamat, telepon, is_pengurus } = this.state;
        return (

            <div>
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <MyToast show={this.state.show} message={"Anggota berhasil disimpan."} />
                </div>
                <Card>
                    <Card.Header>
                        <h5>Form Tambah Anggota</h5>
                    </Card.Header>
                    <Form onReset={this.resetAnggota} onSubmit={this.submitAnggota} id="anggotaFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridNama">
                                    <Form.Label>Nama</Form.Label>
                                    <Form.Control required
                                        type="text" placeholder="Nama" name="nama"
                                        value={nama} autoComplete="off"
                                        onChange={this.anggotaChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridKTP">
                                    <Form.Label>KTP</Form.Label>
                                    <Form.Control required
                                        type="text" placeholder="KTP" name="ktp"
                                        value={ktp} autoComplete="off"
                                        onChange={this.anggotaChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTempat_lahir">
                                    <Form.Label>Tempat Lahir</Form.Label>
                                    <Form.Control required
                                        type="text" placeholder="Tempat Lahir" name="tempat_lahir"
                                        value={tempat_lahir} autoComplete="off"
                                        onChange={this.anggotaChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridTanggal_lahir">
                                    <Form.Label>Tanggal Lahir</Form.Label>
                                    <Form.Control required
                                        type="date" placeholder="Tanggal Lahir" name="tanggal_lahir"
                                        value={tanggal_lahir} autoComplete="off"
                                        onChange={this.anggotaChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAlamat">
                                    <Form.Label>Alamat</Form.Label>
                                    <Form.Control required
                                        type="text" placeholder="Alamat" name="alamat"
                                        value={alamat} autoComplete="off"
                                        onChange={this.anggotaChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridTelepon">
                                    <Form.Label>Telepon</Form.Label>
                                    <Form.Control required
                                        type="text" placeholder="Telepon" name="telepon"
                                        value={telepon} autoComplete="off"
                                        onChange={this.anggotaChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridIs_Pengurus">
                                    <Form.Label>Pengurus</Form.Label>
                                    <Form.Control required
                                        as="select" name="is_pengurus"
                                        value={is_pengurus} autoComplete="off"
                                        onChange={this.anggotaChange}>
                                        <option value={false}>Tidak</option>
                                        <option value={true}>Ya</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{ "textAlign": "right" }}>
                            <Button variant="outline-info mr-2" size="md" type="reset">
                                Reset
                        </Button>
                            <Button variant="success" size="md" type="submit">
                                Submit
                        </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>

        );
    }
}

