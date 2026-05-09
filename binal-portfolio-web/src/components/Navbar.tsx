import { useEffect, useMemo, useState } from "react";

function Navbar() {
    const [now, setNow] = useState(new Date());
    const [deviceText, setDeviceText] = useState("unknown device");

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const platform =
            navigator.userAgentData?.platform ||
            navigator.platform ||
            "unknown device";

        const cores = navigator.hardwareConcurrency;

        setDeviceText(`${platform} • ${cores} cores`);
    }, []);

    const dateText = useMemo(
        () =>
            new Intl.DateTimeFormat("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
            }).format(now),
        [now]
    );

    const timeText = useMemo(
        () =>
            new Intl.DateTimeFormat("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            }).format(now),
        [now]
    );

    return (
        <nav className="bg-zinc-950 h-16 px-20 flex items-center justify-between">

            {/* web/user alias name(Left) */}
            <div className="flex items-center">
                <div className="text-2xl font-semibold tracking-wide">
                    B1N4L
                </div>
            </div>

            {/* device details and date (Middle) */}
            <div className="hidden md:flex flex-col items-center text-[11px] text-zinc-500 leading-tight font-mono tracking-wide">
                <span>{deviceText}</span>

                <time
                    className="tabular-nums text-zinc-400"
                    dateTime={now.toISOString()}
                >
                    {dateText} • {timeText}
                </time>
            </div>

            {/* Buttons (right)*/}
            <div className="flex items-center gap-6 text-sm text-zinc-300">
                <button className="hover:text-zinc-300 transition-colors duration-200">
                    PROJECTS
                </button>

                <button className="hover:text-zinc-100 transition-colors duration-200">
                    ABOUT
                </button>

                <button className="hover:text-zinc-100 transition-colors duration-200">
                    CONTACT
                </button>
            </div>
        </nav>
    );
}

export default Navbar;