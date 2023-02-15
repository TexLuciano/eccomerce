import Link from 'next/link';
import './style.scss';
import { GrCart } from 'react-icons/gr';
import { IoMdSearch } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { Banner } from '../banner/banner';

export const Header = () => {
  return (
    <header className='container-header'>
      
      <nav className="nav-primaria">
        <div className="title-name">
          <h2>LMSTORE</h2>
        </div>
        <ul className="links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/components/category/jh">Categoria</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
        </ul>
        <div className='icons'>
          <FaRegHeart />
          <IoMdSearch />
          <span className="cart-icon">
            {' '}
            <GrCart />
            <span>5</span>
          </span>
        </div>
      </nav>
   
    </header>
  );
};
