import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-lg shadow-xl p-8 text-center text-light">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        Prêt à nous rejoindre ?
      </h2>
      <p className="text-lg sm:text-xl mb-6 text-light">
        Venez découvrir notre club lors d&apos;un entraînement...
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="tel:+33670833626"
          className="border-2 border-light hover:border-gray-200 bg-light text-primary hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold transition-colors text-center"
        >
          📞 06 70 83 36 26
        </Link>
        <Link
          href="/contact"
          className="border-2 border-light text-light hover:bg-light hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors text-center"
        >
          ✉️ Nous Contacter
        </Link>
      </div>
    </div>
  );
}
