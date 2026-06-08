function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full p-5 rounded-2xl bg-forest-green text-warm-white font-medium cursor-pointer"
    >
      Continuar
    </button>
  );
}

export default Button;
