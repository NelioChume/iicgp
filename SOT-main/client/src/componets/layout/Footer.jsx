import { FaFacebook, FaYoutube, FaTelegram, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer className="bg-white text-black py-8 px-4 w-full">
            {/* Inner container to center content but not constrain full width */}
            <div className="max-w mx-auto w-full">
                {/* Top Section */}
                <div className="flex flex-col ml-10 mr-10 md:flex-row justify-between items-center border-b border-black pb-6 mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img
                            src={logo}
                            alt="Escola da Verdade"
                            className="h-10 mr-3"
                        />
                        <h2 className="text-xl font-bold">ESCOLA DA VERDADE</h2>
                    </div>
                    <div >
                        <a className='hover:text-orange-500' href="mailto:ecclesiastesmi@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} /> ecclesiastesmi@gmail.com
                        </a>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm">Siga-nos:</span>
                        <a href="https://www.facebook.com/share/177MPyiN7r/?mibextid=wwXIfr" className="text-black hover:text-blue-600 transition">
                            <FaFacebook size={20} />
                        </a>
                        <a href="https://www.youtube.com/@schooloftruth6845" className="text-black hover:text-red-600 transition">
                            <FaYoutube size={20} />
                        </a>
                        <a href="https://t.me/EscolaDaVerdade" className="text-black hover:text-blue-400 transition">
                            <FaTelegram size={20} />
                        </a>
                        <a href="https://www.instagram.com/pastorjosehumberto?igsh=dXZjejl3bmFjaTh5" className="text-black hover:text-pink-500 transition">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col ml-10 mr-10 md:flex-row justify-between items-center text-sm">
                    <div className="mb-4 md:mb-0 flex gap-4">
                        <span className="hover:underline cursor-pointer">Privacy Policy</span>
                        <span className="hover:underline cursor-pointer">Terms Of Use</span>
                    </div>
                    <div className="text-center md:text-right">
                        © 2025 Escola da Verdade. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
