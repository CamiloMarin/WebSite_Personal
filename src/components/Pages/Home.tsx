import MainLayout from "../Layaouts/MainLayout";

import { GrainElement } from "../GrainSVG/Grain";

import { SectionContainer } from "../SectionContainer/SectionContainer";
import "../SectionContainer/SectionContainer.css";

//CSS

import "./Home.css";

export default function Home() {
  return (
    <MainLayout>
      <SectionContainer
        id="section1"
        className="flex items-center justify-center noise"
        height={"100vh"}
      >
        <div className="hero_section">
          <h1>
            <span className="name_tp">Camilo Marín Villa </span>
            <span className="profesion_tp">Frontend developer</span>
          </h1>
          <div className="nubes">
            <img className="nube-1" src={"src/assets/Images/Home/nubes-1.webp"} alt="Nubes de fondo" />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer
        id="section2"
        className="flex items-center justify-center"
        height={"300px"}
      >
        <h2>Primera sección</h2>
      </SectionContainer>

      <SectionContainer
        id="section3"
        className="flex items-center justify-center red_background totalWidth"
        height={"500px"}
      >
        <h2>Segunda sección</h2>
      </SectionContainer>

      {/* Grain component for bg */}
      <GrainElement></GrainElement>
    </MainLayout>
  );
}
