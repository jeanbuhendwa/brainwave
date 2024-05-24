import buttonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, childreen, px, white }) => {
  const renderButton = () => (
    <button>
      <span>{childreen}</span>
      {buttonSvg(white)}
    </button>
  );
  return renderButton();
};

export default Button;
