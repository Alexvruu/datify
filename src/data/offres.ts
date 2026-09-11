// ─────────────────────────────────────────────────────────────────────────────
// Échelle d'offres Datify. Source unique pour la page /offres,
// la FAQ de l'accueil et la landing /audit.
// Décision du 11/09/2026 : seul l'audit est chiffré publiquement, le reste est sur devis.
// Micro-entreprise en franchise de TVA : prix nets, TVA non applicable (art. 293 B du CGI).
// ─────────────────────────────────────────────────────────────────────────────

export interface Offre {
  cle: string
  nom: string
  prix: string
  note?: string
  role: string
  pourQui: string
  inclus: string[]
  delai: string
  miseEnAvant?: boolean
}

export const OFFRES: Offre[] = [
  {
    cle: 'cadrage',
    nom: 'Appel de cadrage',
    prix: 'Gratuit',
    role: 'Point de départ',
    pourQui: 'Vous voulez savoir si votre tracking perd des ventes, et si ça vaut une intervention.',
    inclus: [
      '30 minutes en visio, votre site ouvert en direct',
      'Ce que je vois, sans jargon',
      'L’offre adaptée, ou aucune si rien ne le justifie',
    ],
    delai: 'Sous 48 h',
  },
  {
    cle: 'audit',
    nom: 'Audit tracking',
    prix: '290 €',
    note: 'déduit du setup',
    role: 'Diagnostic chiffré',
    pourQui: 'Vous voulez un état des lieux écrit avant de décider quoi corriger.',
    inclus: [
      'Réconciliation ventes réelles, GA4 et plateformes pub',
      'Qualité des correspondances Meta, doublons, Consent Mode',
      'Rapport lisible et correctifs classés par impact',
    ],
    delai: 'Sous 5 jours ouvrés',
  },
  {
    cle: 'express',
    nom: 'Intervention express',
    prix: 'Prix fixe',
    note: 'annoncé avant de commencer',
    role: 'Une tâche, vite et bien',
    pourQui: 'Vous savez ce qu’il vous faut : une tâche précise, livrée rapidement.',
    inclus: [
      'Export GA4 vers BigQuery, configuré et documenté',
      'Connecteur Meta ou Google Ads vers BigQuery',
      'Alerte automatique quand le tracking décroche',
      'Correctif ciblé sur un conteneur GTM',
    ],
    delai: 'Sous 72 h (jours ouvrés)',
  },
  {
    cle: 'setup',
    nom: 'Setup server-side',
    prix: 'Sur devis',
    note: 'chiffré après l’audit',
    role: 'Cœur de l’offre',
    pourQui: 'Vous dépensez en Meta et Google Ads et vous perdez du signal.',
    inclus: [
      'GTM server-side sur Stape ou votre Google Cloud',
      'API Conversions Meta avec déduplication',
      'GA4, Enhanced Conversions Google Ads, Consent Mode v2',
      'Mesure avant/après et documentation complète',
    ],
    delai: '2 à 3 semaines',
    miseEnAvant: true,
  },
  {
    cle: 'dashboard',
    nom: 'Dashboard marge et ROAS réel',
    prix: 'Sur devis',
    role: 'Piloter sur les vrais chiffres',
    pourQui: 'Votre reporting se fabrique à la main et personne ne le croit vraiment.',
    inclus: [
      'Pub, analytics et ventes centralisés dans BigQuery',
      'Modèle orienté marge, pas seulement revenu brut',
      'Tableaux de bord Looker Studio pensés pour la décision',
    ],
    delai: '2 à 4 semaines',
  },
  {
    cle: 'suivi',
    nom: 'Suivi mensuel',
    prix: 'Sur devis',
    note: 'mensuel',
    role: 'Que ça reste juste',
    pourQui: 'Votre tracking est en place et vous voulez qu’il le reste.',
    inclus: [
      'Monitoring de la collecte et alertes',
      'Correctifs après mises à jour du site ou des plateformes',
      'Point mensuel sur les écarts',
    ],
    delai: 'Mensuel',
  },
]
