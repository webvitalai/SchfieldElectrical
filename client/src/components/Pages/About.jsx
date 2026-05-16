// Save as About.jsx

import React from "react";
import {
  ShieldCheck,
  PeopleFill,
  GeoAltFill,
  LightningChargeFill,
  CheckCircleFill,
  StarFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const values = [
    {
      icon: <ShieldCheck />,
      title: "Uncompromising Safety",
      text: "Every project is completed with strict safety standards, clean workmanship and certified electrical practice.",
    },
    {
      icon: <PeopleFill />,
      title: "Customer Centric",
      text: "Clear communication, honest pricing and respectful service from first call to final testing.",
    },
    {
      icon: <GeoAltFill />,
      title: "Local London Experts",
      text: "We understand London homes, landlords, commercial properties and emergency electrical needs.",
    },
  ];

  const team = [
    {
      name: "David Morrison",
      role: "Lead NICEIC Approved Contractor",
      img: "/Images/ab5.png",
    },
    {
      name: "James Chen",
      role: "Senior Response Electrician",
      img: "/Images/ab3.png",
    },
    {
      name: "Sophie Williams",
      role: "Lighting & Design Specialist",
      img: "/Images/ab4.png",
    },
    {
      name: "Alex Patel",
      role: "Domestic Maintenance Engineer",
      img: "/Images/ab2.png",
    },
  ];

  return (
    <>
      <style>{`
        .about-page {
          background: #f0f9ff;
          color: #0f172a;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .about-hero {
          position: relative;
          padding: 150px 0 100px;
          background:
            radial-gradient(circle at top left, rgba(14,165,233,0.26), transparent 35%),
            radial-gradient(circle at bottom right, rgba(239,68,68,0.18), transparent 35%),
            linear-gradient(135deg, #07101f 0%, #0f172a 55%, #111827 100%);
          color: white;
        }

        .about-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .about-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.55;
          animation: aboutFloat 7s infinite alternate ease-in-out;
        }

        .orb-one {
          width: 300px;
          height: 300px;
          background: #38bdf8;
          top: 20%;
          left: 5%;
        }

        .orb-two {
          width: 340px;
          height: 340px;
          background: #ef4444;
          bottom: 8%;
          right: 8%;
          animation-delay: 1.4s;
        }

        .about-container {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: auto;
          padding: 0 18px;
        }

        .about-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 55px;
          align-items: center;
        }

        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(18px);
          color: #7dd3fc;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          margin-bottom: 22px;
        }

        .about-badge span {
          width: 9px;
          height: 9px;
          background: #ef4444;
          border-radius: 50%;
          box-shadow: 0 0 0 7px rgba(239,68,68,0.18);
        }

        .about-hero h1 {
          font-size: clamp(42px, 6vw, 78px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.06em;
          margin-bottom: 24px;
        }

        .about-hero h1 span {
          background: linear-gradient(90deg, #ef4444, #38bdf8, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-hero p {
          color: #dbeafe;
          font-size: 18px;
          line-height: 1.8;
          max-width: 650px;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 35px;
        }

        .about-stat {
          padding: 20px;
          border-radius: 24px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(18px);
        }

        .about-stat strong {
          display: block;
          font-size: 30px;
          font-weight: 950;
        }

        .about-stat span {
          color: #7dd3fc;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .about-image-card {
          position: relative;
          padding: 14px;
          border-radius: 38px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(24px);
          box-shadow: 0 35px 90px rgba(0,0,0,0.38);
          animation: heroFloat 4.5s infinite ease-in-out;
        }

        .about-image-card img {
          width: 100%;
          height: 560px;
          object-fit: cover;
          border-radius: 28px;
        }

        .safety-card {
          position: absolute;
          left: -25px;
          bottom: 45px;
          display: flex;
          align-items: center;
          gap: 14px;
          background: white;
          color: #0f172a;
          border-radius: 24px;
          padding: 18px 20px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.25);
          max-width: 270px;
        }

        .safety-card svg {
          color: #dc2626;
          font-size: 30px;
        }

        .safety-card strong {
          display: block;
          font-weight: 950;
        }

        .safety-card span {
          color: #64748b;
          font-size: 12px;
        }

        .values-section,
        .team-section {
          padding: 95px 0;
        }

        .section-heading {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 55px;
        }

        .section-heading span {
          display: inline-block;
          color: #dc2626;
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 12px;
          margin-bottom: 12px;
        }

        .section-heading h2 {
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 950;
          letter-spacing: -0.05em;
          margin-bottom: 14px;
        }

        .section-heading p {
          color: #64748b;
          font-size: 17px;
          line-height: 1.7;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .value-card {
          padding: 36px 30px;
          border-radius: 32px;
          background: white;
          border: 1px solid #bae6fd;
          box-shadow: 0 22px 60px rgba(14,165,233,0.08);
          text-align: center;
          transition: 0.45s ease;
        }

        .value-card:hover {
          transform: translateY(-14px);
        }

        .value-icon {
          width: 72px;
          height: 72px;
          border-radius: 24px;
          background: linear-gradient(135deg, #ef4444, #38bdf8);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          margin: 0 auto 24px;
        }

        .value-card h3 {
          font-size: 22px;
          font-weight: 950;
          margin-bottom: 12px;
        }

        .value-card p {
          color: #64748b;
          line-height: 1.75;
          margin: 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }

        .team-image {
          height: 410px;
          border-radius: 32px;
          overflow: hidden;
          background: #e0f2fe;
          box-shadow: 0 25px 60px rgba(14,165,233,0.12);
        }

        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-info {
          margin-top: 18px;
          text-align: center;
        }

        .team-info h4 {
          font-size: 18px;
          font-weight: 950;
          margin-bottom: 6px;
        }

        .team-info p {
          color: #dc2626;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .about-cta {
          padding: 80px 0 100px;
          background: #f0f9ff;
        }

        .about-cta-box {
          border-radius: 36px;
          padding: 50px;
          background-image:
            linear-gradient(135deg, rgba(7,12,22,0.95), rgba(127,29,29,0.9)),
            url("/Images/aboutus.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .about-cta-box h2 {
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 950;
          letter-spacing: -0.05em;
          margin-bottom: 12px;
        }

        .about-cta-box p {
          color: #dbeafe;
          margin: 0;
          max-width: 640px;
        }

        .about-cta-btn {
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

        .about-cta-btn:hover {
          color: white;
        }

        @keyframes aboutFloat {
          from {
            transform: translateY(0) scale(1);
          }
          to {
            transform: translateY(35px) scale(1.08);
          }
        }

        @keyframes heroFloat {
          0%, 100% {
            transform: translateY(0) rotate(1deg);
          }
          50% {
            transform: translateY(-16px) rotate(-1deg);
          }
        }

        @media (max-width: 991px) {
          .about-hero-grid,
          .values-grid,
          .team-grid {
            grid-template-columns: 1fr;
          }

          .about-image-card img {
            height: 430px;
          }

          .about-cta-box {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 576px) {
          .about-hero {
            padding: 120px 0 70px;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }

          .about-image-card img {
            height: 330px;
          }

          .safety-card {
            position: static;
            margin-top: 14px;
          }

          .team-image {
            height: 390px;
          }

          .about-cta-box {
            padding: 32px 24px;
          }

          .about-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <main className="about-page">
        <section className="about-hero">
          <div className="about-orb orb-one"></div>
          <div className="about-orb orb-two"></div>

          <div className="about-container">
            <div className="about-hero-grid">
              <div>
                <div className="about-badge">
                  <span></span>
                  Our Story
                </div>

                <h1>
                  Manchester's Most Trusted <br />
                  <span>Electrical Experts</span>
                </h1>

                <p>
                  Founded with a mission to deliver safer and more reliable
                  electrical services, Electricity Smart has grown into a trusted
                  London name for homeowners, landlords and businesses.
                </p>

                <div className="about-stats">
                  <div className="about-stat">
                    <strong>15+</strong>
                    <span>Years Experience</span>
                  </div>

                  <div className="about-stat">
                    <strong>5k+</strong>
                    <span>Happy Clients</span>
                  </div>

                  <div className="about-stat">
                    <strong>24/7</strong>
                    <span>Emergency Help</span>
                  </div>
                </div>
              </div>

              <div className="about-image-card">
                <img src="/Images/ab1.png" alt="Electric Team" />

                <div className="safety-card">
                  <ShieldCheck />

                  <div>
                    <strong>Safety First</strong>
                    <span>Certified electrical work with strict standards.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="about-container">
            <div className="section-heading">
              <span>Why Choose Electricity Smart?</span>
              <h2>Built on Safety, Trust & Speed</h2>
            </div>

            <div className="values-grid">
              {values.map((item, index) => (
                <div className="value-card" key={index}>
                  <div className="value-icon">{item.icon}</div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="about-container">
            <div className="section-heading">
              <span>Meet The Team</span>
              <h2>Professional Electrical Specialists</h2>
            </div>

            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index}>
                  <div className="team-image">
                    <img src={member.img} alt={member.name} />
                  </div>

                  <div className="team-info">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="about-container">
            <div className="about-cta-box">
              <div>
                <h2>Need a Trusted mANCHESTER Electrician?</h2>

                <p>
                  Speak with our team today for emergency support, EICR
                  certificates, fuse box upgrades and maintenance.
                </p>
              </div>

              <a href="tel:+442072052003" className="about-cta-btn">
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

export default About;