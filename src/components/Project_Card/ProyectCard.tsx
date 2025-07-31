export function ProyectCardContainer(){
    
  return (
    <div>
      
    </div>
  )
}


export function SectionContainer(props: { className: string; height: number; id: string; children: any; }){
    let className = props.className;
    let height = props.height;
    let id = props.id;
    let children = props.children;
    return(
        <section id={id} className={className} style={{ height: `${height}px` }}>
            {children}
        </section>
    )
}

