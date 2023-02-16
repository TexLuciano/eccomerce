import './style.scss';
import img from '../../img/banner1.png';
export const Category = () => {
  return (
    <div className="shop-category">
      <div className="categories">
        <div className="category">
          <img src={img.src} alt="" />
        </div>
        <div className="category">
          <img src={img.src} alt="" />
        </div>      
      </div>
    </div>
  );
};
