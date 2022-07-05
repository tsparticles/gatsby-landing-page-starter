import React from "react"
import Particles from "react-tsparticles"
import particlesOptions from "../particles.json"
import "../styles/index.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { loadFull } from "tsparticles";
import Seo from "../components/Seo"

library.add(fab)

export default function Home() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="App">
      <Seo Sitetitle="Home" />
      <Particles init={particlesInit} options={particlesOptions} />
      <div className="flex-container">
        <div className="row">
          <h1 className="flex-item">Hello, I'm an John Doe</h1>
          <h2 className="flex-item">I'm a Web Developer!</h2>
          <div className="social">
            <a href="https://github.com/matteobruni/tsparticles">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
            <a href="https://github.com/matteobruni/tsparticles">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
            <a href="https://github.com/matteobruni/tsparticles">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
            <a href="https://github.com/matteobruni/tsparticles">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
