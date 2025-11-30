import "./unidad.css";
import logoUDG from "../assets/udg.png";
import logoCUCEI from "../assets/cucei.jpeg";

export default function Unidad1() {
  return (
    <div className="unidad-wrapper">
      {/* Logos en esquinas */}
      <img src={logoUDG} alt="UDG" className="logo-udg" />
      <img src={logoCUCEI} alt="CUCEI" className="logo-cucei" />

      <div className="unidad-content">
        <h1>UNIDAD 1</h1>

        <div className="pdf-list">
          <a
            href="/pdfs/Proyecto II SCRUM.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-item"
          >
            📄 Proyecto II SCRUM
          </a>

          <a
            href="/pdfs/Actividad 2. El product backlog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-item"
          >
            📄 Actividad 2 – El Product Backlog
          </a>
        </div>
      </div>
    </div>
  );
}

