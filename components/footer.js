import Image from 'next/image';
import style from 'styles/footer.module.scss';
import InstagramIcon from 'public/icons/instagram.png';
import GithubIcon from 'public/icons/github.png';
import LinkedinIcon from 'public/icons/linkedin.png';
import TelegramIcon from 'public/icons/telegram.png';


export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerSocial}>
        <h2 className={style.footerTitle}>Social</h2>
        <div className={style.footerSocialLinks}>
          <a className={style.footerSocialLink} href='https://www.instagram.com/qerdcv' rel='noreferrer' target='_blank'>
            <div className={style.footerSocialIcon}>
              <Image width='50px' height='50px'  src={InstagramIcon} alt='inst' />
            </div>
          </a>
          <a className={style.footerSocialLink} rel='noreferrer' href='https://github.com/qerdcv' target='_blank'>
            <div className={style.footerSocialIcon}>
              <Image width='50px' height='50px' src={GithubIcon} alt='github' />
            </div>
          </a>
          <a className={style.footerSocialLink} rel='noreferrer' href='https://www.linkedin.com/in/vadym-tishchenko-855080194/' target='_blank'>
            <div className={style.footerSocialIcon}>
              <Image width='50px' height='50px' src={LinkedinIcon} alt='linkedin' />
            </div>
          </a>
          <a className={style.footerSocialLink} rel='noreferrer' href='https://t.me/qerdcv' target='_blank'>
            <div className={style.footerSocialIcon}>
              <Image width='50px' height='50px' src={TelegramIcon} alt='telegram' />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
