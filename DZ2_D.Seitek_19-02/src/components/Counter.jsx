const Counter = (props) => {
    return (
        <>
            <p>{props.count}</p>
            <button onClick={() => props.handleCount()}>+</button>
            <button onClick={() => props.handleCountMinus()}>-</button>
        </>
    )
}

export default Counter;