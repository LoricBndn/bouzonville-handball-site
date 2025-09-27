export default function Stats() {
  const stats = [
    { value: "94", label: "Licenciés", colorClass: "text-primary" },
    { value: "12", label: "Équipes Actives", colorClass: "text-secondary" },
    { value: "60", label: "Années d'Expérience", colorClass: "text-danger" },
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-6 pt-12 sm:pt-16 ">
      {stats.map((s, i) => (
        <div key={i} className="bg-light rounded-lg shadow p-6 text-center">
          <div className={`text-3xl font-bold mb-2 ${s.colorClass}`}>{s.value}</div>
          <div className="text-dark">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
