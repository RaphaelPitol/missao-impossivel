import { DiGithubBadge } from "react-icons/di"
import { FaInstagram } from "react-icons/fa"
import "./style.css"

export const Footer = () => {
  return (
    <div className="footer">
      <p>Desenvolvido por Raphael Pitol</p>

      <a href="https://github.com/RaphaelPitol" target="blank"><DiGithubBadge/></a>
      <a href="https://www.instagram.com/pitoljuliani/" target="blank"><FaInstagram/></a>



    </div>
  )
}
