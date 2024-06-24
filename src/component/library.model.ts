import { generate } from "@ant-design/colors";

interface librarySizes {
    size?: "default" | "small" | "medium" | "large";
}
interface libraryVariant {
    variant?: "danger" | "secondary" | "warning" | "success" | 'primary';
}
interface libraryDirection {
    direction?: "vertical" | "horizontal";

}
interface LayoutTheme{
    theme : 'light' | 'dark'
}
const getColor = (variant: libraryVariant['variant'] = 'primary' ) => {
    switch (variant) {
        case "danger":
            return generate("rgba(232, 76, 66, 1)")[5];
        case "secondary":
            return generate("lightblue")[5];
        case "warning":
            return generate("orange")[5];
        case "success":
            return generate("green")[5];
        case "primary":
            return generate("rgba(2, 109, 209, 1)")[5];
        default:
            return generate("#000000")[5];
    }
}
const getFontSize = (size: librarySizes['size'] = "default"): number => {
    const sizes: Record<"default" | "small" | "medium" | "large", number> = {
      default: 24,
      small: 10,
      medium: 15,
      large: 30,
    };
    
    return sizes[size];
  };
// Export the classes and the function
export { getColor, getFontSize };
export type { libraryVariant ,librarySizes,libraryDirection,LayoutTheme};

