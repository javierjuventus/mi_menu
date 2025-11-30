import "./unidad.css";
import logoUDG from "../assets/udg.png";
import logoCUCEI from "../assets/cucei.jpeg";

export default function Proyectos() {
  return (
    <div className="unidad-wrapper">

      {/* LOGO UDG */}
      <img src={logoUDG} className="logo-udg" alt="UDG" />

      {/* LOGO CUCEI */}
      <img src={logoCUCEI} className="logo-cucei" alt="CUCEI" />

      <div className="unidad-content">
        <h1>Proyectos</h1>

        <div className="pdf-list">

          <a
            className="pdf-item"
            href="https://github.com/javierjuventus/visualizacion_del_sistema"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proyecto 1: Ventanilla Única (React)
          </a>

          <a
            className="pdf-item"
            href="https://github.com/javierjuventus/sitio_educativo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proyecto 2: Sitio Educativo
          </a>

        </div>
      </div>
    </div>
  );
}
