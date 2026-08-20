"use client";

export default function LineChart({ data = [], labels = [] }) {
  const chartData = data.length > 0 ? data : [30, 45, 35, 50, 40, 60, 55, 70, 65, 80, 75, 90];
  const chartLabels = labels.length > 0 ? labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const width = 800;
  const height = 300;
  const padding = { top: 20, right: 20, bottom: 40, left: 50 };

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxValue = Math.max(...chartData);
  const minValue = Math.min(...chartData) * 0.8;
  const range = maxValue - minValue;

  const points = chartData.map((value, index) => {
    const x = padding.left + (index / (chartData.length - 1)) * chartWidth;
    const y = padding.top + chartHeight - ((value - minValue) / range) * chartHeight;
    return { x, y, value };
  });

  // Smooth curve using cubic bezier
  const smoothPath = (pts) => {
    if (pts.length < 2) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(0, i - 1)];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[Math.min(pts.length - 1, i + 2)];
      const tension = 0.3;
      const cp1x = p1.x + (p2.x - p0.x) * tension;
      const cp1y = p1.y + (p2.y - p0.y) * tension;
      const cp2x = p2.x - (p3.x - p1.x) * tension;
      const cp2y = p2.y - (p3.y - p1.y) * tension;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  };

  const pathD = smoothPath(points);

  const areaD = `${pathD} L ${points[points.length - 1].x} ${padding.top + chartHeight} L ${points[0].x} ${padding.top + chartHeight} Z`;

  const gridLines = 5;
  const gridValues = Array.from({ length: gridLines }, (_, i) => {
    const value = minValue + (range / (gridLines - 1)) * i;
    const y = padding.top + chartHeight - ((value - minValue) / range) * chartHeight;
    return { value: Math.round(value), y };
  });

  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-900">Local Search Visibility</h3>
          <p className="text-xs text-zinc-500 mt-0.5">Aggregate visibility across all client portfolios</p>
        </div>
        <div className="flex items-center gap-1 bg-zinc-100 rounded-lg p-1">
          <button className="px-3 py-1 text-xs font-medium rounded-md bg-white text-zinc-900 shadow-sm">30D</button>
          <button className="px-3 py-1 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-900 transition-colors">90D</button>
          <button className="px-3 py-1 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-900 transition-colors">1Y</button>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full flex-1">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4648D4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4648D4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {gridValues.map((grid, index) => (
          <g key={index}>
            <line
              x1={padding.left}
              y1={grid.y}
              x2={width - padding.right}
              y2={grid.y}
              stroke="#E4E4E7"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <text
              x={padding.left - 10}
              y={grid.y + 4}
              textAnchor="end"
              fill="#71717A"
              fontSize="12"
            >
              {grid.value}
            </text>
          </g>
        ))}

        {chartLabels.map((label, index) => {
          const x = padding.left + (index / (chartLabels.length - 1)) * chartWidth;
          return (
            <text
              key={index}
              x={x}
              y={height - 10}
              textAnchor="middle"
              fill="#71717A"
              fontSize="12"
            >
              {label}
            </text>
          );
        })}

        <path d={areaD} fill="url(#chartGradient)" />

        <path
          d={pathD}
          fill="none"
          stroke="#4648D4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="5"
            fill="#4648D4"
            stroke="white"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
}
