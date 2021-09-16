import style from 'styles/listing.module.scss';

export default function Item({ children }) {
  return (
    <li className={style.listingItem}>
      { children }
    </li>
  )
}