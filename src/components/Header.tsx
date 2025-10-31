import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="text-4xl">🍣</div>
            <span className="text-2xl font-bold text-primary font-['Montserrat']">YOKO SUSHI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Меню
            </button>
            <button 
              onClick={() => scrollToSection('delivery')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Доставка
            </button>
            <button 
              onClick={() => scrollToSection('promos')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Акции
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Контакты
            </button>
          </div>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <Icon name="ShoppingCart" className="mr-2" size={20} />
            Корзина
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
