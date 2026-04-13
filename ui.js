// SETTINGS: update these values when needed.
const WHATSAPP_TARGET_PHONE = "5511999999999";
const WHATSAPP_ICON_PATH = "imagens/whatsappvr.svg";
const I18N_STORAGE_KEY = "frati.locale";

const modalI18n = {
  "pt-BR": {
    modalAria: "Abrir formulario WhatsApp",
    topAria: "Voltar ao topo",
    closeAria: "Fechar formulario",
    title: "Fale conosco no WhatsApp",
    name: "Nome",
    phone: "Telefone",
    subject: "Assunto",
    submit: "Enviar pelo WhatsApp",
    messageIntro: "Ola, vim pelo site da Frati.",
    messageName: "Nome",
    messagePhone: "Telefone",
    messageSubject: "Assunto"
  },
  en: {
    modalAria: "Open WhatsApp form",
    topAria: "Back to top",
    closeAria: "Close form",
    title: "Talk to us on WhatsApp",
    name: "Name",
    phone: "Phone",
    subject: "Subject",
    submit: "Send via WhatsApp",
    messageIntro: "Hello, I came from Frati website.",
    messageName: "Name",
    messagePhone: "Phone",
    messageSubject: "Subject"
  }
};

const getCurrentLocale = () => {
  const fromStorage = window.localStorage.getItem(I18N_STORAGE_KEY);
  if (fromStorage === "en" || fromStorage === "en-US") return "en";
  return "pt-BR";
};

const ensureFloatingUi = () => {
  const locale = getCurrentLocale();
  const labels = modalI18n[locale];

  if (!document.getElementById("whatsappFloatButton")) {
    const whatsappButton = document.createElement("button");
    whatsappButton.id = "whatsappFloatButton";
    whatsappButton.className = "floating-btn floating-whatsapp";
    whatsappButton.setAttribute("aria-label", labels.modalAria);
    whatsappButton.innerHTML = '<img id="whatsappFloatIcon" src="" alt="WhatsApp">';
    document.body.appendChild(whatsappButton);
  }

  if (!document.getElementById("scrollTopButton")) {
    const scrollButton = document.createElement("button");
    scrollButton.id = "scrollTopButton";
    scrollButton.className = "floating-btn floating-top";
    scrollButton.setAttribute("aria-label", labels.topAria);
    scrollButton.textContent = "↑";
    document.body.appendChild(scrollButton);
  }

  if (!document.getElementById("whatsappModal")) {
    const modal = document.createElement("div");
    modal.id = "whatsappModal";
    modal.className = "whatsapp-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="whatsapp-modal-card" role="dialog" aria-modal="true" aria-labelledby="whatsappFormTitle">
        <button id="whatsappModalClose" class="whatsapp-modal-close" aria-label="${labels.closeAria}">×</button>
        <h3 id="whatsappFormTitle">${labels.title}</h3>
        <form id="whatsappForm" class="whatsapp-form">
          <label for="waName">${labels.name}</label>
          <input id="waName" name="name" type="text" required>

          <label for="waPhone">${labels.phone}</label>
          <input id="waPhone" name="phone" type="tel" required>

          <label for="waSubject">${labels.subject}</label>
          <input id="waSubject" name="subject" type="text" required>

          <button type="submit" class="btn whatsapp-submit">${labels.submit}</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
  }
};

const buildWhatsappMessage = (name, phone, subject, labels) => {
  return [
    labels.messageIntro,
    "",
    `${labels.messageName}: ${name}`,
    `${labels.messagePhone}: ${phone}`,
    `${labels.messageSubject}: ${subject}`
  ].join("\n");
};

const initFloatingUi = () => {
  ensureFloatingUi();
  const locale = getCurrentLocale();
  const labels = modalI18n[locale];

  const whatsappButton = document.getElementById("whatsappFloatButton");
  const whatsappIcon = document.getElementById("whatsappFloatIcon");
  const whatsappModal = document.getElementById("whatsappModal");
  const whatsappModalClose = document.getElementById("whatsappModalClose");
  const whatsappForm = document.getElementById("whatsappForm");
  const scrollTopButton = document.getElementById("scrollTopButton");

  const toggleModal = (open) => {
    if (!whatsappModal) return;
    whatsappModal.classList.toggle("is-open", open);
    whatsappModal.setAttribute("aria-hidden", open ? "false" : "true");
  };

  if (whatsappIcon) {
    whatsappIcon.setAttribute("src", WHATSAPP_ICON_PATH);
  }

  if (whatsappButton) {
    whatsappButton.addEventListener("click", () => toggleModal(true));
  }

  if (whatsappModalClose) {
    whatsappModalClose.addEventListener("click", () => toggleModal(false));
  }

  if (whatsappModal) {
    whatsappModal.addEventListener("click", (event) => {
      if (event.target === whatsappModal) {
        toggleModal(false);
      }
    });
  }

  if (whatsappForm) {
    whatsappForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(whatsappForm);
      const name = String(formData.get("name") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const subject = String(formData.get("subject") || "").trim();

      const message = encodeURIComponent(buildWhatsappMessage(name, phone, subject, labels));
      const url = `https://wa.me/${WHATSAPP_TARGET_PHONE}?text=${message}`;
      window.open(url, "_blank", "noopener,noreferrer");
      toggleModal(false);
      whatsappForm.reset();
    });
  }

  const handleScroll = () => {
    if (!scrollTopButton) return;
    const show = window.scrollY > 280;
    scrollTopButton.classList.toggle("is-visible", show);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
};

document.addEventListener("DOMContentLoaded", initFloatingUi);
