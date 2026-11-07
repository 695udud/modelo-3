/**
 * Configuração central do site.
 * Edite APENAS este arquivo para alterar dados pessoais, contatos, áreas, SEO e cores.
 * ATENÇÃO: os dados abaixo são FICTÍCIOS, usados apenas para demonstração.
 */

import advogadoFoto from "@/assets/advogado-foto.jpg";

export type PracticeArea = {
  title: string;
  description: string;
};

export const site = {
  lawyer: {
    fullName: "Ricardo Almeida Vasconcellos",
    shortName: "Ricardo Vasconcellos",
    oab: "OAB/SP 214.567",
    headline: "Advocacia com clareza, ética e estratégia.",
    intro:
      "Especialista em Direito Civil e Empresarial, atendo pessoas e empresas que buscam soluções jurídicas seguras, transparentes e orientadas a resultados.",
    photo: advogadoFoto,
    bio: [
      "Formado em Direito pela Universidade de São Paulo (USP), com pós-graduação em Direito Empresarial pela FGV, Ricardo construiu sua trajetória unindo rigor técnico e atendimento próximo ao cliente.",
      "Ao longo de mais de 15 anos de atuação, já conduziu centenas de casos nas áreas cível e empresarial, sempre com a convicção de que um bom trabalho jurídico começa pela escuta atenta e pela comunicação clara.",
    ],
    highlights: [
      { label: "Formação", value: "USP — Direito" },
      { label: "Inscrição", value: "OAB/SP 214.567" },
      { label: "Atuação desde", value: "2009" },
    ],
  },

  office: {
    name: "Vasconcellos Advocacia",
    logo: "",
    logoText: "VASCONCELLOS",
  },

  contact: {
    phone: "(11) 3456-7890",
    phoneHref: "tel:+551134567890",
    whatsapp: "5511987654321",
    whatsappMessage: "Olá, gostaria de agendar uma consulta.",
    email: "contato@vasconcellos.adv.br",
    address: "Av. Paulista, 1500 — Sala 1204, Bela Vista",
    city: "São Paulo — SP",
    hours: [
      { days: "Segunda a sexta", time: "9h às 18h" },
      { days: "Sábado e domingo", time: "Fechado" },
    ],
  },

  social: [
    { label: "Instagram", href: "https://instagram.com/vasconcellos.adv" },
    { label: "LinkedIn", href: "https://linkedin.com/in/ricardovasconcellos" },
  ],

  practiceAreas: [
    {
      title: "Direito Civil",
      description:
        "Contratos, indenizações, responsabilidade civil e disputas patrimoniais conduzidos com estratégia e precisão técnica.",
    },
    {
      title: "Direito Empresarial",
      description:
        "Assessoria completa para empresas: constituição, contratos comerciais, societário e prevenção de litígios.",
    },
    {
      title: "Direito Imobiliário",
      description:
        "Compra e venda, locações, regularização de imóveis e análise de riscos em transações imobiliárias.",
    },
    {
      title: "Direito de Família",
      description:
        "Divórcios, guarda, pensão alimentícia e inventários tratados com sensibilidade e discrição.",
    },
    {
      title: "Direito do Consumidor",
      description:
        "Defesa em casos de cobranças indevidas, vícios de produtos e serviços e práticas abusivas.",
    },
    {
      title: "Planejamento Sucessório",
      description:
        "Testamentos, holdings familiares e organização patrimonial para proteger o futuro da sua família.",
    },
  ] as PracticeArea[],

  seo: {
    title: "Ricardo Vasconcellos — Advocacia | OAB/SP",
    description:
      "Escritório de advocacia em São Paulo. Direito Civil, Empresarial, Imobiliário e de Família com ética, clareza e estratégia.",
  },

  colors: {
    background: "#FFFFFF",
    foreground: "#202020",
    surface: "#F3F3F3",
    muted: "#6B6B6B",
    border: "#E2E2E2",
  },

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Atuação", href: "#atuacao" },
    { label: "Contato", href: "#contato" },
  ],
};

export const whatsappUrl = () =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappMessage)}`;
