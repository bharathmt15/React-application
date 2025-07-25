import Dosa from "./Dosa";
import Idly from "./Idly";
import Puri from "./Puri";
import Bonda from "./Bonda";
import Chappati from "./Chappati";
import Vada from "./Vada";
import {useEffect} from "react";
export default function Addfood() {
    useEffect(() => {
        document.title = "PUBG MOBILE";
    }, []);
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
