import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (section: string) => void;
}

const MobileMenu = ({ isOpen, onClose, scrollToSection }: MobileMenuProps) => {
  const handleNavClick = (section: string) => {
    scrollToSection(section);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <div className="text-3xl">🍣</div>
            <span className="text-xl font-bold text-primary font-['Montserrat']">YOKO SUSHI</span>
          </SheetTitle>
        </SheetHeader>
        
        <nav className="flex flex-col gap-2 mt-8">
          <Button
            variant="ghost"
            className="justify-start text-lg font-medium"
            onClick={() => handleNavClick('home')}
          >
            Главная
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg font-medium"
            onClick={() => handleNavClick('menu')}
          >
            Меню
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg font-medium"
            onClick={() => handleNavClick('delivery')}
          >
            Доставка
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg font-medium"
            onClick={() => handleNavClick('promos')}
          >
            Акции
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg font-medium"
            onClick={() => handleNavClick('contacts')}
          >
            Контакты
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
