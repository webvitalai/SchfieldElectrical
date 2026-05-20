import React, { useState, useEffect } from "react";
import {
  TelephoneFill,
  List,
  X,
  ShieldCheck,
  Whatsapp,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        .neo-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          padding: 0;
          transition: 0.35s ease;
        }

        .neo-nav {
          width: 100%;
          max-width: 100%;
          margin: 0;
          height: 86px;
          padding: 0 32px;
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          position: relative;
          transition: 0.35s ease;
          background: rgba(240, 249, 255, 0.82);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          border-bottom: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 15px 45px rgba(14, 165, 233, 0.12);
        }

        .neo-header.scrolled .neo-nav {
          height: 78px;
          background: rgba(7, 12, 22, 0.94);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 55px rgba(0,0,0,0.45);
        }

        .neo-nav::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(14, 165, 233, 0.2),
            rgba(239, 68, 68, 0.14),
            transparent
          );
          transform: translateX(-100%);
          animation: navShine 5s infinite linear;
          pointer-events: none;
        }

        .neo-brand {
          display: flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
          z-index: 2;
          min-width: 0;
          flex-shrink: 0;
        }

        .brand-logo-wrap {
          width: 82px;
          height: 70px;
          min-width: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          overflow: visible;
          flex-shrink: 0;
        }

        .brand-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          filter:
            brightness(1.08)
            contrast(1.16)
            saturate(1.12)
            drop-shadow(0 5px 10px rgba(14, 165, 233, 0.25));
          transition: 0.35s ease;
        }

        /* Logo white when header becomes black */
        .neo-header.scrolled .brand-logo-img {
          filter:
            brightness(0)
            invert(1)
            drop-shadow(0 5px 10px rgba(255, 255, 255, 0.18))
            drop-shadow(0 0 12px rgba(125, 211, 252, 0.28));
        }

        .neo-brand:hover .brand-logo-img {
          transform: scale(1.06);
        }

        .brand-text {
          margin-left: -3px;
          min-width: 0;
        }

        .brand-text strong {
          display: block;
          font-size: 20px;
          font-weight: 950;
          letter-spacing: -0.05em;
          color: #0f172a;
          line-height: 1;
          white-space: nowrap;
        }

        .brand-text span {
          display: block;
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: #dc2626;
          margin-top: 5px;
          white-space: nowrap;
        }

        .neo-header.scrolled .brand-text strong {
          color: #ffffff;
        }

        .neo-header.scrolled .brand-text span {
          color: #7dd3fc;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 2;
        }

        .desktop-links a {
          position: relative;
          text-decoration: none;
          color: #334155;
          font-size: 14px;
          font-weight: 800;
          padding: 12px 16px;
          border-radius: 16px;
          transition: 0.3s ease;
          white-space: nowrap;
        }

        .desktop-links a:hover {
          color: #dc2626;
          background: rgba(14, 165, 233, 0.1);
          transform: translateY(-2px);
        }

        .neo-header.scrolled .desktop-links a {
          color: #e2e8f0;
        }

        .neo-header.scrolled .desktop-links a:hover {
          color: #7dd3fc;
          background: rgba(255, 255, 255, 0.08);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 2;
          flex-shrink: 0;
        }

        .status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(14, 165, 233, 0.13);
          color: #0284c7;
          font-size: 12px;
          font-weight: 900;
          white-space: nowrap;
        }

        .neo-header.scrolled .status-pill {
          background: rgba(14, 165, 233, 0.16);
          color: #7dd3fc;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #ef4444;
          border-radius: 50%;
          box-shadow: 0 0 0 6px rgba(239, 68, 68, 0.16);
        }

        .call-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          color: white;
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          padding: 13px 18px;
          border-radius: 18px;
          font-size: 14px;
          font-weight: 900;
          box-shadow: 0 16px 35px rgba(14, 165, 233, 0.32);
          transition: 0.3s ease;
          white-space: nowrap;
        }

        .call-btn:hover {
          color: white;
          transform: translateY(-3px) scale(1.03);
        }

        .menu-btn {
          display: none;
          width: 46px;
          height: 46px;
          min-width: 46px;
          border: 0;
          border-radius: 16px;
          background: #0f172a;
          color: white;
          font-size: 25px;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }

        .mobile-panel {
          position: fixed;
          top: 92px;
          left: 18px;
          right: 18px;
          z-index: 9998;
          border-radius: 28px;
          padding: 22px;
          background: rgba(7, 12, 22, 0.96);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 35px 80px rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.12);
          transform: translateY(-18px) scale(0.96);
          opacity: 0;
          pointer-events: none;
          transition: 0.35s ease;
        }

        .mobile-panel.open {
          transform: translateY(0) scale(1);
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-panel a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          color: white;
          font-size: 17px;
          font-weight: 850;
          padding: 17px 14px;
          border-radius: 18px;
          transition: 0.3s ease;
        }

        .mobile-panel a:hover {
          background: rgba(14, 165, 233, 0.14);
          padding-left: 20px;
        }

        .mobile-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 18px;
        }

        .mobile-actions a {
          justify-content: center;
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          padding: 15px 12px;
          font-size: 14px;
        }

        .mobile-actions a.whatsapp-mobile {
          background: linear-gradient(135deg, #15803d, #22c55e);
        }

        @keyframes navShine {
          0% { transform: translateX(-100%); }
          55% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 1120px) {
          .desktop-links {
            gap: 4px;
          }

          .desktop-links a {
            font-size: 13px;
            padding: 11px 12px;
          }

          .brand-logo-wrap {
            width: 76px;
            height: 66px;
            min-width: 76px;
          }
        }

        @media (max-width: 991px) {
          .desktop-links,
          .status-pill,
          .call-btn {
            display: none;
          }

          .menu-btn {
            display: flex;
          }

          .neo-nav {
            height: 78px;
            padding: 0 18px;
          }

          .neo-header.scrolled .neo-nav {
            height: 74px;
          }

          .brand-logo-wrap {
            width: 70px;
            height: 60px;
            min-width: 70px;
          }

          .brand-text strong {
            font-size: 17px;
          }

          .mobile-panel {
            top: 84px;
          }
        }

        @media (max-width: 520px) {
          .neo-nav {
            padding: 0 14px;
          }

          .neo-brand {
            gap: 5px;
          }

          .brand-logo-wrap {
            width: 62px;
            height: 54px;
            min-width: 62px;
          }

          .brand-text {
            margin-left: -2px;
          }

          .brand-text strong {
            font-size: 15.5px;
          }

          .brand-text span {
            font-size: 8.5px;
            letter-spacing: 0.14em;
          }

          .menu-btn {
            width: 44px;
            height: 44px;
            min-width: 44px;
          }

          .mobile-panel {
            left: 12px;
            right: 12px;
            top: 84px;
          }

          .mobile-actions {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 390px) {
          .brand-text span {
            display: none;
          }

          .brand-logo-wrap {
            width: 56px;
            height: 50px;
            min-width: 56px;
          }

          .brand-text strong {
            font-size: 14px;
          }

          .neo-nav {
            padding: 0 12px;
          }
        }
      `}</style>

      <header className={`neo-header ${scrolled ? "scrolled" : ""}`}>
        <div className="neo-nav">
          <a href="/" className="neo-brand">
            <div className="brand-logo-wrap">
              <img
                src="/Images/Logo.png"
                alt="Schofield Electrical Services Manchester Logo"
                className="brand-logo-img"
              />
            </div>

            <div className="brand-text">
              <strong>SCHOFIELD ELECTRICAL</strong>
              <span>Services Manchester</span>
            </div>
          </a>

          <nav className="desktop-links">
            {links.map((link, index) => (
              <a href={link.path} key={index}>
                {link.name}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <div className="status-pill">
              <span className="status-dot"></span>
              Available Now
            </div>

            <a href="tel:+442072052003" className="call-btn">
              <TelephoneFill />
              Emergency Call
            </a>

            <button
              className="menu-btn"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              type="button"
            >
              {open ? <X /> : <List />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        {links.map((link, index) => (
          <a href={link.path} key={index} onClick={() => setOpen(false)}>
            {link.name}
            <ShieldCheck />
          </a>
        ))}

        <div className="mobile-actions">
          <a href="tel:0793925954">
            <TelephoneFill /> Call
          </a>

          <a
            href="https://wa.me/442072052003"
            className="whatsapp-mobile"
            target="_blank"
            rel="noreferrer"
          >
            <Whatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;