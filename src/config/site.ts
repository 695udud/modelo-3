/**
 * Configuração central do site.
 * Edite APENAS este arquivo para alterar dados pessoais, contatos, áreas, SEO e cores.
 * Itens marcados com [PLACEHOLDER] devem ser substituídos pelos dados reais.
 */

export type PracticeArea = {
  title: string;
  description: string;
};

export const site = {
  lawyer: {
    fullName: "[PLACEHOLDER] Nome Completo do Advogado",
    shortName: "[Nome]",
    oab: "OAB/[UF] [000.000]",
    headline: "Advocacia com clareza, ética e estratégia.",
    intro:
      "[PLACEHOLDER] Breve descrição profissional — sua especialidade, abordagem e o tipo de cliente que você atende.",
    // URL da foto (ex.: "/images/foto.jpg"). Vazio exibe um espaço reservado.
    photo: "",
    bio: [
      "[PLACEHOLDER] Primeiro parágrafo da biografia: formação acadêmica e trajetória.",
      "[PLACEHOLDER] Segundo parágrafo: experiência, valores e forma de atuação.",
    ],
    highlights: [
      { label: "Formação", value: "[PLACEHOLDER] Instituição" },
      { label: "Inscrição", value: "OAB/[UF] [000.000]" },
      { label: "Atuação desde", value: "[Ano]" },
    ],
  },

  office: {
    name: "[PLACEHOLDER] Nome do Escritório",
    // URL do logotipo. Vazio exibe as iniciais em texto.
    logo: "",
    logoText: "[ESCRITÓRIO]",
  },

  contact: {
    phone: "(00) 0000-0000",
    phoneHref: "tel:+550000000000",
    // Somente números com DDI e DDD, ex.: "5511999999999"
    whatsapp: "5500000000000",
    whatsappMessage: "Olá, gostaria de agendar uma consulta.",
    email: "contato@seudominio.com.br",
    address: "[PLACEHOLDER] Rua Exemplo, 000 — Sala 00",
    city: "[Cidade] — [UF]",
    hours: [
      { days: "Segunda a sexta", time: "[00h] às [00h]" },
      { days: "Sábado e domingo", time: "Fechado" },
    ],
  },

  social: [
    { label: "Instagram", href: "https://instagram.com/[usuario]" },
    { label: "LinkedIn", href: "https://linkedin.com/in/[usuario]" },
  ],

  // Adicione ou remova itens livremente — o layout se ajusta sozinho.
  practiceAreas: [
    { title: "[Área 1]", description: "[PLACEHOLDER] Descrição breve da área de atuação." },
    { title: "[Área 2]", description: "[PLACEHOLDER] Descrição breve da área de atuação." },
    { title: "[Área 3]", description: "[PLACEHOLDER] Descrição breve da área de atuação." },
    { title: "[Área 4]", description: "[PLACEHOLDER] Descrição breve da área de atuação." },
  ] as PracticeArea[],

  seo: {
    title: "[Nome do Advogado] — Advocacia | OAB/[UF]",
    description:
      "[PLACEHOLDER] Escritório de advocacia em [Cidade]. Atendimento jurídico com ética, clareza e estratégia.",
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
