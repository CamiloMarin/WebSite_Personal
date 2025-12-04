import MainLayout from "../Layaouts/MainLayout";

import { SectionContainer } from "../SectionContainer/SectionContainer";
import "../SectionContainer/SectionContainer.css";

export default function Home() {
  return (
    <MainLayout>
        <h1>Vite + React</h1>

        <SectionContainer
            id="section1"
            className="flex items-center justify-center"
            height={300}
        >
            <h2>Primera sección</h2>
        </SectionContainer>

        <SectionContainer
            id="section2"
            className="flex items-center justify-center red_background totalWidth"
            height={500}
        >
        <h2>Segunda sección</h2>
        </SectionContainer>
    </MainLayout>
  );
}