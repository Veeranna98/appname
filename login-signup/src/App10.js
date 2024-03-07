const complexFunction = () => {
    console.log("Initializing count");
    return 5;
  };
  export default function App10() {
    // const [count, setCount] = useState(() => {
    //   return complexFunction() //runs once
    // });
    const [count, setCount] = useState(complexFunction()); //runs on every render
    return (
      <>
        <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
      </>
    );
  }
  