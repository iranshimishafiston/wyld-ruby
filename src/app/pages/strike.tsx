/**
 * @Client Component
 * Renders the "Strike" page with an image and text content.
 */

"use client";
import Image from "next/image";
import { wyld_4 } from "public";

export default function Strike() {
    return (
        <section className={"page-layout bg-primary"}>
            <div className={"flex-center p-10 h-full"}>
                <div>
                    <Image src={wyld_4} alt="strike" className="h-170 w-auto" />
                </div>
                <div className={"-translate-x-12"}>
                    <h1 className={"text-loud text-6xl"}>
                        Gravity Under Her Command
                    </h1>
                    <p className={"text-script text-3xl"}>
                        Defying the earth with a kinetic energy that pulses
                        through vinyl and lace, turning a moment of tension into
                        a work of art
                    </p>
                </div>
            </div>
        </section>
    );
}
