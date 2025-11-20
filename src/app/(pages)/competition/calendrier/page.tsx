import React from 'react';
import { getAllMatchesAnalyzedWithTeams } from '@/services/competitionService';
import CalendarList from '@/components/pages/competition/calendrier/CalendarList';
import { Metadata } from 'next';
import { getAllTeams } from '@/services/teamService';

export const metadata: Metadata = {
  title: 'Calendrier des Matchs | Bouzonville Handball',
  description: 'Consultez le calendrier complet des matchs du Bouzonville Handball pour toutes les catégories.',
};

export default async function CalendrierPage() {
  const matches = await getAllMatchesAnalyzedWithTeams();
  const teams = await getAllTeams();

  return (
    <main>
      <CalendarList initialMatches={matches || []} teamsList={teams || []} />
    </main>
  );
}