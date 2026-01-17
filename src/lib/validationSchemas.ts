import { z } from "zod";

/**
 * Schema de validation pour le formulaire de contact
 */
export const contactFormSchema = z.object({
  nom: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères")
    .trim(),
  
  prenom: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom ne peut pas dépasser 50 caractères")
    .trim(),
  
  email: z
    .string()
    .email("Adresse email invalide")
    .max(100, "L'email ne peut pas dépasser 100 caractères")
    .toLowerCase()
    .trim(),
  
  telephone: z
    .string()
    .regex(/^(?:\+33|0)[1-9](?:[0-9]{8})$/, "Numéro de téléphone invalide")
    .optional()
    .or(z.literal(""))
    .transform(val => val === "" ? undefined : val),
  
  sujet: z
    .string()
    .min(5, "Le sujet doit contenir au moins 5 caractères")
    .max(100, "Le sujet ne peut pas dépasser 100 caractères")
    .trim(),
  
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message ne peut pas dépasser 2000 caractères")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
