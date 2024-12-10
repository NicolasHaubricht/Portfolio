import ItemsNav from "../ItemsNav/ItemsNav"

const Nav = () => {
    return (
        <nav className="p-3 fixed w-full flex justify-center z-50">
            <div>
                <ItemsNav/>
            </div>
        </nav>
    )
}

export default Nav