/**
 * @Client Component
 * Renders the "Gaze" page with two Frame components, rotated to face each other.
 */

"use client";

import Image from "next/image";
import { wyld_5 } from "public";

export default function Gaze() {
    return (
        <section className={"page-layout"}>
            <div className={"flex-between p-10 h-full"}>
                <div>
                    <Frame />
                </div>
                <div className={"rotate-180"}>
                    <Frame />
                </div>
            </div>
        </section>
    );
}

/**
 * @Client Component
 * Renders a frame with an image and overlaid text.
 */
const Frame = () => {
    return (
        <div className={"relative overflow-hidden"}>
            <Image src={wyld_5} alt="gaze" className="h-190 w-auto" />
            <div
                className={
                    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                }
            >
                <span className={"text-loud text-8xl"}>
                    The Gaze of the Hunter
                </span>
            </div>
        </div>
    );
};
