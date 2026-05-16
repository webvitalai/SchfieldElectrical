import React from "react";
import {
  LightningChargeFill,
  TelephoneFill,
  EnvelopeFill,
  GeoAltFill,
  Facebook,
  Instagram,
  TwitterX,
  Whatsapp,
  ShieldCheck,
  ArrowRight,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <style>{`
        .crazy-footer {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(14,165,233,0.26) 0%, transparent 35%),
            radial-gradient(circle at bottom right, rgba(239,68,68,0.18) 0%, transparent 30%),
            linear-gradient(135deg, #07101f 0%, #0f172a 45%, #111827 100%);
          color: white;
          padding: 90px 0 25px;
        }

        .crazy-footer::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          -webkit-mask-image: linear-gradient(to bottom, black, transparent);
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .footer-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(55px);
          opacity: 0.55;
          animation: footerFloat 7s infinite alternate ease-in-out;
        }

        .orb-1 {
          width: 280px;
          height: 280px;
          background: #38bdf8;
          top: 10%;
          left: 4%;
        }

        .orb-2 {
          width: 340px;
          height: 340px;
          background: #ef4444;
          right: 5%;
          bottom: 8%;
          animation-delay: 1.5s;
        }

        .footer-container {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: auto;
          padding: 0 18px;
        }

        .footer-top-card {
          margin-bottom: 55px;
          padding: 34px;
          border-radius: 34px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(24px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          box-shadow: 0 30px 90px rgba(0,0,0,0.35);
        }

        .footer-top-card h2 {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 950;
          letter-spacing: -0.05em;
          margin: 0 0 8px;
        }

        .footer-top-card p {
          color: #dbeafe;
          margin: 0;
          max-width: 620px;
        }

        .footer-emergency-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: white;
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          padding: 17px 24px;
          border-radius: 18px;
          font-weight: 950;
          white-space: nowrap;
          box-shadow: 0 18px 45px rgba(14,165,233,0.25);
          transition: 0.35s ease;
        }

        .footer-emergency-btn:hover {
          color: white;
          transform: translateY(-5px) scale(1.03);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 0.9fr 1.1fr;
          gap: 38px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: white;
          margin-bottom: 22px;
        }

        .footer-logo-icon {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 18px 40px rgba(14,165,233,0.3);
          position: relative;
          animation: zapMove 2.7s infinite ease-in-out;
        }

        .footer-logo-icon::after {
          content: "";
          position: absolute;
          inset: -7px;
          border-radius: 24px;
          border: 1px solid rgba(56,189,248,0.45);
          animation: footerRing 2s infinite ease-out;
        }

        .footer-logo-icon svg {
          font-size: 27px;
        }

        .footer-brand strong {
          display: block;
          font-size: 22px;
          font-weight: 950;
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .footer-brand span {
          display: block;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: #7dd3fc;
          font-weight: 900;
          margin-top: 5px;
        }

        .footer-about {
          color: #cbd5e1;
          line-height: 1.8;
          font-size: 14px;
          margin-bottom: 24px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .footer-socials a {
          width: 44px;
          height: 44px;
          border-radius: 15px;
          background: rgba(255,255,255,0.06);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.08);
          transition: 0.35s ease;
        }

        .footer-socials a:hover {
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          transform: translateY(-6px) rotate(-6deg);
        }

        .footer-col h4 {
          font-size: 18px;
          font-weight: 950;
          margin-bottom: 22px;
          position: relative;
        }

        .footer-col h4::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -9px;
          width: 34px;
          height: 3px;
          border-radius: 20px;
          background: linear-gradient(90deg, #ef4444, #38bdf8);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .footer-links a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
          font-weight: 650;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: 0.3s ease;
        }

        .footer-links a svg {
          opacity: 0;
          transform: translateX(-8px);
          transition: 0.3s ease;
        }

        .footer-links a:hover {
          color: white;
          transform: translateX(7px);
        }

        .footer-links a:hover svg {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.6;
        }

        .contact-item svg {
          color: #38bdf8;
          font-size: 18px;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .contact-item a {
          color: #cbd5e1;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .contact-item a:hover {
          color: white;
        }

        .footer-mini-card {
          margin-top: 20px;
          padding: 18px;
          border-radius: 22px;
          background: rgba(56,189,248,0.12);
          border: 1px solid rgba(56,189,248,0.18);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-mini-card svg {
          color: #22c55e;
          font-size: 23px;
        }

        .footer-mini-card strong {
          display: block;
          font-size: 14px;
        }

        .footer-mini-card span {
          color: #dbeafe;
          font-size: 12px;
        }

        .footer-bottom {
          position: relative;
          z-index: 2;
          margin-top: 55px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          color: #94a3b8;
          font-size: 13px;
        }

        .footer-bottom p {
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-bottom-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: white;
        }

        .footer-marquee {
          position: absolute;
          bottom: 78px;
          left: 0;
          width: 100%;
          overflow: hidden;
          opacity: 0.05;
          pointer-events: none;
          white-space: nowrap;
        }

        .footer-marquee span {
          display: inline-block;
          font-size: 90px;
          font-weight: 950;
          letter-spacing: -0.06em;
          animation: marqueeMove 22s linear infinite;
        }

        @keyframes footerFloat {
          from {
            transform: translateY(0) scale(1);
          }

          to {
            transform: translateY(35px) scale(1.08);
          }
        }

        @keyframes zapMove {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }

          50% {
            transform: rotate(-8deg) scale(1.08);
          }
        }

        @keyframes footerRing {
          0% {
            opacity: 0.8;
            transform: scale(0.85);
          }

          100% {
            opacity: 0;
            transform: scale(1.35);
          }
        }

        @keyframes marqueeMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 991px) {
          .footer-top-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .crazy-footer {
            padding-top: 65px;
          }

          .footer-top-card {
            padding: 26px;
            border-radius: 26px;
          }

          .footer-emergency-btn {
            width: 100%;
            justify-content: center;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-marquee span {
            font-size: 56px;
          }
        }
      `}</style>

      <footer className="crazy-footer">
        <div className="footer-orb orb-1"></div>
        <div className="footer-orb orb-2"></div>

        <div className="footer-marquee">
          <span>
            SCHOFIELD ELECTRICAL • MANCHESTER ELECTRICIANS • EMERGENCY SERVICE •
            SCHOFIELD ELECTRICAL •
          </span>
        </div>

        <div className="footer-container">
          <div className="footer-top-card">
            <div>
              <h2>Need an Electrician Right Now?</h2>
              <p>
                Fast, certified, and reliable electrical support across London —
                available for emergency repairs, inspections, and installations.
              </p>
            </div>

            <a href="tel:+442072052003" className="footer-emergency-btn">
              <TelephoneFill />
              Emergency Call
            </a>
          </div>

          <div className="footer-grid">
            <div className="footer-col">
              <a href="/" className="footer-brand">
                <div className="footer-logo-icon">
                  <LightningChargeFill />
                </div>

                <div>
                  <strong>SCHOFIELD ELECTRICAL</strong>
                  <span>Services Manchester</span>
                </div>
              </a>

              <p className="footer-about">
                Professional, reliable, and safe electrical services across
                London. Available 24/7 for emergency repairs, maintenance,
                rewiring, fuse box upgrades, and safety certificates.
              </p>

              <div className="footer-socials">
                <a href="/" aria-label="Facebook">
                  <Facebook />
                </a>

                <a href="/" aria-label="Instagram">
                  <Instagram />
                </a>

                <a href="/" aria-label="Twitter">
                  <TwitterX />
                </a>

                <a
                  href="https://wa.me/440793925954"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <Whatsapp />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>

              <ul className="footer-links">
                <li>
                  <a href="/">
                    <ArrowRight /> Home
                  </a>
                </li>

                <li>
                  <a href="/services">
                    <ArrowRight /> Services
                  </a>
                </li>

                <li>
                  <a href="/about">
                    <ArrowRight /> About Us
                  </a>
                </li>

                <li>
                  <a href="/contact">
                    <ArrowRight /> Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Our Services</h4>

              <ul className="footer-links">
                <li>
                  <a href="/services">
                    <ArrowRight /> Emergency Repairs
                  </a>
                </li>

                <li>
                  <a href="/services">
                    <ArrowRight /> Fuse Box Replacement
                  </a>
                </li>

                <li>
                  <a href="/services">
                    <ArrowRight /> Lighting Installation
                  </a>
                </li>

                <li>
                  <a href="/services">
                    <ArrowRight /> Safety Inspections
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Info</h4>

              <div className="contact-list">
                <div className="contact-item">
                  <GeoAltFill />
                  <span>4 Churchfields, Audenshaw, Manchester M34 5HZ, UK</span>
                </div>

                <div className="contact-item">
                  <TelephoneFill />
                  <a href="tel:+442072052003">0793 925 954</a>
                </div>

                <div className="contact-item">
                  <EnvelopeFill />
                  <a href="mailto:info@electricitysmart.co.uk">
                    info@schofieldelectrical.co.uk
                  </a>
                </div>
              </div>

              <div className="footer-mini-card">
                <ShieldCheck />

                <div>
                  <strong>NICEIC Approved</strong>
                  <span>Certified safety-first electricians</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Schofield Electrical Services Manchester. All rights reserved.</p>

            <div className="footer-bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;