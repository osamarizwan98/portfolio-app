function Packet({ path, dur, begin = "0s", r = 4, opacity }) {
  return (
    <circle className="pk" r={r} style={opacity ? { opacity } : undefined}>
      <animateMotion dur={dur} begin={begin} repeatCount="indefinite" path={path} />
    </circle>
  );
}

function Node({ x, y, w, h, title, sub, active, glowDelay, ring }) {
  const cx = x + w / 2;
  const rx = h > 55 ? 14 : 12;
  return (
    <g>
      <rect
        className={`nd${active ? " a" : ""}${glowDelay !== undefined ? " ng" : ""}`}
        style={glowDelay !== undefined ? { animationDelay: glowDelay } : undefined}
        x={x}
        y={y}
        width={w}
        height={h}
        rx={rx}
      />
      {ring && <rect className="rg" x={x} y={y} width={w} height={h} rx={rx} />}
      <text className="tx w" x={cx} y={sub ? y + h / 2 - 4 : y + h / 2 + 5}>
        {title}
      </text>
      {sub && (
        <text className="tx" x={cx} y={y + h / 2 + 16}>
          {sub}
        </text>
      )}
    </g>
  );
}

export function AppsDiagram() {
  const edges = ["M150 135H225", "M450 135H375", "M300 100V58", "M300 170V212"];
  return (
    <svg viewBox="0 0 600 270" role="img" aria-label="Diagram: Shopify Admin API, your app, webhooks, storefront widgets and database connected">
      {edges.map((d) => (
        <path key={d} className="ed" d={d} />
      ))}
      <Node x={10} y={100} w={140} h={70} title="Admin API" sub="GraphQL" />
      <Node x={225} y={100} w={150} h={70} title="Your app" sub="Remix · React" active glowDelay="0s" ring />
      <Node x={450} y={100} w={140} h={70} title="Webhooks" sub="events in" />
      <Node x={225} y={8} w={150} h={50} title="Storefront widgets" />
      <Node x={225} y={212} w={150} h={50} title="Database" />
      <text className="tx" x="187" y="122">auth</text>
      <text className="tx" x="412" y="122">signed</text>
      <Packet path={edges[0]} dur="1.8s" />
      <Packet path={edges[1]} dur="2.2s" begin=".5s" />
      <Packet path={edges[2]} dur="2s" begin=".9s" />
      <Packet path={edges[3]} dur="2.4s" begin=".2s" />
    </svg>
  );
}

const sections = ["Header", "Hero", "Product grid", "Footer"];

export function ThemesDiagram() {
  return (
    <div className="tm" role="img" aria-label="Diagram: Shopify theme editor with header, hero, product grid and footer sections">
      <div className="browser-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span className="mono ml-2.5 truncate text-[11px]">Theme editor · Online Store 2.0</span>
      </div>
      <div className="tm-body" aria-hidden="true">
        <div className="tm-side">
          {sections.map((name, i) => (
            <div key={name} className="tm-item" style={{ "--s": `${i * 2}s` }}>
              {name}
            </div>
          ))}
        </div>
        <div className="tm-page">
          <div className="blk justify-between" style={{ "--b": ".2s", "--s": "0s" }}>
            <span className="bb w-[60px] bg-accent" />
            <span className="flex gap-2">
              <span className="bb w-[30px]" />
              <span className="bb w-[30px]" />
              <span className="bb w-[30px]" />
            </span>
          </div>
          <div className="blk flex-col items-start gap-2 p-4" style={{ "--b": ".7s", "--s": "2s" }}>
            <span className="bb h-3 w-[62%]" />
            <span className="bb w-[40%]" />
            <span className="bb mt-1.5 h-5 w-[70px] rounded-full bg-accent" />
          </div>
          <div className="blk justify-between" style={{ "--b": "1.2s", "--s": "4s" }}>
            <span className="h-[58px] flex-1 rounded-lg bg-[#16201b]" />
            <span className="h-[58px] flex-1 rounded-lg bg-[#16201b]" />
            <span className="h-[58px] flex-1 rounded-lg bg-[#16201b]" />
          </div>
          <div className="blk justify-between" style={{ "--b": "1.7s", "--s": "6s" }}>
            <span className="bb w-[90px]" />
            <span className="bb w-[60px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

const terminal = [
  ["$ POST /api/orders", "→ 201 Created"],
  ["verify auth", "✓"],
  ["validate payload", "✓"],
  ["db.orders.insertOne()", "✓"],
  ["$ GET /api/products", "→ 200 OK"],
];

export function FullStackDiagram() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-[18px]">
      <div className="term" role="img" aria-label="Terminal: an API request is authenticated, validated and stored">
        {terminal.map(([cmd, ok], j) => (
          <span key={cmd} className="tl" style={{ "--j": j }} aria-hidden="true">
            {cmd} <span className="ok">{ok}</span>
          </span>
        ))}
        <span className="tl" style={{ "--j": terminal.length }} aria-hidden="true">
          <span className="cur" />
        </span>
      </div>
      <svg viewBox="0 0 250 280" className="h-auto w-[170px] flex-none sm:w-[200px]" role="img" aria-label="Diagram: frontend, API and database layers">
        <path className="ed" d="M215 45V235" />
        <path className="ed" d="M190 45H215M190 140H215M190 235H215" />
        <Node x={8} y={12} w={182} h={66} title="Frontend" sub="React · Next.js" active glowDelay="0s" />
        <Node x={8} y={107} w={182} h={66} title="API" sub="Node · Express" glowDelay="2s" />
        <Node x={8} y={202} w={182} h={66} title="Database" sub="MongoDB · PostgreSQL" glowDelay="4s" />
        <Packet path="M215 45V235" dur="2.6s" r={4.5} />
        <Packet path="M215 235V45" dur="2.6s" begin="1.3s" r={4.5} opacity={0.55} />
      </svg>
    </div>
  );
}

export function AiDiagram() {
  const edges = [
    ["M120 135H170", "1.6s", "0s"],
    ["M300 135C325 135 325 70 350 70", "2s", ".6s"],
    ["M300 135C325 135 325 200 350 200", "2s", "1.1s"],
    ["M460 70C485 70 485 135 505 135", "1.8s", "1.6s"],
    ["M460 200C485 200 485 135 505 135", "1.8s", "2.1s"],
  ];
  return (
    <svg viewBox="0 0 600 270" role="img" aria-label="Diagram: trigger, AI agent, API call and notification workflow">
      {edges.map(([d]) => (
        <path key={d} className="ed" d={d} />
      ))}
      <Node x={10} y={105} w={110} h={60} title="Trigger" sub="webhook" glowDelay="0s" />
      <Node x={170} y={100} w={130} h={70} title="AI agent" sub="LLM · RAG" active ring />
      <Node x={350} y={40} w={110} h={60} title="API call" sub="n8n node" glowDelay="2s" />
      <Node x={350} y={170} w={110} h={60} title="Notify" sub="message" glowDelay="3s" />
      <Node x={505} y={105} w={85} h={60} title="Done" sub="logged" glowDelay="4.5s" />
      {edges.map(([d, dur, begin]) => (
        <Packet key={d} path={d} dur={dur} begin={begin} />
      ))}
    </svg>
  );
}
