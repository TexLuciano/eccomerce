import React from 'react';
import './style.scss';

export const Footer = () => {
  return (
    <footer className='container-footer'>
      <div className="sobre-footer">
        <h3>Sobre</h3>
        <p>Ecommmerce construido com a finalidade de adquirir experiencia.</p>
      </div>
      <div className="contato-footer">
        <h3>Contato</h3>
        <div>
          <p>Email:lmstore@lmstore.com</p>
        </div>
        <div>
          <p>fone: (00)00000-0000</p>
        </div>
      </div>
      <div className="category-footer">
        <h3>Categoria</h3>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>
      <div className="pages-footer">
        <h3>Paginas</h3>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>
    </footer>
  );
};
