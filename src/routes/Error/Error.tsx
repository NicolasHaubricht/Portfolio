"use client";
import { Link } from "react-router-dom";
import ShimmerButton from "@/components/ui/shimmer-button";
import { SparklesCore } from "../../components/ui/sparkles";

const Error = () => {
    return (
        <section className="min-h-dvh flex items-center justify-center">
            <div className="h-[40rem] w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">404 - Página não encontrada</h1>
                <div className="w-[40rem] h-40 relative">
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px w-1/4" />
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                    <Link to='/'>
                        <div className="z-10 flex min-h-64 items-center justify-center">
                            <ShimmerButton className="shadow-2xl">
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                    Home
                                </span>
                            </ShimmerButton>
                        </div>
                    </Link>
                    <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
        </section>
    )
}

export default Error