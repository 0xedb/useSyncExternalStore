import * as React from "react";
import AnotherComponent from "@/AnotherComponent";

export default function Home() {
  const [show, setShow] = React.useState(true);
  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {show ? <AnotherComponent /> : null}
      <button onClick={handleClick}>Toggle</button>
    </>
  );
}
