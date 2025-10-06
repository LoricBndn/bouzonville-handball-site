import { Team } from "@/types/teams";

export const TeamsData: Team[] = [
  // Masculin
  {
    id: 1, name: "ENT BOUZONVILLE/BOULAY SM 1", category: "Seniors Masculin", photo: "/equipes/sm1.jpg", coach: "Gaby KOCH",
    division: "Régional", level: "Régional", gender: "MASCULIN", period: "01/07/2025 - 30/06/2026", isConvention: true,
    conventionType: "pilotée", ranking: 2, totalTeams: 12,
    stats: { played: 18, won: 13, drawn: 2, lost: 3, goalsFor: 485, goalsAgainst: 420, points: 28 },
    players: [{ id: 3, firstName: "Pierre", lastName: "Dubois", age: 28, position: "Pivot", hand: "Droitier", photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150", number: 9 }],
    matches: [{ id: 2, date: "2025-01-27", opponent: "Nancy HB", home: false, status: "À venir" }]
  },
  {
    id: 7, name: "ENT BOULAY/BOUZONVILLE SM 2", category: "+16 Masculin", photo: "https://images.pexels.com/photos/8007513/pexels-photo-8007513.jpeg?auto=compress&cs=tinysrgb&w=400", coach: "Philippe Durand",
    division: "Départemental", level: "Départemental", gender: "MASCULIN", period: "15/07/2025 - 20/06/2026", isConvention: true,
    conventionType: "participante", ranking: 7, totalTeams: 10,
    stats: { played: 12, won: 4, drawn: 2, lost: 6, goalsFor: 240, goalsAgainst: 270, points: 10 },
    players: [{ id: 11, firstName: "Julien", lastName: "Girard", age: 17, position: "Arrière droit", hand: "Droitier", photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150", number: 6 }],
    matches: [{ id: 10, date: "2025-01-18", opponent: "Sarreguemines +16", home: false, score: "19-22", result: "Défaite", status: "Joué" }]
  },
  {
    id: 2, name: "ENT BOUZONVILLE/BOULAY U18M", category: "U18 Masculin", photo: "https://images.pexels.com/photos/8007513/pexels-photo-8007513.jpeg?auto=compress&cs=tinysrgb&w=400", coach: "Jean Dupont",
    division: "Régional", level: "Régional", gender: "MASCULIN", period: "01/07/2025 - 30/06/2026", isConvention: true,
    conventionType: "pilotée", ranking: 4, totalTeams: 10,
    stats: { played: 12, won: 8, drawn: 1, lost: 3, goalsFor: 320, goalsAgainst: 280, points: 17 },
    players: [
      { id: 1, firstName: "Antoine", lastName: "Martin", age: 17, position: "Gardien", hand: "Droitier", photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150", number: 1 },
      { id: 2, firstName: "Lucas", lastName: "Bernard", age: 18, position: "Ailier gauche", hand: "Gaucher", photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150", number: 7 }
    ],
    matches: [{ id: 1, date: "2025-01-25", opponent: "Metz U18", home: true, score: "24-22", result: "Victoire", status: "Joué" }]
  },
  {
    id: 3, name: "ENT BOUZONVILLE/BOULAY U15M", category: "U15 Masculin", photo: "https://images.pexels.com/photos/8007506/pexels-photo-8007506.jpeg?auto=compress&cs=tinysrgb&w=400", coach: "Marc Leroy",
    division: "Régional", level: "Régional", gender: "MASCULIN", period: "01/07/2025 - 30/06/2026", isConvention: true,
    conventionType: "pilotée", ranking: 6, totalTeams: 8,
    stats: { played: 10, won: 5, drawn: 1, lost: 4, goalsFor: 220, goalsAgainst: 210, points: 11 },
    players: [{ id: 4, firstName: "Thomas", lastName: "Petit", age: 15, position: "Demi-centre", hand: "Droitier", photo: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150", number: 10 }],
    matches: [{ id: 3, date: "2025-01-26", opponent: "Thionville U15", home: true, score: "18-16", result: "Victoire", status: "Joué" }]
  },
  {
    id: 4, name: "ENT BOUZONVILLE/BOULAY U13M 1", category: "U13 Masculin", photo: "/equipes/u13m1.jpg", coach: "Sophie Martin",
    division: "Régional", level: "Régional", gender: "MASCULIN", period: "01/07/2025 - 30/06/2026", isConvention: true,
    conventionType: "pilotée", ranking: 3, totalTeams: 6,
    stats: { played: 8, won: 5, drawn: 2, lost: 1, goalsFor: 180, goalsAgainst: 150, points: 12 },
    players: [{ id: 5, firstName: "Hugo", lastName: "Moreau", age: 13, position: "Ailier droit", hand: "Droitier", photo: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150", number: 11 }],
    matches: [{ id: 4, date: "2025-01-24", opponent: "Forbach U13", home: false, score: "15-12", result: "Victoire", status: "Joué" }]
  },
  {
    id: 5, name: "ENT BOUZONVILLE/BOULAY U13M 2", category: "U13 Masculin", photo: "https://images.pexels.com/photos/8007506/pexels-photo-8007506.jpeg?auto=compress&cs=tinysrgb&w=400", coach: "David Roussel",
    division: "Départemental", level: "Départemental", gender: "MASCULIN", period: "20/08/2025 - 20/06/2026", isConvention: true,
    conventionType: "pilotée", ranking: 2, totalTeams: 8,
    stats: { played: 6, won: 4, drawn: 1, lost: 1, goalsFor: 120, goalsAgainst: 100, points: 9 },
    players: [{ id: 6, firstName: "Maxime", lastName: "Durand", age: 12, position: "Gardien", hand: "Gaucher", photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150", number: 16 }],
    matches: [{ id: 5, date: "2025-01-23", opponent: "Sarreguemines -13", home: true, score: "20-18", result: "Victoire", status: "Joué" }]
  },
  {
    id: 12, name: "BOUZONVILLE HANDBALL U11M", category: "U11 Masculin", photo: "https://images.pexels.com/photos/8007506/pexels-photo-8007506.jpeg?auto=compress&cs=tinysrgb&w=400", coach: "Claire Dubois",
    division: "Départemental", level: "Départemental", gender: "MASCULIN", period: "2024-2025", isConvention: false,
    conventionType: "club", ranking: 1, totalTeams: 6,
    stats: { played: 8, won: 7, drawn: 1, lost: 0, goalsFor: 140, goalsAgainst: 80, points: 15 },
    players: [{ id: 7, firstName: "Nathan", lastName: "Garcia", age: 11, position: "Ailier gauche", hand: "Gaucher", photo: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150", number: 7 }],
    matches: [{ id: 6, date: "2025-01-22", opponent: "Metz -11", home: true, score: "18-12", result: "Victoire", status: "Joué" }]
  },

  // Féminin
  {
    id: 6, name: "ENT BOULAY/BOUZONVILLE SF 1", category: "Seniors Féminin", photo: "/equipes/sf1.jpg", coach: "Isabelle Leroy",
    division: "Départemental", level: "Départemental", gender: "FEMININ", period: "15/07/2025 - 20/06/2026", isConvention: true,
    conventionType: "participante", ranking: 1, totalTeams: 12,
    stats: { played: 16, won: 14, drawn: 1, lost: 1, goalsFor: 420, goalsAgainst: 280, points: 29 },
    players: [{ id: 12, firstName: "Sarah", lastName: "Dubois", age: 26, position: "Gardienne", hand: "Droitier", photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150", number: 1 }],
    matches: [{ id: 11, date: "2025-01-17", opponent: "Metz 1F", home: true, score: "28-24", result: "Victoire", status: "Joué" }]
  },
  {
    id: 8, name: "ENT BOULAY/BOUZONVILLE SF 2", category: "Seniors Féminin", photo: "https://images.pexels.com/photos/8007481/pexels-photo-8007481.jpeg?auto=compress&cs=tinysrgb&w=400", coach: "Sylvie Rousseau",
    division: "Départemental", level: "Départemental", gender: "FEMININ", period: "09/09/2025 - 20/06/2026", isConvention: true,
    conventionType: "participante", ranking: 5, totalTeams: 10,
    stats: { played: 14, won: 7, drawn: 2, lost: 5, goalsFor: 320, goalsAgainst: 310, points: 16 },
    players: [{ id: 10, firstName: "Julie", lastName: "Martin", age: 24, position: "Demi-centre", hand: "Droitier", photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150", number: 9 }],
    matches: [{ id: 9, date: "2025-01-19", opponent: "Forbach 2F", home: true, score: "22-20", result: "Victoire", status: "Joué" }]
  },
  {
    id: 9, name: "ENT BOULAY/BOUZONVILLE U18F", category: "U18 Féminin", photo: "/equipes/u18f.jpg", coach: "Claire Dubois",
    division: "Départemental", level: "Départemental", gender: "FEMININ", period: "15/07/2025 - 20/06/2026", isConvention: true,
    conventionType: "participante", ranking: 1, totalTeams: 8,
    stats: { played: 12, won: 10, drawn: 1, lost: 1, goalsFor: 280, goalsAgainst: 220, points: 21 },
    players: [{ id: 8, firstName: "Léa", lastName: "Bernard", age: 18, position: "Pivot", hand: "Gaucher", photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150", number: 8 }],
    matches: [{ id: 7, date: "2025-01-21", opponent: "Nancy -18F", home: true, score: "25-22", result: "Victoire", status: "Joué" }]
  },
  {
    id: 10, name: "ENT BOULAY/BOUZONVILLE U15F", category: "U15 Féminin", photo: "/equipes/u15f.jpg", coach: "Marie Leroy",
    division: "Départemental", level: "Départemental", gender: "FEMININ", period: "15/07/2025 - 20/06/2026", isConvention: true,
    conventionType: "participante", ranking: 3, totalTeams: 6,
    stats: { played: 8, won: 5, drawn: 0, lost: 3, goalsFor: 160, goalsAgainst: 140, points: 10 },
    players: [{ id: 7, firstName: "Emma", lastName: "Girard", age: 15, position: "Gardienne", hand: "Droitier", photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150", number: 12 }],
    matches: [{ id: 6, date: "2025-01-22", opponent: "Metz -15F", home: false, score: "18-20", result: "Défaite", status: "Joué" }]
  },
  {
    id: 11, name: "ENT BOULAY/BOUZONVILLE U13F", category: "U13 Féminin", photo: "https://images.pexels.com/photos/8007481/pexels-photo-8007481.jpeg?auto=compress&cs=tinysrgb&w=400", coach: "Anne Moreau",
    division: "Départemental", level: "Départemental", gender: "FEMININ", period: "15/07/2025 - 20/06/2026", isConvention: true,
    conventionType: "participante", ranking: 4, totalTeams: 6,
    stats: { played: 6, won: 3, drawn: 1, lost: 2, goalsFor: 110, goalsAgainst: 105, points: 7 },
    players: [{ id: 9, firstName: "Chloé", lastName: "Petit", age: 13, position: "Ailière gauche", hand: "Gaucher", photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150", number: 7 }],
    matches: [{ id: 8, date: "2025-01-20", opponent: "Thionville -13F", home: false, score: "16-18", result: "Défaite", status: "Joué" }]
  }
];
