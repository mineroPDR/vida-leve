import { Button } from "@/components/ui/button";
import { ModernButton } from "@/components/ui/modern-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Zap, 
  Clock, 
  Target, 
  Star, 
  Check, 
  Shield,
  Utensils,
  Dumbbell,
  Leaf,
  Brain,
  TrendingUp,
  Users,
  Award,
  DollarSign,
  Gift,
  Mail,
  X,
  AlertTriangle
} from "lucide-react";
import manTraining from "@/assets/realistic-man-training-home.jpg";
import womanTraining from "@/assets/woman-training-home.jpg";
import smoothies from "@/assets/colorful-smoothies.jpg";
import fruits from "@/assets/fresh-fruits-vegetables.jpg";
import mealPrep from "@/assets/healthy-meal-prep.jpg";
import heroBackground from "@/assets/beach-sunrise-hero.jpg";
import pinkSmoothie from "@/assets/pink-antioxidant-smoothie.jpg";
import greenBowl from "@/assets/green-energetic-bowl.jpg";
import turbinadoCoffee from "@/assets/turbinado-coffee.jpg";
import guaranteeBadge from "@/assets/professional-guarantee-badge.png";
import mariaLourdesPhoto from "@/assets/maria-lourdes-testimonial.png";
import anaCostaPhoto from "@/assets/testimonial-ana-costa.jpg";
import carlosSantosPhoto from "@/assets/testimonial-carlos-santos.jpg";
import luciaOliveiraPhoto from "@/assets/testimonial-lucia-oliveira.jpg";
import rafaelSilvaPhoto from "@/assets/testimonial-rafael-silva.jpg";
import elderlyWomanPhoto from "@/assets/testimonial-elderly-woman.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-modern">
      {/* Hero Section */}
      <section className="relative py-8 md:py-16 px-4 overflow-hidden bg-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white px-3 md:px-4 py-2 text-xs md:text-sm lg:text-lg font-semibold shadow-hero">
              Método Comprovado
            </Badge>
            
            {/* Card interativo com pergunta - DESTACADO */}
            <div className="mb-8 max-w-3xl mx-auto px-2">
              <Card 
                className="bg-gradient-to-r from-success to-success-glow border-4 border-success shadow-floating hover:shadow-hero transition-all duration-500 hover:scale-105 cursor-pointer group"
                onClick={() => {
                  document.getElementById('conquistas-section')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <CardContent className="p-4 md:p-8">
                  <p className="text-lg md:text-2xl lg:text-4xl font-extrabold text-white text-center group-hover:text-primary-light transition-colors duration-300 leading-tight">
                    O que te impede de parar de procrastinar?
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-white/20 text-white px-3 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-white/30 transition-colors duration-300">
                      Clique e descubra! 👆
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-6">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-hero max-w-4xl mx-auto">
                <CardContent className="p-4 md:p-8">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-foreground leading-tight animate-bounce-in">
                    Transforme sua vida com saúde,<br/>
                    <span className="text-primary bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                      energia e equilíbrio
                    </span>
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 animate-slide-up leading-relaxed">
                    Sem academia, sem dietas radicais. Apenas resultados reais e sustentáveis na sua própria casa.
                  </p>
                  <ModernButton 
                    className="mb-4 text-xs sm:text-sm md:text-base"
                    onClick={() => {
                      document.getElementById('oferta-section')?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    Quero transformar minha vida agora
                  </ModernButton>
                  <p className="text-xs md:text-sm text-muted-foreground animate-fade-in">
                    Garantia de 30 dias • +1.000 pessoas transformadas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Hero Images - sem animação float */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12 px-2">
            <div className="relative rounded-2xl overflow-hidden shadow-floating hover:shadow-hero transition-all duration-500 transform hover:scale-105 group">
              <img 
                src={manTraining} 
                alt="Homem treinando em casa com exercícios práticos"
                className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                <p className="font-semibold text-primary text-sm md:text-base">Treinos Masculinos</p>
                <p className="text-xs md:text-sm text-muted-foreground">15-30 minutos em casa</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-floating hover:shadow-hero transition-all duration-500 transform hover:scale-105 group">
              <img 
                src={womanTraining} 
                alt="Mulher treinando em casa com yoga e exercícios"
                className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                <p className="font-semibold text-primary text-sm md:text-base">Treinos Femininos</p>
                <p className="text-xs md:text-sm text-muted-foreground">Yoga e fortalecimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Principais */}
      <section id="conquistas-section" className="py-12 md:py-16 px-4 bg-white scroll-mt-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-foreground animate-fade-in px-2">
            O que você vai conquistar
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2">
            {[
              { 
                icon: Utensils, 
                title: "Receitas práticas e exclusivas", 
                desc: "Sabores deliciosos e nutritivos que cabem na sua rotina",
                details: "Mais de 50 receitas testadas e aprovadas por nutricionistas"
              },
              { 
                icon: Dumbbell, 
                title: "Treinos rápidos em casa", 
                desc: "15-30 minutos de exercícios eficazes sem equipamentos",
                details: "Programa progressivo adaptado ao seu nível fitness"
              },
              { 
                icon: Zap, 
                title: "Mais energia no dia a dia", 
                desc: "Disposição para todas as atividades que você ama",
                details: "Aumento de 80% nos níveis de energia em 30 dias"
              },
              { 
                icon: Brain, 
                title: "Equilíbrio corpo e mente", 
                desc: "Bem-estar completo e duradouro para toda família",
                details: "Técnicas de mindfulness e autocuidado incluídas"
              },
              { 
                icon: TrendingUp, 
                title: "Autoestima renovada", 
                desc: "Confiança e satisfação pessoal que você merece",
                details: "Resultados visíveis já nas primeiras 2 semanas"
              },
              { 
                icon: DollarSign, 
                title: "Economia de tempo e dinheiro", 
                desc: "Sem mensalidades ou deslocamentos caros",
                details: "Economize mais de R$ 9.000 por ano com nosso método"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-white border border-success/20 shadow-card hover:shadow-hero transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-4 md:p-6 text-center">
                  <benefit.icon className="w-10 h-10 md:w-12 md:h-12 text-success mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold mb-2 text-sm md:text-base text-foreground group-hover:text-success transition-colors duration-300 leading-tight">{benefit.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-3 leading-relaxed">{benefit.desc}</p>
                  <div className="bg-success-light rounded-lg p-2 md:p-3">
                    <p className="text-xs text-success font-medium leading-relaxed">{benefit.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Estatísticas como informação complementar */}
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-3 md:gap-6 lg:gap-8 px-2">
            <div className="flex items-center gap-1 md:gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 shadow-sm border border-primary/10">
              <Users className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                <span className="font-bold text-primary">+1.000</span> pessoas transformadas
              </span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 shadow-sm border border-primary/10">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                <span className="font-bold text-primary">4.9</span> avaliação média
              </span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 shadow-sm border border-primary/10">
              <Award className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                <span className="font-bold text-primary">98%</span> recomendam
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Pilares do Método */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 text-foreground animate-fade-in px-2">
            Os 4 Pilares do Método
          </h2>
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-8 md:mb-12 px-2">
            <span className="text-success font-bold text-xl md:text-2xl">A fórmula completa para sua transformação pessoal</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2">
            {[
              { 
                icon: Utensils, 
                title: "Alimentação Saudável Descomplicada", 
                desc: "Receitas práticas que cabem na sua rotina",
                example: "Omelete proteico de 5 minutos"
              },
              { 
                icon: Dumbbell, 
                title: "Fitness em Casa", 
                desc: "Exercícios eficazes sem equipamentos",
                example: "Treino HIIT de 20 minutos"
              },
              { 
                icon: Leaf, 
                title: "Receitas Funcionais", 
                desc: "Smoothies e pratos que nutrem de verdade",
                example: "Smoothie detox matinal"
              },
              { 
                icon: Brain, 
                title: "Equilíbrio Corpo e Mente", 
                desc: "Técnicas de bem-estar e autocuidado",
                example: "Meditação de 10 minutos"
              }
            ].map((pilar, index) => (
              <Card key={index} className="bg-gradient-to-br from-primary to-primary-dark text-white border-0 shadow-hero hover:shadow-floating transition-all duration-500 hover:scale-105 transform animate-bounce-in group" style={{animationDelay: `${index * 0.15}s`}}>
                <CardHeader className="text-center pb-2 p-4 md:p-6">
                  <pilar.icon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-base md:text-lg mb-2 leading-tight">{pilar.title}</h3>
                </CardHeader>
                <CardContent className="text-center p-4 md:p-6 pt-0">
                  <p className="text-primary-foreground/90 mb-3 md:mb-4 text-sm leading-relaxed">{pilar.desc}</p>
                  <div className="bg-white/20 rounded-lg p-2 md:p-3 backdrop-blur-sm border border-white/30">
                    <p className="text-sm md:text-lg font-bold text-white">{pilar.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Receitas em Destaque */}
      <section className="py-12 md:py-16 px-4 bg-gray-modern">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-foreground animate-fade-in px-2">
            Exemplos de Receitas Exclusivas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2">
            {[
              {
                image: pinkSmoothie,
                title: "Smoothie Rosa Antioxidante",
                desc: "Rico em antioxidantes, perfeito para a pele e energia radiante",
                ingredients: "Açaí, frutas vermelhas, leite de coco, mel",
                benefits: "Anti-aging, energia natural, pele saudável"
              },
              {
                image: greenBowl,
                title: "Bowl Verde Energético",
                desc: "Detox natural com vegetais folhosos e superalimentos",
                ingredients: "Espinafre, banana, chia, mel, granola",
                benefits: "Detox, energia sustentada, digestão saudável"
              },
              {
                image: turbinadoCoffee,
                title: "Café Turbinado",
                desc: "Energia sustentada com ingredientes funcionais premium",
                ingredients: "Café orgânico, MCT, canela, colágeno",
                benefits: "Foco mental, energia duradoura, saúde da pele"
              }
            ].map((receita, index) => (
              <Card key={index} className="bg-white border border-success/30 shadow-card hover:shadow-hero transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up group cursor-pointer" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={receita.image} 
                    alt={receita.title}
                    className="w-full h-40 md:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-bold text-lg md:text-xl text-primary mb-3 group-hover:text-success transition-colors duration-300 leading-tight">
                    {receita.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">{receita.desc}</p>
                  <div className="bg-success-light rounded-lg p-3 md:p-4 mb-3 md:mb-4">
                    <p className="text-xs md:text-sm font-semibold text-success mb-2">Ingredientes:</p>
                    <p className="text-xs md:text-sm text-success leading-relaxed">{receita.ingredients}</p>
                  </div>
                  <div className="bg-primary-light rounded-lg p-3 md:p-4">
                    <p className="text-xs md:text-sm font-semibold text-primary mb-2">Benefícios:</p>
                    <p className="text-xs md:text-sm text-primary leading-relaxed">{receita.benefits}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-foreground animate-fade-in px-2">
            O que nossos atletas estão dizendo
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-2">
            {[
              {
                name: "Maria de Lourdes",
                age: "62 anos, Belo Horizonte",
                text: "Eu vivia com medo da glicemia subir e cansada de tanta restrição. Com o manual, redescobri o prazer de comer sem culpa! Os chás e sucos deram um gás na minha energia. Hoje minha glicose está controlada e meu humor também!",
                stars: 5,
                achievement: "Glicose controlada naturalmente",
                profession: "Professora aposentada",
                photo: elderlyWomanPhoto,
                isSpecial: true
              },
              { 
                name: "Ana Costa", 
                age: "32 anos, São Paulo", 
                text: "Após ter meu segundo filho, estava 15kg acima do peso e sem energia para nada. Em 4 meses seguindo o método, não só voltei ao meu peso ideal como descobri uma versão mais saudável de mim mesma. As receitas são práticas e minha família toda aderiu! Meus filhos adoram os smoothies coloridos e meu marido perdeu a barriga que tinha há anos.",
                stars: 5,
                achievement: "Perdeu 15kg em 4 meses",
                profession: "Arquiteta e mãe de 2",
                photo: anaCostaPhoto
              },
              { 
                name: "Carlos Santos", 
                age: "38 anos, Brasília", 
                text: "Trabalho 12h por dia e sempre usei a falta de tempo como desculpa para não cuidar da saúde. Este método mudou tudo! Treinos de 20 minutos em casa e receitas que preparo em menos de 10 minutos. Perdi barriga, ganhei disposição e ainda economizo R$ 800 por mês que gastava com delivery e academia. Minha esposa ficou impressionada com a mudança!",
                stars: 5,
                achievement: "Rotina saudável em 20min/dia",
                profession: "Diretor financeiro",
                photo: carlosSantosPhoto
              },
              { 
                name: "Lúcia Oliveira", 
                age: "29 anos, Recife", 
                text: "Sempre tive problemas com ansiedade e comia para compensar o estresse. As técnicas de mindfulness do método, junto com as receitas funcionais, transformaram minha relação com a comida. Emagreci 8kg sem sofrimento e minha ansiedade diminuiu drasticamente. Hoje me sinto em paz comigo mesma e tenho energia para trabalhar e cuidar da minha saúde mental.",
                stars: 5,
                achievement: "Superou ansiedade alimentar",
                profession: "Psicóloga",
                photo: luciaOliveiraPhoto
              }
            ].map((depoimento, index) => (
              <Card key={index} className="bg-gradient-to-br from-white via-white to-primary-light/10 border-2 border-primary/20 shadow-hero hover:shadow-floating transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-bounce-in group cursor-pointer" style={{animationDelay: `${index * 0.15}s`}}>
                <CardContent className="p-4 md:p-6">
                  {depoimento.isSpecial ? (
                    <div className="text-center">
                      <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4">
                        <img 
                          src={depoimento.photo} 
                          alt={depoimento.name}
                          className="w-full h-full rounded-full object-cover border-4 border-green-400 shadow-lg"
                        />
                        <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-transparent rounded-full opacity-30 blur-lg"></div>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-lg p-4 md:p-6 mb-4 border border-green-200 shadow-inner">
                        <div className="flex mb-3 justify-center">
                          {[...Array(depoimento.stars)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current drop-shadow-sm" />
                          ))}
                        </div>
                        <div className="text-3xl md:text-5xl text-green-500 mb-2 font-serif">"</div>
                        <blockquote className="text-gray-700 text-sm md:text-base leading-relaxed italic font-medium px-1 md:px-2">{depoimento.text}</blockquote>
                        <div className="text-3xl md:text-5xl text-green-500 text-right font-serif">"</div>
                      </div>
                      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-full px-4 md:px-6 py-2 md:py-3 inline-block shadow-sm">
                        <p className="font-bold text-gray-800 text-base md:text-lg">{depoimento.name}</p>
                        <p className="text-xs md:text-sm text-gray-600">{depoimento.profession}</p>
                      </div>
                      <div className="mt-4 bg-green-100 border border-green-300 rounded-lg p-2 md:p-3">
                        <p className="text-green-700 font-bold text-xs md:text-sm flex items-center justify-center gap-2">
                          <Award className="w-3 h-3 md:w-4 md:h-4" />
                          {depoimento.achievement}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="relative flex-shrink-0">
                          <img 
                            src={depoimento.photo} 
                            alt={depoimento.name}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-3 border-primary/30 shadow-lg group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-success rounded-full opacity-20 blur-sm"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex mb-1 md:mb-2">
                            {[...Array(depoimento.stars)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" />
                            ))}
                          </div>
                          <p className="font-bold text-base md:text-lg text-foreground truncate">{depoimento.name}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{depoimento.age}</p>
                          <p className="text-xs md:text-sm text-primary font-semibold">{depoimento.profession}</p>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-gray-50 to-primary-light/5 rounded-lg p-3 md:p-4 border border-gray-200">
                        <div className="text-2xl md:text-3xl text-primary mb-1 md:mb-2 font-serif">"</div>
                        <blockquote className="text-gray-700 text-xs md:text-sm leading-relaxed italic font-medium px-1 md:px-2">{depoimento.text}</blockquote>
                        <div className="text-2xl md:text-3xl text-primary text-right font-serif">"</div>
                      </div>
                      
                      <div className="bg-success/10 border border-success/30 rounded-lg p-2 md:p-3">
                        <p className="text-success font-bold text-xs md:text-sm flex items-center gap-2">
                          <Award className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                          <span className="leading-tight">{depoimento.achievement}</span>
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selo de Garantia antes do Comparativo */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/fbf8a3d3-56cf-4c62-a276-6c770d34664c.png" 
              alt="Garantia de 7 dias - Satisfação garantida ou seu dinheiro de volta"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl"
            />
          </div>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Garantia Total de Satisfação
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Experimente nosso método por <span className="font-bold text-primary">7 dias completos</span>. 
              Se não ficar 100% satisfeito, devolvemos todo seu investimento sem perguntas.
            </p>
            <div className="bg-gradient-to-r from-success-light to-primary-light rounded-lg p-4 border border-success/30">
              <p className="text-sm font-semibold text-success">
                ✓ Risco zero para você • ✓ Garantia incondicional • ✓ Suporte completo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo de Investimento */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-gray-modern">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">
            Compare o Investimento
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-danger bg-gradient-to-br from-danger-light to-white hover:shadow-hero transition-all duration-500 transform hover:scale-105 animate-slide-up group">
              <CardHeader className="text-center bg-gradient-to-r from-danger to-danger-dark text-white relative pb-12">
                <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-2 mb-4">
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  Método Tradicional
                </h3>
                {/* Frase destacada separada no centro */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-white text-danger font-bold shadow-lg text-sm sm:text-base px-4 py-2 rounded-full">
                    CARO E COMPLICADO
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-danger mb-2">R$ 800+</p>
                  <p className="text-danger font-semibold text-lg">todo mês, sem parar!</p>
                </div>
                
                {/* Desvantagens destacadas */}
                <div className="bg-danger/10 border-2 border-danger/20 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-danger mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Por que NÃO escolher este método?
                  </h4>
                  <ul className="space-y-2 text-sm text-danger">
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      Mensalidades caras que nunca acabam
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      Horários inflexíveis e limitados
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      Perda de tempo no trânsito
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      Dependência de terceiros
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      Sem garantia de resultados
                    </li>
                  </ul>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start text-muted-foreground">
                    <div className="bg-danger rounded-full p-1 mr-3 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Academia (R$ 150/mês)</p>
                      <p className="text-sm">+ taxa de matrícula, estacionamento</p>
                    </div>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <div className="bg-danger rounded-full p-1 mr-3 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Nutricionista (R$ 400/mês)</p>
                      <p className="text-sm">Consultas caras e burocráticas</p>
                    </div>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <div className="bg-danger rounded-full p-1 mr-3 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Personal Trainer (R$ 250/mês)</p>
                      <p className="text-sm">Horários limitados e inflexíveis</p>
                    </div>
                  </li>
                  <li className="flex items-start text-danger">
                    <Clock className="w-5 h-5 mr-3 mt-1 text-danger" />
                    <div>
                      <p className="font-bold">3-4 horas de deslocamento/dia</p>
                      <p className="text-sm">Tempo perdido no trânsito</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-danger/20 rounded-lg border-2 border-danger/30">
                  <p className="text-danger font-bold text-center text-lg">💸 Gasto anual: R$ 9.600+</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-success-light shadow-hero hover:shadow-floating transition-all duration-500 transform hover:scale-105 animate-bounce-in group">
              <CardHeader className="text-center bg-primary text-white relative pb-12">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">✅ Método Vida Saudável</h3>
                {/* Badge separada no centro */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-success text-white font-bold shadow-lg text-sm sm:text-base px-4 py-2 rounded-full group-hover:bg-white group-hover:text-primary transition-colors duration-300">MELHOR ESCOLHA</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <div className="text-center mb-6">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3 animate-pulse">
                    🔥 OFERTA POR TEMPO LIMITADO! 🔥
                  </div>
                  <p className="text-lg text-muted-foreground line-through">De R$ 134</p>
                  <p className="text-6xl font-bold text-primary mb-2">R$ 14,99</p>
                  <p className="text-primary font-semibold text-lg">pagamento único!</p>
                  <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 mt-3">
                    <p className="text-yellow-800 font-bold text-sm">⚡ DESCONTO DE 89% - APENAS HOJE!</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start text-foreground">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Método completo (R$ 47)</p>
                      <p className="text-sm text-success">Acesso vitalício, sem mensalidades</p>
                    </div>
                  </li>
                  <li className="flex items-start text-foreground">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Planner semanal (R$ 29)</p>
                      <p className="text-sm text-success">Organização total da sua rotina</p>
                    </div>
                  </li>
                  <li className="flex items-start text-foreground">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Guia de meal prep (R$ 39)</p>
                      <p className="text-sm text-success">Refeições prontas para a semana</p>
                    </div>
                  </li>
                  <li className="flex items-start text-foreground">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">SOS emergencial (R$ 19)</p>
                      <p className="text-sm text-success">Soluções rápidas para qualquer situação</p>
                    </div>
                  </li>
                  <li className="flex items-start text-primary font-semibold">
                    <Heart className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <div>
                      <p className="font-bold">Conforto da sua casa</p>
                      <p className="text-sm text-success">Zero deslocamento, máxima praticidade</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-primary-light rounded-lg border border-primary/20">
                  <p className="text-primary font-bold text-center">💰 Economia anual: R$ 9.553!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oferta e Bônus */}
      <section id="oferta-section" className="py-16 px-4 bg-gradient-to-br from-primary via-primary-dark to-success text-white scroll-mt-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Oferta Especial por Tempo Limitado
          </h2>
          <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
              <Gift className="w-8 h-8" />
              Bônus Exclusivos Inclusos
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/20 border border-white/30 rounded-xl p-6 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group">
                <CardContent className="text-center p-0">
                  <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/ca02b65e-f2af-42fc-abf3-24ac9f38ca58.png" 
                      alt="Café da manhã saudável e receitas de smoothies"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Bônus 1</h4>
                  <h5 className="font-bold mb-3 text-yellow-300">Café da Manhã Saudável</h5>
                  <p className="text-sm opacity-90 mb-4 leading-relaxed">Receitas nutritivas e deliciosas de smoothies e cafés da manhã</p>
                  <div className="bg-white/20 rounded-lg p-2">
                    <p className="text-lg font-bold">Valor: <span className="text-red-500">R$ 29</span></p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/20 border border-white/30 rounded-xl p-6 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group">
                <CardContent className="text-center p-0">
                  <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/07b21fcb-fc47-42a2-97e4-046fb373f404.png" 
                      alt="Treinos simples e rápidos para homens e mulheres"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Bônus 2</h4>
                  <h5 className="font-bold mb-3 text-yellow-300">Treinos Simples e Rápidos</h5>
                  <p className="text-sm opacity-90 mb-4 leading-relaxed">Exercícios eficazes para homens e mulheres em casa</p>
                  <div className="bg-white/20 rounded-lg p-2">
                    <p className="text-lg font-bold">Valor: <span className="text-red-500">R$ 39</span></p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/20 border border-white/30 rounded-xl p-6 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group">
                <CardContent className="text-center p-0">
                  <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/6740ef4c-2029-4176-a712-2cd9f4f284f5.png" 
                      alt="Yoga para mulheres - equilíbrio e bem-estar"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Bônus 3</h4>
                  <h5 className="font-bold mb-3 text-yellow-300">Yoga para Mulheres</h5>
                  <p className="text-sm opacity-90 mb-4 leading-relaxed">Práticas de yoga para equilíbrio, flexibilidade e bem-estar</p>
                  <div className="bg-white/20 rounded-lg p-2">
                    <p className="text-lg font-bold">Valor: <span className="text-red-500">R$ 19</span></p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-4 animate-pulse">
                🚨 PROMOÇÃO RELÂMPAGO - SÓ HOJE! 🚨
              </div>
              <p className="text-2xl mb-4">
                <span className="line-through opacity-70">Valor total: R$ 134</span>
              </p>
              <p className="text-6xl font-bold mb-6 text-yellow-300">
                Apenas R$ 14,99
              </p>
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg mb-4">
                <p className="font-bold">💥 ECONOMIZE R$ 119,01 - DESCONTO DE 89%!</p>
              </div>
              <ModernButton 
                className="mb-4 bg-gradient-to-r from-success to-success-glow hover:from-success-glow hover:to-success text-xs sm:text-sm md:text-base"
                gradient={false}
                onClick={() => window.open('https://go.pepperpay.com.br/cxw4u', '_blank')}
              >
                Quero transformar minha vida agora
              </ModernButton>
              <p className="text-sm opacity-90 mt-4">
                Pagamento único • Acesso vitalício • Sem mensalidades
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary bg-primary-light shadow-hero">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/267c8dd7-9460-4f82-8453-2ece9b396777.png" 
                  alt="Garantia de 7 dias - selo dourado de qualidade"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Garantia Incondicional de 30 Dias
              </h2>
              <p className="text-xl text-foreground mb-6">
                Se por qualquer motivo você não ficar satisfeito(a) com o conteúdo, 
                devolvemos 100% do seu dinheiro sem questionamentos.
              </p>
              <p className="text-muted-foreground">
                Sua satisfação é nossa prioridade. Teste o método sem riscos!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Está pronto(a) para sua transformação?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a mais de 1.000 pessoas que já transformaram suas vidas
          </p>
          <ModernButton 
            className="mb-6 bg-gradient-to-r from-success to-success-glow hover:from-success-glow hover:to-success text-xs sm:text-sm md:text-base"
            gradient={false}
          >
            Quero transformar minha vida agora
          </ModernButton>
          <p className="text-sm opacity-80">
            Acesso imediato após o pagamento • Garantia de 30 dias • Suporte exclusivo
          </p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-muted py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-primary mb-4">Método Vida Saudável</h3>
              <p className="text-muted-foreground text-sm">
                Transformando vidas através de hábitos saudáveis e sustentáveis.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre o Método</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Depoimentos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Perguntas Frequentes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Políticas</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Fale Conosco</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Suporte</h4>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">suporte@vidasaudavel.com.br</span>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm">
                © 2024 Método Vida Saudável Descomplicada. Todos os direitos reservados.
              </p>
              <p className="text-xs text-muted-foreground text-center md:text-right">
                ⚠️ Este produto não substitui consulta médica. Consulte sempre um profissional de saúde.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;