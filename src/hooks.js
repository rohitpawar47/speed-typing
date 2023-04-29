import React from "react";

export default function useHooks(startingTime = 10) {

    const [word, setWord] = React.useState(0);
    const [text, setText] = React.useState("");
    const [timmer, setTimmer] = React.useState(startingTime);
    const [timeRunning, setTimeRunning] = React.useState(false);
    const inputRef = React.useRef(null);

    function startGame() {
        setTimeRunning(true)
        setTimmer(startingTime)
        setText("")
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    function endGame() {
        setTimeRunning(false)
        setWord(calculateWords(text))
    }

    function calculateWords(text) {
        const textArr = text.trim().split(" ")
        return textArr.filter(item => item !== "").length;
    }

    React.useEffect(() => {
        if (timeRunning && timmer > 0) {
            setTimeout(() => {
                setTimmer(prevTime => prevTime - 1)
            }, 1000)
        } else if (timmer === 0) {
            endGame()
        }
    }, [timmer, timeRunning])

    function handleChange(event) {
        setText(event.target.value)
    }

    return { handleChange, text, timeRunning, inputRef, timmer, startGame, word }
}