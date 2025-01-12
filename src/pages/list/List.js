import React, { Component } from "react";
import { APP_NAME } from "../../constants.js";
import { Helmet } from "react-helmet";
import { REVIEW } from "../Json-ld";
import SiteWrapper from "../../SiteWrapper";

class Faq extends Component {
  render() {
    return (
      <SiteWrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{APP_NAME} - Tambah Jangkauan Facebook anda</title>
          <script type="application/ld+json">{REVIEW}</script>
        </Helmet>
        <h1>Daftarkan di undian.prenges.com untuk Menampilkan profil Facebook Anda Disini.</h1>
        <p>Kami adalah salah satu situs web undian berhadiah terbesar di dunia yang membantu banyak perusahaan dengan Search Engine Optimization (SEO) dengan backlink berkualitas tinggi.<br />
        Daftarkan Profil Facebook Anda hari ini untuk hasil Jangkauan terbaik.</p>
        <div className="w-full mx-auto">
        <iframe title="Daftar Di undian.prenges.com" src="https://docs.google.com/forms/d/e/1FAIpQLSfXWCTYTY5nD6IRVUTgRr0QZRSk2_2JDgSqoPpA1HaTHUS5Dw/viewform?embedded=true" width="640" height="1524" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
        </div>
      </SiteWrapper>
    );
  }
}

export default Faq;
