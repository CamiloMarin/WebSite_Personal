export function MainLogo(Props: { colorA?: string, colorB?: string, colorC?: string, colorD?: string }) {
  
  let colorA = Props.colorA ?? "#df9753";
  let colorB = Props.colorB ?? "#4682da";
  let colorC = Props.colorC ?? "#ffffffff";
  let colorD = Props.colorD ?? "#0bdada";

  return (
    <svg className="my_logo_svg" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 1570 283" width="1570" height="283">
      <path fill={colorA} d="m109.5 31.3v31.2h31.3l-0.1-31.3zm-31.2 31.3v62.5h31.3l-0.1-62.5zm-31.2 62.5v31.3l31.2-0.1v-31.2zm31.3 31.3v62.4h31.2v-62.5zm31.3 62.5v31.3h31.2v-31.3zm1287.5-187.4v31.2h31.3v-31.2zm31.2 31.2v62.5h31.3v-62.5zm31.2 62.5v31.3h31.3v-31.3zm-31.3 31.3v62.5h31.3v-62.5zm-31.3 62.5v31.2h31.3v-31.2z"/>
      <path fill={colorB} d="m197 80v25h75v-25zm-25 25v75h25v-75zm100 0v25h25v-25zm0 50v25h25v-25zm-75 25v25h75v-25zm150-100v25h75v-25zm75 25v25h-75v25h75v25h-75v25h100v-100zm-100 50v25h25v-25zm150-75v125h25v-100h25v-25zm75 0v25h25v-25zm-25 25v50h25v-50zm50 0v100h25v-100zm50-75v25h25v-25zm0 50v125h25v-125zm50-50v150h25v-150zm25 150v25h25v-25zm75-100v25h75v-25zm-25 25v75h25v-75zm100 0v75h25v-75zm-75 75v25h75v-25z"/>
      <path fill={colorC} d="m897 180v25h25v-25z"/>
      <path fill={colorD} d="m1047 30v75h-25v25h25v50h-75v25h100v-175zm-75 50v25h50v-25zm-25 25v75h25v-75zm175-25v25h75v-25zm-25 25v75h25v-25h100v-50h-25v25h-75v-25zm25 75v25h100v-25zm125-100v75h25v-75zm100 0v75h25v-75zm-75 75v25h25v-25zm50 0v25h25v-25zm-25 25v25h25v-25z"/>
    </svg>
  );
}



