
import { NavbarProps } from "@/types"

interface NavbarTranslationsProps {
    translations: NavbarProps
}

const Navbar = ({ translations }: NavbarTranslationsProps) => {
    const { home, about, projects, contact } = translations
    return (
        <header className="w-full fixed z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <p>Jorge Humberto Macías Romero</p>
                <ul className="flex justify-center gap-2">
                    <li>{home}</li>
                    <li>{about}</li>
                    <li>{projects}</li>
                    <li>{contact}</li>
                    <li>
                        <button>ES</button>
                    </li>
                    <li>|</li>
                    <li>
                        <button>EN</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar