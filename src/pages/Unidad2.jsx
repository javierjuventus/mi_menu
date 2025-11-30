import "./unidad.css";
import logoUDG from "../assets/udg.png";
import logoCUCEI from "../assets/cucei.jpeg";

export default function Unidad2() {
  return (
    <div className="unidad-wrapper">
      {/* Logos en esquinas */}
      <img src={logoUDG} alt="UDG" className="logo-udg" />
      <img src={logoCUCEI} alt="CUCEI" className="logo-cucei" />

      <div className="unidad-content">
        <h1>UNIDAD 2</h1>

        <div className="pdf-list">

          <a
            href="/pdfs/Actividad 2. El Sprint Shedule.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-item"
          >
            📄 Actividad 2 – El Sprint Schedule
          </a>

          <a
            href="/pdfs/Aplicación de SCRUM.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-item"
          >
            📄 Aplicación de SCRUM
          </a>

          <a
            href="/pdfs/Integradora 2 El backlog y el spring Schedule del proyecto final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-item"
          >
            📄 Integradora 2 – Backlog y Sprint Schedule del Proyecto Final
          </a>

        </div>
      </div>
    </div>
  );
}
