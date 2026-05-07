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
                <svg
                    width="18"
                    height="24"
                    viewBox="0 0 18 24"
                    className="block drop-shadow-sm"
                >
                    <path
                        d="M2 1 L2 18 L6.5 14.5 L9.5 22 L12 21 L9 13.5 L16 13 Z"
                        fill="white"
                    />
                </svg>

                {/* Label bubble */}
                <div className="absolute left-4 top-3 rounded-md bg-white px-2 py-1 text-xs font-medium text-black shadow-sm">
                    {label}
                </div>
            </div>
        </div>
    );
}