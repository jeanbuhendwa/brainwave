import buttonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, px, white, children }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transistion-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = `relative z-10`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>

      {buttonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>

      {buttonSvg(white)}
    </button>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
