import React, { useState } from "react";

function ButtonComponent () {

    const [buttonCount, setButtonCount] = useState({ count: 0 });
    const [secondCount, setSecondCount] = useState({ secount: 0 })
    const [thirdCount, setThirdCount] = useState({ thcount: 0 })



    function handleButton1 () {
        alert("First button was clicked!");
        setButtonCount((prevCount) => {
            return {
                count: prevCount.count + 1 
            }
        });
        console.log("First button was clicked!");
    }
    function handleButton2 () {
        alert("Second button was clicked!");
        setSecondCount((count2) => {
            return {
                secount: count2.secount + 1
            }
        })
        console.log("Second button was clicked!");
    }
    function handleButton3 () {
        alert("Third button was clicked!");
        setThirdCount((anotherCount) => {
            return {
                thcount: anotherCount.thcount + 1
            }
        })
        console.log("Third button was clicked!");
    }


    return (
        <div style={{ "width": "80%", "backgroundColor": "lightcyan", "margin": "0 auto", "height": "100vh", "borderRadius": "5px" }} >

            <div style={{ "textAlign": "center" }} >
                <button id="firstButton" onClick={handleButton1} style={{ "width": "15%", "padding": "15px", "fontSize": "1.5rem", "border": "2px solid green", "color": "green", "backgroungColor": "lightcyan", "borderRadius": "8px", "marginTop": "25%" }} >First Count: {buttonCount.count} </button><br />
            </div>

            <div style={{ "textAlign": "center" }} >
                <button id="secondButton" onClick={handleButton2} style={{ "width": "15%", "padding": "15px", "fontSize": "1.5rem", "border": "2px solid green", "color": "green", "backgroungColor": "lightcyan", "borderRadius": "8px", "marginTop": "2%" }} >Second Count: {secondCount.secount}</button><br />
            </div>

            <div style={{ "textAlign": "center" }} >
                <button id="thirdButton" onClick={handleButton3} style={{ "width": "15%", "padding": "15px", "fontSize": "1.5rem", "border": "2px solid green", "color": "green", "backgroungColor": "lightcyan", "borderRadius": "8px", "marginTop": "2%" }} >Third Count: {thirdCount.thcount}</button>
            </div>

        </div>
    )
}


export default ButtonComponent