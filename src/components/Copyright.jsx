import React from "react";
import { APP_NAME } from '../constants.js';

const Copyright = () => {
  return (
    <>
      Copyright © 2025 - {new Date().getFullYear()}
      <a href="/"> {APP_NAME}</a>.  Powered by.
      <a href="https://prenges.com" target="_blank" rel="noopener noreferrer">
        {' '}
        Aliyul Erfan
      </a>
      {'. '}
      All rights reserved.
    </>
  );
};

export default Copyright;