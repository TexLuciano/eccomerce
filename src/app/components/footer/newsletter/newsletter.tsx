import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './style.scss';

export const Newsletter = () => {
  return (
    <div className="news-container">
      <div className="news">
        <span>News</span>
        <h3>Receba as Melhores Ofertas!</h3>

        <div className="news-sub">
          <input type="text" placeholder="Endereço de email" />
          <button>Cadastrar</button>
        </div>
        <div>
          <div className="news-icons">
            <FaFacebook size={28} />
            <FaInstagram size={28} />
            <FaLinkedin size={28} />
            <FaTwitter size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};
