"use client";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../../components/ui/animated-grid-pattern";
import TypingAnimation from "../../components/ui/typing-animation";
import GradualSpacing from "../../components/ui/gradual-spacing";

const BemVindo = () => {
    return (
        <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-background p-20">
            <div className="flex flex-col gap-2">
                {/* Nome */}
                <GradualSpacing
                    className="font-display text-center text-4xl font-bold -tracking-widest z-10 text-black dark:text-white md:text-7xl md:leading-[5rem]"
                    text="Nicolas Haubricht"
                />

                {/* Cargo */}
                <TypingAnimation
                    className="text-2xl font-bold text-black dark:text-white"
                    text="Engenheiro de Software"
                />
            </div>
            {/* Background */}
            <AnimatedGridPattern
                numSquares={100}
                maxOpacity={0.1}
                duration={1}
                repeatDelay={4}
                className={cn(
                    "[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-20%] h-[150%] skew-y-12",
                )}
            />
        </section>
    )
}

export default BemVindo