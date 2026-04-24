const articles = [
  {
    title: "Como reduzir paradas não planejadas com análise de vibração",
    excerpt:
      "Um guia direto para interpretar sinais, priorizar inspeções e transformar medições em decisões de manutenção.",
    date: "2026-04-22",
    views: 1840,
    appeal: 95,
  },
  {
    title: "Checklist para especificar motores elétricos em ambientes severos",
    excerpt:
      "Fatores de serviço, grau de proteção, partida, temperatura e carga sem deixar lacunas caras no projeto.",
    date: "2026-04-20",
    views: 1620,
    appeal: 89,
  },
  {
    title: "Gêmeo digital: onde ele realmente ajuda no chão de fábrica",
    excerpt:
      "Casos práticos para separar simulação útil de painel bonito que não muda a operação.",
    date: "2026-04-17",
    views: 2140,
    appeal: 98,
  },
  {
    title: "Dimensionamento de bombas: erros comuns em curvas de sistema",
    excerpt:
      "Perdas, NPSH, ponto de operação e margem de segurança explicados sem rodeio.",
    date: "2026-04-15",
    views: 1210,
    appeal: 82,
  },
  {
    title: "CLP ou edge controller: critérios para escolher a arquitetura",
    excerpt:
      "Latência, robustez, manutenção, dados e segurança na escolha do controle industrial.",
    date: "2026-04-13",
    views: 1765,
    appeal: 91,
  },
  {
    title: "Ensaios não destrutivos: quando ultrassom vence líquido penetrante",
    excerpt:
      "Comparação por aplicação, material, custo, preparação de superfície e profundidade de falha.",
    date: "2026-03-27",
    views: 980,
    appeal: 77,
  },
  {
    title: "Como escrever um memorial de cálculo que sobrevive à obra",
    excerpt:
      "Estrutura, premissas, rastreabilidade e decisões que reduzem retrabalho na execução.",
    date: "2026-03-25",
    views: 1330,
    appeal: 84,
  },
  {
    title: "Eficiência energética: medições mínimas antes de trocar equipamentos",
    excerpt:
      "O que levantar em campo antes de prometer economia em compressores, motores e iluminação.",
    date: "2026-03-23",
    views: 1515,
    appeal: 88,
  },
  {
    title: "FMEA de processo para equipes pequenas",
    excerpt:
      "Um modelo enxuto para priorizar risco sem transformar a análise em burocracia.",
    date: "2026-02-20",
    views: 1105,
    appeal: 80,
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
            <h3>${article.title}</h3>
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
          <h3>${article.title}</h3>
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
