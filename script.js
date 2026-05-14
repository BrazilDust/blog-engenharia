const articles = [
  {
    title: "Simulador SCADA: sistema de bombeamento e distribuição de água",
    excerpt:
      "Interaja com um painel SCADA com bomba, VFD, PID, válvulas, alarmes e tendências de pressão em um sistema de distribuição de água.",
    date: "2026-05-14",
    url: "simuladores/sistema-bombeamento-agua.html",
    views: 660,
    appeal: 94,
  },
  {
    title: "Introdução ao controle de processos e variáveis industriais",
    excerpt:
      "Entenda variáveis industriais, sensores, controladores, elementos finais, válvulas atuadas e controle de nível em tanque.",
    date: "2026-05-13",
    url: "artigos/introducao-controle-processos-variaveis.html",
    views: 680,
    appeal: 91,
  },
  {
    title: "Indicação de erros na CPU S7: LEDs de status e diagnóstico visual",
    excerpt:
      "Entenda como interpretar SF, BF, MAINT, DC 5V, FORCE, RUN e STOP para diagnosticar falhas em CPUs Siemens S7.",
    date: "2026-05-11",
    url: "artigos/indicacao-erros-cpu-s7.html",
    views: 700,
    appeal: 90,
  },
  {
    title: "Controle de processos industriais: o que é controle de processos?",
    excerpt:
      "Introdução aos processos industriais, variáveis de processo, malha fechada, medição, decisão, ação, segurança e confiabilidade.",
    date: "2026-05-10",
    url: "artigos/controle-de-processo.html",
    views: 720,
    appeal: 91,
  },
  {
    title: "Simulador PID: controle de processo em malha fechada",
    excerpt:
      "Ajuste Kp, Ki, Kd e parâmetros da planta para observar PV, SP, saída do controlador, overshoot e tempo de estabilização.",
    date: "2026-05-08",
    url: "simuladores/controle-pid-processo.html",
    views: 740,
    appeal: 93,
  },
  {
    title: "Portas de comunicação da CPU do CLP S7: redes e protocolos industriais",
    excerpt:
      "Entenda as portas MPI, DP, PTP e PN das CPUs Siemens S7, seus protocolos, meios físicos e aplicações em arquiteturas industriais.",
    date: "2026-05-07",
    url: "artigos/portas-comunicacao-cpu-plc.html",
    views: 760,
    appeal: 90,
  },
  {
    title: "Simulador: controle ON/OFF com histerese",
    excerpt:
      "Ajuste set point, histerese, potência, perda térmica e temperatura ambiente para observar o chaveamento ON/OFF em malha fechada.",
    date: "2026-05-04",
    url: "simuladores/controle-on-off-histerese.html",
    views: 780,
    appeal: 92,
  },
  {
    title: "Retentive Memory: memória remanente da CPU S7",
    excerpt:
      "Entenda como a Memória Remanente preserva contadores, setpoints, merkers e dados críticos mesmo após falta de energia.",
    date: "2026-05-03",
    url: "artigos/retentive-memory-plc.html",
    views: 820,
    appeal: 88,
  },
  {
    title: "System Memory: memória do sistema e endereçamento no CLP S7",
    excerpt:
      "Entenda como a System Memory apoia o endereçamento, as tabelas de imagem de processo, merkers, temporizadores e contadores na CPU S7.",
    date: "2026-05-02",
    url: "artigos/system-memory-plc.html",
    views: 840,
    appeal: 88,
  },
  {
    title: "Memória de Trabalho do CLP S7: funcionamento e relação com a Memória de Carga",
    excerpt:
      "Entenda como a Working Memory executa a parte ativa do programa no CLP S7 e como ela se relaciona com a Load Memory durante o ciclo de varredura.",
    date: "2026-05-01",
    url: "artigos/working-memory-plc.html",
    views: 860,
    appeal: 88,
  },
  {
    title: "Memória do CLP S7: memória de carga e o cartão MMC",
    excerpt:
      "Entenda a Load Memory nos PLCs S7, a evolução de RAM interna para MMC externo, retenção sem energia e substituição de CPUs em campo.",
    date: "2026-04-30",
    url: "artigos/load-memory-plc.html",
    views: 890,
    appeal: 88,
  },
  {
    title: "Tipos de memória e sua importância para a CPU do PLC",
    excerpt:
      "Fundamentos de RAM, ROM, EEPROM, EEPROM elétrica e Flash EEPROM para compreender a memória usada na CPU de CLPs.",
    date: "2026-04-29",
    url: "artigos/memorias-plc.html",
    views: 920,
    appeal: 88,
  },
  {
    title: "CPU de PLC: funções, categorias e elementos de interface",
    excerpt:
      "Entenda o papel da CPU no CLP, o ciclo de varredura, diferenças entre CPUs antigas e novas, LEDs, comunicação, memória e critérios de seleção.",
    date: "2026-04-28",
    url: "artigos/cpu-de-plc.html",
    views: 960,
    appeal: 89,
  },
  {
    title: "Arquitetura de PLCs e módulos do sistema",
    excerpt:
      "Módulos de um CLP: rack, fonte de alimentação, CPU, entradas, saídas, módulos de função, comunicação e racks de expansão.",
    date: "2026-04-27",
    url: "artigos/modulos-de-um-plc.html",
    views: 980,
    appeal: 87,
  },
  {
    title:
      "Sensores de proximidade na automação industrial: indutivos, capacitivos e PIR",
    excerpt:
      "Veja como escolher sensores indutivos, capacitivos e PIR conforme material detectado, ambiente de instalação, alcance e integração com CLPs.",
    date: "2026-04-27",
    url: "artigos/sensores-proximidade-automacao.html",
    views: 1040,
    appeal: 90,
  },
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
const toolList = document.querySelector("#toolList");
const feedTitle = document.querySelector("#feedTitle");
const clearFilter = document.querySelector("#clearFilter");

let activePeriod = null;
let activeToolCategory = null;

const toolLinks = [
  {
    category: "simuladores",
    title: "Simulador SCADA: bombeamento de água",
    excerpt: "Painel de distribuição com bomba, VFD, PID, válvulas, consumidores, alarmes e tendências.",
    url: "simuladores/sistema-bombeamento-agua.html",
  },
  {
    category: "simuladores",
    title: "Simulador PID: controle de processo",
    excerpt: "Malha fechada com Kp, Ki, Kd, planta de segunda ordem e atraso de transporte.",
    url: "simuladores/controle-pid-processo.html",
  },
  {
    category: "simuladores",
    title: "Simulador ON/OFF com histerese",
    excerpt: "Controle Bang-Bang com banda morta, Schmitt Trigger e modelo térmico.",
    url: "simuladores/controle-on-off-histerese.html",
  },
];

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
  const visibleArticles = activeToolCategory
    ? articles.filter((article) => article.url.startsWith(`${activeToolCategory}/`))
    : activePeriod
      ? articles.filter((article) => getPeriod(article) === activePeriod)
      : articles;

  feedTitle.textContent = activeToolCategory
    ? "Ferramentas: simuladores"
    : activePeriod
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
    .slice(0, 2);

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

function renderTools() {
  const visibleTools = toolLinks.filter((tool) => tool.category === "simuladores");

  toolList.innerHTML = visibleTools
    .map(
      (tool) => `
        <article class="tool-card">
          <h3><a href="${tool.url}">${tool.title}</a></h3>
          <p>${tool.excerpt}</p>
        </article>
      `
    )
    .join("");
}

monthList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-period]");
  if (!button) return;

  activePeriod = button.dataset.period;
  activeToolCategory = null;
  renderMonths();
  renderArticles();
});

clearFilter.addEventListener("click", () => {
  activePeriod = null;
  activeToolCategory = null;
  renderMonths();
  renderArticles();
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tool-filter]");
  if (!button) return;

  activeToolCategory = button.dataset.toolFilter;
  activePeriod = null;
  renderMonths();
  renderArticles();
});

renderMonths();
renderArticles();
renderFeatured();
renderTools();
