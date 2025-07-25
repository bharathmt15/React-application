import Dosa from "./Dosa";
import Idly from "./Idly";
import Puri from "./Puri";
import Bonda from "./Bonda";
import Chappati from "./Chappati";
import Vada from "./Vada";
export default function Addfood() {
    return (
        <>
            <div>
                <div>
                    {<Idly />}
                    {<Dosa />}
                    {<Puri />}
                    {<Bonda />}
                    {<Chappati />}
                    {<Vada />}
                </div>
            </div>
        </>
    );
}
