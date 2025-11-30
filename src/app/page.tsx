"use client";

import { useState, useEffect } from "react";
import { 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Users, 
  BarChart3, 
  Apple, 
  ChevronRight,
  Check,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CalAI() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Interface Elegante",
      description: "Design dark premium com fundo #0D0D0D e textos brancos, priorizando clareza e organização."
    },
    {
      icon: <Apple className="w-6 h-6" />,
      title: "Rastreamento de Calorias",
      description: "Registre suas refeições rapidamente com a ajuda da nossa IA, que sugere porções e opções."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Relatórios Detalhados",
      description: "Visualize seu progresso em gráficos clean e organizados, facilitando o acompanhamento."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Personalização",
      description: "Receba recomendações de refeições e treinos adaptadas ao seu perfil e objetivos."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Microinterações",
      description: "Experiência de uso fluida e envolvente com sutis animações e transições."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidade",
      description: "Conecte-se com outros usuários, compartilhe resultados e motive-se através de um feed social."
    }
  ];

  const benefits = [
    "Experiência de Usuário Premium",
    "Acesso Rápido com Busca Inteligente",
    "Suporte à Comunidade Ativa",
    "Sincronização em Tempo Real",
    "Notificações Personalizadas",
    "Modo Offline Disponível"
  ];

  const stats = [
    { value: "50K+", label: "Usuários Ativos" },
    { value: "1M+", label: "Refeições Registradas" },
    { value: "4.9", label: "Avaliação na Store" },
    { value: "95%", label: "Taxa de Satisfação" }
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0D0D0D]/95 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#0D0D0D]" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">Cal AI</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">Recursos</a>
              <a href="#benefits" className="text-sm text-white/70 hover:text-white transition-colors">Benefícios</a>
              <a href="#stats" className="text-sm text-white/70 hover:text-white transition-colors">Resultados</a>
              <Button className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-[#0D0D0D] hover:opacity-90 transition-all duration-300 hover:scale-105">
                Baixar Agora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/5 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors py-2">Recursos</a>
                <a href="#benefits" className="text-sm text-white/70 hover:text-white transition-colors py-2">Benefícios</a>
                <a href="#stats" className="text-sm text-white/70 hover:text-white transition-colors py-2">Resultados</a>
                <Button className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-[#0D0D0D] hover:opacity-90 w-full">
                  Baixar Agora
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs sm:text-sm text-white/80">Powered by Artificial Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              Cal AI - O Seu Companheiro de{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                Nutrição Inteligente
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              Controle suas calorias de forma fácil e prática com a inteligência artificial.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-[#0D0D0D] hover:opacity-90 transition-all duration-300 hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto group"
              >
                Baixar Agora
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 hover:bg-white/5 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              >
                Ver Demonstração
              </Button>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-16 sm:mt-24 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Características{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                Premium
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Descubra como é fácil manter uma alimentação equilibrada com tecnologia inteligente
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-emerald-400/50 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-emerald-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                Benefícios que{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                  Transformam
                </span>
              </h2>
              <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-12 leading-relaxed">
                Cada aspecto do Cal AI é projetado para proporcionar uma navegação intuitiva e agradável, 
                ajudando você a alcançar seus objetivos de saúde.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D0D0D]" />
                    </div>
                    <span className="text-sm sm:text-base font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
              <Card className="relative bg-white/5 border-white/10 p-6 sm:p-8 lg:p-12">
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center justify-between p-4 sm:p-6 bg-white/5 rounded-2xl">
                    <div>
                      <div className="text-xs sm:text-sm text-white/60 mb-1 sm:mb-2">Calorias Hoje</div>
                      <div className="text-2xl sm:text-3xl font-bold">1,847</div>
                    </div>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-lg sm:text-xl font-bold text-[#0D0D0D]">73%</span>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-white/60">Meta Diária</span>
                      <span className="font-medium">2,500 kcal</span>
                    </div>
                    <div className="h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[73%] bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {[
                      { label: "Proteínas", value: "45g", color: "from-emerald-400 to-emerald-500" },
                      { label: "Carbos", value: "180g", color: "from-cyan-400 to-cyan-500" },
                      { label: "Gorduras", value: "65g", color: "from-blue-400 to-blue-500" }
                    ].map((macro, index) => (
                      <div key={index} className="p-3 sm:p-4 bg-white/5 rounded-xl text-center">
                        <div className={`text-base sm:text-lg font-bold bg-gradient-to-r ${macro.color} bg-clip-text text-transparent mb-1`}>
                          {macro.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-white/60">{macro.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Comece Sua Jornada{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                  Hoje Mesmo
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-12 leading-relaxed">
                Baixe o Cal AI e descubra como é fácil manter uma alimentação saudável com a ajuda da inteligência artificial.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-[#0D0D0D] hover:opacity-90 transition-all duration-300 hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto group"
              >
                Baixar Cal AI Agora
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#0D0D0D]" />
              </div>
              <span className="text-lg font-bold">Cal AI</span>
            </div>
            <div className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
              © 2024 Cal AI. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
