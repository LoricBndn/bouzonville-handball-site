import Image from "next/image";
import Link from "next/link";

interface ActivityCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  badge: string;
  badgeColorClass: string;
  link: string;
  linkLabel: string;
}

export default function ActivityCard({
  image,
  alt,
  title,
  description,
  badge,
  badgeColorClass,
  link,
  linkLabel,
}: ActivityCardProps) {
  return (
    <div className="bg-light rounded-lg shadow hover:shadow-md transition">
      <Image
        src={image}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h3 className={`text-xl font-bold ${badgeColorClass} mb-3`}>{title}</h3>
        <p className="text-dark mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium ${badgeColorClass}`}>{badge}</span>
          <Link
            href={link}
            className={`${badgeColorClass} hover:underline font-medium`}
          >
            {linkLabel} →
          </Link>
        </div>
      </div>
    </div>
  );
}
