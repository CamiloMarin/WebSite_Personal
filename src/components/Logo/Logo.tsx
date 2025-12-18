export function MainLogo(Props: { classA?: string, classB?: string, classC?: string, colorA?: string, colorB?: string, colorC?: string }) {
  
  let classA = Props.classA;
  let classB = Props.classB;
  let classC = Props.classC;

  let colorA = Props.colorA ?? "#df9753";
  let colorB = Props.colorB ?? "#4682da";
  let colorC = Props.colorC ?? "#0bdada";

  return (
<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 147.99999999999997 1570 446.9999999999999" width="1570" height="448">
<style>
{`
  .${classA} { fill: ${colorA}; }
  .${classB} { fill: ${colorB}; }
  .${classC} { fill: ${colorC}; }
`}
  </style>
<path className={classA} d="m122 286v25h25v-25zm-25 25v50h25v-50zm-25 50v25h25v-25zm25 25v50h25v-50zm25 50v25h25v-25zm1275-150v25h25v-25zm25 25v50h25v-50zm25 50v25h25v-25zm-25 25v50h25v-50zm-25 50v25h25v-25z"/>
<path className={classB} d="m197 336v25h75v-25zm-25 25v75h25v-75zm100 0v25h25v-25zm0 50v25h25v-25zm-75 25v25h75v-25zm150-100v25h75v-25zm75 25v25h-75v25h75v25h-75v25h100v-100zm-100 50v25h25v-25zm150-75v125h25v-100h25v-25zm75 0v25h25v-25zm-25 25v50h25v-50zm50 0v100h25v-100zm50-75v25h25v-25zm0 50v125h25v-125zm50-50v150h25v-150zm25 150v25h25v-25zm75-100v25h75v-25zm-25 25v75h25v-75zm100 0v75h25v-75zm-75 75v25h75v-25z"/>
<path d="m897 436v25h25v-25z"/>
<path className={classC} d="m1047 286v75h-25v25h25v50h-75v25h100v-175zm-75 50v25h50v-25zm-25 25v75h25v-75zm175-25v25h75v-25zm-25 25v75h25v-25h100v-50h-25v25h-75v-25zm25 75v25h100v-25zm125-100v75h25v-75zm100 0v75h25v-75zm-75 75v25h25v-25zm50 0v25h25v-25zm-25 25v25h25v-25z"/></svg>
  );
}
