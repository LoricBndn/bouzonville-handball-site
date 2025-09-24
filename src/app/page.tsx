import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative bg-gradient-to-br from-light to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero principal */}
        <div className="bg-light rounded-lg shadow-xl overflow-hidden mb-12">
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
              <div className="max-w-2xl ml-8 text-light">
                <h1 className="text-5xl font-bold mb-4 leading-tight font-title-xl">
                  Bouzonville Handball Club
                </h1>
                <h2 className="text-2xl font-light mb-6 text-accent">
                  Passion, sport et convivialité depuis plus de 30 ans
                </h2>
                <p className="text-lg mb-8 text-light/80 leading-relaxed font-body">
                  Rejoignez notre club de handball et découvrez une communauté de plus de 120 licenciés. 
                  De l&apos;école de handball aux équipes seniors, nous accueillons tous les âges 
                  et tous les niveaux dans une ambiance familiale et sportive.
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="/inscription"
                    className="bg-secondary hover:bg-orange-600 text-light px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                  >
                    Nous Rejoindre
                  </Link>
                  <Link
                    href="/club"
                    className="border-2 border-light text-light hover:bg-light hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Découvrir le Club
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* À propos */}
        <section className="max-w-7xl mx-auto py-16 px-6 text-center border-b border-accent/20 bg-background mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-title-lg">
            À Propos du Bouzonville Handball
          </h2>
          <p className="text-lg text-accent mb-6 font-body">
            Venez Vivre le Handball d&apos;une Manière Nouvelle !
          </p>
          <p className="text-accent max-w-3xl mx-auto mb-8 font-body">
            Le Bouzonville Handball est un club dynamique et familial, ancré dans
            la région depuis <span className="text-secondary font-bold">1964</span>.  
            Il met l&apos;accent sur la formation des jeunes, la compétition et la
            transmission des valeurs du sport. Avec des équipes engagées à tous
            les niveaux, des infrastructures adaptées et un fort ancrage local, il
            contribue activement à la vie sportive de Bouzonville.
          </p>
          <Link
            href="/inscription"
            className="px-6 py-3 bg-secondary text-light rounded hover:bg-orange-600 transition"
          >
            Inscrivez-vous Maintenant !
          </Link>
        </section>

        {/* Statistiques */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-light rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">94</div>
            <div className="text-accent">Licenciés</div>
          </div>
          <div className="bg-light rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">11</div>
            <div className="text-accent">Équipes Actives</div>
          </div>
          <div className="bg-light rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-danger mb-2">60</div>
            <div className="text-accent">Années d&apos;Expérience</div>
          </div>
        </div>

        {/* Points forts */}
        <section className="max-w-7xl mx-auto py-16 px-6 bg-background mb-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-12 font-title-lg">
            Nos Points Forts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-primary/10 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-secondary mb-2">Équipes Jeunes</h3>
              <p className="text-sm text-accent font-body">
                Nous formons la prochaine génération de champions grâce à notre école de handball !
              </p>
            </div>
            <div className="p-6 bg-primary/10 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-secondary mb-2">Compétitions</h3>
              <p className="text-sm text-accent font-body">
                Un club compétitif avec de nombreuses équipes inscrites au niveau régional.
              </p>
            </div>
            <div className="p-6 bg-primary/10 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-secondary mb-2">Événements</h3>
              <p className="text-sm text-accent font-body">
                Des événements réguliers pour rassembler la communauté et promouvoir le handball !
              </p>
            </div>
            <div className="p-6 bg-primary/10 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-secondary mb-2">Infrastructures</h3>
              <p className="text-sm text-accent font-body">
                Des infrastructures de qualité permettant le bon développement et la bonne formation de nos jeunes joueurs et joueuses.
              </p>
            </div>
          </div>
        </section>

        {/* Activités */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* École de handball */}
          <div className="bg-light rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <Image
              src="/divers/ecole_hand.jpg"
              alt="École de handball"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-dark mb-3">École de Handball</h3>
              <p className="text-accent mb-4">
                Initiation au handball pour les jeunes de 6 à 12 ans dans une ambiance ludique et éducative.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary font-medium">Samedi matin</span>
                <Link href="/ecole-handball" className="text-primary hover:text-primary/80 font-medium">
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>

          {/* Handfit */}
          <div className="bg-light rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <Image
              src="/divers/handfit.jpg"
              alt="Handfit"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-dark mb-3">Handfit</h3>
              <p className="text-accent mb-4">
                Fitness inspiré du handball pour tous les âges. Cardio, renforcement musculaire et plaisir !
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary font-medium">Séance d&apos;essai gratuite</span>
                <Link href="/handfit" className="text-secondary hover:text-secondary/80 font-medium">
                  Découvrir →
                </Link>
              </div>
            </div>
          </div>

          {/* École d'arbitrage */}
          <div className="bg-light rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <Image
              src="/divers/ecole_arbitrage.jpg"
              alt="École d'arbitrage"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-dark mb-3">École d&apos;Arbitrage</h3>
              <p className="text-accent mb-4">
                Formations d&apos;arbitrage du niveau départemental au niveau national. Rejoignez-nous !
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-danger font-medium">Formation gratuite</span>
                <Link href="/arbitrage" className="text-danger hover:text-danger/80 font-medium">
                  S&apos;inscrire →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-xl p-8 text-center text-light">
          <h2 className="text-3xl font-bold mb-4 font-title-lg">Prêt à nous rejoindre ?</h2>
          <p className="text-xl mb-6 text-light/80">
            Venez découvrir notre club lors d&apos;un entraînement ou contactez-nous pour plus d&apos;informations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+33670833626"
              className="bg-light text-primary hover:bg-light/90 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📞 06 70 83 36 26
            </Link>
            <Link
              href="/contact"
              className="border-2 border-light text-light hover:bg-light hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              ✉️ Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
