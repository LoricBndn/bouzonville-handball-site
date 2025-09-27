import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
      <div className="relative h-[500px]">
        <Image
          src="/salle/gymnase_norbert_noel.jpg"
          alt="Centre sportif moderne"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl m-4 sm:ml-8 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight font-title-xl">
              Bouzonville Handball Club
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-white mb-6 text-secondary">
              Passion, sport et convivialité depuis plus de 60 ans
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-8 text-white/90 leading-relaxed">
              Rejoignez notre club de handball et découvrez une communauté de plus de 90 licenciés. De l'école de handball aux équipes seniors, nous accueillons tous les âges et tous les niveaux dans une ambiance familiale et sportive.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/inscription"
                className="border-2 border-secondary hover:border-orange-600 bg-secondary hover:bg-orange-600 text-light px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg text-center"
              >
                Nous Rejoindre
              </Link>
              <Link
                href="/club"
                className="border-2 border-light text-light hover:bg-light hover:text-primary px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Découvrir le Club
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
