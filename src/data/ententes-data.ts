// Fichier: ententes-data.ts

import { CategoryType, GenderType, ID } from "@/types/base-types";
import { Entente } from "@/types/opponent"; // Assurez-vous que l'import est correct

// Définition des URLs de logo uniques
const LOGO_BOUZONVILLE_BOULAY = "/images/ententes/ent-bouzonville-boulay.jpg";
const LOGO_GENERIC = "/images/ententes/logo_generic_club.png";

export const ententesData: Entente[] = [
  // CLUB PORTEUR : 5654009 (DOMBASLE SPORTS HANDBALL)
  {
    id: "ENT_5654009_U18M_R" as ID,
    name: "ENT BASSIN MEURTHE U18M",
    slug: "ent-bassin-meurthe-u18m-regional",
    category: "U18" as CategoryType,
    gender: "Masculin" as GenderType,
    clubIds: [5654009 as ID],
    pilotingClubId: 5654009 as ID,
    referenceCity: "DOMBASLE-SUR-MEURTHE",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657002 (FORBACH)
  {
    id: "ENT_5657002_U18M_R" as ID,
    name: "ENT FORBACH/SARREGUEMINES U18M",
    slug: "ent-forbach-sarreguemines-u18m-regional",
    category: "U18" as CategoryType,
    gender: "Masculin" as GenderType,
    clubIds: [5657002 as ID, 5657110 as ID],
    pilotingClubId: 5657002 as ID,
    referenceCity: "FORBACH",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657008 (HAGONDANGE)
  {
    id: "ENT_5657008_U13M_D" as ID,
    name: "ENT HAGONDANGE/AMNEVILLE -13M",
    slug: "ent-hagondange-amneville-u13m-departemental",
    category: "U13" as CategoryType,
    gender: "Masculin" as GenderType,
    clubIds: [5657008 as ID, 5657029 as ID],
    pilotingClubId: 5657008 as ID,
    referenceCity: "HAGONDANGE",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657013 (BOUZONVILLE HANDBALL)
  // Utilise LOGO_BOUZONVILLE_BOULAY
  {
    id: "ENT_5657013_SM_R" as ID,
    name: "ENT BOUZONVILLE/BOULAY",
    slug: "ent-bouzonville-boulay-sm-regional",
    category: "Senior" as CategoryType,
    gender: "Masculin" as GenderType,
    clubIds: [5657013 as ID, 5657025 as ID],
    pilotingClubId: 5657013 as ID,
    referenceCity: "BOUZONVILLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657013_U13M_R" as ID,
    name: "ENT BOUZONVILLE/BOULAY U13M",
    slug: "ent-bouzonville-boulay-u13m-regional",
    category: "U13" as CategoryType,
    gender: "Masculin" as GenderType,
    clubIds: [5657013 as ID, 5657025 as ID],
    pilotingClubId: 5657013 as ID,
    referenceCity: "BOUZONVILLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657013_U13MIX_D" as ID,
    name: "ENT BOUZONVILLE / BOULAY -13 M",
    slug: "ent-bouzonville-boulay-u13m-mixte-departemental",
    category: "U13" as CategoryType,
    gender: "Mixte" as GenderType,
    clubIds: [5657013 as ID, 5657025 as ID],
    pilotingClubId: 5657013 as ID,
    referenceCity: "BOUZONVILLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657013_U15M_R" as ID,
    name: "ENT BOUZONVILLE/BOULAY U15M",
    slug: "ent-bouzonville-boulay-u15m-regional",
    category: "U15" as CategoryType,
    gender: "Masculin" as GenderType,
    clubIds: [5657013 as ID, 5657025 as ID],
    pilotingClubId: 5657013 as ID,
    referenceCity: "BOUZONVILLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657013_U18M_R" as ID,
    name: "ENT BOUZONVILLE/BOULAY U18M",
    slug: "ent-bouzonville-boulay-u18m-regional",
    category: "U18" as CategoryType,
    gender: "Masculin" as GenderType,
    clubIds: [5657013 as ID, 5657025 as ID],
    pilotingClubId: 5657013 as ID,
    referenceCity: "BOUZONVILLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },

  // CLUB PORTEUR : 5657025 (CESC HANDBALL BOULAY)
  // Utilise LOGO_BOUZONVILLE_BOULAY
  {
    id: "ENT_5657025_JPM_D" as ID,
    name: "ENTENTE BOULAY/BOUZONVILLE +16M",
    slug: "ent-boulay-bouzonville-plus16m-departemental",
    category: "Senior" as CategoryType,
    gender: "Masculin" as GenderType,
    clubIds: [5657025 as ID, 5657013 as ID],
    pilotingClubId: 5657025 as ID,
    referenceCity: "BOULAY MOSELLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657025_SF1_D" as ID,
    name: "ENTENTE BOULAY/BOUZONVILLE 1 SF",
    slug: "ent-boulay-bouzonville-sf1-departemental",
    category: "Senior" as CategoryType,
    gender: "Feminin" as GenderType,
    clubIds: [5657025 as ID, 5657013 as ID],
    pilotingClubId: 5657025 as ID,
    referenceCity: "BOULAY MOSELLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657025_SF2_D" as ID,
    name: "ENT BOULAY/BOUZONVILLE 2 SF",
    slug: "ent-boulay-bouzonville-sf2-departemental",
    category: "Senior" as CategoryType,
    gender: "Feminin" as GenderType,
    clubIds: [5657025 as ID, 5657013 as ID],
    pilotingClubId: 5657025 as ID,
    referenceCity: "BOULAY MOSELLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657025_U13F_D" as ID,
    name: "ENTENTE BOULAY/BOUZONVILLE -13F",
    slug: "ent-boulay-bouzonville-u13f-departemental",
    category: "U13" as CategoryType,
    gender: "Feminin" as GenderType,
    clubIds: [5657025 as ID, 5657013 as ID],
    pilotingClubId: 5657025 as ID,
    referenceCity: "BOULAY MOSELLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657025_U15F_D" as ID,
    name: "ENTENTE BOULAY/BOUZONVILLE -15F",
    slug: "ent-boulay-bouzonville-u15f-departemental",
    category: "U15" as CategoryType,
    gender: "Feminin" as GenderType,
    clubIds: [5657025 as ID, 5657013 as ID],
    pilotingClubId: 5657025 as ID,
    referenceCity: "BOULAY MOSELLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },
  {
    id: "ENT_5657025_U18F_D" as ID,
    name: "ENTENTE BOULAY/BOUZONVILLE -18F",
    slug: "ent-boulay-bouzonville-u18f-departemental",
    category: "U18" as CategoryType,
    gender: "Feminin" as GenderType,
    clubIds: [5657025 as ID, 5657013 as ID],
    pilotingClubId: 5657025 as ID,
    referenceCity: "BOULAY MOSELLE",
    logoUrl: LOGO_BOUZONVILLE_BOULAY,
  },

  // CLUB PORTEUR : 5657026 (METZ MAGNY)
  {
    id: "ENT_5657026_JPM_D" as ID,
    name: "ENTENTE METZ MAGNY/3MT +16M",
    slug: "ent-metz-magny-3mt-plus16m-departemental",
    category: "Senior" as CategoryType,
    gender: "Masculin" as GenderType,
    clubIds: [5657026 as ID, 5657119 as ID],
    pilotingClubId: 5657026 as ID,
    referenceCity: "METZ",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657027 (SARRALBE - ASSUMÉ)
  {
    id: "ENT_5657027_U18F_D" as ID,
    name: "SARRALBE / DURSTEL / SARREBOURG U18F",
    slug: "ent-sarralbe-durstel-sarrebourg-u18f",
    category: "U18" as CategoryType,
    gender: "Feminin" as GenderType,
    clubIds: [5657027 as ID, 5667021 as ID, 5657023 as ID],
    pilotingClubId: 5657027 as ID,
    referenceCity: "SARRALBE",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657029 (AMNEVILLE)
  {
    id: "ENT_5657029_U18F_D" as ID,
    name: "ENTENTE AMNEVILLE - TALANGE -18F",
    slug: "ent-amneville-talange-u18f-departemental",
    category: "U18" as CategoryType,
    gender: "Feminin" as GenderType,
    clubIds: [5657029 as ID, 5657118 as ID],
    pilotingClubId: 5657029 as ID,
    referenceCity: "AMNEVILLE",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657033 (ROMBAS)
  {
    id: "ENT_5657033_U18M_R" as ID,
    name: "ENT ROMBAS/THIONVILLE - U18M",
    slug: "ent-rombas-thionville-u18m-regional",
    category: "U18" as CategoryType,
    gender: "Masculin" as GenderType,
    clubIds: [5657033 as ID, 5657037 as ID],
    pilotingClubId: 5657033 as ID,
    referenceCity: "ROMBAS",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657041 (PORCELETTE)
  {
    id: "ENT_5657041_U15F_D" as ID,
    name: "ENT PORCELETTE FALCK -15 F",
    slug: "ent-porcelette-falck-u15f-departemental",
    category: "U15" as CategoryType,
    gender: "Feminin" as GenderType,
    clubIds: [5657041 as ID, 5657043 as ID],
    pilotingClubId: 5657041 as ID,
    referenceCity: "PORCELETTE",
    logoUrl: LOGO_GENERIC,
  },

  // CLUB PORTEUR : 5657043 (FALCK)
  {
    id: "ENT_5657043_U18F_D" as ID,
    name: "ENTENTE FALCK - PORCELETTE 18F",
    slug: "ent-falck-porcelette-u18f-departemental",
    category: "U18" as CategoryType,
    gender: "Feminin" as GenderType,
    clubIds: [5657043 as ID, 5657041 as ID],
    pilotingClubId: 5657043 as ID,
    referenceCity: "FALCK",
    logoUrl: LOGO_GENERIC,
  },
];