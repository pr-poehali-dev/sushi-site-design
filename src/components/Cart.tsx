import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold font-['Montserrat']">
            Корзина {itemCount > 0 && `(${itemCount})`}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-6">
              <Icon name="ShoppingCart" size={64} className="text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Корзина пуста</h3>
            <p className="text-muted-foreground mb-6">Добавьте блюда из меню</p>
            <Button onClick={onClose} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Перейти к меню
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[calc(100vh-250px)] mt-6">
              <div className="space-y-4 pr-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-muted/30 rounded-lg p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{item.name}</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary font-['Montserrat']">
                            {item.price * item.quantity}₽
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-destructive hover:text-destructive"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <SheetFooter className="mt-6">
              <div className="w-full space-y-4">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span className="text-foreground">Итого:</span>
                  <span className="text-2xl text-primary font-['Montserrat']">{total}₽</span>
                </div>
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg py-6"
                  size="lg"
                  onClick={onCheckout}
                >
                  <Icon name="Check" className="mr-2" size={20} />
                  Оформить заказ
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;