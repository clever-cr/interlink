function StartButton({ text, className, onclick }) {
  return (
    <>
      <button
        onClick={onclick}
        className={`bg-[#141624] text-white text-xl px-6 py-3 rounded-[20px] text-center leading-[24px] font-light ${className}`}
      >
        {text}
      </button>
    </>
  );
}
export default StartButton;
