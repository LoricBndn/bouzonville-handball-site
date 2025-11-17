// src/data/staff-members-data.ts

import { ID, MemberRole } from "@/types/base-types";
import { StaffMember } from "@/types/personnel";

export const StaffMembersData: StaffMember[] = [
  {
    clubPersonId: 1 as ID,
    role: "Président" as MemberRole,
    isContactPublic: true,
  },
  {
    clubPersonId: 2 as ID,
    role: "Vice-Président" as MemberRole,
    isContactPublic: true,
  },
  {
    clubPersonId: 2 as ID,
    role: "Secrétaire" as MemberRole,
    isContactPublic: true,
  },
  {
    clubPersonId: 3 as ID,
    role: "Vice-Président" as MemberRole,
    isContactPublic: true,
  },
  {
    clubPersonId: 4 as ID,
    role: "Trésorier" as MemberRole,
    isContactPublic: true,
  },
  {
    clubPersonId: 5 as ID,
    role: "Assesseur" as MemberRole,
    isContactPublic: true,
    publicTitle: "Responsable Technique",
  },
  {
    clubPersonId: 6 as ID,
    role: "Assesseur" as MemberRole,
    isContactPublic: false,
  },
  {
    clubPersonId: 7 as ID,
    role: "Assesseur" as MemberRole,
    isContactPublic: false,
  },
  {
    clubPersonId: 8 as ID,
    role: "Assesseur" as MemberRole,
    isContactPublic: false,
  },
  {
    clubPersonId: 9 as ID,
    role: "Assesseur" as MemberRole,
    isContactPublic: false,
  },
  {
    clubPersonId: 10 as ID,
    role: "Assesseur" as MemberRole,
    isContactPublic: false,
  },
];
