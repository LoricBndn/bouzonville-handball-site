import Image from "next/image";
import { Product } from "@/types/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div
      className="
        bg-white border border-gray-200 rounded-xl 
        shadow-md hover:shadow-lg 
        transition-transform hover:scale-[1.02] 
        overflow-hidden flex flex-col 
        w-[220px] sm:w-[240px] lg:w-[260px]
      "
    >
      {/* Image au format carré */}
      <div className="relative aspect-square w-full bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 50vw, 260px"
        />
      </div>

      {/* Contenu */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-base font-bold text-gray-800 mb-1 text-center">
            {product.name}
          </h3>
          <p className="text-gray-600 text-xs mb-3 line-clamp-3 text-center">
            {product.description}
          </p>

          {product.colors && (
            <div className="mb-4 text-center">
              <span className="text-xs font-medium text-gray-700">Couleurs :</span>
              <div className="flex flex-wrap justify-center gap-1 mt-1">
                {product.colors.map((c, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Prix */}
        <div className="mt-auto flex justify-center items-center pt-3 border-t border-gray-100">
          <span className="text-lg font-bold text-primary">
            {product.price}€
          </span>
        </div>
      </div>
    </div>
  );
}
