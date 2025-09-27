import Link from "next/link";

export default function About() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center bg-light shadow rounded-2xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
        À Propos du Bouzonville Handball
      </h2>
      <p className="text-lg text-accent mb-6">
        Venez Vivre le Handball d&apos;une Manière Nouvelle !
      </p>
      <p className="text-dark max-w-3xl mx-auto mb-8">
        Le Bouzonville Handball est un club dynamique et familial, ancré
        dans la région depuis{" "}
        <span className="text-secondary font-bold">1964</span>. Il met
        l&apos;accent sur la formation des jeunes, la compétition et la
        transmission des valeurs du sport.
      </p>
      <Link
        href="/inscription"
        className="px-6 py-3 bg-primary text-light rounded hover:bg-secondary transition"
      >
        Inscrivez-vous Maintenant !
      </Link>
    </section>
  );
}
