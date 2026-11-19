const buttons = document.querySelectorAll(".filters button");
const rows = document.querySelectorAll(".index li");

for (const button of buttons) {
  button.addEventListener("click", () => {
    const filter = button.dataset.f;
    for (const other of buttons) other.setAttribute("aria-pressed", String(other === button));
    for (const row of rows) row.hidden = filter !== "all" && row.dataset.c !== filter;
  });
}
