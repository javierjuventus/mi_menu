import "./unidad.css";
import logoUDG from "../assets/udg.png";
import logoCUCEI from "../assets/cucei.jpeg";

export default function Unidad4() {
  return (
    <div className="unidad-wrapper">
      {/* Logos */}
      <img src={logoUDG} alt="UDG" className="logo-udg" />
      <img src={logoCUCEI} alt="CUCEI" className="logo-cucei" />

      <div className="unidad-content">
        <h1>UNIDAD 4</h1>

        <div className="pdf-list">

          <a
            href="/pdfs/Reunion de Revision Inicial.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-item"
          >
            📄 Reunión de Revisión Inicial
          </a>

          <a
            href="/pdfs/Reunion II.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-item"
          >
            📄 Reunión II
          </a>

        </div>
      </div>
    </div>
  );
}
