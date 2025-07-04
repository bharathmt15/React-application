import {useState} from "react";
function Toggle() {
    const [toggler, setToggler] = useState(false);
    return (
        <div className="boxr">
            <h3>Toggler App</h3>

            {toggler && <div className="box"></div>}

            <div>
                <button onClick={() => setToggler(false)}>Hide</button>
                <button onClick={() => setToggler(true)}>Show</button>
            </div>
        </div>
    );
}

export default Toggle;
