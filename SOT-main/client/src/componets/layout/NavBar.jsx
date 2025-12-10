import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../ui/DropdownMenu";
import { Menu, X } from "lucide-react";
import logo from '../../assets/logo.png';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        let timer;
        if (menuOpen) {
            timer = setTimeout(() => setMenuOpen(false), 5000);
        }
        return () => clearTimeout(timer);
    }, [menuOpen]);

    const toggleMobileMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-white shadow-md w-full fixed top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between  py-3 sm:p-5">
                {/* Logo - Left */}
                <div className="">
                    <Link to="/" className="flex items-center ">
                        <img src={logo} alt="Escola da Verdade" className="h-10" />
                        <span className="text-xl sm:text-2xl font-bold text-black whitespace-nowrap">
                            Escola da Verdade
                        </span>
                    </Link>
                </div>

                {/* Center Dropdowns */}
                <div className="hidden md:flex space-x-6">
                    <Dropdown
                        label="Programas"
                        items={[
                            { label: "Fundamentos", to: "/programas/fundamentos" },
                            { label: "Aprofundamento", to: "/programas/intensivos" },
                        ]}
                    />
                    <Dropdown
                        label="Pregações"
                        items={[
                            { label: "Áudio", to: "/pregacoes/audio" },
                            { label: "Vídeo", to: "/pregacoes/video" },
                            { label: "Leitura", to: "/pregacoes/leitura" },
                        ]}
                    />
                    <Dropdown
                        label="Mais"
                        items={[
                            { label: "Acerca de Nós", to: "/mais/sobre" },
                            { label: "Nossa História", to: "/mais/historia" },
                            { label: "Parceria", to: "/mais/parceria" },
                            { label: "Eventos", to: "/mais/eventos" },
                            { label: "Contato", to: "/mais/contato" },
                        ]}
                    />
                </div>

                {/* Inscrição Button - Right */}
                <div className="hidden md:flex">
                    <Link
                        to="/inscricao"
                        className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
                    >
                        Inscrição
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t shadow-inner px-4 pb-4 space-y-4 animate-slide-down">
                    <Dropdown
                        label="Programas"
                        items={[
                            { label: "Fundamentos", to: "/programas/fundamentos" },
                            { label: "Aprofundamento", to: "/programas/intensivos" },
                        ]}
                        mobile
                    />
                    <Dropdown
                        label="Pregações"
                        items={[
                            { label: "Áudio", to: "/pregacoes/audio" },
                            { label: "Vídeo", to: "/pregacoes/video" },
                            { label: "Leitura", to: "/pregacoes/leitura" },
                        ]}
                        mobile
                    />
                    <Dropdown
                        label="Mais"
                        items={[
                            { label: "Acerca de Nós", to: "/mais/sobre" },
                            { label: "Nossa História", to: "/mais/historia" },
                            { label: "Parceria", to: "/mais/parceria" },
                            { label: "Eventos", to: "/mais/eventos" },
                            { label: "Contato", to: "/mais/contato" },
                        ]}
                        mobile
                    />
                    <Link
                        to="/inscricao"
                        className="block bg-orange-500 text-white text-center rounded-full py-2 px-4 hover:bg-orange-600 transition"
                    >
                        Inscrição
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
