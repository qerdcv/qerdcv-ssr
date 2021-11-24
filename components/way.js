import { useMemo } from 'react';
import Image from 'next/image';

import style from 'styles/way.module.scss';

import RaccoongangImg from 'public/images/raccoongang.png';
import EvoCompanyImg from 'public/images/evoCompany.png';

export default function Way(props) {
  const data = useMemo(() => (
    [
      {
        title: 'EVO Company',
        img: EvoCompanyImg,
        id: '1',
        positions: [
          {
            id: '8',
            title: 'Golang Developer',
            date: '01.11.2021 - now'
          },
          {
            id: '4',
            title: 'Middle Python Developer',
            date: '01.04.2021 - 01.11.2021'
          }
        ]
      },
      {
        title: 'Raccoon Gang',
        img: RaccoongangImg,
        id: '2',
        positions: [
          {
            id: '7',
            title: 'Middle Python Developer',
            date: '15.07.2020 - 20.03.2021'
          },
          {
            id: '6',
            title: 'Junior Python Developer',
            date: '15.11.2019 - 15.07.2020'
          },
          {
            id: '5',
            title: 'Trainee Python Developer',
            date: '15.10.2019 - 15.11.2019'
          }
        ]
      }
    ]
  ), [])
  return (
    <ul className={style.way}>
      {data.map((company) => (
        <li className={style.wayPrimary} key={company.id}>
          <div className={style.wayPrimaryHeading}>
            <div className={style.wayPrimaryImg}>
              <Image src={company.img} alt={company.title}/>
            </div>
            <h2>{company.title}</h2>
          </div>
          <ul className={style.point}>
            {company.positions.map(position => (
              <li className={style.waySecondary} key={position.id}>
                <span className='position'>{position.title}</span>
                <time>{position.date}</time>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}