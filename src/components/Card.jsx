function Card({ children }) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="border border-mist-gray shadow-2xl rounded-2xl w-2xl p-10">
        {children}
      </div>
    </div>
  );
}

export default Card;
