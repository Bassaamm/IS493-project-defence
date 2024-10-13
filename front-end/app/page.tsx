export default function Home() {
  return (
    <div className="text-white p-10 py-20 h-screen flex flex-col items-center">
      <div>Hill Cipher Example</div>
      <div className="flex-grow w-full h-full flex justify-center items-center gap-20 flex-col">
        <div className="flex gap-4 items-center">
          <label htmlFor="" className="text-base font-semibold ">
            Input :{" "}
          </label>
          <input type="text" className="rounded px-2 py-1 text-gray-900" />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div>Encrypted Input</div>
          <div>aaas</div>
        </div>
      </div>
    </div>
  );
}
