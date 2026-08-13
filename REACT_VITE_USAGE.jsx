import { useEffect, useState } from "react";
import PrettyToggle from "./src/PrettyToggle";
import { registerPrettyHomeScreenIcon } from "./src/register-pwa";

export default function Example() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    registerPrettyHomeScreenIcon();
  }, []);

  return (
    <PrettyToggle
      checked={enabled}
      onChange={(event) => setEnabled(event.target.checked)}
      label="Listen mode"
    />
  );
}
