import React from "react";
import { Button } from 'tabler-react';

function FooterNote() {
  return (
    <>
      Alat undian berhadiah daring yang dibuat untuk memilih pemenang secara acak jauh lebih mudah. Memilih pemenang secara acak kini lebih mudah dari sebelumnya! Pemilih acak, undian, undian, kontes.
      <Button.List>
        <Button
          className="footer-social-button"
          color="primary"
          icon="facebook"
          href="https://www.facebook.com/erfan007p/"
          RootComponent="a"
        />
        <Button
          className="footer-social-button"
          color="danger"
          icon="instagram"
          href="https://www.instagram.com/erfan007p/"
          RootComponent="a"
        />
      </Button.List>
    </>
  );
}

export default FooterNote;
