type Locale = "pt-BR" | "en-US";

type TranslationMap = Record<Locale, Record<string, string>>;

const STORAGE_KEY = "frati.locale";
const DEFAULT_LOCALE: Locale = "pt-BR";

const translations: TranslationMap = {
  "pt-BR": {
    "topbar.languageButton": "EN-US",
    "nav.home": "Home",
    "nav.institutional": "Institucional",
    "nav.services": "Serviços",
    "nav.blog": "Blog",
    "nav.catalog": "Catálogo",
    "nav.products": "Produtos",
    "nav.contact": "Contato",
    "nav.store": "Loja Virtual",
    "hero.title": "A MAIS COMPLETA LINHA DE<br>MATERIAIS PARA ELEVAÇÃO,<br>AMARRAÇÃO E MOVIMENTAÇÃO<br>DE CARGA",
    "hero.description": "Combinamos qualidade, tecnologia e atendimento especializado para oferecer produtos que atendem às normas técnicas mais exigentes, proporcionando tranquilidade e segurança em cada aplicação.",
    "hero.ctaLearn": "SAIBA MAIS",
    "hero.ctaContact": "ENTRE EM CONTATO",
    "about.title": "Conheça a Frati",
    "about.p1": "A Frati Suprimentos foi fundada para atender à demanda por soluções industriais seguras e eficientes. Com mais de 20 anos de experiência, consolidou-se no mercado brasileiro como referência em elevação, amarração e movimentação de cargas.",
    "about.p2": "Nossa equipe técnica alia conhecimento especializado a um atendimento personalizado, assegurando soluções sob medida para cada cliente.",
    "about.linkQuality": "→ Controle de Qualidade",
    "about.linkCertifications": "→ Certificações",
    "about.linkExperts": "→ Profissionais Especializados",
    "empresa.title": "Frati Suprimentos Industriais",
    "empresa.p1": "A Frati Suprimentos foi fundada para atender à demanda por soluções industriais seguras e eficientes. Com mais de 20 anos de experiência, consolidou-se no mercado brasileiro como referência em elevação, amarração e movimentação de cargas. Nossa equipe técnica alia conhecimento especializado a um atendimento personalizado, assegurando soluções sob medida para cada cliente.",
    "empresa.p2": "Temos um amplo estoque de matérias e equipamentos para elevação, fixação e movimentação de carga, todos provenientes de marcas reconhecidas mundialmente e em conformidade com as mais rigorosas normas nacionais e internacionais. Isso nos permite oferecer soluções completas e identificáveis por sua confiabilidade e segurança operacional.",
    "empresa.p3": "Contamos ainda com fabricação própria de laços, lingas e cintas de poliéster, desenvolvidos em conformidade com normas nacionais e internacionais, acompanhados de laudo técnico e rastreabilidade.",
    "empresa.segmentsHeading": "Segmentos de Atuação",
    "empresa.segment1": "Mineração;",
    "empresa.segment2": "Construção Civil;",
    "empresa.segment3": "Naval e Offshore;",
    "empresa.segment4": "Elevadores;",
    "empresa.segment5": "Transporte;",
    "empresa.segment6": "Agricultura;",
    "empresa.segment7": "Siderúrgica;",
    "empresa.segment8": "Petroquímica;",
    "empresa.segment9": "Silos;",
    "empresa.segment10": "Segurança;",
    "empresa.segment11": "Energia;",
    "empresa.segment12": "Entre outros segmentos.",
    "empresa.qualityHeading": "Política de Qualidade",
    "empresa.p4": "Desde a seleção criteriosa de matéria-prima até o atendimento pós-venda, implementamos um Sistema de Gestão da Qualidade robusto e certificado, fundamentado na ISO 9001.",
    "empresa.p5": "Nossa política de qualidade reforça a melhoria contínua, a rastreabilidade total dos processos e a conformidade com normas técnicas, assegurando que cada produto entregue pela Frati atenda aos padrões internacionais mais exigentes.",
    "empresa.partnershipHeading": "Técnica, Segurança e Parceria",
    "empresa.p6": "Somos mais do que fornecedores: somos parceiros no desenvolvimento de soluções técnicas. Realizamos inspeções técnicas, treinamentos e palestras direcionadas aos mais diversos segmentos, como construção, logística, petróleo e agronegócio. Nosso objetivo é agregar valor, minimizar riscos e aumentar a eficiência operacional dos nossos clientes com equipe especializada e soluções sob medida.",
    "empresa.docQuality": "Controle de qualidade",
    "empresa.docCertified": "Produtos certificados",
    "empresa.docQualityAria": "Abrir PDF da política de qualidade em nova aba",
    "empresa.docCertifiedAria": "Abrir PDF do certificado ISO em nova aba",
    "products.title": "Produtos",
    "products.description": "Linha completa para elevação, amarração e movimentação de cargas industriais.",
    "products.item1": "Cabo de Aço",
    "products.item2": "Laços de Cabo de Aço",
    "products.item3": "Correntes e Linga de Corrente",
    "products.item4": "Cinta Sling",
    "products.item5": "Conjunto de Amarração",
    "products.item6": "Acessórios",
    "products.item7": "Equipamentos",
    "products.item8": "Ferramentas",
    "products.item9": "Lubrificantes",
    "services.title": "Soluções em Destaque",
    "services.subtitle": "Soluções completas e seguras para cada etapa da sua operação",
    "services.description": "Disponibilizamos soluções completas para atender às necessidades de cada operação. Atuamos com fornecimento de materiais de alta qualidade, suporte técnico especializado e orientação para a melhor aplicação de cada produto, garantindo eficiência, segurança e confiabilidade em todas as aplicações.",
    "services.item1Title": "Análises Técnicas e Dimensionamento de Soluções",
    "services.item1Desc": "Antes de aplicar qualquer equipamento, é fundamental avaliar as condições e exigências da operação.",
    "services.item2Title": "Acompanhamento em Campo",
    "services.item2Desc": "Para garantir a correta aplicação dos equipamentos, oferecemos acompanhamento técnico especializado.",
    "services.item3Title": "Treinamentos Operacionais e Palestras",
    "services.item3Desc": "Capacitar as equipes é parte essencial para manter a segurança e a eficiência nas operações.",
    "services.item4Title": "Inspeções Técnicas Preventivas e Corretivas",
    "services.item4Desc": "Com o tempo, o uso contínuo de cintas, cabos e ganchos exige avaliações periódicas.",
    "quality.title1": "Gestão de Qualidade Aplicada",
    "quality.desc1": "Adotamos procedimentos industriais padronizados, com rastreabilidade completa dos insumos, inspeções sistemáticas e controle de qualidade em cada fase. Somos uma empresa certificada pela ISO 9001, o que assegura que nosso Sistema de Gestão da Qualidade atende aos mais altos critérios internacionais.",
    "quality.title2": "Tecnologia e Eficiência",
    "quality.desc2": "Reconhecida nacionalmente como referência em soluções para elevação, movimentação e amarração de cargas, sempre com foco em segurança, precisão e confiabilidade. Contamos com uma equipe técnica altamente qualificada, pronta para oferecer suporte especializado e desenvolver soluções alinhadas às necessidades de cada cliente.",
    "quality.specializedServices": "Serviços Especializados",
    "blog.title": "Blog",
    "blog.item1Title": "Como garantir segurança na movimentação de cargas",
    "blog.item1Desc": "Descubra as principais práticas e equipamentos utilizados para elevar e movimentar cargas de forma segura e eficiente.",
    "blog.item2Title": "Tecnologia aplicada à inspeção industrial",
    "blog.item2Desc": "Conheça como a inovação tem aprimorado os processos de inspeção e controle de qualidade nas indústrias brasileiras.",
    "blog.item3Title": "Novidades da Frati no setor offshore",
    "blog.item3Desc": "Acompanhe as últimas participações da Frati em eventos e feiras voltadas à indústria offshore.",
    "footer.productsTitle": "Produtos",
    "footer.product1": "Cabo de Aço",
    "footer.product2": "Laço de Cabo de Aço",
    "footer.product3": "Linga de Corrente",
    "footer.product4": "Corrente",
    "footer.product5": "Cinta Sling",
    "footer.product6": "Amarração",
    "footer.product7": "Acessórios",
    "footer.product8": "Equipamentos",
    "footer.product9": "Ferramentas",
    "footer.product10": "Lubrificantes",
    "footer.navigationTitle": "Navegação",
    "footer.navCompany": "Empresa",
    "footer.navProducts": "Produtos",
    "footer.navServices": "Serviços",
    "footer.navBlog": "Blog",
    "footer.navContact": "Contato",
    "footer.navPrivacy": "Política de Privacidade",
    "footer.contactTitle": "Contatos",
    "footer.addressTitle": "Endereço",
    "footer.phoneValue": "(11) 2538-8404",
    "footer.mobileValue": "(11) 2538-8404",
    "footer.emailValue": "vendas@frati.com.br",
    "footer.addressValue": "Rua Galatea<br>Carandiru, São Paulo - SP<br>CEP: 02068-000",
    "footer.copyright": "© 2026 Frati Suprimentos — Todos os direitos reservados.",
    "common.seeMore": "Ver mais",
    "common.learnMore": "Saiba Mais",
    "common.readMore": "Ler mais"
  },
  "en-US": {
    "topbar.languageButton": "PT-BR",
    "nav.home": "Home",
    "nav.institutional": "Institutional",
    "nav.services": "Services",
    "nav.blog": "Blog",
    "nav.catalog": "Catalog",
    "nav.products": "Products",
    "nav.contact": "Contact",
    "nav.store": "Online Store",
    "hero.title": "THE MOST COMPLETE LINE OF<br>MATERIALS FOR LIFTING,<br>LASHING AND LOAD<br>HANDLING",
    "hero.description": "We combine quality, technology, and specialized support to deliver products that meet strict technical standards, ensuring safety and confidence in every application.",
    "hero.ctaLearn": "LEARN MORE",
    "hero.ctaContact": "CONTACT US",
    "about.title": "Get to know Frati",
    "about.p1": "Frati Suprimentos was founded to meet the demand for safe and efficient industrial solutions. With over 20 years of experience, it has become a reference in the Brazilian market for lifting, lashing, and load handling.",
    "about.p2": "Our technical team combines specialized expertise with personalized service, ensuring tailored solutions for each customer.",
    "about.linkQuality": "→ Quality Control",
    "about.linkCertifications": "→ Certifications",
    "about.linkExperts": "→ Specialized Professionals",
    "empresa.title": "Frati Industrial Supplies",
    "empresa.p1": "Frati Suprimentos was founded to meet the demand for safe and efficient industrial solutions. With more than 20 years of experience, it has established itself in the Brazilian market as a reference in lifting, lashing, and load handling. Our technical team combines specialized expertise with personalized service, ensuring tailored solutions for each customer.",
    "empresa.p2": "We maintain a broad inventory of materials and equipment for lifting, fastening, and load handling, sourced from globally recognized brands and in compliance with the strictest national and international standards. This enables us to deliver complete solutions distinguished by reliability and operational safety.",
    "empresa.p3": "We also manufacture wire rope slings, chain slings, and polyester webbing slings developed in accordance with national and international standards, supported by technical reports and full traceability.",
    "empresa.segmentsHeading": "Industries served",
    "empresa.segment1": "Mining;",
    "empresa.segment2": "Construction;",
    "empresa.segment3": "Marine and offshore;",
    "empresa.segment4": "Elevators;",
    "empresa.segment5": "Transportation;",
    "empresa.segment6": "Agriculture;",
    "empresa.segment7": "Steel industry;",
    "empresa.segment8": "Petrochemical;",
    "empresa.segment9": "Silos;",
    "empresa.segment10": "Safety;",
    "empresa.segment11": "Energy;",
    "empresa.segment12": "Among other sectors.",
    "empresa.qualityHeading": "Quality policy",
    "empresa.p4": "From rigorous raw material selection through after-sales support, we implement a robust, certified Quality Management System aligned with ISO 9001.",
    "empresa.p5": "Our quality policy reinforces continuous improvement, full process traceability, and compliance with technical standards, ensuring that every product delivered by Frati meets the most demanding international benchmarks.",
    "empresa.partnershipHeading": "Technical expertise, safety, and partnership",
    "empresa.p6": "We are more than suppliers: we are partners in developing technical solutions. We conduct technical inspections, training sessions, and lectures for diverse sectors such as construction, logistics, oil and gas, and agribusiness. Our goal is to add value, mitigate risk, and improve our customers’ operational efficiency with a specialized team and tailored solutions.",
    "empresa.docQuality": "Quality control",
    "empresa.docCertified": "Certified products",
    "empresa.docQualityAria": "Open quality policy PDF in a new tab",
    "empresa.docCertifiedAria": "Open ISO certificate PDF in a new tab",
    "products.title": "Products",
    "products.description": "A complete line for industrial lifting, lashing, and load handling.",
    "products.item1": "Steel Wire Rope",
    "products.item2": "Wire Rope Slings",
    "products.item3": "Chains and Chain Slings",
    "products.item4": "Webbing Sling",
    "products.item5": "Lashing Assemblies",
    "products.item6": "Accessories",
    "products.item7": "Equipment",
    "products.item8": "Tools",
    "products.item9": "Lubricants",
    "services.title": "Featured Solutions",
    "services.subtitle": "Complete and safe solutions for every stage of your operation",
    "services.description": "We provide comprehensive solutions tailored to each operation. We deliver high-quality materials, specialized technical support, and guidance for the best product application, ensuring efficiency, safety, and reliability in all applications.",
    "services.item1Title": "Technical Analysis and Solution Sizing",
    "services.item1Desc": "Before applying any equipment, it is essential to evaluate the operating conditions and requirements.",
    "services.item2Title": "On-site Monitoring",
    "services.item2Desc": "To ensure correct equipment application, we provide specialized technical follow-up.",
    "services.item3Title": "Operational Training and Lectures",
    "services.item3Desc": "Training teams is essential to maintain safety and efficiency in operations.",
    "services.item4Title": "Preventive and Corrective Technical Inspections",
    "services.item4Desc": "Over time, continuous use of slings, ropes, and hooks requires periodic evaluations.",
    "quality.title1": "Applied Quality Management",
    "quality.desc1": "We adopt standardized industrial procedures with complete material traceability, systematic inspections, and quality control at every stage. We are ISO 9001 certified, ensuring that our Quality Management System meets top international standards.",
    "quality.title2": "Technology and Efficiency",
    "quality.desc2": "Nationally recognized as a reference in lifting, handling, and lashing solutions, always focused on safety, precision, and reliability. Our highly qualified technical team is ready to provide specialized support and develop solutions tailored to each customer's needs.",
    "quality.specializedServices": "Specialized Services",
    "blog.title": "Blog",
    "blog.item1Title": "How to Ensure Safety in Load Handling",
    "blog.item1Desc": "Discover the key practices and equipment used to lift and handle loads safely and efficiently.",
    "blog.item2Title": "Technology Applied to Industrial Inspection",
    "blog.item2Desc": "Learn how innovation has improved inspection and quality control processes in Brazilian industries.",
    "blog.item3Title": "Frati Updates in the Offshore Sector",
    "blog.item3Desc": "Follow Frati's latest participation in events and trade shows focused on the offshore industry.",
    "footer.productsTitle": "Products",
    "footer.product1": "Steel Wire Rope",
    "footer.product2": "Wire Rope Sling",
    "footer.product3": "Chain Sling",
    "footer.product4": "Chain",
    "footer.product5": "Webbing Sling",
    "footer.product6": "Lashing",
    "footer.product7": "Accessories",
    "footer.product8": "Equipment",
    "footer.product9": "Tools",
    "footer.product10": "Lubricants",
    "footer.navigationTitle": "Navigation",
    "footer.navCompany": "Company",
    "footer.navProducts": "Products",
    "footer.navServices": "Services",
    "footer.navBlog": "Blog",
    "footer.navContact": "Contact",
    "footer.navPrivacy": "Privacy Policy",
    "footer.contactTitle": "Contacts",
    "footer.addressTitle": "Address",
    "footer.phoneValue": "(11) 2538-8404",
    "footer.mobileValue": "(11) 2538-8404",
    "footer.emailValue": "vendas@frati.com.br",
    "footer.addressValue": "Rua Galatea<br>Carandiru, Sao Paulo - SP<br>ZIP: 02068-000",
    "footer.copyright": "© 2026 Frati Suprimentos — All rights reserved.",
    "common.seeMore": "See more",
    "common.learnMore": "Learn More",
    "common.readMore": "Read more"
  }
};

const normalizeLocale = (locale: string | null): Locale => {
  if (locale === "en" || locale === "en-US") {
    return "en-US";
  }
  return "pt-BR";
};

const getStoredLocale = (): Locale => {
  const locale = window.localStorage.getItem(STORAGE_KEY);
  return normalizeLocale(locale);
};

const setLocaleOnHtml = (locale: Locale): void => {
  document.documentElement.lang = locale;
};

function translatePage(locale: Locale): void {
  const localeTable = translations[locale];
  const elements = document.querySelectorAll<HTMLElement>("[data-i18n]");

  elements.forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) {
      return;
    }

    const translatedValue = localeTable[key];
    if (!translatedValue) {
      return;
    }

    element.innerHTML = translatedValue;
    const ariaKey = element.dataset.i18nAria;
    if (ariaKey && localeTable[ariaKey as keyof typeof localeTable]) {
      element.setAttribute("aria-label", localeTable[ariaKey as keyof typeof localeTable]);
    }
  });

}

function setLanguage(locale: Locale): void {
  window.localStorage.setItem(STORAGE_KEY, locale);
  setLocaleOnHtml(locale);
  translatePage(locale);
}

// Expose globally so onclick in HTML can call it.
(window as unknown as { setLanguage: (locale: Locale) => void }).setLanguage = setLanguage;

function loadLanguage(): void {
  const initialLocale = getStoredLocale();
  setLocaleOnHtml(initialLocale);
  translatePage(initialLocale);

  const languageToggle = document.getElementById("languageToggle");
  if (languageToggle) {
    languageToggle.addEventListener("click", (event) => {
      event.preventDefault();
      const nextLocale: Locale = getStoredLocale() === "pt-BR" ? "en-US" : "pt-BR";
      setLanguage(nextLocale);
    });
  }
}

window.addEventListener("load", loadLanguage);
