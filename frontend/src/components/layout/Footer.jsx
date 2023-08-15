function Footer() {
  return (
    <>
      <div className="bg-[#141624] text-[#BABABF] flex px-16 items-center justify-between border-t  py-8">
        <div className="flex items-center gap-10">
          <h3>Interlink</h3>
          <p className="text-sm">© interlink 2023. All Rights Reserved.</p>
        </div>

        <div className="flex text-sm gap-8">
          <p>Terms</p>
          <p className="pl-2 border-l border-gray-500">Privacy Policy</p>
          <p className="pl-2 border-l border-gray-500">Cookie policy</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
