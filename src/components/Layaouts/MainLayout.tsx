
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

//CSS

import "../Header/Header.css";

export default function MainLayout({ children }:{ children: React.ReactNode }) {
  return (
    <>
      <Header logoUrl="https://vitejs.dev/logo.svg" menuItems={['skills', 'Projects', 'About me', 'Resume']} buttonLink="#"/>
      <main>{children}</main>
      <Footer />
    </>
  );
}