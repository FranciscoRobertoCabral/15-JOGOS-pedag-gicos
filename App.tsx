
import React, { useState, useEffect, useCallback } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Smartphone, 
  Clock, 
  BookOpen, 
  Target, 
  Users, 
  Lock, 
  Printer, 
  ShieldCheck,
  Zap,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const carouselImages = [
  "https://xn--ateliedainspirao-snb5e.com.br/wp-content/uploads/2026/01/CACA-AS-CORES.jpg",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handlePurchaseClick = () => {
    const fbq = (window as any).fbq;
    if (fbq) {
      fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-montserrat antialiased">
      
      {/* 1. HERO SECTION (Dark BG) */}
      <section className="bg-slate-900 text-white py-12 md:py-24 px-4 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="bg-blue-600 text-xs md:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest animate-pulse">
            Acesso Imediato
          </span>
          <h1 className="text-3xl md:text-6xl font-black leading-tight uppercase">
            15 JOGOS PEDAGÓGICOS PARA EDUCAÇÃO INFANTIL
          </h1>
          <p className="text-lg md:text-2xl font-medium text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tire seu filho da tela e ajude no aprendizado brincando — mesmo sem tempo ou experiência
          </p>
          
          <div className="pt-8">
            <button 
              onClick={handlePurchaseClick}
              className="bg-green-500 hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-white font-black text-xl md:text-2xl px-8 py-5 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] w-full md:w-auto"
            >
              QUERO ACESSO AOS JOGOS PEDAGÓGICOS
            </button>
            <p className="text-slate-400 text-sm mt-4 font-semibold uppercase tracking-wider">
              Apenas R$ 9,90 — Pagamento Único
            </p>
          </div>
          
          <div className="flex justify-center pt-10 text-slate-500 animate-bounce">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION (Light BG) */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="text-red-500 flex-shrink-0" size={32} />
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase">
              Seu filho só quer celular ou TV?
            </h2>
          </div>
          
          <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed">
            <p>Você tenta tirar a tela…</p>
            <p className="font-bold border-l-4 border-red-500 pl-4">
              Ele reclama, fica entediado ou faz birra.
            </p>
            
            <p className="pt-4 font-semibold">Você até quer estimular o aprendizado, mas:</p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span>não sabe que atividades fazer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span>não tem tempo para pesquisar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span>não é professora e tem medo de “fazer errado”</span>
              </li>
            </ul>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border-2 border-dashed border-slate-200 mt-12">
              <p className="text-xl md:text-2xl text-slate-900 font-bold italic text-center">
                👉 A verdade é simples: criança precisa brincar para aprender, mas com estímulos certos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION (Teal/Soft BG) */}
      <section className="bg-teal-50 py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1 rounded-full font-bold text-sm uppercase mb-4">
            <CheckCircle size={16} /> A Solução
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase leading-tight">
            Jogos pedagógicos simples, prontos e eficazes
          </h2>
          <p className="text-lg md:text-xl text-slate-700">
            Eu reuni 15 jogos pedagógicos para educação infantil, pensados para crianças de <b>3 a 6 anos</b>, que ajudam no desenvolvimento sem precisar de telas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-10">
            {[
              "Prendem a atenção da criança",
              "Estimulam aprendizado de forma natural",
              "Usam materiais simples",
              "Funcionam na rotina real dos pais"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm border border-teal-100">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <span className="font-bold text-slate-800 uppercase text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-xl font-black text-slate-900 pt-8">
            Tudo organizado, explicado e pronto para usar.
          </p>
        </div>
      </section>

      {/* 4. BENEFITS (Light BG) */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4 text-blue-600">
              <Target size={48} />
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase">
              O que seu filho desenvolve com esses jogos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Coordenação motora", desc: "Habilidades físicas essenciais" },
              { title: "Raciocínio lógico", desc: "Base para matemática e resolução" },
              { title: "Atenção e concentração", desc: "Foco prolongado em atividades" },
              { title: "Criatividade", desc: "Imaginação e expressão" },
              { title: "Interesse pelo aprendizado", desc: "Curiosidade natural aguçada" }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col p-6 border-b-4 border-blue-500 bg-slate-50 rounded-lg">
                <span className="text-xl font-black text-slate-900 uppercase mb-2">{benefit.title}</span>
                <span className="text-slate-600">{benefit.desc}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl font-black text-slate-900 italic">
              Tudo isso brincando, sem pressão e sem celular.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT DETAILS (Dark BG) WITH CAROUSEL */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Carousel Column */}
          <div className="w-full md:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-slate-700 aspect-[3/4]">
              {carouselImages.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <img 
                    src={img} 
                    alt={`Pedagogical Content ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Navigation Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {carouselImages.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 w-1.5 rounded-full transition-all ${i === currentSlide ? 'bg-white w-4' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div className="flex items-center gap-3">
              <BookOpen className="text-blue-400" size={40} />
              <h2 className="text-2xl md:text-4xl font-black uppercase">O que você vai receber</h2>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-blue-400 uppercase tracking-tighter flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-400 inline-block rounded-sm"></span> E-book digital (PDF) com:
              </h3>
              <ul className="space-y-4 text-lg text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <span>15 jogos pedagógicos passo a passo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <span>Indicação de idade para cada jogo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <span>Objetivo pedagógico explicado de forma simples</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <span>Sugestão de materiais fáceis (papel, lápis, tampinhas, etc.)</span>
                </li>
              </ul>
            </div>

            {/* Acesso Imediato Box Refined */}
            <div className="bg-[#1a2536] border border-blue-900/50 p-6 rounded-2xl shadow-inner">
              <p className="text-lg md:text-xl font-black text-white text-center flex items-center justify-center gap-3">
                <span className="text-2xl">👉</span> Acesso imediato após a compra
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TARGET AUDIENCE (Light Gray BG) */}
      <section className="bg-slate-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-slate-900" size={32} />
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">Para quem é?</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Pais de crianças de 3 a 6 anos",
                "Mães e pais sem tempo",
                "Quem quer reduzir o uso de telas",
                "Quem quer ajudar o filho a aprender em casa"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-bold text-slate-800 uppercase text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-red-500" size={32} />
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">Não indicado para:</h2>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-red-800 font-bold uppercase text-sm leading-relaxed">
                ❌ Não é indicado para quem procura atividades digitais ou jogos em aplicativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OBJECTION HANDLING (White BG) */}
      <section className="bg-white py-16 md:py-24 px-4 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase mb-6 leading-tight">
              💬 “Mas eu não sei ensinar…”
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-slate-700">
              <p>Você não precisa saber ensinar.</p>
              <p className="font-bold text-slate-900">
                Os jogos já vêm prontos e explicados de forma simples.
              </p>
              <p>Você só acompanha, incentiva e brinca junto.</p>
              
              <div className="pt-8 space-y-2">
                <p className="text-2xl font-black text-blue-600 uppercase">👉 Seu papel é ser pai ou mãe.</p>
                <p className="text-lg font-bold text-slate-800">O material faz o resto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICE & OFFER (Highlight BG) */}
      <section className="bg-green-50 py-16 md:py-24 px-4 border-y border-green-100">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase leading-tight">
            💰 Quanto custa?
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-slate-700">
            <p>Em vez de cursos caros ou brinquedos educativos caros…</p>
            <p className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter bg-green-200 inline-block px-4 py-2 rounded-lg">
              👉 Você pode ter acesso a 15 jogos pedagógicos por menos de R$10.
            </p>
            
            <p className="max-w-2xl mx-auto">
              Um valor menor que um lanche — <br className="hidden md:block"/>
              <b>com impacto real no desenvolvimento do seu filho.</b>
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-4 border-green-500 max-w-sm mx-auto">
            <span className="text-slate-500 line-through text-lg font-bold">De R$ 47,00</span>
            <div className="flex flex-col items-center">
              <span className="text-slate-900 text-sm font-black uppercase mb-[-10px]">Por apenas</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-900 uppercase">R$</span>
                <span className="text-7xl font-black text-green-600 leading-none">9,90</span>
              </div>
            </div>
            <button 
              onClick={handlePurchaseClick}
              className="mt-8 bg-green-500 hover:bg-green-600 transition-all text-white font-black text-xl px-6 py-4 rounded-xl w-full uppercase shadow-lg shadow-green-200"
            >
              Comprar Agora
            </button>
            <div className="mt-6 flex flex-col items-center gap-2 opacity-60">
              <div className="flex gap-2">
                <ShieldCheck size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Pagamento Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GUARANTEE (Light BG) */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto bg-slate-50 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left border border-slate-200">
          <div className="bg-blue-600 text-white p-4 rounded-full flex-shrink-0">
            <Lock size={48} />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-none">
              🔒 Garantia simples
            </h2>
            <p className="text-slate-700 text-lg leading-snug">
              Se você não gostar do material, basta solicitar o reembolso dentro do prazo legal.
            </p>
            <p className="text-blue-600 font-black uppercase text-sm tracking-widest">
              Compra sem risco.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA (High Contrast Dark/Accent) */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase mb-4 tracking-widest">
              <Zap size={14} className="fill-white" /> Última Chance
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
              🚀 Comece hoje
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Clique no botão abaixo e tenha acesso imediato aos <br className="hidden md:block"/>
              <span className="text-white font-black underline decoration-blue-500 underline-offset-4">15 Jogos Pedagógicos Para Educação Infantil Que Substituem a Tela</span>
            </p>
            <p className="text-3xl md:text-4xl font-black text-green-400 uppercase tracking-tighter pt-4 animate-pulse">
              Por menos de R$10.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <button 
              onClick={handlePurchaseClick}
              className="bg-green-500 hover:bg-green-600 transition-all duration-300 transform hover:scale-110 text-white font-black text-xl md:text-3xl px-10 py-6 rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.3)] w-full md:w-auto uppercase tracking-tighter"
            >
              [ QUERO ACESSO AOS JOGOS PEDAGÓGICOS ]
            </button>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl opacity-70">
              <div className="flex flex-col items-center gap-2">
                <Smartphone size={24} className="text-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-widest">No Celular ou Tablet</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Printer size={24} className="text-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-widest">Pronto para Imprimir</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock size={24} className="text-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-widest">Acesso Vitalício</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-600 py-12 px-4 text-center border-t border-slate-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-xs uppercase font-bold tracking-widest">© 2024 - Todos os direitos reservados</p>
          <div className="flex justify-center gap-6 text-[10px] uppercase font-black tracking-tighter">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
          <p className="text-[10px] max-w-2xl mx-auto opacity-50 pt-4 leading-relaxed">
            Este produto não garante resultados milagrosos. O aprendizado infantil depende de diversos fatores individuais e da aplicação correta dos estímulos propostos.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
