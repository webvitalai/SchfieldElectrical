// Save as Services.jsx

import React, { useState } from "react";
import {
  LightningChargeFill,
  ShieldCheck,
  LightbulbFill,
  Search,
  GearFill,
  HouseGearFill,
  CheckCircleFill,
  TelephoneFill,
  ArrowRight,
  ChevronDown,
} from "react-bootstrap-icons";

import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      title: "Emergency Electrical Repairs",
      img: "/Images/s1.png",
      icon: <LightningChargeFill />,
      desc: "24/7 rapid response for power cuts, sparking sockets, burning smells and urgent electrical faults.",
      points: [
        "45-minute average response",
        "Fault finding & diagnostics",
        "Immediate safety isolation",
      ],
    },

    {
      title: "Fuse Box Replacement",
      img: "/Images/s2.png",
      icon: <ShieldCheck />,
      desc: "Upgrade your old fuse board to a modern 18th Edition compliant consumer unit.",
      points: [
        "Full testing & certification",
        "RCD / RCBO protection",
        "Surge protection available",
      ],
    },

    {
      title: "Lighting Installation",
      img: "/Images/s3.png",
      icon: <LightbulbFill />,
      desc: "Indoor LED lighting, garden lighting and modern smart lighting systems.",
      points: [
        "Smart lighting systems",
        "Energy-efficient LEDs",
        "Security lighting",
      ],
    },

    {
      title: "Electrical Safety Inspections",
      img: "/Images/s4.png",
      icon: <Search />,
      desc: "Professional EICR reports for landlords, homeowners and commercial buildings.",
      points: [
        "Landlord certificates",
        "Inspection reports",
        "Fault recommendations",
      ],
    },

    {
      title: "Wiring & Rewiring",
      img: "/Images/s5.png",
      icon: <GearFill />,
      desc: "Safe wiring upgrades, partial rewires and full property rewiring solutions.",
      points: [
        "Socket installation",
        "Cooker circuits",
        "Full rewiring",
      ],
    },

    {
      title: "Electrical Maintenance",
      img: "/Images/s6.png",
      icon: <HouseGearFill />,
      desc: "Routine maintenance and electrical servicing for homes and businesses.",
      points: [
        "Preventative maintenance",
        "Minor electrical works",
        "System inspections",
      ],
    },
  ];

  const faqs = [
    {
      q: "How fast can you respond?",
      a: "We aim for a 45-minute emergency response across London depending on traffic and location.",
    },

    {
      q: "Are your electricians certified?",
      a: "Yes. Our electricians are fully trained, certified and insured.",
    },

    {
      q: "Do you offer landlord certificates?",
      a: "Yes. We provide EICR certificates and landlord safety reports.",
    },

    {
      q: "Is your work guaranteed?",
      a: "Yes. We provide a workmanship guarantee for completed services.",
    },
  ];

  return (
    <>
      <style>{`
        .services-page {
          background: #f0f9ff;
          color: #0f172a;
          overflow: hidden;
          font-family: "Inter", sans-serif;
        }

        .services-hero {
          position: relative;
          padding: 150px 0 90px;

          background:
            radial-gradient(circle at top left, rgba(14,165,233,0.26), transparent 35%),
            radial-gradient(circle at bottom right, rgba(239,68,68,0.18), transparent 35%),
            linear-gradient(135deg, #07101f 0%, #0f172a 50%, #111827 100%);

          color: white;
          overflow: hidden;
        }

        .services-hero::before {
          content: "";
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);

          background-size: 50px 50px;
        }

        .services-container {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: auto;
          padding: 0 18px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 45px;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(18px);
          color: #7dd3fc;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          margin-bottom: 22px;
        }

        .hero-badge span {
          width: 9px;
          height: 9px;
          background: #ef4444;
          border-radius: 50%;
        }

        .services-hero h1 {
          font-size: clamp(42px, 6vw, 78px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.06em;
          margin-bottom: 24px;
        }

        .services-hero h1 span {
          background: linear-gradient(90deg, #ef4444, #38bdf8, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services-hero p {
          color: #dbeafe;
          font-size: 18px;
          line-height: 1.8;
          max-width: 650px;
        }

        .hero-stats {
          margin-top: 35px;
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .hero-stat {
          padding: 18px 22px;
          border-radius: 22px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          min-width: 145px;
        }

        .hero-stat strong {
          display: block;
          font-size: 26px;
          font-weight: 950;
        }

        .hero-stat span {
          color: #7dd3fc;
          font-size: 12px;
          font-weight: 800;
        }

        .hero-image-card {
          position: relative;
          padding: 22px;
          border-radius: 34px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(24px);
        }

        .hero-image-card img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 26px;
        }

        .floating-card {
          position: absolute;
          left: -20px;
          bottom: 35px;
          background: white;
          color: #0f172a;
          border-radius: 22px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 25px 55px rgba(0,0,0,0.25);
        }

        .floating-card svg {
          color: #dc2626;
          font-size: 28px;
        }

        .floating-card strong {
          display: block;
          font-size: 14px;
          font-weight: 950;
        }

        .floating-card span {
          font-size: 12px;
          color: #64748b;
        }

        .services-main {
          padding: 95px 0;
        }

        .section-title {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 55px;
        }

        .section-title span {
          display: inline-block;
          color: #dc2626;
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 12px;
          margin-bottom: 12px;
        }

        .section-title h2 {
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 950;
          letter-spacing: -0.05em;
          margin-bottom: 14px;
        }

        .section-title p {
          color: #64748b;
          font-size: 17px;
          line-height: 1.7;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .service-card {
          border-radius: 30px;
          overflow: hidden;
          background: white;
          border: 1px solid #bae6fd;
          box-shadow: 0 22px 60px rgba(14,165,233,0.08);
          transition: 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-12px);
        }

        .service-image {
          height: 230px;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.6s ease;
        }

        .service-card:hover .service-image img {
          transform: scale(1.1);
        }

        .service-content {
          padding: 28px;
        }

        .service-icon {
          width: 62px;
          height: 62px;
          border-radius: 20px;
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-top: -60px;
          margin-bottom: 22px;
          position: relative;
          z-index: 5;
        }

        .service-content h3 {
          font-size: 22px;
          font-weight: 950;
          margin-bottom: 12px;
        }

        .service-content p {
          color: #64748b;
          line-height: 1.7;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .service-points {
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .service-points li {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 14px;
          font-weight: 700;
          color: #334155;
        }

        .service-points svg {
          color: #22c55e;
        }

        .service-btn {
          width: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          padding: 14px 18px;
          border-radius: 17px;
          text-decoration: none;
          background: #07101f;
          color: white;
          font-weight: 950;
          transition: 0.35s ease;
        }

        .service-btn:hover {
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          color: white;
        }

        .faq-section {
          padding: 90px 0;
          background: white;
        }

        .faq-box {
          max-width: 850px;
          margin: auto;
        }

        .faq-item {
          margin-bottom: 14px;
          border-radius: 22px;
          background: #f8fafc;
          border: 1px solid #bae6fd;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          border: 0;
          background: transparent;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          font-size: 17px;
          font-weight: 950;
          color: #0f172a;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: 0.35s ease;
        }

        .faq-item.active .faq-answer {
          max-height: 180px;
        }

        .faq-answer p {
          padding: 0 24px 22px;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
        }

        .cta-section {
          padding: 90px 0;
        }

        .cta-box {
          border-radius: 36px;
          padding: 50px;

          background-image:
            linear-gradient(135deg, rgba(7,12,22,0.94), rgba(127,29,29,0.9)),
            url("/Images/home.png");

          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;

          color: white;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .cta-box h2 {
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 950;
          margin-bottom: 12px;
        }

        .cta-box p {
          color: #dbeafe;
          max-width: 630px;
          margin: 0;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          color: white;
          padding: 17px 25px;
          border-radius: 18px;
          font-weight: 950;
          white-space: nowrap;
        }

        .cta-btn:hover {
          color: white;
        }

        @media (max-width: 991px) {
          .hero-grid,
          .cta-box {
            grid-template-columns: 1fr;
            flex-direction: column;
            align-items: flex-start;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .services-hero {
            padding: 120px 0 65px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .hero-image-card img {
            height: 280px;
          }

          .floating-card {
            position: static;
            margin-top: 14px;
          }

          .cta-box {
            padding: 32px 24px;
          }

          .cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <main className="services-page">
        <section className="services-hero">
          <div className="services-container">
            <div className="hero-grid">
              <div>
                <div className="hero-badge">
                  <span></span>
                  Manchester Electrical Experts
                </div>

                <h1>
                  Premium <span>Electrical Services</span>
                </h1>

                <p>
                  Professional residential and commercial electrical services
                  across London with fast response, safety compliance and modern
                  workmanship.
                </p>

                <div className="hero-stats">
                  <div className="hero-stat">
                    <strong>24/7</strong>
                    <span>Emergency Callouts</span>
                  </div>

                  <div className="hero-stat">
                    <strong>45 min</strong>
                    <span>Average Response</span>
                  </div>

                  <div className="hero-stat">
                    <strong>12 mo</strong>
                    <span>Guarantee</span>
                  </div>
                </div>
              </div>

              <div className="hero-image-card">
                <img src="/Images/home.png" alt="Electrical Services" />

                <div className="floating-card">
                  <ShieldCheck />

                  <div>
                    <strong>NICEIC Approved</strong>
                    <span>Certified electricians</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-main">
          <div className="services-container">
            <div className="section-title">
              <span>Our Services</span>

              <h2>Professional Electrical Solutions</h2>

              <p>
                Fast, safe and modern electrical services for homes,
                landlords and businesses.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-image">
                    <img src={service.img} alt={service.title} />
                  </div>

                  <div className="service-content">
                    <div className="service-icon">
                      {service.icon}
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.desc}</p>

                    <ul className="service-points">
                      {service.points.map((point, i) => (
                        <li key={i}>
                          <CheckCircleFill />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="tel:+442012345678"
                      className="service-btn"
                    >
                      Book Service
                      <ArrowRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="services-container">
            <div className="section-title">
              <span>FAQ</span>

              <h2>Frequently Asked Questions</h2>

              <p>Everything you need to know about our services.</p>
            </div>

            <div className="faq-box">
              {faqs.map((item, index) => (
                <div
                  className={`faq-item ${
                    activeFaq === index ? "active" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setActiveFaq(
                        activeFaq === index ? null : index
                      )
                    }
                  >
                    {item.q}
                    <ChevronDown />
                  </button>

                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="services-container">
            <div className="cta-box">
              <div>
                <h2>Need an Electrician Today?</h2>

                <p>
                  Contact our emergency electrical team for repairs,
                  inspections, rewiring and maintenance services across London.
                </p>
              </div>

              <a
                href="tel:+442012345678"
                className="cta-btn"
              >
                <TelephoneFill />
                0793 925 954
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;