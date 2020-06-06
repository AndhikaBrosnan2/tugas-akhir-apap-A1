import React, { Component } from 'react';

export default class CreateAnggota extends Component {
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Business</h3>
                <form >
                    <div className="form-group">
                        <label>Nama Anggota:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>NIA: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>KTP: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Tempat Lahir: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Tanggal Lahir: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Alamat Lengkap: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Telepon: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Pengurus: </label>
                        {/*<input type="text" className="form-control"/>*/}
                        <select className="form-control" id="pengurus">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>UUID: </label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Tambah Anggota" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}