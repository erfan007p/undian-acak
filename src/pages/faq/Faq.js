import React, { Component } from "react";
import { APP_NAME } from "../../constants.js";
import { Helmet } from "react-helmet";
import SiteWrapper from "../../SiteWrapper";

import { Card } from "tabler-react";
import { FAQ, REVIEW } from "../Json-ld";

class Faq extends Component {
  render() {
    return (
      <SiteWrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{APP_NAME} - Frequently Asked Questions (FAQ)</title>
          <script type="application/ld+json">{FAQ}</script>
          <script type="application/ld+json">{REVIEW}</script>
        </Helmet>
        <h1>Frequently Asked Questions (FAQ)</h1>
        <Card>
          <Card.Body>
            <Card>
              <Card.Status color="blue" />
              <Card.Header>
                <Card.Title>
                  Alat apa yang bisa saya gunakan untuk melakukan undian berhadiah?
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <b>
                  <a href="http://undian.prenges.com/">Simulasi Undangan Berhadiah</a>
                </b>{" "}
                adalah alat hebat yang dipercaya dan digunakan oleh banyak perusahaan dan individu untuk memastikan proses undian yang adil dan transparan. Alat ini gratis dan mudah digunakan, yang hanya memerlukan beberapa konfigurasi untuk segera memulai.
              </Card.Body>
            </Card>
            <Card>
              <Card.Status color="blue" />
              <Card.Header>
                <Card.Title>Bagaimana cara kerja undian berhadiah?</Card.Title>
              </Card.Header>
              <Card.Body>
               Undian berhadiah adalah kompetisi keberuntungan di mana orang-orang secara acak memperoleh tiket bernomor/bernama dan setiap tiket memiliki kesempatan untuk memenangkan hadiah. Tiket bernomor/bernama dipilih secara acak dan pemenang yang terpilih akan membawa pulang hadiah.
              </Card.Body>
            </Card>
            <Card>
              <Card.Status color="blue" />
              <Card.Header>
                <Card.Title>Bagaimana cara mengadakan undian berhadiah?</Card.Title>
              </Card.Header>
              <Card.Body>
                Perusahaan atau individu mana pun dapat dengan mudah menyelenggarakan undian berhadiah daring hanya dengan menetapkan persyaratan tertentu dan menyiapkan hadiah bagi para pemenang. Alat seperti {" "}
                <b>
                  <a href="http://undian.prenges.com/">Simulator Undian Berhadiah</a>
                </b>{" "}
                kemudian digunakan untuk memilih pemenang, memastikan proses pengundian yang adil dan transparan.
              </Card.Body>
            </Card>
            <Card>
              <Card.Status color="blue" />
              <Card.Header>
                <Card.Title>Apa hadiah undian yang bagus?</Card.Title>
              </Card.Header>
              <Card.Body>
                Hadiah seperti Perangkat Elektronik, Keranjang Hadiah, Produk Musiman, Televisi, Voucher Hadiah, dan Voucher Perjalanan adalah ide hadiah undian yang populer.
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </SiteWrapper>
    );
  }
}

export default Faq;
