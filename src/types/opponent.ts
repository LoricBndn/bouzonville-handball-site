import { ID } from '@/types/base-types';

/**
 * Interface Club (Adversaire Simple)
 * Représente un club sportif standard agissant comme un adversaire simple.
 */
export interface Club {
  id: ID; 
  name: string;
  slug: string;
  city: string;
  depNum: ID;
  depName: string;
  logoUrl: string;
}

/**
 * Interface Entente (Adversaire Composite)
 * Représente une structure regroupant plusieurs clubs pour former une équipe dans une catégorie donnée (convention sportive).
 */
export interface Entente {
  id: ID; 
  name: string;
  slug: string;
  category: string;
  clubIds: ID[]; 
  pilotingClubId: ID;
  referenceCity: string;
  logoUrl: string;
}