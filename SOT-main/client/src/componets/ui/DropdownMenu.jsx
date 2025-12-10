import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ label, items, mobile = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 5000); // Close after 5 seconds
    };

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    const handleMobileToggle = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div
            className="relative"
            onMouseEnter={!mobile ? handleMouseEnter : undefined}
            onMouseLeave={!mobile ? handleMouseLeave : undefined}
        >
            <button
                onClick={mobile ? handleMobileToggle : undefined}
                className={`flex items-center gap-1 text-black px-4 py-2 rounded-md transition duration-300 ease-in-out ${isOpen ? "bg-orange-500 text-white" : "hover:bg-orange-500 hover:text-white"
                    }`}
            >
                {label}
                <ChevronDown size={16} />
            </button>

            <div
                className={`absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg transform transition-all duration-300 ease-in-out origin-top z-30
                    ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
                    ${mobile ? "static mt-1 w-full" : ""}
                `}
            >
                {items.map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                        onClick={() => setIsOpen(false)}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
