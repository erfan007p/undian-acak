import React from "react";
import { Nav, Button } from 'tabler-react';

const NavItems = () => {
  return (
    <Nav.Item type="div" className="d-none d-md-flex">
      <Button
        className="social-button"
        color="primary"
        icon="facebook"
        href="https://www.facebook.com/erfan007p/"
        target="_blank"
        RootComponent="a"
      />
      <Button
        className="social-button"
        color="danger"
        icon="instagram"
        href="https://www.instagram.com/erfan007p/"
        target="_blank"
        RootComponent="a"
      />
      <Button
      className="social-button"
        href="https://github.com/erfan007p/undian-acak"
        target="_blank"
        outline
        size="md"
        RootComponent="a"
        color="primary"
      >
        Source code
      </Button>
      <Button
        className="social-button"
        pill
        icon="heart"
        href="https://www.buymeacoffee.com/erfan007p"
        target="_blank"
        size="md"
        RootComponent="a"
        color="orange"
      >
        Donasi
      </Button>
    </Nav.Item>
  );
};

export default NavItems;
