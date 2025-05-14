export function PaymentCard({ setPayOpen }) {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gray-50 px-4 flex-col">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Төлбөр төлөх</h2>
      <p className="text-gray-500 mb-6">
        Та төлбөрөө хийсний дараа шалгах хэсэг дээр дарна уу
      </p>

      <div className="w-80 h-80 bg-gray-300 mx-auto mb-6 rounded-md">
        <img
          src="/assets/category-detail/1.jpg"
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-center gap-4">
        <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">
          Төлбөр шалгах
        </button>
        <button
          onClick={() => setPayOpen(false)}
          className="border border-black text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Буцах
        </button>
      </div>
    </div>
  );
}