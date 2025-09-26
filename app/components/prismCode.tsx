"use client";
import Prism from "prismjs";
import { useEffect } from "react";

// Import the languages you need
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-python";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-cmake";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup"; // HTML

export default function CodeBlock({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className={language}>
      <code className={language}>{code}</code>
    </pre>
  );
}