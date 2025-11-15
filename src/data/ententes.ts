import { Entente } from "@/types/teams";

// Définition des URLs de logo uniques
const LOGO_BOUZONVILLE_BOULAY = "/images/ententes/ent-bouzonville-boulay.jpg";
const LOGO_GENERIC = "/images/ententes/logo_generic_club.png";

export const ententes: Entente[] = [
  // CLUB PORTEUR : 5654009 (DOMBASLE SPORTS HANDBALL)
  {
    id: "ENT_5654009_U18M_R",
    name: "ENT BASSIN MEURTHE U18M",
    slug: "ent-bassin-meurthe-u18m-regional",
    category: "U18 Masculin",
    clubIds: [5654009],
    clubPiloteId: 5654009,
    referenceCity: "DOMBASLE-SUR-MEURTHE",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657002 (FORBACH)
  {
    id: "ENT_5657002_U18M_R",
    name: "ENT FORBACH/SARREGUEMINES U18M",
    slug: "ent-forbach-sarreguemines-u18m-regional",
    category: "U18 Masculin",
    clubIds: [5657002, 5657110],
    clubPiloteId: 5657002,
    referenceCity: "FORBACH",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657008 (HAGONDANGE)
  {
    id: "ENT_5657008_U13M_D",
    name: "ENT HAGONDANGE/AMNEVILLE -13M",
    slug: "ent-hagondange-amneville-u13m-departemental",
    category: "U13 Masculin",
    clubIds: [5657008, 5657029],
    clubPiloteId: 5657008,
    referenceCity: "HAGONDANGE",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657013 (BOUZONVILLE HANDBALL)
  // Utilise LOGO_BOUZONVILLE_BOULAY
  {
    id: "ENT_5657013_SM_R",
    name: "ENT BOUZONVILLE/BOULAY",
    slug: "ent-bouzonville-boulay-senior-regional",
    category: "Senior Masculin",
    clubIds: [5657013, 5657025],
    clubPiloteId: 5657013,
    referenceCity: "BOUZONVILLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657013_U13M_R",
    name: "ENT BOUZONVILLE/BOULAY U13M",
    slug: "ent-bouzonville-boulay-u13m-regional",
    category: "U13 Masculin",
    clubIds: [5657013, 5657025],
    clubPiloteId: 5657013,
    referenceCity: "BOUZONVILLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657013_U13MIX_D",
    name: "ENT BOUZONVILLE / BOULAY -13 M MIXTE",
    slug: "ent-bouzonville-boulay-u13m-mixte-departemental",
    category: "U13 Mixte",
    clubIds: [5657013, 5657025],
    clubPiloteId: 5657013,
    referenceCity: "BOUZONVILLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657013_U15M_R",
    name: "ENT BOUZONVILLE/BOULAY U15M",
    slug: "ent-bouzonville-boulay-u15m-regional",
    category: "U15 Masculin",
    clubIds: [5657013, 5657025],
    clubPiloteId: 5657013,
    referenceCity: "BOUZONVILLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657013_U18M_R",
    name: "ENT BOUZONVILLE/BOULAY U18M",
    slug: "ent-bouzonville-boulay-u18m-regional",
    category: "U18 Masculin",
    clubIds: [5657013, 5657025],
    clubPiloteId: 5657013,
    referenceCity: "BOUZONVILLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },

  // CLUB PORTEUR : 5657025 (CESC HANDBALL BOULAY)
  // Utilise LOGO_BOUZONVILLE_BOULAY
  {
    id: "ENT_5657025_JPM_D",
    name: "ENTENTE BOULAY/BOUZONVILLE +16M",
    slug: "ent-boulay-bouzonville-plus16m-departemental",
    category: "Junior/Senior Masculin (+16 ans)",
    clubIds: [5657025, 5657013],
    clubPiloteId: 5657025,
    referenceCity: "BOULAY MOSELLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657025_SF1_D",
    name: "ENTENTE BOULAY/BOUZONVILLE 1 SF",
    slug: "ent-boulay-bouzonville-sf1-departemental",
    category: "Senior Féminin 1",
    clubIds: [5657025, 5657013],
    clubPiloteId: 5657025,
    referenceCity: "BOULAY MOSELLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657025_SF2_D",
    name: "ENT BOULAY/BOUZONVILLE 2 SF",
    slug: "ent-boulay-bouzonville-sf2-departemental",
    category: "Senior Féminin 2",
    clubIds: [5657025, 5657013],
    clubPiloteId: 5657025,
    referenceCity: "BOULAY MOSELLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657025_U13F_D",
    name: "ENTENTE BOULAY/BOUZONVILLE -13F",
    slug: "ent-boulay-bouzonville-u13f-departemental",
    category: "U13 Féminin",
    clubIds: [5657025, 5657013],
    clubPiloteId: 5657025,
    referenceCity: "BOULAY MOSELLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657025_U15F_D",
    name: "ENTENTE BOULAY/BOUZONVILLE -15F",
    slug: "ent-boulay-bouzonville-u15f-departemental",
    category: "U15 Féminin",
    clubIds: [5657025, 5657013],
    clubPiloteId: 5657025,
    referenceCity: "BOULAY MOSELLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657025_U18F_D",
    name: "ENTENTE BOULAY/BOUZONVILLE -18F",
    slug: "ent-boulay-bouzonville-u18f-departemental",
    category: "U18 Féminin",
    clubIds: [5657025, 5657013],
    clubPiloteId: 5657025,
    referenceCity: "BOULAY MOSELLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },

  // CLUB PORTEUR : 5657026 (METZ MAGNY)
  {
    id: "ENT_5657026_JPM_D",
    name: "ENTENTE METZ MAGNY/3MT +16M",
    slug: "ent-metz-magny-3mt-plus16m-departemental",
    category: "Junior/Senior Masculin (+16 ans)",
    clubIds: [5657026, 5657119],
    clubPiloteId: 5657026,
    referenceCity: "METZ",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657027 (SARREBOURG - ASSUMÉ)
  {
    id: "ENT_5657027_U18F_D",
    name: "SARRALBE / DURSTEL / SARREBOURG U18F",
    slug: "ent-sarralbe-durstel-sarrebourg-u18f",
    category: "U18 Féminin",
    clubIds: [5657027, 5667021, 5657023],
    clubPiloteId: 5657027,
    referenceCity: "SARRALBE",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657029 (AMNEVILLE)
  {
    id: "ENT_5657029_U18F_D",
    name: "ENTENTE AMNEVILLE - TALANGE -18F",
    slug: "ent-amneville-talange-u18f-departemental",
    category: "U18 Féminin",
    clubIds: [5657029, 5657118],
    clubPiloteId: 5657029,
    referenceCity: "AMNEVILLE",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657033 (ROMBAS)
  {
    id: "ENT_5657033_U18M_R",
    name: "ENT ROMBAS/THIONVILLE - U18M",
    slug: "ent-rombas-thionville-u18m-regional",
    category: "U18 Masculin",
    clubIds: [5657033, 5657037],
    clubPiloteId: 5657033,
    referenceCity: "ROMBAS",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657041 (PORCELETTE)
  {
    id: "ENT_5657041_U15F_D",
    name: "ENT PORCELETTE FALCK -15 F",
    slug: "ent-porcelette-falck-u15f-departemental",
    category: "U15 Féminin",
    clubIds: [5657041, 5657043],
    clubPiloteId: 5657041,
    referenceCity: "PORCELETTE",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657043 (FALCK)
  {
    id: "ENT_5657043_U18F_D",
    name: "ENTENTE FALCK - PORCELETTE 18F",
    slug: "ent-falck-porcelette-u18f-departemental",
    category: "U18 Féminin",
    clubIds: [5657043, 5657041],
    clubPiloteId: 5657043,
    referenceCity: "FALCK",
    logoUrl: LOGO_GENERIC,
  },
];
