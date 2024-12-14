import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const SobreMim = () => {
    return (
        <>
            <section className="flex flex-col gap-2 mx-10">
                <div className="mx-0 lg:mx-64">
                    <h1 className="font-bold text-5xl">Sobre mim</h1>
                </div>
                <div>
                    <div className="mx-auto lg:mx-64">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Quem sou eu?</AccordionTrigger>
                                <AccordionContent>
                                    <p>Prazer, me chamo Nicolas Haubricht e faço Engenharia de Software na FIAP.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Minha trajetória:</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It comes with default styles that matches the other
                                    components&apos; aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Tecnologias que domino:</AccordionTrigger>
                                <AccordionContent className="flex gap-10">
                                    <div>
                                        <ul>HTML</ul>
                                        <ul>CSS</ul>
                                        <ul>JavaScript</ul>
                                        <ul>React Vite</ul> 
                                        <ul>Styled Components</ul>
                                        <ul>Tailwind</ul>
                                    </div>
                                    <div>
                                        <ul>Git</ul>
                                        <ul>GitHub</ul>
                                        <ul>Python</ul>
                                        <ul>C++</ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Tecnologias que estou estudando:</AccordionTrigger>
                                <AccordionContent>
                                    <ul>Next</ul>
                                    <ul>Flask</ul>
                                    <ul>Node</ul>
                                    <ul>SQL</ul>
                                    <ul>TypeScript</ul>
                                    <ul>AWS</ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SobreMim