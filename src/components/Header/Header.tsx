// Importamos el SVG del logo
import {MainLogo} from '../Logo/Logo.tsx';

export function Header(props: {logoUrl?: string; menuItems?: string[]; buttonLink?: string;}) {
let logoUrl = props.logoUrl ?? null;
let menuItems = props.menuItems;
let buttonLink = props.buttonLink;
    return(
        <header className="app-header">
            <div className="logo_block">
            {logoUrl ? <img src={logoUrl} alt="App Logo" /> : <MainLogo /> }
    
            </div>

            <div className="navigation_block">
                <div className="menu_block">
                    {menuItems?.map((item, index) => (
                        <a key={index} href={`#${item.toLowerCase()}`}>{item}</a>
                    ))}
                </div>
                <div className="cv_button_block">
                    <a href={buttonLink} className="cv_btn">Contact</a>
                </div>
                <div className="day_and_night_btn">
                    dianoche
                </div>
            </div>

            
        </header>
    )

}