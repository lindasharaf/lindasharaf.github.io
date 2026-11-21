// Linda Sharaf portfolio: two small behaviours, nothing else.

// 1. Nav turns black once you scroll past the burgundy hero.
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");

if (nav && hero && "IntersectionObserver" in window) {
  new IntersectionObserver(
    ([entry]) => nav.classList.toggle("scrolled", !entry.isIntersecting),
    { rootMargin: "-64px 0px 0px 0px" }
  ).observe(hero);
}

// 2. Contact form sends through FormSubmit without leaving the page.
//    If JavaScript is off, the form still works as a normal POST.
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    button.textContent = "Sending...";
    statusEl.className = "form-status";
    statusEl.textContent = "";

    try {
      const response = await fetch("https://formsubmit.co/ajax/lindasharaf@hotmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === "false" || result.success === false) {
        throw new Error(result.message || "Request failed");
      }
      form.reset();
      statusEl.classList.add("ok");
      statusEl.textContent = "Message sent. I'll reply to the email you gave.";
    } catch (error) {
      statusEl.classList.add("err");
      statusEl.innerHTML =
        'The message could not be sent. Email me directly at <a href="mailto:lindasharaf@hotmail.com">lindasharaf@hotmail.com</a>.';
    } finally {
      button.disabled = false;
      button.textContent = "Send message";
    }
  });
}
