import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (section: string) => void;
  onCartClick: () => void;
  onMenuClick: () => void;
  cartItemCount: number;
}

const Header = ({ scrollToSection, onCartClick, onMenuClick, cartItemCount }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={onMenuClick}
            >
              <Icon name="Menu" size={24} />
            </Button>
            <div className="flex items-center gap-2">
              <div className="text-4xl">🍣</div>
              <span className="text-2xl font-bold text-primary font-['Montserrat']">YOKO SUSHI</span>
            </div>
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

          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold relative"
            onClick={onCartClick}
          >
            <Icon name="ShoppingCart" className="mr-2" size={20} />
            <span className="hidden sm:inline">Корзина</span>
            {cartItemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-secondary text-secondary-foreground">
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;