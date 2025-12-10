// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Fundamentos from "../pages/Programas/Fundamentos";
import Intensivos from "../pages/Programas/Intensivos";

import AudioAlbumList from "../pages/Pregacoes/Audio";
import AlbumPage from "../pages/Pregacoes/AlbumPage";
import Video from "../pages/Pregacoes/Video";
import VideoAlbumPage from "../pages/Pregacoes/VideoAlbumpage";
import Leitura from "../pages/Pregacoes/Leitura";
import LeituraPage from "../pages/Pregacoes/LeituraPage"; // ✅ <-- Add this

import Sobre from "../pages/Mais/Sobre";
import Historia from "../pages/Mais/Historia";
import Parceria from "../pages/Mais/Parceria";
import Eventos from "../pages/Mais/Eventos";
import Contato from "../pages/Mais/Contato";

import Inscricao from "../pages/Inscricao";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* Programas */}
            <Route path="/programas/fundamentos" element={<Fundamentos />} />
            <Route path="/programas/intensivos" element={<Intensivos />} />

            {/* Pregações */}
            <Route path="/pregacoes/audio" element={<AudioAlbumList />} />
            <Route path="/pregacoes/audio/:id" element={<AlbumPage />} />
            <Route path="/pregacoes/video" element={<Video />} />
            <Route path="/pregacoes/video/:id" element={<VideoAlbumPage />} />
            <Route path="/pregacoes/leitura" element={<Leitura />} />
            <Route path="/pregacoes/leitura/:id" element={<LeituraPage />} />

            {/* Mais */}
            <Route path="/mais/sobre" element={<Sobre />} />
            <Route path="/mais/historia" element={<Historia />} />
            <Route path="/mais/parceria" element={<Parceria />} />
            <Route path="/mais/eventos" element={<Eventos />} />
            <Route path="/mais/contato" element={<Contato />} />

            {/* Inscrição */}
            <Route path="/inscricao" element={<Inscricao />} />
        </Routes>
    );
}
