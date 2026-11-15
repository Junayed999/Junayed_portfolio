"use client";

import { useEffect, useState } from "react";

/**
 * Renders the current year. The value is read in an effect so the static
 * page stays prerenderable; the prerendered fallback is the build year.
 */
export default function CurrentYear() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <>{year}</>;
}
