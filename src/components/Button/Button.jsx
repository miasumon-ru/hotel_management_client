const Button = ({
  children,
  type = "button",
  bgColor,
  textColor,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
