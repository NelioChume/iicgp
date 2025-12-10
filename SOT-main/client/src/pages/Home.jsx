import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

// Swiper for testimonials
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// React Icons
import { FaChurch, FaMapMarkerAlt, FaEnvelope, FaPhone, FaUserAlt } from "react-icons/fa";

// Testimonial images
import mariaImg from "../assets/students/01.jpg";
import joaoImg from "../assets/students/02.jpg";
import surajImg from "../assets/students/03.jpg";
import school from "../assets/school.jpg";
import founderImg from "../assets/founder.png";


const Home = () => (
    <div className="flex flex-col">
        {/* Hero Section */}
        <section
            className="relative bg-cover bg-center h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="bg-black bg-opacity-50 p-8 rounded-md text-center text-white max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Escola DA VERDADE</h1>
                <p className="text-lg md:text-2xl mb-6">
                    Formação sólida e transformacional na Palavra de Deus
                </p>
                <Link
                    to="/inscricao"
                    className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-white font-semibold transition"
                >
                    Inscreva-se Agora
                </Link>
            </div>
        </section>

        {/* Programas */}
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[
                    {
                        title: "Fundamentos",
                        desc: "Programa inicial de aprofundamento espiritual",
                        link: "/programas/fundamentos",
                    },
                    {
                        title: "Intensivo",
                        desc: "Conheça o nosso programa de aprofundamento",
                        link: "/programas/intensivos",
                    },
                    {
                        title: "Nossa História",
                        desc: "Conheça nossas raízes e como chegamos até aqui",
                        link: "/mais/historia",
                    },
                    {
                        title: "Mais Conteúdo",
                        desc: "Acesse materiais e recursos adicionais",
                        link: "/mais",
                    },
                ].map(({ title, desc, link }, i) => (
                    <div
                        key={i}
                        className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition"
                    >
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">{title}</h2>
                        <p className="text-gray-600 mb-4">{desc}</p>
                        <Link to={link} className="text-orange-600 font-semibold hover:underline">
                            Explorar →
                        </Link>
                    </div>
                ))}
            </div>
        </section>

        {/* Estatísticas */}
        <section className="py-16 px-6">
            <div className="max-w-5xl mx-auto text-center space-y-8">
                <h3 className="text-3xl font-semibold text-orange-500">
                    Descubra seu propósito com o estudo da Palavra
                </h3>
                <p className="text-gray-700 text-xl">
                    Experimente ensino aprofundado que transforma vidas e fortalece sua fé.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                        <span className="text-4xl font-bold text-orange-500">+500</span>
                        <p className="text-gray-600">Alunos formados</p>
                    </div>
                    <div>
                        <span className="text-4xl font-bold text-orange-500">15</span>
                        <p className="text-gray-600">Programas disponíveis</p>
                    </div>
                    <div>
                        <span className="text-4xl font-bold text-orange-500">5</span>
                        <p className="text-gray-600">Entregas por semana</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Depoimentos - estilo carrossel */}
        <section className="py-16 px-6 bg-gray-50 text-center">
            <h4 className="text-3xl font-semibold text-orange-500 mb-10">O que nossos alunos dizem</h4>

            <div className="max-w-2xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                >
                    {[
                        {
                            name: "Maria",
                            role: "Estudante da Escola da Verdade",
                            text: "Esse curso mudou minha vida completamente!",
                            image: mariaImg,
                        },
                        {
                            name: "JJose João Pinto",
                            role: "Estudante da Escola da Verdade",
                            text: "Professores incríveis e profundo entendimento da Bíblia.",
                            image: joaoImg,
                        },
                        {
                            name: "Emmanuel Ungido",
                            role: "Estudante da Escola da Verdade",
                            text:
                                "Some of the biggest teachings for me have been Receiving from God and Healing... They really built up my faith in God. Year two has helped me build my communication with people, and we all feel like a family now. I have so much confidence, even to speak in public.",
                            image: surajImg,
                        },
                    ].map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="flex flex-col items-center space-y-4 px-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-24 h-24 rounded-full object-cover shadow-md"
                                />
                                <p className="italic text-gray-700 max-w-xl">“{t.text}”</p>
                                <div className="mt-2">
                                    <strong className="block black text-xl">{t.name}</strong>
                                    <span className="text-sm text-orange-600">{t.role}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-orange-500 text-white text-center">
            <h5 className="text-2xl font-bold mb-4">Pronto para transformar sua vida?</h5>
            <Link
                to="/inscricao"
                className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
                Inscreva-se Agora
            </Link>
        </section>
        {/* Carta do Fundador */}
        <section className="bg-black text-white px-6 py-16 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Side - Texto */}
                <div>
                    <h2 className="italic text-gray-300 mb-3">Uma Carta do Fundador</h2>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                        Por que a Escola da Verdade?
                    </h1>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Todo ministro de sucesso passa por um período de preparação. A questão é se será em
                        um ambiente educacional formal, com instrutores experientes, ou de forma solitária
                        pela chamada “escola das dificuldades”. Eu escolhi o último caminho e, apesar de ter
                        sobrevivido, não recomendo!
                    </p>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                        O Senhor me guiou a iniciar a Escola da Verdade para treinar pessoas para a obra do
                        ministério, unindo ensino sólido da Palavra de Deus com prática ministerial intensa.
                    </p>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Estatísticas mostram que 80% dos ministros desistem e muitos dos que ficam enfrentam
                        esgotamento. A falta de preparação — espiritual, acadêmica e prática — está na raiz
                        disso. Nossa missão é mudar essa realidade.
                    </p>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Se você decidir participar, eu garanto que sua vida e a vida daqueles ao seu redor
                        nunca mais serão as mesmas.
                    </p>

                    <div className="flex items-center mt-6">
                        <img
                            src={founderImg}
                            alt="Fundador"
                            className="w-16 h-16 bg-white rounded-full object-cover mr-4"
                        />
                        <div>
                            <h3 className="font-bold text-lg">Jose H. Ecclesiases</h3>
                            <p className="text-gray-400 text-sm">Presidente & Fundador</p>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <a
                            href="https://awmi.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow"
                        >
                            IICGP.COM
                        </a>
                        <a
                            href="https://gtn.tv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow"
                        >
                            PALAVRATV.COM
                        </a>
                    </div>
                </div>

                {/* Right Side - Imagem grande (somente em telas grandes) */}
                <div className="hidden lg:block ">
                    <img
                        src={founderImg}
                        alt="Fundador"
                        className="w-full rounded-2xl shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>

        {/* Informações da Escola */}
        <section className="py-12 bg-gray-100">
            <div className="max-w mx-auto flex flex-col lg:flex-row items-center gap-10 bg-white p-8 rounded-lg shadow-md mr-15 ml-15">


                {/* Info Text Left Side */}
                <div className="flex-1 space-y-8 ml-10">
                    <h2 className="text-2xl font-bold flex items-center text-orange-500">
                        <FaChurch className="mr-2" />
                        Informações da Escola da Verdade
                    </h2>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3" size={18} />
                            <div>
                                <h3 className="font-semibold text-blue-500">Endereço</h3>
                                <p className="text-gray-600">IGREJA INTERNACIONAL CASA DA GLÓRIA DA PALAVRA</p>
                                <p className="text-gray-600">Maputo, Moçambique, 1205</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaEnvelope className="text-blue-500 mt-1 mr-3" size={18} />
                            <div>
                                <h3 className="font-semibold text-blue-500">Email</h3>
                                <p className="text-gray-600">
                                    <a
                                        className="hover:text-orange-500"
                                        href="mailto:ecclesiastesmi@gmail.com"
                                    >
                                        ecclesiastesmi@gmail.com
                                    </a>
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaPhone className="text-blue-500 mt-1 mr-3" size={18} />
                            <div>
                                <h3 className="font-semibold text-blue-500">Telefone</h3>
                                <p className="text-gray-600">+258 84 123 4567</p>
                                <p className="text-gray-600">+258 85 789 0123</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaUserAlt className="text-blue-500 mt-1 mr-3" size={18} />
                            <div>
                                <h3 className="font-semibold text-blue-500">Diretor</h3>
                                <p className="text-gray-600">Pastor Arsen de Cristo</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Right Side Image - hidden on small screens */}
                <div className="hidden lg:block flex-1 mr-10">
                    <img
                        src={school}
                        alt="Escola da Verdade"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                </div>

            </div>
        </section>
    </div>
);

export default Home;
