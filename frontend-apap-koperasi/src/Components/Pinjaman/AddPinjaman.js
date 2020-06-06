import React, { Component } from 'react'
import { Card, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import MyToast from '../MyToast';
export default class AddPinjaman extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.pinjamanChange = this.pinjamanChange.bind(this);
        this.submitPinjaman = this.submitPinjaman.bind(this);
    }

    // eslint-disable-next-line
    initialState = {
        id: '', id_anggota: '', status: '', jumlah_pengembalian: '', jumlah_pinjaman: '', tanggal_disetujui: '', tanggal_pengajuan: '', tanggal_pengembalian: ''
    }

    componentDidMount() {
        const pinjamanId = +this.props.match.params.id;
        if (pinjamanId) {

            this.getPinjamanbyId();

        }
    };

    getPinjamanbyId = (pinjamanId) => {
        axios.get("http://localhost:8080/pinjaman/view/1")
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        id: response.data.id,
                        nama_anggota: response.data.nama_anggota,
                        jumlah_pengembalian: response.data.jumlah_pengembalian,
                        jumlah_pinjaman: response.data.jumlah_pinjaman,
                        tanggal_disetujui: response.data.tanggal_disetujui,
                        tanggal_pengajuan: response.data.tanggal_pengajuan,
                        tanggal_pengembalian: response.data.tanggal_pengembalian,
                    });
                }
            }).catch((error) => {
            console.log("Ada error -" + error);
        })
    };

    resetPinjaman = () => {
        this.setState(() => this.initialState);
    };

    submitPinjaman = event => {
        event.preventDefault();

        const pinjaman = {
            nama_anggota: this.state.nama_anggota,
            jumlah_pengembalian: this.state.jumlah_pengembalian,
            jumlah_pinjaman: this.state.jumlah_pinjaman,
            tanggal_disetujui: new Date(this.state.tanggal_disetujui),
            tanggal_pengajuan: new Date(this.state.tanggal_pengajuan),
            tanggal_pengembalian: new Date(this.state.tanggal_pengembalian)
        };

        axios.post("http://localhost:8080/pinjaman/add", pinjaman)
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

    pinjamanChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        const { id_anggota, status, jumlah_pengembalian, jumlah_pinjaman, tanggal_disetujui, tanggal_pengajuan, tanggal_pengembalian} = this.state;
        return (

            <div>
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <MyToast show={this.state.show} message={"Pinjaman berhasil disimpan."} />
                </div>
                <Card>
                    <Card.Header>
                        <h5>Form Tambah Pinjaman</h5>
                    </Card.Header>
                    <Form onReset={this.resetPinjaman} onSubmit={this.submitPinjaman} id="pinjamanFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridIdAnggota">
                                    <Form.Label>Id Anggota</Form.Label>
                                    <Form.Control required
                                                  type="text" placeholder="Id Anggota" name="id_anggota"
                                                  value={id_anggota}
                                                   autoComplete="off"
                                                  onChange={this.pinjamanChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridStatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control required
                                                  type="text" placeholder="Status" name="status"
                                                  value={status}
                                                  autoComplete="off"
                                                  onChange={this.pinjamanChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridjumlah_pengembalian">
                                    <Form.Label>Jumlah Kembali</Form.Label>
                                    <Form.Control required
                                                  type="text" placeholder="Jumlah Kembali" name="jumlah_pengembalian"
                                                  value={jumlah_pengembalian}
                                                  autoComplete="off"
                                                  onChange={this.pinjamanChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridJumlah_pinjaman">
                                    <Form.Label>Jumlah Pinjaman</Form.Label>
                                    <Form.Control required
                                                  type="text" placeholder="Jumlah Pinjaman" name="jumlah_pinjaman"
                                                  value={jumlah_pinjaman}
                                                  autoComplete="off"
                                                  onChange={this.pinjamanChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formTanggal_disetujui">
                                    <Form.Label>Tanggal Disetujui</Form.Label>
                                    <Form.Control required
                                                  type="date" placeholder="Tanggal Disetujui" name="tanggal_disetujui"
                                                  value={tanggal_disetujui}
                                                  autoComplete="off"
                                                  onChange={this.pinjamanChange} />
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formTanggal_pengajuan">
                                    <Form.Label>Tanggal Pengajuan</Form.Label>
                                    <Form.Control required
                                                  type="date" placeholder="Tanggal pengajuan" name="tanggal_pengajuan"
                                                  value={tanggal_pengajuan}
                                                  autoComplete="off"
                                                  onChange={this.pinjamanChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridTanggal_pengembalian">
                                    <Form.Label>Tanggal Pengembalian</Form.Label>
                                    <Form.Control required
                                                  type="date" placeholder="Tanggal Pengembalian" name="tanggal_pengembalian"
                                                  value={tanggal_pengembalian}
                                                  autoComplete="off"
                                                  onChange={this.pinjamanChange}>
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

