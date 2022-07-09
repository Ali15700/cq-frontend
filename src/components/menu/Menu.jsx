
import "./menu.scss"



export default function Menu({menuOpen ,setMenuOpen}) {
    return (
     
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#detail">Detail</a>
                </li>
                
            </ul>
            

        
       
        </div>
        
    )
}
