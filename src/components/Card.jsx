function Card({ children }) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="border border-mist-gray shadow-2xl rounded-2xl w-2xl h-[50%] p-10 flex flex-col items-center justify-center bg-warm-white">
        {children}
      </div>
    </div>
  );
}

export default Card;
