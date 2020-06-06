import React, { Component } from 'react'
import { Card, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import MyToast from '../MyToast';
export default class AddSimpanan extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.simpananChange = this.simpananChange.bind(this);
        this.submitSimpanan = this.submitSimpanan.bind(this);
    }

    initialState = {
        id: '', tanggal_setor: '', jumlah: '', id_jenis_simpanan: '', id_anggota_penyetor: '', id_anggota_penerima: ''
    }

    componentDidMount() {
        const simpananId = +this.props.match.params.id;
        if (simpananId) {

            this.getSimpananbyId();

        }
    };

    getSimpananbyId = (simpananId) => {
        axios.get("http://localhost:8080/simpanan/view/1")
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        id: response.data.id,
                        tanggal_setor: response.data.tanggal_setor,
                        jumlah: response.data.jumlah,
                        id_jenis_simpanan: response.data.id_jenis_simpanan,
                        id_anggota_penyetor: response.data.id_anggota_penyetor,
                        id_anggota_penerima: response.data.id_anggota_penerima
                    });
                }
            }).catch((error) => {
            console.log("Ada error -" + error);
        })
    };

    resetSimpanan = () => {
        this.setState(() => this.initialState);
    };

    submitSimpanan = event => {
        event.preventDefault();

        const simpanan = {
            tanggal_setor: new Date(this.state.tanggal_setor),
            jumlah: this.state.jumlah,
            id_jenis_simpanan: this.state.id_jenis_simpanan,
            id_anggota_penyetor: this.state.id_anggota_penyetor,
            id_anggota_penerima: this.state.id_anggota_penerima
        };


        axios.post("http://localhost:8080/simpanan/add", simpanan)
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

    simpananChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        const { tanggal_setor, jumlah, id_jenis_simpanan, id_anggota_penyetor, id_anggota_penerima} = this.state;
        return (

            <div>
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <MyToast show={this.state.show} message={"Simpanan berhasil disimpan."} />
                </div>
                <Card>
                    <Card.Header>
                        <h5>Form Tambah Simpanan</h5>
                    </Card.Header>
                    <Form onReset={this.resetSimpanan} onSubmit={this.submitSimpanan} id="simpananFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTanggalSetor">
                                    <Form.Label>Tanggal Setor</Form.Label>
                                    <Form.Control required
                                                  type="date" placeholder="Tanggal Setor" name="tanggal_setor"
                                                  value={tanggal_setor} autoComplete="off"
                                                  onChange={this.simpananChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridJml">
                                    <Form.Label>Jumlah</Form.Label>
                                    <Form.Control required
                                                  type="text" placeholder="Jumlah" name="jumlah"
                                                  value={jumlah} autoComplete="off"
                                                  onChange={this.simpananChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridJnsSimpanan">
                                    <Form.Label>Id Jenis Simpanan</Form.Label>
                                    <Form.Control required
                                                  type="text" placeholder="Jenis Simpanan" name="id_jenis_simpanan"
                                                  value={id_jenis_simpanan} autoComplete="off"
                                                  onChange={this.simpananChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAgtPenyetor">
                                    <Form.Label>Id Anggota Penyetor</Form.Label>
                                    <Form.Control required
                                                  type="text" placeholder="Id Anggota Penyetor" name="id_anggota_penyetor"
                                                  value={id_anggota_penyetor} autoComplete="off"
                                                  onChange={this.simpananChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAgtPenerima">
                                    <Form.Label>Id Anggota Penerima</Form.Label>
                                    <Form.Control required
                                                  type="text" placeholder="Id Anggota Penerima" name="id_anggota_penerima"
                                                  value={id_anggota_penerima} autoComplete="off"
                                                  onChange={this.simpananChange} />
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

