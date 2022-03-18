import Image from 'next/image';

import style from 'styles/about.module.scss';
import AvatarImage from 'public/images/avatar.png';
import Listing from 'components/listing';
import DynamicShadow from 'components/dynamicShadow';
import Anchor from 'components/anchor';
import Way from 'components/way';
import Label from 'components/label';

export default function About() {
  return (
    <div className={style.about}>
      <div className={style.aboutHeading}>
        <DynamicShadow>
          <div className={style.aboutHeadingAvatar} >
            <Image src={AvatarImage}  alt="avatar" width='150px' height='150px' className={style.rounded}/>
          </div>
        </DynamicShadow>
        <div className={style.aboutHeadingTitle}>
          <h1>Vadym <h4 className='nick'>(qerdcv)</h4> Tishchenko</h1>
          <h2 className={style.aboutHeadingTitlePosition}>Fullstack Developer</h2>
        </div>
      </div>
      <div className={style.aboutMain}>
        <section className={style.aboutMainSec}>
          <Anchor id='about' title='About'>
            <p>I&apos;m Vadym Tishchenko a Fullstack Web Developer.</p>
          </Anchor>
        </section>
        <section className={style.aboutMainSec}>
          <Anchor id='hard-skills' title='Hard Skills'>
            <Listing>
              <Listing.Item>Golang <Label type='primary'>primary language</Label></Listing.Item>
              <Listing.Item>Python <Label type='secondary'>secondary&nbsp;language</Label></Listing.Item>
              <Listing.Item>JavaScript/Typescript <Label type='secondary'>secondary&nbsp;language</Label></Listing.Item>
              <Listing.Item>Git</Listing.Item>
              <Listing.Item>Docker</Listing.Item>
              <Listing.Item>docker-compose</Listing.Item>
              <Listing.Item>k8s</Listing.Item>
              <Listing.Item>helm</Listing.Item>
              <Listing.Item>Bash/shell and familiarity with Linux</Listing.Item>
              <Listing.Item>HTML/CSS</Listing.Item>
              <Listing.Item>Rust</Listing.Item>
              <Listing.Item>C++</Listing.Item>
            </Listing>
          </Anchor>
          <Anchor id='way' title='Jedi way'>
            <Way />
          </Anchor>
        </section>
      </div>
    </div>
  )
}