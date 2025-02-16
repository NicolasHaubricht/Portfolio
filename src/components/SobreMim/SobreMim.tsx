import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const SobreMim = () => {
    return (
        <section className="flex flex-col gap-2 mx-10">
            <div className="mx-0 lg:mx-64">
                <h1 className="font-bold text-5xl">Sobre mim</h1>
            </div>
            <div>
                <div className="mx-auto lg:mx-64">
                    <Accordion type="single" collapsible className="w-full text-justify" >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Quem sou eu?</AccordionTrigger>
                            <AccordionContent>
                                <p>Prazer, me chamo Nicolas Haubricht e estou cursando o terceiro semestre de Engenharia de Software na FIAP (Faculdade de Informática e Administração Paulista).</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Minha trajetória:</AccordionTrigger>
                            <AccordionContent>
                                Apaixonado por tecnologia, em 2016 iniciei minha jornada no Design Gráfico. Em 2023, optei por expandir meus conhecimentos para o desenvolvimento de software, estudando por conta própria e em 2024 iniciei a graduação. Busco oportunidades desafiadoras que promovam meu crescimento técnico e pessoal, com foco em soluções inovadoras e impactantes.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Conhecimento nas Tecnologias:</AccordionTrigger>
                            <AccordionContent className="flex gap-10">
                                <div>
                                    <ul>HTML</ul>
                                    <ul>CSS</ul>
                                    <ul>JavaScript</ul>
                                    <ul>React.js</ul>
                                    <ul>Tailwind</ul>
                                    <ul>Styled Components</ul>
                                </div>
                                <div>
                                    <ul>Git e GitHub</ul>
                                    <ul>Python</ul>
                                    <ul>Flask</ul>
                                    <ul>SQL</ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>

    )
}

export default SobreMim