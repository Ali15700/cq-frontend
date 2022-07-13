
import "./menu.scss"



export default function Menu({menuOpen ,setMenuOpen}) {
    return (
     
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#detail">Add Details</a>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#student">Student List</a>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#book">Book List</a>
                </li>
                
            </ul>
            

        
       
        </div>
        
    )
}
