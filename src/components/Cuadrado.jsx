import { useState } from 'react'
const Cuadrado = () => {

    const getRandomInt = () => {
        return Math.floor(Math.random() * Number(255))
    }

    const [black, setBlack] = useState("black")
    const [isInterval, setIsInterval] = useState({ interval: null })

    const stopRandomColor = () => {
        clearInterval(isInterval.interval)
    }

    function startRandomColor() {
        isInterval.interval = setInterval(() => {
            setBlack(`rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`)
        }, 750)
      }

    return (
        <div className="App container text-center vh-100 ">
            <div className="row justify-content-center align-items-center vh-100">
                <div 
                onClick={stopRandomColor} 
                onMouseEnter={startRandomColor} 
                onMouseLeave={stopRandomColor} 
                style={{ width: "255px", height: "255px", background: black }}>
                </div>
            </div>

        </div>
    )
}

export default Cuadrado;