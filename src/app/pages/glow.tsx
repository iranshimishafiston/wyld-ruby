/**
 * @Client Component
 * Renders the "Glow" page with an image, text content, and overlaid text.
 */

"use client";

import Image from "next/image";
import { wyld_3 } from "public";

export default function Glow() {
    return (
        <section className={"page-layout"}>
            <div className={"p-10 flex-center h-full"}>
                <div
                    className={
                        "h-180 w-230 bg-primary px-4 py-6 flex flex-col justify-between"
                    }
                >
                    <h1 className={"text-loud text-8xl"}>
                        Ascension in the Red Glow
                    </h1>
                    <p className={"text-script text-2xl"}>
                        Chasing the light until the world fades to a crimson
                        haze, standing tall in the intersection of vulnerability
                        and absolute power
                    </p>
                </div>
                <div className={"relative"}>
                    <Image src={wyld_3} alt="glow" className="h-180 w-auto" />
                    <div
                        className={
                            "absolute top-0 flex flex-col p-4 uppercase text-xs text-background"
                        }
                    >
                        <span>Crimson</span>
                        <span>Ethereal</span>
                        <span>Defiance</span>
                        <span>Radiance</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
