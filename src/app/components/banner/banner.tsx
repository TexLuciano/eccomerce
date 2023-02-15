import React from 'react';
import banner1 from '../../img/banner1.png';
import Image from 'next/image';
import './style.scss';
import { Anek_Latin } from '@next/font/google';

const anek = Anek_Latin({
  weight: ['800'],
  subsets: ['latin'],
});

export const Banner = () => {
  return (
    <div className={anek.className}>
      <div className="container-banner">
        <div className="info-banner">
          <div className="banner-front">
            <h2>
              Atualize seu setup <br />
              para o próximo nível
            </h2>
          </div>
          <div className="btns-banner">
            <a>Saiba Mais</a>
            <a>Compre Agora</a>
          </div>
        </div>
        <div className="banner-img">
          <img  src={banner1.src} alt="banner" />
        </div>
      </div>
    </div>
  );
};
