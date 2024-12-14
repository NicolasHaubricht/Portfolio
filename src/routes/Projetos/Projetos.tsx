import { Outlet } from "react-router-dom"
import ButtonType from "@/components/Buttons/ButtonType/ButtonType"
const Projetos = () => {
    return (
        <>
            <section>
                <Outlet />
                <div className="w-full">
                    <ButtonType text="Voltar para a página inicial"/>
                </div>
            </section>
        </>
    )
}

export default Projetos

