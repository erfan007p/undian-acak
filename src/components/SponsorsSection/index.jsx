import React from "react";
import { Button, Grid } from 'tabler-react';

import { SPONSORS } from '../../constants';

const SponsorsSection = () => {
  return (
    <>
      <Grid.Row>
        <Grid.Col xs={12} md={8}>
          <h2>Sponsor</h2>
          <p>Terima Kasih Banyak untuk profil dibawah ini atas dukungannya</p>
          <h3>
            Platinum Tier
            <Button
              className="contribute-button"
              href="./list"
              target="_blank"
              outline
              size="sm"
              RootComponent="a"
              color="primary"
            >
              Menjadi Daftar Pendukung
            </Button>
          </h3>
          <p>Donasi 1 Juta Rupiah untuk berada di daftar ini.</p>
          <p>
            <b>Hubungi Facebook:</b> https://fb.me/franks007
          </p>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        {SPONSORS.map(function (sponsor, i) {
          return (
            <Grid.Col key={i} xs={12} md={3}>
              <a className="margin-auto" href={sponsor.url}>
                <img src={sponsor.img} alt={sponsor.name} />
                <h3>{sponsor.name}</h3>
              </a>
            </Grid.Col>
          );
        })}
      </Grid.Row>
    </>
  );
};

export default SponsorsSection;
