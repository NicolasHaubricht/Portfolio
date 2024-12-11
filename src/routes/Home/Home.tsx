"use client";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../../components/ui/animated-grid-pattern";
import TypingAnimation from "../../components/ui/typing-animation";
import GradualSpacing from "../../components/ui/gradual-spacing";
import CardProjetos from "@/components/CardProjetos/CardProjetos";
import Linguagens from "@/components/Linguagens/Linguagens";
// import TextReveal from "../../components/ui/text-reveal";

const Home = () => {

    return (
        // Home
        <main className="flex flex-col gap-10">
            {/* Bem Vindo */}
            <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-background p-20">
                <div className="flex flex-col gap-2">
                    {/* Nome */}
                    <GradualSpacing
                        className="font-display text-center text-5xl font-bold -tracking-widest z-10 text-black dark:text-white md:text-7xl md:leading-[5rem]"
                        text="Nicolas Haubricht Hainfellner"
                    />

                    {/* Cargo */}
                    <TypingAnimation
                        className="text-4xl font-bold text-black dark:text-white"
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

            {/* Sobre Mim */}
            <section>
                
            </section>
                    
            {/* Linguagens de Programação */}
            <section className="w-full min-h-dvh flex items-center p-3">
                <Linguagens/>
            </section>
            
            {/* Projeto Desktop */}
            <section>

            </section>

            {/* Projetos Mobile */}
            <section className="w-full my-14 flex justify-center sm:hidden">
                <CardProjetos/>
            </section>
        </main>
    )
}

export default Home

