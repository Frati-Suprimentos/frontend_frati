// SETTINGS: update these values when needed.
const WHATSAPP_TARGET_PHONE = "5511999999999";
const WHATSAPP_ICON_PATH = "imagens/whatsapp.svg";
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
    placeholderName: "Digite seu nome",
    placeholderPhone: "Digite seu telefone",
    placeholderSubject: "Digite o assunto",
    submit: "Enviar pelo WhatsApp",
    messageIntro: "Ola, vim pelo site da Frati.",
    messageName: "Nome",
    messagePhone: "Telefone",
    messageSubject: "Assunto"
  },
  "en-US": {
    modalAria: "Open WhatsApp form",
    topAria: "Back to top",
    closeAria: "Close form",
    title: "Talk to us on WhatsApp",
    name: "Name",
    phone: "Phone",
    subject: "Subject",
    placeholderName: "Enter your name",
    placeholderPhone: "Enter your phone",
    placeholderSubject: "Enter the subject",
    submit: "Send via WhatsApp",
    messageIntro: "Hello, I came from Frati website.",
    messageName: "Name",
    messagePhone: "Phone",
    messageSubject: "Subject"
  }
};

const getCurrentLocale = () => {
  const fromStorage = window.localStorage.getItem(I18N_STORAGE_KEY);
  if (fromStorage === "en" || fromStorage === "en-US") return "en-US";
  return "pt-BR";
};
const getCurrentLabels = () => modalI18n[getCurrentLocale()] || modalI18n["pt-BR"];

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
          <input id="waName" name="name" type="text" placeholder="${labels.placeholderName}" required>

          <label for="waPhone">${labels.phone}</label>
          <input id="waPhone" name="phone" type="tel" placeholder="${labels.placeholderPhone}" required>

          <label for="waSubject">${labels.subject}</label>
          <input id="waSubject" name="subject" type="text" placeholder="${labels.placeholderSubject}" required>

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

  const applyFloatingLocale = () => {
    const labels = getCurrentLabels();
    if (whatsappButton) {
      whatsappButton.setAttribute("aria-label", labels.modalAria);
    }
    if (scrollTopButton) {
      scrollTopButton.setAttribute("aria-label", labels.topAria);
    }
    if (whatsappModalClose) {
      whatsappModalClose.setAttribute("aria-label", labels.closeAria);
    }
    const title = document.getElementById("whatsappFormTitle");
    const labelName = document.querySelector('label[for="waName"]');
    const labelPhone = document.querySelector('label[for="waPhone"]');
    const labelSubject = document.querySelector('label[for="waSubject"]');
    const inputName = document.getElementById("waName");
    const inputPhone = document.getElementById("waPhone");
    const inputSubject = document.getElementById("waSubject");
    const submitButton = whatsappForm ? whatsappForm.querySelector(".whatsapp-submit") : null;
    if (title) title.textContent = labels.title;
    if (labelName) labelName.textContent = labels.name;
    if (labelPhone) labelPhone.textContent = labels.phone;
    if (labelSubject) labelSubject.textContent = labels.subject;
    if (inputName) inputName.setAttribute("placeholder", labels.placeholderName);
    if (inputPhone) inputPhone.setAttribute("placeholder", labels.placeholderPhone);
    if (inputSubject) inputSubject.setAttribute("placeholder", labels.placeholderSubject);
    if (submitButton) submitButton.textContent = labels.submit;
  };
  applyFloatingLocale();
  window.addEventListener("frati:language-changed", applyFloatingLocale);

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
      const labels = getCurrentLabels();
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
