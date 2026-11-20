"use client";

import { useEffect, useState } from "react";

/**
 * Renders the current year. The value is read in an effect so the static
 * page stays prerenderable; the prerendered fallback is the build year.
 * The set-state-in-effect is intentional here (client-only read after mount).
 */
export default function CurrentYear() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);
  return <>{year}</>;
}
