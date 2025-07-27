import Dosa from "./Dosa";
import Idly from "./Idly";
import Puri from "./Puri";
import Bonda from "./Bonda";
import Chappati from "./Chappati";
import Vada from "./Vada";
import {useEffect} from "react";
import hotel from "./Tiffins/hotel.jpg";
export default function Addfood() {
    useEffect(() => {
        document.title = "PUBG MOBILE";
    }, []);
    return (
        <>
            <div id="hotelimg">
                <img src={hotel} alt="hotel" id="hotel" />
            </div>

            <div>
                <div>
                    <h4 className="text-center mt-4">
                        We serve The best Food That you could exprience
                    </h4>
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
