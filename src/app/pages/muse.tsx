/**
 * @Client Component
 * Renders the "Muse" page with an image and text content.
 */

"use client";

import Image from "next/image";
import { wyld_2 } from "public";

export default function Muse() {
    return (
        <section className={"page-layout bg-primary"}>
            <div className={"flex items-center justify-between p-10 h-full"}>
                <Image src={wyld_2} alt="muse" className="h-170 w-auto" />
                <div className={"h-full self-start w-6/10"}>
                    <div>
                        <h1 className={"text-loud text-8xl"}>
                            Floral Silk and Serpent Skin
                        </h1>
                    </div>
                    <div className={"flex flex-col-reverse h-3/5"}>
                        <p className={"text-script  text-4xl"}>
                            A delicate dance between the elegance of blooming
                            silk and the dangerous allure of the serpent's coil
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
