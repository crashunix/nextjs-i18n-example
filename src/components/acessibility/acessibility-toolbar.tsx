import ContrastSwitcher from "./contrast-switcher";
import FontSizeControl from "./font-size-control";

const AcessibilityToolbar = () => {
  return (
    <div className="w-full p-2 bg-secondary text-secondary-foreground flex items-center space-x-4">
      <FontSizeControl />
      <ContrastSwitcher />
    </div>
  );
};

export default AcessibilityToolbar;
