const articles = [
  {
    title:
      "Motores hidráulicos e pneumáticos: princípios, aplicações e comparação com motores elétricos",
    excerpt:
      "Entenda como motores hidráulicos e pneumáticos convertem energia de fluidos em movimento e quando eles são mais indicados que motores elétricos.",
    date: "2026-04-25",
    url: "artigos/motores-hidraulicos-pneumaticos.html",
    views: 1180,
    appeal: 88,
  },
  {
    title: "Estrutura interna e funcionamento de um inversor de frequência (VFD)",
    excerpt:
      "Veja como HMI, placa de controle, barramento DC, capacitores, IGBTs e sistema de refrigeração trabalham juntos para controlar motores elétricos.",
    date: "2026-04-23",
    url: "artigos/inversor-de-frequencia-vfd.html",
    views: 1320,
    appeal: 92,
  },
  {
    title: "FMEA de Processo (PFMEA): análise de modos de falha e efeitos para gestão de riscos",
    excerpt:
      "Entenda como identificar falhas potenciais, avaliar severidade, ocorrência e detecção, calcular o RPN e priorizar ações preventivas.",
    date: "2026-04-24",
    url: "artigos/fmea-de-processo-pfmea.html",
    views: 1840,
    appeal: 95,
  },
];

const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const articleList = document.querySelector("#articleList");
const monthList = document.querySelector("#monthList");
const featuredList = document.querySelector("#featuredList");
const feedTitle = document.querySelector("#feedTitle");
const clearFilter = document.querySelector("#clearFilter");

let activePeriod = null;

function formatDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: monthNames[date.getMonth()].slice(0, 3),
    year: date.getFullYear(),
    long: `${date.getDate()} de ${monthNames[date.getMonth()]} de ${date.getFullYear()}`,
  };
}

function getPeriod(article) {
  const date = new Date(`${article.date}T12:00:00`);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function getPeriodLabel(period) {
  const [year, month] = period.split("-").map(Number);
  return `${monthNames[month - 1]} / ${year}`;
}

function renderMonths() {
  const periods = [...new Set(articles.map(getPeriod))].sort().reverse();

  monthList.innerHTML = periods
    .map((period) => {
      const count = articles.filter((article) => getPeriod(article) === period).length;
      const activeClass = activePeriod === period ? "active" : "";
      return `
        <button class="month-button ${activeClass}" type="button" data-period="${period}">
          ${getPeriodLabel(period)}
          <span>Mostrar ${count} artigos</span>
        </button>
      `;
    })
    .join("");
}

function renderArticles() {
  const visibleArticles = activePeriod
    ? articles.filter((article) => getPeriod(article) === activePeriod)
    : articles;

  feedTitle.textContent = activePeriod
    ? `Artigos de ${getPeriodLabel(activePeriod)}`
    : "Últimos artigos";

  articleList.innerHTML = visibleArticles
    .map((article) => {
      const date = formatDate(article.date);
      return `
        <article class="article-card">
          <time class="article-date" datetime="${article.date}" aria-label="${date.long}">
            <strong>${date.day}</strong>
            <span>${date.month} ${date.year}</span>
          </time>
          <div>
            <h3><a href="${article.url}">${article.title}</a></h3>
            <p>${article.excerpt}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderFeatured() {
  const featured = [...articles]
    .sort((a, b) => b.views + b.appeal * 12 - (a.views + a.appeal * 12))
    .slice(0, 4);

  featuredList.innerHTML = featured
    .map(
      (article) => `
        <article class="featured-card">
          <h3><a href="${article.url}">${article.title}</a></h3>
          <p>${article.excerpt}</p>
        </article>
      `
    )
    .join("");
}

monthList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-period]");
  if (!button) return;

  activePeriod = button.dataset.period;
  renderMonths();
  renderArticles();
});

clearFilter.addEventListener("click", () => {
  activePeriod = null;
  renderMonths();
  renderArticles();
});

renderMonths();
renderArticles();
renderFeatured();
