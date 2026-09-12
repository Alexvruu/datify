// ─────────────────────────────────────────────────────────────────────────────
// Fiches outils publiées sous /ressources/outils/<slug>.
// Gabarit unique : src/components/OutilPage.astro
//
// RÈGLES
// - Une fiche = un outil de la stack, rangé à l'étape où il intervient.
// - « Ce que j'en fais » décrit un usage réel. Aucune expérience inventée.
// - « Là où ça coince » est obligatoire : c'est la partie qui a de la valeur.
// - Aucun tarif écrit sans source vérifiée. Dans le doute, on n'écrit pas de prix.
// - Le champ nom doit correspondre exactement au name de src/data/stack.ts,
//   sinon la puce de la stack ne devient pas cliquable.
// - Jamais de tiret cadratin dans les textes.
// ─────────────────────────────────────────────────────────────────────────────

export interface FicheOutil {
  slug: string
  nom: string
  etape: '01' | '02' | '03' | '04' | '05' | '06'
  editeur?: string
  categorie: string
  metaTitre: string
  metaDescription: string
  resume: string
  aQuoiCaSert: string[]
  ceQueJenFais: string
  laOuCaCoince: string[]
  combineAvec?: string[]
  alternatives?: string[]
  guide?: string
  offre?: string
  verifieLe: string
}

import { ETAPE_01 } from './outils/etape-01'
import { ETAPE_02 } from './outils/etape-02'
import { ETAPE_03 } from './outils/etape-03'
import { ETAPE_04 } from './outils/etape-04'
import { ETAPE_05 } from './outils/etape-05'
import { ETAPE_06 } from './outils/etape-06'

export const FICHES_OUTILS: FicheOutil[] = [
  ...ETAPE_01, ...ETAPE_02, ...ETAPE_03, ...ETAPE_04, ...ETAPE_05, ...ETAPE_06,
]

export const getFicheOutil = (slug: string) => FICHES_OUTILS.find((f) => f.slug === slug)
export const ficheParNom = (nom: string) => FICHES_OUTILS.find((f) => f.nom === nom)
export const fichesParEtape = (etape: string) => FICHES_OUTILS.filter((f) => f.etape === etape)
