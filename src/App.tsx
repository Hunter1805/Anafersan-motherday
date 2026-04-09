/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu, ShoppingBag, Hand, Camera, Star, Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container/30 pb-24">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md flex justify-between items-center px-6 py-4 border-b border-outline-variant/30">
        <Menu className="text-primary hover:opacity-80 transition-opacity cursor-pointer" />
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-headline text-primary tracking-widest leading-none">
            ANA FERSAN
          </h1>
        </div>
        <div className="w-6"></div> {/* Spacer to keep title centered */}
      </nav>

      <main className="pt-24">
        {/* Collection Identity */}
        <section className="px-6 pt-8 pb-4 flex flex-col items-center text-center">
          <p className="text-primary/70 font-body text-xs tracking-[0.3em] uppercase mb-2">
            — Coleção Dia das Mães —
          </p>
          <h2 className="text-5xl md:text-6xl font-script text-primary leading-tight">
            Memórias que ficam
          </h2>
        </section>

        {/* Hero Section */}
        <section className="px-6 py-8 flex flex-col items-center text-center">
          <div className="relative w-full max-w-sm aspect-square mb-10 overflow-hidden rounded-2xl ring-8 ring-surface-container shadow-2xl">
            <img
              alt="Retrato Bordado em Bastidor - Mãe e Filha"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhyuiUtFDA2k9rnHUMX5wEt88tPDDbytff4EM_kfXZQr0jp-hHnDesrGxj_jXmjnP4lQcHGMPO24AtijlUA9H1fF-xh46jBRodob766TGXFGxSeCAajru3d3Za6SAHtyZ6MjEb-fnDPSaf4K6j5tXeUWs72x4OO_EPV1tOjejTOyEbxvXWmeOPyppP6hCkwpZNWr2oRoWzYYKcV_ZmKT_jlvyNmzQXUz3OuNFSj3BVrBIB7UacoLVuo6fL2F5y0MdM9MinxTN6aeA"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline leading-tight text-primary mb-4">
            O presente mais emocionante que ela já recebeu
          </h2>
          <p className="text-lg text-on-surface-variant mb-8 max-w-md font-light leading-relaxed">
            Transformamos sua foto favorita em um <strong>Retrato Bordado em Bastidor</strong>, costurado à mão com a delicadeza e o afeto que sua mãe merece.
          </p>
          <p className="text-lg text-on-surface-variant mb-8 max-w-md font-light leading-relaxed italic">
            Você escolhe a foto. Você escolhe a frase. Eu transformo em uma peça única, feita só para ela.
          </p>
          <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:opacity-90 active:scale-95 transition-all w-full max-w-xs">
            Quero eternizar esse momento
          </button>
        </section>

        {/* Benefícios Section */}
        <section className="bg-surface-container-low py-16 px-6">
          <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                <Hand size={24} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-label uppercase tracking-widest font-bold text-on-surface-variant">100% feito à mão</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                <Camera size={24} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-label uppercase tracking-widest font-bold text-on-surface-variant">Sua foto real</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                <Star size={24} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-label uppercase tracking-widest font-bold text-on-surface-variant">Peça Exclusiva</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                <Heart size={24} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-label uppercase tracking-widest font-bold text-on-surface-variant">Afeto Eterno</span>
            </div>
          </div>
        </section>

        {/* Como Funciona - Bento Style */}
        <section className="py-20 px-6">
          <h3 className="text-3xl font-headline text-center mb-12 text-primary">Como criamos o seu retrato</h3>
          <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
            <div className="bg-surface-container-high p-6 rounded-xl flex gap-4 items-center">
              <span className="text-3xl font-headline text-primary/40">01</span>
              <div>
                <h4 className="font-bold text-primary">Envie a foto</h4>
                <p className="text-sm text-on-surface-variant">Escolha o momento que você quer transformar em bordado.</p>
              </div>
            </div>
            <div className="bg-surface p-6 rounded-xl flex gap-4 items-center border border-outline-variant/30">
              <span className="text-3xl font-headline text-primary/40">02</span>
              <div>
                <h4 className="font-bold text-primary">Design do Guia</h4>
                <p className="text-sm text-on-surface-variant">Adaptamos os traços da foto para o desenho no tecido.</p>
              </div>
            </div>
            <div className="bg-surface-container-high p-6 rounded-xl flex gap-4 items-center">
              <span className="text-3xl font-headline text-primary/40">03</span>
              <div>
                <h4 className="font-bold text-primary">Bordado no Bastidor</h4>
                <p className="text-sm text-on-surface-variant">Cada ponto é dado manualmente em algodão cru de alta qualidade.</p>
              </div>
            </div>
            <div className="bg-primary-container/20 p-6 rounded-xl flex gap-4 items-center">
              <span className="text-3xl font-headline text-primary/60">04</span>
              <div>
                <h4 className="font-bold text-primary">Entrega Especial</h4>
                <p className="text-sm text-on-surface-variant">Seu bastidor chega pronto para decorar e emocionar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prova Visual - Asymmetric Gallery */}
        <section className="py-16 bg-surface-container-lowest">
          <div className="px-6 mb-8">
            <h3 className="text-3xl font-headline leading-tight text-primary">Galeria de Memórias</h3>
          </div>
          <div className="flex overflow-x-auto gap-4 px-6 pb-4 scrollbar-hide">
            <div className="min-w-[280px] h-[380px] relative rounded-2xl overflow-hidden group cursor-pointer">
              <img
                alt="Retrato Bordado Personalizado"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                src="https://lh3.googleusercontent.com/aida/ADBb0ugHQlbDGtvwa9t3sRZc7rEdWwRArbvtp7jSoH2JhDJ--xTUrZTswB6Q5dInafqyuJYfNoklbnUv2O6A-kS_DG373GDV06StOmWter2TKi927teZfFA85EBiNOkwmIsX3Ul8-LD3NnmYSxHglWWcYJpq-BnRshnG-gy7Jcg594L9OuL7jNv4kiqK3e-SlmY6Jw4Ht2sKaHwE9ZBSvXo6jhcArdheHUNV6iuBBOjoRO2hT4Wt5LGlgMzIPl6hRk763fbf9_9VOwQM"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 glass-nav rounded-xl text-on-surface bg-surface/80 transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-sm italic font-body font-medium text-on-surface">"O acabamento no bastidor é impecável, um verdadeiro luxo."</p>
              </div>
            </div>
            <div className="min-w-[280px] h-[380px] relative rounded-2xl overflow-hidden group cursor-pointer">
              <img
                alt="Detalhe do Bordado Manual"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                src="https://lh3.googleusercontent.com/aida/ADBb0ugrZ6H6IMl5datdSfuOmRNsVk17srcooV9WZy6QpCSkV5SA581g2sxF7zuLzR3bhnAabp9rhSfNDEfgKHgZGmnH2jgevTKcIyCUXEh5Cqg6oO5ZMJs6x1hvPOBv-j4zpuDPyOJP0OUI7r12qlYiW3Bs1xlbzzBIA6un5xqrR-OtFXPLhrnopMEimTfPXB3yMP3KX71ichtHt5uESiY1RAI01196oZLYP36iVksCc2_p-QvlC5JvizAOxcz_qZYoCHZ4ehOD6XFXQw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 glass-nav rounded-xl text-on-surface bg-surface/80 transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-sm italic font-body font-medium text-on-surface">"Chorei quando vi o detalhe do retrato. É pura emoção."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Urgência Section */}
        <section className="mx-6 my-12 p-8 bg-tertiary-fixed rounded-3xl text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/10 rounded-full -mr-12 -mt-12"></div>
          <h4 className="text-tertiary font-label text-xs uppercase tracking-widest mb-2 font-bold">Atenção ao Prazo</h4>
          <p className="text-2xl font-headline text-on-tertiary-container mb-6">
            Vagas limitadas para o Dia das Mães
          </p>
          <p className="text-on-tertiary-fixed-variant text-sm mb-8">
            Devido ao processo de bordado manual, aceitamos apenas um número restrito de encomendas de retratos por mês.
          </p>
          <button className="bg-tertiary text-on-tertiary px-8 py-3 rounded-full font-medium hover:opacity-90 active:scale-95 transition-all shadow-md">
            Garantir meu retrato
          </button>
        </section>

        {/* Final Emocional */}
        <section className="py-20 px-10 text-center flex flex-col items-center gap-8">
          <div className="w-16 h-16 opacity-40 flex items-center justify-center">
            <Heart size={48} className="text-primary fill-current" />
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-primary/70 font-body text-[10px] tracking-[0.3em] uppercase mb-1">
              — Coleção Dia das Mães —
            </p>
            <h3 className="text-5xl font-script text-primary leading-snug">
              Memórias que ficam
            </h3>
          </div>

          <p className="text-xl font-headline text-primary leading-snug max-w-xs">
            Porque o amor não cabe em palavras, mas cabe em cada ponto do seu bastidor.
          </p>
          
          {/* Logo Replacement */}
          <div className="mt-8 flex flex-col items-center justify-center text-primary/60">
            <h2 className="text-2xl font-headline tracking-widest">ANA FERSAN</h2>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low w-full py-12 px-8 flex flex-col items-center gap-6 pb-24 border-t border-outline-variant/30">
        <div className="w-full max-w-xs mx-auto">
          <button className="w-full bg-primary text-on-primary px-8 py-5 rounded-full font-bold text-lg shadow-xl hover:opacity-90 active:scale-95 transition-all uppercase tracking-wide">
            Garantir meu bordado
          </button>
        </div>
        <div className="mt-8 text-xl font-headline text-primary tracking-widest">ANA FERSAN</div>
      </footer>

      {/* Bottom Banner */}
      <div className="fixed bottom-0 left-0 w-full py-3 bg-primary text-on-primary text-center z-50">
        <span className="text-xs font-label tracking-[0.2em] uppercase font-medium">Enviamos para todo Brasil</span>
      </div>
    </div>
  );
}
