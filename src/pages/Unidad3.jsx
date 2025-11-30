import "./unidad.css";
import logoUDG from "../assets/udg.png";
import logoCUCEI from "../assets/cucei.jpeg";

export default function Unidad3() {
  return (
    <div className="unidad-wrapper">
      {/* Logos en cada esquina */}
      <img src={logoUDG} alt="UDG" className="logo-udg" />
      <img src={logoCUCEI} alt="CUCEI" className="logo-cucei" />

      <div className="unidad-content">
        <h1>UNIDAD 3</h1>

        <div className="pdf-list">

          <a
            href="/pdfs/Retomando mi primer sprint.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-item"
          >
            📄 Retomando mi primer Sprint
          </a>

          <a
            href="/pdfs/PROYECTO II FASE I.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-item"
          >
            📄 Proyecto II - Fase I
          </a>

          <a
            href="/pdfs/PROYECTO FASE II.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-item"
          >
            📄 Proyecto - Fase II
          </a>

          <a
            href="/pdfs/PROYECTO FASE III.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-item"
          >
            📄 Proyecto - Fase III
          </a>

          <a
            href="/pdfs/Actividad Integradora Unidad 3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-item"
          >
            📄 Actividad Integradora – Unidad 3
          </a>

        </div>
      </div>
    </div>
  );
}
