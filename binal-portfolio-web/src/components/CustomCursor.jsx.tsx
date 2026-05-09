// src/components/CustomCursor.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

type CustomCursorProps = {
    label?: string;
};

export default function CustomCursor({ label = "You" }: CustomCursorProps) {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = cursorRef.current;
        if (!el) return;

        const xTo = gsap.quickTo(el, "x", {
            duration: 0.18,
            ease: "power3.out",
        });

        const yTo = gsap.quickTo(el, "y", {
            duration: 0.18,
            ease: "power3.out",
        });

        const handleMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener("mousemove", handleMove);

        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        >
            <div className="relative">
                {/* Pointer icon */}
                {/*<svg*/}
                {/*    width="18"*/}
                {/*    height="24"*/}
                {/*    viewBox="0 0 18 24"*/}
                {/*    className="block drop-shadow-sm"*/}
                {/*>*/}
                {/*    <path d="M2 1 L2 18 L13 11 Z" fill="white" />*/}
                {/*</svg>*/}
                <svg
                    width="16"
                    height="20"
                    viewBox="0 0 331 434"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block drop-shadow-sm"
                >
                    <path
                        d="M329.468 243.763L118.477 254.976L118.158 254.993L118.039 255.289L47.476 431.949L0.620072 1.07913L329.468 243.763Z"
                        fill="#ffffff"
                    />
                    <path
                        d="M329.468 243.763L118.477 254.976L118.158 254.993L118.039 255.289L47.476 431.949L0.620072 1.07913L329.468 243.763Z"
                        // stroke="#000000"
                        // strokeWidth="18"
                    />
                </svg>

                {/* Label bubble */}
                <div className="absolute left-6 top-3 rounded-md bg-white px-2 py-1 text-xs font-medium text-black shadow-sm">
                    {label}
                </div>
            </div>
        </div>
    );
}