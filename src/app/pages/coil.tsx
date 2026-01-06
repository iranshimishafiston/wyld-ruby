/**
 * @Client Component
 * Renders the "Coil" page with a title, description, and background image.
 */

"use client";

import Image from "next/image";
import { wyld_1 } from "public";

export default function Coil() {
    return (
        <section className={"relative page-layout overflow-y-hidden"}>
            <div className={"mt-10 ml-20"}>
                <ul
                    className={
                        "uppercase space-x-4 tracking-widest text-xs flex"
                    }
                >
                    <li>Coil</li>
                    <li>Muse</li>
                    <li>Glow</li>
                    <li>Strike</li>
                    <li>Gaze</li>
                </ul>
            </div>
            <div className={"flex-center"}>
                <div className={"translate-y-120"}>
                    <h1 className={"text-loud text-8xl"}>Wyld Ruby</h1>
                    <p className={"text-script text-center text-4xl"}>
                        Blinding heat, bare skin, no apologies
                    </p>
                </div>
            </div>
            {/* Main Background */}
            <div className="absolute inset-0 -top-30 -z-10">
                <Image src={wyld_1} alt="main" />
            </div>
        </section>
    );
}
