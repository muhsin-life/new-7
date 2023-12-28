
type locale = "ae-en" | "ae-ar" | "sa-en" | "sa-ar";


type SupportedDeviceType = "mobile" | "desktop";

 type MainNavItem = NavItemWithOptionalChildren

  



 interface PayloadProps {
    action: string;
    data: {
      items: {
        id: string;
        qty: number;
      };
      address_id?: string | null;
    };
  }