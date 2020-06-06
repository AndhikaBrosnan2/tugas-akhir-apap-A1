import React, {Component} from "react";
import AnggotaDataService from "./AnggotaDataService";

const ANGGOTA_NAME = 'anggota'

class ListAnggotaComponent extends Component{

    constructor(props) {
        super(props)
        this.state = {
            anggota: [],
            message: null
        }
        this.refreshAnggota = this.refreshAnggota.bind(this)
    }

    componentDidMount() {
        this.refreshAnggota();
    }

    refreshAnggota(){
        AnggotaDataService.retrievalAnggota(ANGGOTA_NAME) //HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({anggota: response.data})
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>All Anggota</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nama</th>
                            <th>NIA</th>
                            <th>Alamat</th>
                            <th>Ktp</th>
                            <th>Tanggal Lahir</th>
                            <th>Telepon</th>
                            <th>Tempat Lahir</th>
                            <th>Pengurus</th>
                            <th>UUID</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.anggota.map(
                                anggota =>
                                    <tr key={anggota.id}>
                                        <td>{anggota.id}</td>
                                        <td>{anggota.nama}</td>
                                        <td>{anggota.nia}</td>
                                        <td>{anggota.alamat}</td>
                                        <td>{anggota.ktp}</td>
                                        <td>{anggota.tanggal_lahir}</td>
                                        <td>{anggota.telepon}</td>
                                        <td>{anggota.tempat_lahir}</td>
                                        <td>{anggota.is_pengurus}</td>
                                        <td>{anggota.uuid}</td>
                                    </tr>
                            )
                        }
                        <tr>
                            <td>Lokal</td>
                            <td>Lokal</td>
                            <td>Lokal</td>
                            <td>Lokal</td>
                            <td>Lokal</td>
                            <td>Lokal</td>
                            <td>Lokal</td>
                            <td>Lokal</td>
                            <td>Lokal</td>
                            <td>Lokal</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }

}
export default ListAnggotaComponent