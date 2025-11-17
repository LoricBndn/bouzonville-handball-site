import { ID, PartnerType } from "@/types/base-types";
import { Partner } from "@/types/club-types";

export const partnersData: Partner[] = [
  {
    id: 1 as ID,
    name: "Communauté de Communes Bouzonvillois Trois Frontières",
    logoUrl: "/images/partenaires/institutionnels/ccb3f.png",
    url: "https://www.ccb3f.fr/",
    type: "Institutionnel" as PartnerType,
  },
  {
    id: 2 as ID,
    name: "Ville de Bouzonville",
    logoUrl: "/images/partenaires/institutionnels/bouzonville.png",
    url: "https://www.bouzonville.fr/",
    type: "Institutionnel" as PartnerType,
  },
  {
    id: 3 as ID,
    name: "Département de la Moselle",
    logoUrl: "/images/partenaires/institutionnels/departement_moselle.png",
    url: "https://www.moselle.fr/",
    type: "Institutionnel" as PartnerType,
  },
  {
    id: 4 as ID,
    name: "Région Grand Est",
    logoUrl: "/images/partenaires/institutionnels/region_grand_est.png",
    url: "https://www.grandest.fr/",
    type: "Institutionnel" as PartnerType,
  },
  {
    id: 5 as ID,
    name: "Fédération Française de Handball",
    logoUrl: "/images/partenaires/federaux/ffhb.png",
    url: "https://www.ffhandball.fr/",
    type: "Fédéral" as PartnerType,
  },
  {
    id: 6 as ID,
    name: "Ligue Grand Est",
    logoUrl: "/images/partenaires/federaux/lgehb.png",
    url: "https://www.grandesthandball.fr/",
    type: "Fédéral" as PartnerType,
  },
  {
    id: 7 as ID,
    name: "Comité de Moselle",
    logoUrl: "/images/partenaires/federaux/comite_moselle.png",
    url: "https://www.comitemosellehandball.fr/",
    type: "Fédéral" as PartnerType,
  },
  {
    id: 8 as ID,
    name: "Crédit Mutuel",
    logoUrl: "/images/partenaires/sponsors/credit_mutuel.png",
    url: "https://www.creditmutuel.fr/",
    type: "Sponsor" as PartnerType,
  },
];
