export const daysOfWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

export const trainingSchedule: {
  time: string;
  days: {
    [key: string]: {
      gym: string;
      category: string;
      duration: number;
      time: string;
    }[];
  };
}[] = [
  {
    time: "17h30",
    days: {
      Lundi: [],
      Mardi: [],
      Mercredi: [],
      Jeudi: [
        {
          gym: "Boulay Collège",
          category: "U15F",
          duration: 90,
          time: "17h30 - 19h00",
        },
      ],
      Vendredi: [],
    },
  },
  {
    time: "18h00",
    days: {
      Lundi: [],
      Mardi: [],
      Mercredi: [],
      Jeudi: [],
      Vendredi: [],
    },
  },
  {
    time: "18h30",
    days: {
      Lundi: [
        {
          gym: "Bouzonville Providence",
          category: "U13G",
          duration: 90,
          time: "18h30 - 20h00",
        },
        {
          gym: "Boulay Omnisports",
          category: "U13F",
          duration: 90,
          time: "18h30 - 20h00",
        },
      ],
      Mardi: [
        {
          gym: "Bouzonville Providence",
          category: "U15F",
          duration: 90,
          time: "18h30 - 20h00",
        },
      ],
      Mercredi: [
        {
          gym: "Bouzonville Providence",
          category: "U18G",
          duration: 90,
          time: "18h30 - 20h00",
        },
        {
          gym: "Boulay Omnisports",
          category: "U18F",
          duration: 90,
          time: "18h30 - 20h00",
        },
        {
          gym: "Bouzonville Providence",
          category: "U15G",
          duration: 90,
          time: "18h30 - 20h00",
        },
      ],
      Jeudi: [
        {
          gym: "Bouzonville Providence",
          category: "U13F",
          duration: 90,
          time: "18h30 - 20h00",
        },
      ],
      Vendredi: [
        {
          gym: "Boulay Omnisports",
          category: "U18G",
          duration: 90,
          time: "18h30 - 20h00",
        },
        {
          gym: "Bouzonville Providence",
          category: "U15G",
          duration: 90,
          time: "18h30 - 20h00",
        },
        {
          gym: "Boulay Collège",
          category: "U13G",
          duration: 90,
          time: "18h30 - 20h00",
        },
      ],
    },
  },
  {
    time: "19h00",
    days: {
      Lundi: [],
      Mardi: [],
      Mercredi: [{
          gym: "Bouzonville Salle des fêtes",
          category: "Handfit",
          duration: 60,
          time: "19h00 - 20h00",
        },],
      Jeudi: [],
      Vendredi: [],
    },
  },
  {
    time: "19h30",
    days: {
      Lundi: [],
      Mardi: [
        {
          gym: "Boulay Omnisports",
          category: "SF",
          duration: 90,
          time: "19h30 - 21h00",
        },
      ],
      Mercredi: [],
      Jeudi: [],
      Vendredi: [],
    },
  },
  {
    time: "20h00",
    days: {
      Lundi: [],
      Mardi: [],
      Mercredi: [
        {
          gym: "Boulay Omnisports",
          category: "SG",
          duration: 90,
          time: "20h00 - 21h30",
        },
      ],
      Jeudi: [
        {
          gym: "Boulay Omnisports",
          category: "SF",
          duration: 90,
          time: "20h00 - 21h30",
        },
      ],
      Vendredi: [
        {
          gym: "Boulay Omnisports",
          category: "SG",
          duration: 90,
          time: "20h00 - 21h30",
        },
        {
          gym: "Boulay Collège",
          category: "U18F",
          duration: 90,
          time: "20h00 - 21h30",
        },
      ],
    },
  },
];
