import { useNavigate } from "react-router-dom";

function NavButtons(){
    return(
        <div>
            <button onClick={() => Navigate(-1)}>Back</button>

            <button onClick={()=> Navigate('/')}>Home</button>
        </div>
    )
}

export default NavButtons