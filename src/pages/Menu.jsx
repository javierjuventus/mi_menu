import { Link } from "react-router-dom";
import "./menu.css";
import logoUDG from "../assets/udg.png";
import logoCUCEI from "../assets/cucei.jpeg";

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="left-side">
        <div className="logo-container">
          <img src={logoUDG} alt="Universidad de Guadalajara" />
        </div>
        <div className="logo-container">
          <img src={logoCUCEI} alt="CUCEI" />
        </div>
      </div>
      <nav className="right-side">
        <ul>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/unidad1">UNIDAD 1</Link></li>
          <li><Link to="/unidad2">UNIDAD 2</Link></li>
          <li><Link to="/unidad3">UNIDAD 3</Link></li>
          <li><Link to="/unidad4">UNIDAD 4</Link></li>
          <li><Link to="/reflexion">REFLEXIÓN</Link></li>
        </ul>
      </nav>
    </div>
  );
}
