// ─────────────────────────────────────────────────────────────────────────────
// Landing de prospection /audit et ses variantes A/B.
// Règle de test (STRATEGIE, section 9) : une seule variable change entre A et B.
// Ici, c'est le titre (angle « signal perdu » contre angle « chiffre d'affaires »).
// Chaque variante a sa propre URL, utilisée dans la variante d'email correspondante.
// ─────────────────────────────────────────────────────────────────────────────

export type VarianteId = 'a' | 'b'

export const AUDIT_VARIANTES: Record<VarianteId, { metaTitre: string; titre: string; sousTitre: string }> = {
  a: {
    metaTitre: 'Votre boutique perd-elle des conversions ?',
    titre: 'Votre boutique perd-elle des conversions Meta et Google Ads ?',
    sousTitre:
      'Bloqueurs, Safari, pixel non dédupliqué : une partie de vos ventes n’arrive jamais jusqu’aux plateformes, et vos campagnes optimisent sur des données incomplètes. En 30 minutes, je vous dis si c’est votre cas.',
  },
  b: {
    metaTitre: 'Vos campagnes voient-elles vos vraies ventes ?',
    titre: 'Vos campagnes déclarent-elles les mêmes ventes que votre back-office ?',
    sousTitre:
      'Quand Meta, Google Ads, GA4 et votre boutique donnent quatre chiffres différents, impossible de savoir quoi couper. En 30 minutes, je vous dis d’où vient l’écart et s’il vaut la peine d’être corrigé.',
  },
}

export const AUDIT_COMMUN = {
  surtitre: 'Diagnostic tracking gratuit',
  metaDescription:
    'Appel de 30 minutes, gratuit : je regarde votre tracking Meta, Google Ads et GA4 en direct et je vous dis si vous perdez des conversions.',
  cta: 'Diagnostic gratuit (30 min)',
  ctaNote: 'Gratuit, sans engagement. Votre site ouvert en direct.',
  blocs: [
    {
      titre: 'Ce que je vérifie',
      items: [
        'Pixel Meta et API Conversions : présence, déduplication',
        'GA4 et Google Ads : achats remontés, Enhanced Conversions',
        'Consent Mode v2 : les balises respectent-elles le choix du visiteur',
      ],
    },
    {
      titre: 'Ce que vous obtenez',
      items: [
        'Un avis clair : problème ou pas',
        'D’où vient l’écart, s’il y en a un',
        'L’offre adaptée, ou aucune si rien ne le justifie',
      ],
    },
    {
      titre: 'Et ensuite, si besoin',
      items: [
        'Audit écrit : 290 €, déduit du setup',
        'Setup server-side : sur devis, après l’audit',
        'Détail des offres sur la page Offres',
      ],
    },
  ],
  engagementTitre: 'Ce que je ne vous promettrai pas',
  engagement:
    'Le server-side ne contourne jamais un refus de cookies. Il récupère les pertes techniques : bloqueurs, limitations des navigateurs, pages quittées trop vite. Et si votre tracking est sain, je vous le dis.',
  mentionRgpd:
    'Vous êtes arrivé ici via un email de prospection : votre adresse professionnelle a été collectée à partir de sources publiques en lien avec votre activité. Pour ne plus recevoir de messages, répondez simplement « stop » à l’email reçu.',
}
