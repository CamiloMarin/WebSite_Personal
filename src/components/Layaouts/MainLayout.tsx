
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

//CSS

import "../Header/Header.css";

export default function MainLayout({ children }:{ children: React.ReactNode }) {
  return (
    <>
      <Header menuItems={['About me', 'skills', 'Projects', 'Resume']} buttonLink="#"/>
      <main>{children}</main>
      <Footer />
    </>
  );
}