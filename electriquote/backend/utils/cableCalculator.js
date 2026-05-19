export const manhattanDistance = (p1, p2) => Math.abs(p2.x - p1.x) + Math.abs(p2.y - p1.y);
export const routeLength = (routePoints = []) => routePoints.slice(1).reduce((s, p, i) => s + manhattanDistance(routePoints[i], p), 0);
export const totalCircuitLength = (circuit) => routeLength(circuit.route_points_m || []) + ((circuit.symbols || []).length * 0.3) + 0.5;
const table = { '1.5': { LK: 1.2, UK: 1.8, US: 1.5, AU: 1.6 }, '2.5': { LK: 1.8, UK: 2.5, US: 2.2, AU: 2.4 }, '4.0': { LK: 2.8, UK: 3.8, US: 3.2, AU: 3.6 }, '6.0': { LK: 4.2, UK: 5.5, US: 4.8, AU: 5.2 }, '10': { LK: 6.5, UK: 8.2, US: 7.5, AU: 8 } };
export const cableCostPerMetre = (csaMm2, country='LK') => (table[String(csaMm2)]?.[country] ?? table[String(csaMm2)]?.LK ?? 0);
export const totalCableCost = (circuits=[], country='LK') => circuits.reduce((sum, c) => sum + totalCircuitLength(c) * cableCostPerMetre(c.cable_csa_mm2, country) * 1.1, 0);
