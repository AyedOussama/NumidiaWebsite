import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Globe,
  Lightbulb,
  LineChart,
  Palette,
  PenTool,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
  features: string[];
};

export type Pack = {
  name: string;
  badge: string;
  icon: LucideIcon;
  iconClassName: string;
  checkClassName: string;
  features: string[];
  recommended: boolean;
};

export type PortfolioProject = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

export type ProcessStep = {
  id: number;
  title: string;
  desc: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    id: "strategy",
    icon: Lightbulb,
    title: "Numidia Strategy",
    category: "Stratégie Marketing & Consulting",
    description:
      "Un accompagnement complet pour définir votre positionnement et tracer la voie de votre succès.",
    features: [
      "Audit marketing complet",
      "Stratégie digitale sur mesure",
      "Tunnel de vente",
      "Branding & identité",
      "Plan d'action (3-6 mois)",
    ],
  },
  {
    id: "web",
    icon: Globe,
    title: "Numidia Web",
    category: "Création de Site Web",
    description:
      "Des sites vitrines et e-commerce performants, esthétiques et optimisés pour la conversion.",
    features: [
      "Site vitrine (WordPress / Sur mesure)",
      "E-commerce (Shopify / WooCommerce)",
      "UX/UI Design moderne",
      "Optimisation mobile & vitesse",
      "SEO de base intégré",
    ],
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "Numidia Growth",
    category: "Acquisition & Publicité Digitale",
    description:
      "Là où nous générons du chiffre pour vous. Des campagnes ultra-ciblées pour un ROI maximal.",
    features: [
      "Publicités Meta (FB/Insta)",
      "Google Ads (Search & Display)",
      "Génération de leads qualifiés",
      "Retargeting & optimisation",
      "Création de visuels",
    ],
  },
  {
    id: "ai",
    icon: Bot,
    title: "Numidia AI",
    category: "Automatisation & IA",
    description:
      "Votre avantage concurrentiel. Automatisez l'essentiel pour vous concentrer sur l'exceptionnel.",
    features: [
      "Chatbots intelligents (Web / WhatsApp)",
      "Automatisation du service client",
      "CRM automatisé",
      "Funnels d'e-mails",
      "Intégration IA métier",
    ],
  },
  {
    id: "brand",
    icon: Palette,
    title: "Numidia Brand",
    category: "Branding & Design",
    description:
      "Une identité visuelle marquante qui résonne avec votre audience cible.",
    features: [
      "Création de logo premium",
      "Charte graphique complète",
      "Templates réseaux sociaux",
      "Design publicitaire",
    ],
  },
  {
    id: "social",
    icon: Smartphone,
    title: "Numidia Social",
    category: "Gestion Réseaux Sociaux",
    description:
      "Fédérez et engagez votre communauté avec du contenu captivant et régulier.",
    features: [
      "Création de contenu (posts, reels)",
      "Calendrier éditorial",
      "Gestion IG / FB / LinkedIn",
      "Community management",
      "Analyse des performances",
    ],
  },
  {
    id: "secure",
    icon: Shield,
    title: "Numidia Secure",
    category: "Sécurité & Performance",
    description:
      "Dormez sur vos deux oreilles, nous veillons sur l'intégrité de vos plateformes.",
    features: [
      "Protection renforcée",
      "Sauvegardes automatiques",
      "Maintenance technique",
      "Optimisation vitesse",
      "Monitoring 24/7",
    ],
  },
];

export const PACKS: Pack[] = [
  {
    name: "Pack Starter",
    badge: "Pour se lancer",
    icon: Rocket,
    iconClassName: "text-emerald-400",
    checkClassName: "text-emerald-400",
    features: [
      "Site vitrine premium",
      "Branding de base",
      "SEO technique intégré",
    ],
    recommended: false,
  },
  {
    name: "Pack Business",
    badge: "Croissance Rapide",
    icon: TrendingUp,
    iconClassName: "text-amber-500",
    checkClassName: "text-amber-500",
    features: [
      "Site web + SEO avancé",
      "Campagnes Ads (Meta/Google)",
      "Gestion Réseaux sociaux",
    ],
    recommended: true,
  },
  {
    name: "Pack Premium",
    badge: "La Totale",
    icon: Star,
    iconClassName: "text-violet-400",
    checkClassName: "text-emerald-400",
    features: [
      "Tout inclus (Web, Ads, IA)",
      "Automatisation & Chatbot",
      "Suivi stratégique mensuel",
      "Support prioritaire 24/7",
    ],
    recommended: false,
  }
];

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: 1,
    title: "Maison Éclat Paris",
    category: "Numidia Web & Brand",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800",
    description:
      "Refonte complète de l'identité visuelle et création d'un e-commerce premium pour une marque de bougies artisanales.",
  },
  {
    id: 2,
    title: "TechVision Consulting",
    category: "Numidia AI & Strategy",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description:
      "Intégration d'un chatbot IA sur mesure et automatisation du CRM pour un cabinet de conseil B2B.",
  },
  {
    id: 3,
    title: "GreenBite Restaurant",
    category: "Numidia Social & Growth",
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=800",
    description:
      "Lancement d'une campagne locale d'acquisition de clients via Meta Ads et gestion d'Instagram.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    desc: "Analyse approfondie de vos besoins, de votre marché cible et audit de votre existant.",
    icon: Search,
  },
  {
    id: 2,
    title: "Stratégie",
    desc: "Élaboration d'un plan d'action sur mesure, orienté ROI, et définition des KPIs.",
    icon: Target,
  },
  {
    id: 3,
    title: "Création",
    desc: "Design UX/UI percutant, développement technique et intégration IA avancée.",
    icon: PenTool,
  },
  {
    id: 4,
    title: "Lancement",
    desc: "Phase de tests rigoureux, déploiement sécurisé et formation de vos équipes.",
    icon: Rocket,
  },
  {
    id: 5,
    title: "Croissance",
    desc: "Acquisition de trafic, monitoring des performances et optimisation continue.",
    icon: LineChart,
  },
];
