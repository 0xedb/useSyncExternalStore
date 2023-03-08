import * as React from "react";
import { timeStore } from "./store";

export default function AnotherComponent() {
  const { unsubscribe, subscribe, getSnaphhot, getServerSnapshot } =
    React.useMemo(() => timeStore(), []);

  const t = React.useSyncExternalStore(
    subscribe,
    getSnaphhot,
    getServerSnapshot
  );

  console.log("another component here");

  return (
    <>
      <h1>{t}</h1>
    </>
  );
}
