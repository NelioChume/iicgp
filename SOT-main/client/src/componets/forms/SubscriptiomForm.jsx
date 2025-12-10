import { useEffect, useState } from "react";
import axios from "axios";

const SubscriptionForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        country: "",
        program: "",
    });

    const [countries, setCountries] = useState([]);
    const [message, setMessage] = useState("");

    // Fetch countries from REST Countries API (Portuguese translation + unique values)
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all?fields=translations")
            .then((res) => {
                const uniqueCountries = Array.from(
                    new Set(
                        res.data
                            .map((c) => c.translations?.por?.common)
                            .filter(Boolean)
                    )
                ).sort((a, b) => a.localeCompare(b));

                setCountries(uniqueCountries);
            })
            .catch((err) => {
                console.error("Erro ao buscar países:", err);
            });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/subscribe", formData);
            setMessage("Inscrição enviada com sucesso!");

            // Clear form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                dob: "",
                gender: "",
                country: "",
                program: "",
            });
        } catch (err) {
            console.error("Erro ao enviar:", err);
            setMessage("Algo deu errado. Por favor, tente novamente.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
        >
            <h2 className="text-2xl text-orange-500 font-bold text-center">Formulário de Inscrição</h2>

            {message && (
                <div className="text-center text-sm text-green-600 font-semibold">{message}</div>
            )}

            <input
                type="text"
                name="fullName"
                placeholder="Nome completo"
                className="w-full p-3 border rounded"
                value={formData.fullName}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <input
                type="tel"
                name="phone"
                placeholder="Número de telefone"
                className="w-full p-3 border rounded"
                value={formData.phone}
                onChange={handleChange}
                required
            />

            <input
                type="date"
                name="dob"
                className="w-full p-3 border rounded"
                value={formData.dob}
                onChange={handleChange}
                required
            />

            <select
                name="gender"
                className="w-full p-3 border rounded"
                value={formData.gender}
                onChange={handleChange}
                required
            >
                <option value="">Selecione o Gênero</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                {/* <option value="Outro">Outro</option> */}
            </select>

            <select
                name="country"
                className="w-full p-3 border rounded"
                value={formData.country}
                onChange={handleChange}
                required
            >
                <option value="">Selecione o País</option>
                {countries.map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>

            <select
                name="program"
                className="w-full p-3 border rounded"
                value={formData.program}
                onChange={handleChange}
                required
            >
                <option value="">Selecione o Programa</option>
                <option value="Fundamentos">Fundamentos</option>
                <option value="Aprofundamento">Aprofundamento</option>
            </select>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-orange-500"
            >
                Enviar Inscrição
            </button>
        </form>
    );
};

export default SubscriptionForm;
