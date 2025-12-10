        export function GrainElement(){
            return(
                <svg style={{display: "none"}}>
                    <filter id="grainy">
                        <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3" stitchTiles="stitch" />
                        <feColorMatrix type="saturate" values="0" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.5" />
                        </feComponentTransfer>
                    </filter>
                </svg>
            )
        }
        
