import Item from './item';
import style from 'styles/listing.module.scss';

function Listing({ children }) {
  return (
    <ul className={style.listing}>
      { children }
    </ul>
  )
}

Listing.Item = Item;

export default Listing;