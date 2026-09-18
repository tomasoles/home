import React, { useEffect, useState } from "react";

/**
 * Minimal dependency-free replacement for `react-typing-effect`.
 * Types each string out, pauses, erases it, then moves to the next one.
 */
const TypingEffect = ({
  text = [],
  speed = 100,
  eraseSpeed = 100,
  eraseDelay = 1500,
  typingDelay = 300,
}) => {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (text.length === 0) return undefined;
    const current = text[index % text.length];

    if (!erasing && length < current.length) {
      const id = setTimeout(() => setLength(length + 1), speed);
      return () => clearTimeout(id);
    }
    if (!erasing && length === current.length) {
      const id = setTimeout(() => setErasing(true), eraseDelay);
      return () => clearTimeout(id);
    }
    if (erasing && length > 0) {
      const id = setTimeout(() => setLength(length - 1), eraseSpeed);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setErasing(false);
      setIndex((i) => (i + 1) % text.length);
    }, typingDelay);
    return () => clearTimeout(id);
  }, [text, index, length, erasing, speed, eraseSpeed, eraseDelay, typingDelay]);

  const current = text.length ? text[index % text.length] : "";

  return (
    <span>
      {current.slice(0, length)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect;
