import React, { useEffect, useRef } from "react";
import styles from './PagesCss/Footer.module.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    handleFooterPosition();
    window.addEventListener('resize', handleFooterPosition);
    return () => {
      window.removeEventListener('resize', handleFooterPosition);
    };
  }, []);

  function handleFooterPosition() {
    const body = document.body;
    const html = document.documentElement;
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const footer = footerRef.current;

    if (footer && documentHeight > windowHeight) {
      footer.classList.add(styles.footerScrollable);
    } else if (footer) {
      footer.classList.remove(styles.footerScrollable);
    }
  }

  return (
    <div className={styles.footer}>
      <footer ref={footerRef} className={`bd-footer py-2 py-md-1 mt-5 bg-body-tertiary ${styles.footer}`}>
        <span className="fs-5 mt-3">FinancePro</span>
        <div className="container text-body-secondary">
          <div className="row">
            <div className="col mt-3">
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="mx-3">
                  <h5>Desenvolvedor</h5>
                  <a href="https://github.com/devlooppear" target="_blank" rel="noopener noreferrer">
                    @devlooppear
                  </a>
                </li>
                <li className="mx-3">
                  <h5>Redes</h5>
                  <a className="mx-2" href="https://www.instagram.com/devlooppear/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} />
                  </a>
                  <a className="mx-2" href="https://www.linkedin.com/in/iago-silva-42130b209/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
