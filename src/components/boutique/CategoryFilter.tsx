import React from 'react';

interface Category {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Props {
  categories: Category[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap justify-center space-x-2 mb-8">
      {categories.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all mb-2 ${
            selected === id
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
          }`}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
