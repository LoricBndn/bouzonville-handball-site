import React from "react";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground font-body">

      {/* Hero Section */}
      <section className="bg-light text-primary py-20 text-center border-b border-accent/20">
        <h1 className="text-4xl font-title-xl uppercase mb-4">
          Bouzonville Handball
        </h1>
        <p className="max-w-2xl mx-auto text-accent text-lg">
          Venez découvrir la passion du handball dans une ambiance chaleureuse
          et familiale. Que vous soyez joueur, supporter, ou simplement curieux,
          Bouzonville Handball a quelque chose à offrir à chacun !
        </p>
        <button className="mt-6 px-6 py-3 bg-secondary text-light font-body font-medium rounded hover:bg-secondary/90 transition">
          Rejoignez le Club
        </button>
      </section>

      {/* À propos */}
      <section className="max-w-7xl mx-auto py-16 px-6 text-center border-b border-accent/20 bg-background">
        <h2 className="text-3xl font-title-lg text-primary mb-4">
          À Propos du Bouzonville Handball
        </h2>
        <p className="text-lg text-dark mb-6">
          Venez Vivre le Handball d&apos;une Manière Nouvelle !
        </p>
        <p className="text-accent max-w-3xl mx-auto mb-8">
          Le Bouzonville Handball est un club dynamique et familial, ancré dans
          la région depuis <span className="text-secondary font-bold">1964</span>.
          Il met l&apos;accent sur la formation des jeunes, la compétition et la
          transmission des valeurs du sport. Avec des équipes engagées à tous
          les niveaux, des infrastructures adaptées et un fort ancrage local, il
          contribue activement à la vie sportive de Bouzonville.
        </p>
        <button className="px-6 py-3 bg-secondary text-light font-body font-medium rounded hover:bg-secondary/90 transition">
          Inscrivez-vous Maintenant !
        </button>
      </section>

      {/* Statistiques */}
      <section className="bg-light py-12 border-b border-accent/20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-title-lg text-primary">135</p>
            <p className="text-accent">Licenciés</p>
          </div>
          <div>
            <p className="text-4xl font-title-lg text-primary">11</p>
            <p className="text-accent">Équipes Actives</p>
          </div>
          <div>
            <p className="text-4xl font-title-lg text-primary">60</p>
            <p className="text-accent">Années d&apos;Expérience</p>
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="max-w-7xl mx-auto py-16 px-6 bg-background">
        <h2 className="text-3xl font-title-lg text-primary text-center mb-12">
          Nos Points Forts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-primary/10 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-secondary mb-2">Équipes Jeunes</h3>
            <p className="text-sm text-accent">
              Nous formons la prochaine génération de champions grâce à notre
              école de handball !
            </p>
          </div>
          <div className="p-6 bg-primary/10 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-secondary mb-2">Compétitions</h3>
            <p className="text-sm text-accent">
              Un club compétitif avec de nombreuses équipes inscrites au niveau
              régional.
            </p>
          </div>
          <div className="p-6 bg-primary/10 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-secondary mb-2">Événements</h3>
            <p className="text-sm text-accent">
              Des événements réguliers pour rassembler la communauté et promouvoir
              le handball !
            </p>
          </div>
          <div className="p-6 bg-primary/10 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-secondary mb-2">Infrastructures</h3>
            <p className="text-sm text-accent">
              Des infrastructures de qualité permettant le bon développement et
              la bonne formation de nos jeunes joueurs et joueuses.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
