import React from 'react';
//import logo from './logo.svg';
import './App.css';

import AddAnggota from './Components/Anggota/AddAnggota';
import Pinjaman from './Components/Pinjaman/Pinjaman';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Beranda from './Components/Anggota/Beranda';
import DetailAnggota from './Components/Anggota/DetailAnggota';
import Simpanan from "./Components/Simpanan/Simpanan";
import AddPinjaman from "./Components/Pinjaman/AddPinjaman";
import AddSimpanan from "./Components/Simpanan/AddSimpanan";
import Landing from "./Components/Landing";
import DetailSimpanan from "./Components/Simpanan/DetailSimpanan";
import DetailPinjaman from "./Components/Pinjaman/DetailPinjaman";

function App() {

  const marginTop = {
    marginTop: "20px"
  };

  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/detailAnggota/:id" exact component={DetailAnggota} />
              {/*<Route path="/detailAnggota/:id" exact component={DetailSimpanan} />*/}
              <Route path="/detailPinjaman/:id" exact component={DetailPinjaman} />
              <Route path="/Beranda" exact component={Beranda} />
              <Route path="/addAnggota" exact component={AddAnggota} />
              <Route path="/edit/:id" exact component={AddAnggota} />
              <Route path="/Pinjaman" exact component={Pinjaman} />
              <Route path="/addPinjaman" exact component={AddPinjaman} />
              <Route path="/Simpanan" exact component={Simpanan} />
              <Route path="/addSimpanan" exact component={AddSimpanan} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
