export default function Highlights() {
  const highlights = [
    { title: "Équipes Jeunes", text: "Nous formons la prochaine génération...", colorClass: "text-secondary" },
    { title: "Compétitions", text: "Un club compétitif avec de nombreuses équipes...", colorClass: "text-secondary" },
    { title: "Événements", text: "Des événements réguliers pour rassembler la communauté...", colorClass: "text-secondary" },
    { title: "Infrastructures", text: "Des infrastructures de qualité...", colorClass: "text-secondary" },
  ];

  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-12">
        Nos Points Forts
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {highlights.map((item, i) => (
          <div key={i} className="p-6 bg-light rounded-lg shadow text-dark">
            <h3 className={`text-lg font-bold mb-2 ${item.colorClass}`}>{item.title}</h3>
            <p className="text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
