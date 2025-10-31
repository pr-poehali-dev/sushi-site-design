import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1553621042-f6e147245754?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 text-lg px-6 py-2 bg-secondary text-secondary-foreground">
            Доставка за 30 минут
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground font-['Montserrat']">
            Свежие суши<br />
            <span className="text-primary">прямо к вам</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Аутентичная японская кухня с быстрой доставкой. Готовим из свежайших ингредиентов каждый день.
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