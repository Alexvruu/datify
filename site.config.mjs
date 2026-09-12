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
// Adresse de contact affichée sur le site. Provisoire : l'adresse personnelle est
// utilisée tant que le domaine datify.fr n'est pas acheté. À remplacer par
// alexandre@datify.fr dès que le domaine et sa boîte mail existent.
export const CONTACT_EMAIL = 'gire.alexandre@gmail.com'

export const LINKEDIN_URL = 'https://www.linkedin.com/in/alexandre-gire-1203851b9/'

/** Identité légale, à compléter avant mise en ligne des mentions légales. */
export const LEGAL = {
  nom: 'Alexandre Gire',
  statut: 'Entrepreneur individuel (micro-entreprise)',
  // Adresse : obligatoire dans les mentions légales (LCEN). Alexandre a opté pour la
  // non-diffusion de son adresse auprès de l'INSEE : publier son domicile ici annulerait
  // ce choix. Décision à prendre : domicile, ou société de domiciliation.
  adresse: 'A-REMPLACER : domicile ou domiciliation, voir commentaire',
  siret: '993 427 624 00016',
  siren: '993 427 624',
  ape: '7311Z, activités des agences de publicité',
  immatriculation: 'Entreprise individuelle immatriculée le 3 novembre 2025',
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
