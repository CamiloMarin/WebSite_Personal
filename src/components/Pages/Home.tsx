import MainLayout from "../Layaouts/MainLayout";

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
            height={'100vh'}
        >
        <h1>Vite + React</h1>
        </SectionContainer>
        <SectionContainer
            id="section2"
            className="flex items-center justify-center"
            height={'300px'}
        >
            <h2>Primera sección</h2>
        </SectionContainer>

        <SectionContainer
            id="section3"
            className="flex items-center justify-center red_background totalWidth"
            height={'500px'}
        >
        <h2>Segunda sección</h2>
        </SectionContainer>



        <svg style={{display: "none"}}>
            <filter id="grainy">
                <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
                <feComponentTransfer>
                <feFuncA type="linear" slope="0.5" />
                </feComponentTransfer>
            </filter>
        </svg>

    </MainLayout>
  );
}