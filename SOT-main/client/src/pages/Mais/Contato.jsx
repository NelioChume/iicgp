"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaUserAlt,
  FaChurch,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contato = () => {
  const [result, setResult] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Enviando mensagem...");

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          "Mensagem enviada com sucesso! Entraremos em contacto em breve."
        );
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message || "Ocorreu um erro ao enviar a mensagem.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Erro de conexão. Por favor tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-orange-500">
        Contacte-Nos
      </h1>
      <h6 className="text-xl mb-8 text-center text-gray-800">
        Esteja em contacto connosco para mais informações sobre a Escola da
        Verdade.
      </h6>

      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* LEFT SIDE INFO CARD */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md gap-10 h-full">
            <h2 className="text-xl font-bold mb-10 text-center text-orange-500 flex items-center justify-center">
              <FaChurch className="mr-2" />
              Informações da Escola da Verdade
            </h2>

            <ul className="space-y-8">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3" size={18} />
                <div>
                  <h3 className="font-semibold text-blue-500">Endereço</h3>
                  <p className="text-gray-600">
                    IGREJA INTERNACIONAL CASA DA GLÓRIA DA PALAVRA
                  </p>
                  <p className="text-gray-600">Maputo, Moçambique, 1205</p>
                </div>
              </li>

              <li className="flex items-start">
                <FaEnvelope className="text-blue-500 mt-1 mr-3" size={18} />
                <div>
                  <h3 className="font-semibold text-blue-500">Email</h3>
                  <a
                    className="text-gray-600 hover:text-orange-500"
                    href="mailto:ecclesiastesmi@gmail.com"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    ecclesiastesmi@gmail.com
                  </a>
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
                  <h3 className="font-semibold text-blue-500">Director</h3>
                  <p className="text-gray-600">Pastor Arsen de Cristo</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE CONTACT FORM */}
        <div className="lg:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h2 className="text-xl font-semibold mb-6 text-center text-orange-500">
              Envie-nos uma mensagem
            </h2>

            <form className="space-y-4" onSubmit={onSubmit}>
              {/* 🔥 REQUIRED ACCESS KEY */}
              <input
                type="hidden"
                name="access_key"
                value="74ab3de0-0a8f-40e0-affb-ef5d475173ee"
              />

              <input
                type="hidden"
                name="subject"
                value="Nova Mensagem da Escola da Verdade"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Número de Celular *
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                  placeholder="+258 84 123 4567"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  rows="7"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 resize-none"
                  required
                  placeholder="Escreva aqui a sua mensagem..."
                ></textarea>
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition flex items-center justify-center mx-auto ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </div>

              {result && (
                <div
                  className={`mt-4 p-3 rounded-lg text-center ${
                    result.includes("sucesso")
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="w-full rounded-lg overflow-hidden shadow-md">
        <h1 className="text-3xl mb-6 font-bold text-center text-orange-500">
          Nossa localização
        </h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.0441529912746!2d32.5642024772958!3d-25.868024177285225"
          width="100%"
          height="450"
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Contato;
