
export function Header(props: {logoUrl: string; menuItems?: string[];}) {
let logoUrl = props.logoUrl;
let menuItems = props.menuItems;
    return(
        <header className="app-header">
            <div className="logo_block">
                <img src={logoUrl} alt="App Logo" />
            </div>
            <div className="menu_block">
                {menuItems?.map((item, index) => (
                    <a key={index} href={`#${item.toLowerCase()}`}>{item}</a>
                ))}
            </div>
            <div className="cv_button_block">
                <button className="cv_btn">Resume</button>
            </div>
            
        </header>
    )

}