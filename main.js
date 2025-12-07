const COSTS = { adult: 30, child: 15 };
const TRANSLATIONS = {
  en: {
    countdownHeading: "New Year starts in",
    heroBadge: "New Year's Celebration 2025-2026 Form",
    step1Pill: "Step 1",
    step1Label: "Primary Contact",
    primaryFirstNameLabel: "Primary First Name",
    lastNameLabel: "Last Name",
    mobilePhoneLabel: "Mobile Phone",
    spouseFirstNameLabel: "Spouse First Name",
    step2Pill: "Step 2",
    step2Label: "Attendance Details",
    step2Subtext:
      "Adults are 13+, children are under 13. Adjust totals for everyone coming with you.",
    adultsFieldLabel: "Adults (13+)",
    childrenFieldLabel: "Children (0-12)",
    priceNote: "Adults $30 / Kids $15.",
    primaryFirstNameRequired: "Primary first name is required.",
    lastNameRequired: "Last name is required.",
    phoneRequired: "Mobile phone is required.",
    step3Pill: "Step 3",
    step3Label: "First Names",
    step3Subtext: "Please enter the first name of each attendee.",
    adultTableHeading: "Adult First Names",
    childTableHeading: "Child First Names",
    childTableNote: "We'll have something special for each child. List them here.",
    submitButton: "Submit Registration",
    paymentHeading: "Submitted! You will be approved after payment.",
    paymentDescription:
      "Thank you for registering. To finalize your family reservation, please send your payment right away using one of the options below. Include the memo so we can match it quickly.",
    paymentZelleLabel: "Zelle",
    paymentCashAppLabel: "Cash App",
    paymentMemoLabel: "Memo",
    daysLabel: "days",
    successMessage: "Form successfully submitted.",
    successTotalLabel: "Your total is",
    cardPaymentEyebrow: "Secure card payment",
    cardPaymentTitle: "Pay by card with Stripe",
    cardPaymentCopy: "Use the tabs to pay with card or wallet. Powered by Stripe.",
    cardPaymentDueLabel: "Amount due",
    payButtonLabel: "Pay now",
    payButtonProcessing: "Processing...",
    paymentReadyNote: "Card form is ready. Your details are encrypted by Stripe.",
    paymentUnavailable: "Card payments are unavailable right now. Please use another option.",
    paymentSuccess: "Payment received! You're all set.",
    paymentMissingKey: "Stripe is not configured. Please contact the organizer.",
  },
  es: {
    countdownHeading: "El Año Nuevo comienza en",
    heroBadge: "Formulario Celebración de Año Nuevo 2025-2026",
    step1Pill: "Paso 1",
    step1Label: "Contacto principal",
    primaryFirstNameLabel: "Nombre del responsable",
    lastNameLabel: "Apellido",
    mobilePhoneLabel: "Teléfono móvil",
    spouseFirstNameLabel: "Nombre del cónyuge",
    step2Pill: "Paso 2",
    step2Label: "Detalles de asistencia",
    step2Subtext:
      "Adultos son 13+, niños menores de 13. Ajusta los totales para todos tus acompañantes.",
    adultsFieldLabel: "Adultos (13+)",
    childrenFieldLabel: "Niños (0-12)",
    priceNote: "Adultos $30 / Niños $15.",
    primaryFirstNameRequired: "El nombre del responsable es obligatorio.",
    lastNameRequired: "El apellido es obligatorio.",
    phoneRequired: "El teléfono móvil es obligatorio.",
    step3Pill: "Paso 3",
    step3Label: "Nombres",
    step3Subtext: "Ingresa el primer nombre de cada asistente.",
    adultTableHeading: "Nombres de adultos",
    childTableHeading: "Nombres de niños",
    childTableNote: "Tenemos algo especial para cada niño. Escríbelos aquí.",
    submitButton: "Enviar registro",
    paymentHeading: "¡Enviado! Serás aprobado después del pago.",
    paymentDescription:
      "Gracias por registrarte. Para finalizar tu reserva familiar, envía tu pago ahora utilizando una de las siguientes opciones. Incluye la nota para identificarlo.",
    paymentZelleLabel: "Zelle",
    paymentCashAppLabel: "Cash App",
    paymentMemoLabel: "Nota",
    daysLabel: "días",
    successMessage: "Formulario enviado con éxito.",
    successTotalLabel: "Tu total es",
    cardPaymentEyebrow: "Pago con tarjeta seguro",
    cardPaymentTitle: "Paga con tarjeta con Stripe",
    cardPaymentCopy: "Usa las pestañas para pagar con tarjeta o wallet. Impulsado por Stripe.",
    cardPaymentDueLabel: "Monto a pagar",
    payButtonLabel: "Pagar ahora",
    payButtonProcessing: "Procesando...",
    paymentReadyNote: "El formulario está listo. Tus datos están cifrados por Stripe.",
    paymentUnavailable: "Los pagos con tarjeta no están disponibles. Usa otra opción.",
    paymentSuccess: "¡Pago recibido! Todo listo.",
    paymentMissingKey: "Stripe no está configurado. Contacta al organizador.",
  },
  ru: {
    countdownHeading: "До Нового года осталось",
    heroBadge: "Форма регистрации Новогодний праздник 2025-2026",
    step1Pill: "Шаг 1",
    step1Label: "Контактные данные",
    primaryFirstNameLabel: "Имя ответственного",
    lastNameLabel: "Фамилия",
    mobilePhoneLabel: "Мобильный телефон",
    spouseFirstNameLabel: "Имя супруга(и)",
    step2Pill: "Шаг 2",
    step2Label: "Детали посещения",
    step2Subtext:
      "Взрослые — от 13 лет, дети — до 13. Укажите всех, кто придет с вами.",
    adultsFieldLabel: "Взрослые (13+)",
    childrenFieldLabel: "Дети (0-12)",
    priceNote: "Взрослые $30 / Дети $15.",
    primaryFirstNameRequired: "Имя ответственного обязательно.",
    lastNameRequired: "Фамилия обязательна.",
    phoneRequired: "Необходим мобильный телефон.",
    step3Pill: "Шаг 3",
    step3Label: "Имена",
    step3Subtext: "Введите имена всех участников.",
    adultTableHeading: "Имена взрослых",
    childTableHeading: "Имена детей",
    childTableNote: "Для каждого ребенка приготовлен сюрприз — перечислите их.",
    submitButton: "Отправить регистрацию",
    paymentHeading: "Заявка отправлена! Подтверждение после оплаты.",
    paymentDescription:
      "Спасибо за регистрацию. Чтобы закрепить место, оплатите одним из способов ниже и укажите пометку.",
    paymentZelleLabel: "Zelle",
    paymentCashAppLabel: "Cash App",
    paymentMemoLabel: "Пометка",
    daysLabel: "дней",
    successMessage: "Форма успешно отправлена.",
    successTotalLabel: "Ваш итог",
    cardPaymentEyebrow: "Безопасная оплата картой",
    cardPaymentTitle: "Оплатите картой через Stripe",
    cardPaymentCopy:
      "Используйте вкладки, чтобы оплатить картой или кошельком. Обработку выполняет Stripe.",
    cardPaymentDueLabel: "Сумма к оплате",
    payButtonLabel: "Оплатить",
    payButtonProcessing: "Обработка...",
    paymentReadyNote: "Форма оплаты готова. Ваши данные шифруются Stripe.",
    paymentUnavailable: "Оплата картой сейчас недоступна. Выберите другой способ.",
    paymentSuccess: "Платеж получен! Все готово.",
    paymentMissingKey: "Stripe не настроен. Свяжитесь с организатором.",
  },
  uk: {
    countdownHeading: "До Нового року залишилося",
    heroBadge: "Форма реєстрації Новорічне свято 2025-2026",
    step1Pill: "Крок 1",
    step1Label: "Контактна особа",
    primaryFirstNameLabel: "Ім'я відповідального",
    lastNameLabel: "Прізвище",
    mobilePhoneLabel: "Мобільний телефон",
    spouseFirstNameLabel: "Ім'я чоловіка/дружини",
    step2Pill: "Крок 2",
    step2Label: "Деталі відвідування",
    step2Subtext:
      "Дорослі — від 13 років, діти — до 13. Вкажіть усіх, хто прийде з вами.",
    adultsFieldLabel: "Дорослі (13+)",
    childrenFieldLabel: "Діти (0-12)",
    priceNote: "Дорослі $30 / Діти $15.",
    primaryFirstNameRequired: "Ім'я відповідального обов'язкове.",
    lastNameRequired: "Прізвище обов'язкове.",
    phoneRequired: "Потрібен мобільний телефон.",
    step3Pill: "Крок 3",
    step3Label: "Імена",
    step3Subtext: "Укажіть імена всіх учасників.",
    adultTableHeading: "Імена дорослих",
    childTableHeading: "Імена дітей",
    childTableNote: "Для кожної дитини готуємо щось особливе — впишіть їх тут.",
    submitButton: "Надіслати реєстрацію",
    paymentHeading: "Надіслано! Після оплати вас підтвердять.",
    paymentDescription:
      "Дякуємо за реєстрацію. Щоб зафіксувати місця, оплатіть одним із способів і додайте примітку.",
    paymentZelleLabel: "Zelle",
    paymentCashAppLabel: "Cash App",
    paymentMemoLabel: "Примітка",
    daysLabel: "днів",
    successMessage: "Форму успішно надіслано.",
    successTotalLabel: "Ваш підсумок",
    cardPaymentEyebrow: "Безпечна оплата карткою",
    cardPaymentTitle: "Оплатіть карткою через Stripe",
    cardPaymentCopy:
      "Скористайтесь вкладками для оплати карткою чи гаманцем. Обробка від Stripe.",
    cardPaymentDueLabel: "Сума до оплати",
    payButtonLabel: "Сплатити",
    payButtonProcessing: "Обробка...",
    paymentReadyNote: "Форма оплати готова. Ваші дані шифрує Stripe.",
    paymentUnavailable: "Оплата карткою зараз недоступна. Скористайтесь іншим способом.",
    paymentSuccess: "Платіж отримано! Все готово.",
    paymentMissingKey: "Stripe не налаштований. Зв'яжіться з організатором.",
  },
};

const getPreferredLocale = () => {
  const locale = (navigator.language || "").toLowerCase();
  if (locale.startsWith("uk") || locale.startsWith("ua")) return "uk";
  if (locale.startsWith("ru")) return "ru";
  if (locale.startsWith("es")) return "es";
  return "en";
};

let activeLocale = getPreferredLocale();
let activeStrings = TRANSLATIONS[activeLocale] || TRANSLATIONS.en;

const getString = (key) =>
  (activeStrings && activeStrings[key]) || TRANSLATIONS.en[key] || "";

const applyTranslations = () => {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const text = getString(key);
    if (text) {
      el.textContent = text;
    }
  });
};

const form = document.getElementById("registrationForm");
const adultInput = document.getElementById("adultCount");
const childInput = document.getElementById("childCount");
const adultList = document.getElementById("adultList");
const childList = document.getElementById("childList");
const childTable = document.getElementById("childTable");
const statusEl = document.getElementById("status");
const successPanel = document.getElementById("successPanel");
const successTotalEl = document.getElementById("successTotal");
const primaryFirstNameEl = document.getElementById("primaryFirstName");
const primaryLastNameEl = document.getElementById("primaryLastName");
const spouseFirstNameEl = document.getElementById("spouseFirstName");
const phoneInput = document.getElementById("phone");
const countdownNumberEl = document.getElementById("countdownNumber");
const countdownTimeEl = document.getElementById("countdownTime");
const paymentForm = document.getElementById("paymentForm");
const payButton = document.getElementById("payNowButton");
const paymentStatusEl = document.getElementById("paymentStatus");
const paymentElementContainer = document.getElementById("payment-element");
const cardTotalEl = document.getElementById("cardTotal");
const cardPaymentPanel = document.getElementById("cardPayment");

let stripeInstance = null;
let stripeElements = null;
let stripePaymentElement = null;
let activeClientSecret = null;
let activePublishableKey = "";

const requiredFields = [
  { input: primaryFirstNameEl, key: "primaryFirstNameRequired" },
  { input: primaryLastNameEl, key: "lastNameRequired" },
  { input: phoneInput, key: "phoneRequired" },
];

const validateRequiredFields = () => {
  let valid = true;
  requiredFields.forEach(({ input, key }) => {
    if (!input) return;
    if (!input.value.trim()) {
      input.setCustomValidity(getString(key) || "Required");
      valid = false;
    } else {
      input.setCustomValidity("");
    }
  });
  if (!form.reportValidity()) {
    valid = false;
  }
  return valid;
};

requiredFields.forEach(({ input }) => {
  if (!input) return;
  input.addEventListener("input", () => input.setCustomValidity(""));
});

const mainScriptTag = document.querySelector('script[src$="main.js"]');
const scriptURL = mainScriptTag?.getAttribute("data-script-url") ||
  "https://script.google.com/macros/s/AKfycbwUHCsn3J4nsFwE2rrZYr7Q3VQrUq0k04CiBHXkMNUJlk38KoCZt_b5zakFX_RC_r9k/exec";
const stripePublishableKey =
  (mainScriptTag?.getAttribute("data-stripe-publishable-key") || "").trim();

const formatCurrency = (value) =>
  new Intl.NumberFormat(activeLocale, { style: "currency", currency: "USD" }).format(
    Number(value) || 0
  );

const updateTotalDisplays = (value) => {
  const formatted = formatCurrency(value);
  if (successTotalEl) {
    successTotalEl.textContent = formatted;
  }
  if (cardTotalEl) {
    cardTotalEl.textContent = formatted;
  }
};

const showPaymentStatus = (message, type = "") => {
  if (!paymentStatusEl) return;
  paymentStatusEl.textContent = message;
  paymentStatusEl.className = `status-message${type ? ` ${type}` : ""}`;
  paymentStatusEl.style.display = "block";
};

const resetPaymentUI = () => {
  activeClientSecret = null;
  if (stripePaymentElement) {
    stripePaymentElement.unmount();
    stripePaymentElement.destroy();
    stripePaymentElement = null;
  }
  if (payButton) {
    payButton.disabled = true;
    payButton.textContent = getString("payButtonLabel") || "Pay now";
  }
  if (paymentStatusEl) {
    paymentStatusEl.textContent = "";
    paymentStatusEl.className = "status-message";
    paymentStatusEl.style.display = "none";
  }
};

const getPublishableKey = () => {
  const keyCandidate =
    stripePublishableKey ||
    (typeof window !== "undefined" ? window.STRIPE_PUBLISHABLE_KEY : "") ||
    "";
  return typeof keyCandidate === "string" ? keyCandidate.trim() : "";
};

const initializeStripePayment = async (clientSecret, totalCostValue, paymentErrorMessage) => {
  try {
    if (!cardPaymentPanel || !paymentElementContainer || !payButton) return;
    resetPaymentUI();
    cardPaymentPanel.style.display = "block";

    if (paymentErrorMessage) {
      showPaymentStatus(paymentErrorMessage, "error");
      return;
    }

    if (!clientSecret) {
      showPaymentStatus(
        getString("paymentUnavailable") || "Card payments are unavailable right now.",
        "error"
      );
      return;
    }

    if (cardTotalEl) {
      cardTotalEl.textContent = formatCurrency(totalCostValue);
    }

    const publishableKey = getPublishableKey();
    if (!publishableKey) {
      showPaymentStatus(
        getString("paymentMissingKey") || "Stripe is not configured. Please contact us.",
        "error"
      );
      return;
    }

    if (typeof Stripe === "undefined") {
      showPaymentStatus(
        getString("paymentUnavailable") || "Card payments are unavailable right now.",
        "error"
      );
      return;
    }

    if (!stripeInstance || activePublishableKey !== publishableKey) {
      stripeInstance = Stripe(publishableKey);
      activePublishableKey = publishableKey;
    }

    const loader = document.getElementById("payment-loader");
    if (loader) loader.style.display = "block";
    if (paymentElementContainer) paymentElementContainer.style.display = "none";

    stripeElements = stripeInstance.elements({
      clientSecret,
      appearance: { theme: "stripe" },
    });

    const expressCheckoutElement = stripeElements.create("expressCheckout");
    expressCheckoutElement.mount("#express-checkout-element");

    stripePaymentElement = stripeElements.create("payment", {
      layout: "tabs",
      wallets: {
        applePay: "never",
        googlePay: "never",
      }
    });
    stripePaymentElement.mount("#payment-element");

    stripePaymentElement.on("ready", () => {
      if (loader) loader.style.display = "none";
      if (paymentElementContainer) paymentElementContainer.style.display = "block";
    });

    activeClientSecret = clientSecret;
    payButton.disabled = false;

  } catch (err) {
    console.error("Stripe Initialization Error:", err);
    showPaymentStatus("Failed to load payment form. Please refresh and try again.", "error");
  }
};

// Global error handler for unhandled promises (like Stripe network errors)
window.addEventListener("unhandledrejection", (event) => {
  // 1. Check for ignored errors FIRST (telemetry/fraud detection blocks)
  if (event.reason) {
    const msg = (event.reason.message || "").toLowerCase();
    const stack = (event.reason.stack || "").toLowerCase();

    // Ignore ad-blocker related errors for Stripe telemetry
    if (
      msg.includes("r.stripe.com") ||
      msg.includes("m.stripe.com") ||
      msg.includes("b.stripe.com") ||
      msg.includes("load failed") ||
      msg.includes("fetch") ||
      msg.includes("blocked")
    ) {
      // Check if it's likely a background Stripe request
      if (msg.includes("stripe") || stack.includes("stripe")) {
        event.preventDefault();
        console.warn("Suppressing ad-blocker error:", msg);
        return;
      }
    }
  }

  // 2. Log other errors for debugging
  console.error("Unhandled rejection:", event.reason);

  // 3. REMOVED: Do not show global UI alert for background network errors. 
  // Real payment errors are handled in initializeStripePayment and confirmStripePayment.
  "error"
    );
return;
  }

if (payButton) {
  payButton.disabled = true;
  payButton.textContent = getString("payButtonProcessing") || "Processing...";
}
showPaymentStatus(getString("payButtonProcessing") || "Processing...");

let confirmationResult;
try {
  confirmationResult = await stripeInstance.confirmPayment({
    elements: stripeElements,
    confirmParams: {
      return_url: window.location.href,
    },
    redirect: "if_required",
  });
} catch (err) {
  showPaymentStatus(
    err.message || "Payment could not be completed.",
    "error"
  );
  if (payButton) {
    payButton.disabled = false;
    payButton.textContent = getString("payButtonLabel") || "Pay now";
  }
  return;
}

const { error, paymentIntent } = confirmationResult;

if (error) {
  showPaymentStatus(error.message || "Payment could not be completed.", "error");
  if (payButton) {
    payButton.disabled = false;
    payButton.textContent = getString("payButtonLabel") || "Pay now";
  }
  return;
}

if (
  paymentIntent &&
  (paymentIntent.status === "succeeded" || paymentIntent.status === "processing")
) {
  // Hide the payment form
  if (successPanel) successPanel.style.display = "none";

  // Show the final success screen
  const finalSuccess = document.getElementById("finalSuccess");
  if (finalSuccess) finalSuccess.style.display = "block";

  // Show the footer with logo
  const successFooter = document.getElementById("successFooter");
  if (successFooter) successFooter.style.display = "block";

  // Scroll to it
  if (finalSuccess) finalSuccess.scrollIntoView({ behavior: "smooth" });

} else {
  showPaymentStatus(
    getString("paymentUnavailable") || "Card payments are unavailable right now.",
    "error"
  );
  if (payButton) {
    payButton.disabled = false;
    payButton.textContent = getString("payButtonLabel") || "Pay now";
  }
}
};

const getFirstName = (value) => value.trim().split(/\s+/)[0] || "";

const buildNameInputs = () => {
  const adultCount = Number(adultInput.value) || 0;
  const childCount = Number(childInput.value) || 0;

  const existingAdultValues = Array.from(adultList.querySelectorAll("input")).map(
    (input) => input.value.trim()
  );
  const existingChildValues = Array.from(childList.querySelectorAll("input")).map(
    (input) => input.value.trim()
  );

  adultList.innerHTML = "";
  childList.innerHTML = "";

  const defaultAdults = [
    getFirstName(primaryFirstNameEl.value),
    getFirstName(spouseFirstNameEl.value),
  ];

  for (let i = 0; i < adultCount; i += 1) {
    const wrapper = document.createElement("label");
    wrapper.textContent = `Adult ${i + 1}`;
    const input = document.createElement("input");
    input.type = "text";
    input.required = true;
    input.placeholder = "First name";

    const defaultValue = defaultAdults[i];
    const previousValue = existingAdultValues[i] || "";

    if (defaultValue) {
      input.value = defaultValue;
      input.disabled = true;
      input.classList.add("prefilled");
    } else {
      input.value = previousValue;
    }

    wrapper.appendChild(input);
    adultList.appendChild(wrapper);
  }

  childTable.style.display = childCount ? "block" : "none";
  for (let i = 0; i < childCount; i += 1) {
    const wrapper = document.createElement("label");
    wrapper.textContent = `Child ${i + 1}`;
    const input = document.createElement("input");
    input.type = "text";
    input.required = true;
    input.placeholder = "First name";
    input.value = existingChildValues[i] || "";
    wrapper.appendChild(input);
    childList.appendChild(wrapper);
  }
};

const enforceAdultMinimum = () => {
  const spouseFilled = Boolean(spouseFirstNameEl.value.trim());
  const minimumAdults = spouseFilled ? 2 : 1;
  adultInput.min = minimumAdults;
  let currentAdults = Number(adultInput.value) || minimumAdults;
  if (spouseFilled && currentAdults < minimumAdults) {
    currentAdults = minimumAdults;
  }
  if (!spouseFilled && currentAdults === 2) {
    currentAdults = minimumAdults;
  }
  adultInput.value = currentAdults;
  buildNameInputs();
};

const getUpcomingNewYear = () => {
  const now = new Date();
  const nextYear =
    now.getMonth() === 0 && now.getDate() === 1 ? now.getFullYear() : now.getFullYear() + 1;
  return new Date(nextYear, 0, 1);
};

const updateCountdownDisplay = () => {
  if (!countdownNumberEl) return;
  const targetDate = getUpcomingNewYear();
  const now = new Date();
  const differenceMs = targetDate.getTime() - now.getTime();
  const totalSeconds = Math.max(0, Math.floor(differenceMs / 1000));
  const secondsPerDay = 60 * 60 * 24;
  const secondsPerHour = 60 * 60;
  const secondsPerMinute = 60;

  const daysRemaining = Math.floor(totalSeconds / secondsPerDay);
  const remainderAfterDays = totalSeconds % secondsPerDay;
  const hoursRemaining = Math.floor(remainderAfterDays / secondsPerHour);
  const remainderAfterHours = remainderAfterDays % secondsPerHour;
  const minutesRemaining = Math.floor(remainderAfterHours / secondsPerMinute);
  const secondsRemaining = remainderAfterHours % secondsPerMinute;

  const nextDayText = String(daysRemaining);
  const dayLabel = getString("daysLabel") || "days";
  countdownNumberEl.textContent = `${nextDayText} ${dayLabel}`;

  if (countdownTimeEl) {
    const formatSegment = (value) => String(value).padStart(2, "0");
    const timeString = `${formatSegment(hoursRemaining)}:${formatSegment(
      minutesRemaining
    )}:${formatSegment(secondsRemaining)}`;
    countdownTimeEl.textContent = timeString;
  }
};

primaryFirstNameEl.addEventListener("input", buildNameInputs);
spouseFirstNameEl.addEventListener("input", enforceAdultMinimum);
adultInput.addEventListener("input", () => {
  if (adultInput.value === "") return;
  buildNameInputs();
});
childInput.addEventListener("input", () => {
  if (childInput.value === "") return;
  buildNameInputs();
});
if (payButton) {
  payButton.addEventListener("click", (event) => {
    event.preventDefault();
    confirmStripePayment();
  });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusEl.style.display = "none";
  statusEl.textContent = "";
  statusEl.className = "status-message";
  resetPaymentUI();

  if (!validateRequiredFields()) {
    return;
  }

  const totalCostValue =
    Number(adultInput.value || 0) * COSTS.adult + Number(childInput.value || 0) * COSTS.child;

  const payload = {
    primaryFirstName: primaryFirstNameEl.value.trim(),
    primaryLastName: primaryLastNameEl.value.trim(),
    spouseFirstName: spouseFirstNameEl.value.trim() || null,
    phone: phoneInput.value.trim(),
    adults: Number(adultInput.value) || 0,
    children: Number(childInput.value) || 0,
    adultNames: Array.from(adultList.querySelectorAll("input")).map((input) =>
      input.value.trim()
    ),
    childNames: Array.from(childList.querySelectorAll("input")).map((input) =>
      input.value.trim()
    ),
    totalCost: String(totalCostValue),
    timestamp: new Date().toISOString(),
  };

  // Show spinner
  const submitLoader = document.getElementById("submit-loader");
  if (submitLoader) submitLoader.style.display = "block";

  statusEl.textContent = "Submitting...";
  statusEl.classList.add("helper-text");
  statusEl.style.display = "block";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    let responseData = {};
    try {
      responseData = await response.json();
    } catch (parseError) {
      throw new Error("Unable to read server response.");
    }

    if (responseData.status !== "ok") {
      throw new Error(responseData.message || "Submission failed.");
    }

    form.reset();
    adultInput.value = spouseFirstNameEl.value.trim() ? 2 : 1;
    childInput.value = 0;
    buildNameInputs();

    statusEl.textContent = "";
    statusEl.className = "status-message";
    statusEl.style.display = "none";

    updateTotalDisplays(totalCostValue);
    if (successPanel) {
      successPanel.style.display = "block";
    }

    form.style.display = "none";
    await initializeStripePayment(
      responseData.clientSecret,
      totalCostValue,
      responseData.paymentError
    );
  } catch (err) {
    console.error(err);
    statusEl.textContent = `Error: ${err.message || "Unknown error"}. Please try again.`;
    statusEl.className = "status-message error";
    statusEl.style.display = "block";
    if (successPanel) {
      successPanel.style.display = "none";
    }
    resetPaymentUI();
  } finally {
    // Hide spinner
    if (submitLoader) submitLoader.style.display = "none";
  }
});

applyTranslations();
buildNameInputs();
updateCountdownDisplay();
setInterval(updateCountdownDisplay, 1000);
