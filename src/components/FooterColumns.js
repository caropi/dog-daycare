import React from 'react'
import CommonButton from "./CommonButton";

const FooterColumns = () => {
    return (
      <>
        <div className="footer__column">
          <h3 className="footer__column--title">Solutions</h3>
          <ul className="footer__column--list">
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Dog Care
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Dogs
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Enterprise Doggos
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                In Doglish
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                In Cat-talk
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__column--title">Software</h3>
          <ul className="footer__column--list">
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Testimonials
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Dog Training
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Frameworks
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Associations
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Features
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__column--title">Company</h3>
          <ul className="footer__column--list">
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Blog
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Podcast
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                About Us
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Press
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__column--title">Support</h3>
          <ul className="footer__column--list">
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Internet Safety
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                FAQ
              </a>
            </li>
            <li className="footer__column--list-item">
              <a
                className="footer__column--list-item-link"
                href="https://www.himama.com/"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__column--title">Contact Sales</h3>
          <ul className="footer__column--list">
            <li className="footer__column--list-item">
              <CommonButton text="Request a call" />
            </li>

            <li className="footer__column--list-item">
              <p className="footer__column--list-item-text">North America</p>
              <a
                className="footer__column--list-item-link"
                href="Tel:1-800-905-1876"
              >
                1-800-905-1876
              </a>
            </li>
          </ul>
        </div>
      </>
    );
}

export default FooterColumns
