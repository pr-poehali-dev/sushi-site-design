import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-background to-black"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&h=1080&fit=crop&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.3
      }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-8 text-base md:text-lg px-6 py-2.5 bg-primary text-primary-foreground border-2 border-primary shadow-[0_0_20px_rgba(251,191,36,0.3)]">
            ⚡ Доставка за 30 минут
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight font-['Montserrat']">
            <span className="text-white">Премиальные суши</span><br />
            <span className="text-primary drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">высшего качества</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Аутентичная японская кухня от шеф-повара из Токио. Свежайшие морепродукты, доставленные утром.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              onClick={() => scrollToSection('menu')}
            >
              <Icon name="UtensilsCrossed" className="mr-2" size={24} />
              Смотреть меню
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              onClick={() => scrollToSection('promos')}
            >
              <Icon name="Sparkles" className="mr-2" size={24} />
              Акции
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;