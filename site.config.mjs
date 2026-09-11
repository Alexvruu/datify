// Configuration centrale du site.
// Tout ce qui dépend du domaine ou d'un compte externe est ici, et nulle part ailleurs.
// Quand datify.fr est acheté et branché sur Vercel : changer SITE_URL, c'est tout.

/** Domaine canonique. Sert au sitemap, aux balises canoniques, à l'OG et au JSON-LD. */
export const SITE_URL = 'https://datify-brown.vercel.app'
// export const SITE_URL = 'https://datify.fr'   // ← à activer une fois le domaine branché

/** Lien de réservation Calendly (diagnostic gratuit de 30 min). */
export const CALENDLY_URL = 'https://calendly.com/gire-alexandre/30min'

/** Endpoint du formulaire de contact (Formspree). À remplacer par votre vrai ID. */
export const FORM_ENDPOINT = 'https://formspree.io/f/A-REMPLACER'

/** Adresse de contact affichée. Ne fonctionnera qu'une fois datify.fr acheté. */
export const CONTACT_EMAIL = 'alexandre@datify.fr'

export const LINKEDIN_URL = 'https://www.linkedin.com/in/alexandre-gire-1203851b9/'

/** Identité légale — à compléter avant mise en ligne des mentions légales. */
export const LEGAL = {
  nom: 'Alexandre Gire',
  statut: 'Entrepreneur individuel (micro-entreprise)',
  adresse: 'A-REMPLACER',
  siret: 'A-REMPLACER',
  tva: 'TVA non applicable, article 293 B du CGI',
  directeurPublication: 'Alexandre Gire',
  hebergeur: {
    nom: 'Vercel Inc.',
    adresse: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
    site: 'https://vercel.com',
  },
}

/** Conteneur GTM. */
export const GTM_ID = 'GTM-N97WP9M3'
