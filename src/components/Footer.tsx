import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🍣</div>
            <span className="text-xl font-bold text-primary font-['Montserrat']">YOKO SUSHI</span>
          </div>
          <div className="text-center text-gray-400">
            © 2024 YOKO SUSHI. Все права защищены.
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Send" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="MessageCircle" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;