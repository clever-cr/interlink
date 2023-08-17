function Input({ name, value, placeholder, ...props }) {
  return (
    <input
      className="outline-[#141624] lg:w-[446px] h-[69px] w-[340px] px-3 rounded-[23px] border"
      name={name}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
}
export default Input;
