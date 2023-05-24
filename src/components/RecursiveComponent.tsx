function RecursiveComponent({ msg, currentIteration = 0 }) {
  return currentIteration === 5 ? null : (
    <p style={{ border: '3px solid #ccc', margin: 5 }}>
      <h1>{msg}</h1>
      <RecursiveComponent msg={msg} currentIteration={++currentIteration} />
    </p>
  );
}

export default RecursiveComponent;
