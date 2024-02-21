function FunctionParanthesisAndParameters() {
  const square = (a: number) => a * a;
  const plusOne = (a: number) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  return (
    <>
    <h3>Paranthesis and parameters</h3>
    twoSquared = {twoSquared}<br></br>
    square = {square(2)}<br></br>
    threePlusOne = {threePlusOne} <br></br>
    plusOne = {plusOne(3)}
    </>
  );
}

export default FunctionParanthesisAndParameters;