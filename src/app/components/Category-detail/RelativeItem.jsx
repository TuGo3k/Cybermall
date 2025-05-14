import ProductCard from "@/app/utils/ProductCard";

export default function RelativeItem({data}) {
  return (
    <div className="w-full px-[8vw] flex flex-col gap-10 py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-left w-full">Ижил төстэй бараанууд</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
        {data.slice(0, 4).map((el, index) => (
          <ProductCard key={index} product={el} />
        ))}
      </div>
    </div>
  );
}
