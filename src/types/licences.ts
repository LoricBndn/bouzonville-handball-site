export interface Tarif {
  categorie: string;
  tarif: string;
  inclus: string[];
  details: string;
}

export interface TarifProps {
  tarif: Tarif;
}