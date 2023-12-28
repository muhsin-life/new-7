import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "./hooks/use-cart";
import { Icons } from "./Icons";


const AddToCartButton = ({ payload }: { payload: PayloadProps }) => {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <Button
      onClick={() => {
        addItem(payload);
        setIsSuccess(true);
      }}
      size="lg"
      className="w-full"
    >
         <Icons.addToCart className="w-4 h-4 me-2" /> ADD
      
    </Button>
  );
};

export default AddToCartButton;
