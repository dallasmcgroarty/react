function App() {
    let message = 'Bye!';
    // const date = new Date();
    // const time = date.toLocaleTimeString();

    if (Math.random() > 0.5) {
        message = 'Hello There!';
    }

    //return <h1>{new Date().toLocaleTimeString()}</h1>;

    const name = 'Dallas';
    const age = 28;

    // return (
    //     <h1>
    //         Hi my name is {name} and my age is {age}
    //     </h1>
    // )

    // const inputType = 'number';
    // const minValue = 5;

    // return <input type={inputType} min={minValue} />

    // return <input style={{border: '2px solid red'}} type="number" min={5} />

    return (
        <div>
        <textarea className='textarea' autoFocus={true} />
        <input placeholder='hello' style={{color: 'red', border: '2px solid blue'}} maxLength={5} />
        </div>
    );
}

export default App;