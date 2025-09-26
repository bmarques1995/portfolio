"use client";
import Prism from "prismjs";
import { useEffect, useState } from "react";

// Import the languages you need
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-python";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-cmake";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup"; // HTML
import Image from 'next/image'

export default function CodeBlock({ code, language }) {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        navigator.clipboard.writeText(code);
        setClicked(true);
        // Remove the effect after 200ms
        setTimeout(() => setClicked(false), 75);
    };

    const languageName = language ? language.replace("language-", "") : "text";
    return (
        <div className="rounded-lg overflow-hidden w-full h-full">
            <div className="text-gray-100 px-3 py-1 font-mono text flex justify-between items-center">
                <span className="text-sm">{languageName}</span>
                <button type="button" onClick={handleClick} className={clicked ? "bg-neutral-500 px-1 py-1 cursor-pointer" : "px-1 py-1 cursor-pointer"}>
                    <Image src="/assets/copy.svg" alt="Copy Icon" width={16} height={16}/>
                </button>
            </div>
            <pre className={language} tabIndex={0}>
                <code className={language}>{code}</code>
            </pre>
        </div>
    );
}
