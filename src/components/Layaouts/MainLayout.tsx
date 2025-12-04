
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export default function MainLayout({ children }:{ children: React.ReactNode }) {
  return (
    <>
      <Header logoUrl="https://vitejs.dev/logo.svg" menuItems={['Section1', 'Section2']} />
      <main>{children}</main>
      <Footer />
    </>
  );
}