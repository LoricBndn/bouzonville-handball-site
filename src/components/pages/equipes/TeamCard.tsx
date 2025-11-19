import React from "react";
import Image from "next/image";
import { Award, User, Trophy, ArrowRight } from "lucide-react";
import { Team } from "@/types/team"; 
import { ConventionType, LevelType, GenderType } from "@/types/base-types";
import { TeamWithDetails } from "@/services/teamService";

interface TeamCardProps {
    team: Team & Partial<TeamWithDetails>; 
    onSelect?: () => void;
}

const getLevelColor = (level: LevelType) => {
    switch (level) {
        case "National":
            return "bg-danger";
        case "Régional":
            return "bg-primary";
        default:
            return "bg-secondary";
    }
};

const getGenderColor = (gender: GenderType) => {
    return gender === "Masculin"
        ? "bg-blue-100 text-primary border-blue-300"
        : "bg-orange-100 text-secondary border-orange-300";
};

const getConventionColor = (type: ConventionType | undefined) => {
    switch (type) {
        case "Pilotée":
            return "bg-primary";
        case "Participante":
            return "bg-secondary";
        default:
            return "bg-accent";
    }
};

export default function TeamCard({ team, onSelect }: Readonly<TeamCardProps>) {
    const principalCoach = team.staffCoaches?.find(
        (c) => c.role === "Principal"
    )?.clubPersons;

    const coachName = principalCoach 
        ? `${principalCoach.firstName} ${principalCoach.lastName}` 
        : 'À définir';
        
    const conventionTypeDisplay = team.conventionType;


    return (
        <div 
            className="group relative bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            onClick={onSelect}
        >
            <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-accent to-blue-300">
                <Image
                    src={team.photoUrl}
                    alt={team.name}
                    fill // Fait en sorte que l'image remplisse son conteneur parent
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent" />

                {/* Tag Niveau */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span
                        className={`${getLevelColor(
                            team.level
                        )} px-4 py-1.5 text-xs font-bold text-light rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-sm`}
                    >
                        <Trophy size={14} />
                        {team.level}
                    </span>
                </div>

                {/* Nom et Tags Bas */}
                <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl font-bold text-light mb-1 drop-shadow-lg">
                        {team.name}
                    </h2>
                    <div className="flex items-center gap-2">
                        <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full border ${getGenderColor(
                                team.gender
                            )}`}
                        >
                            {team.gender === "Masculin" ? "Masculin" : team.gender}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-light bg-dark/30 backdrop-blur-sm rounded-full">
                            {team.category}
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-4">
                {/* Information Entraîneur */}
                <div className="flex items-start gap-3 p-3 bg-background rounded-xl border border-accent/20">
                    <div className="mt-0.5 p-2 bg-blue-100 rounded-lg">
                        <User size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs font-medium text-foreground/60 uppercase tracking-wide mb-0.5">
                            Entraîneur Principal
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                            {coachName}
                        </p>
                    </div>
                </div>

                {/* Information Convention */}
                {team.isConvention && team.nameConvention ? (
                    <div className="relative p-4 bg-background border border-accent/30 rounded-xl">
                        <div className="flex items-start gap-2 mb-2">
                            <Award size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm font-semibold text-foreground leading-tight">
                                {team.nameConvention}
                            </p>
                        </div>
                        <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-light rounded-full ${getConventionColor(
                                conventionTypeDisplay
                            )}`}
                        >
                            {conventionTypeDisplay ? `Convention ${conventionTypeDisplay.toLowerCase()}` : 'Club'}
                        </span>
                    </div>
                ) : (
                    // Afficher un placeholder pour maintenir la mise en page
                    <div className="p-4 rounded-xl min-h-[80px] bg-background/50 border border-gray-100" />
                )}

                {/* Bouton de Détails */}
                <button
                    onClick={onSelect}
                    className="w-full mt-2 px-6 py-3 bg-primary hover:bg-secondary text-light font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-xl"
                >
                    <span>Voir les détails</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
        </div>
    );
}