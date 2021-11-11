interface IButtonView {
  label: string;
  color: string;
  size: number;
  background: string;
  radius: string;
}

const ButtonView = ({
  label,
  color,
  size,
  background,
  radius,
}: IButtonView) => {
  const style = {
    color,
    fontSize: size,
    background,
    borderRadius: radius,
  };
  return <button style={style}>{label}</button>;
};

ButtonView.defaultProps = {
  label: "Button",
  color: "black",
  size: "160px",
  background: "white",
  radius: "0",
};

export default ButtonView;
