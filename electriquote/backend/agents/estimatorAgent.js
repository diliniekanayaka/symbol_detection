export function estimateCost(features){
  const regional={colombo:1.2,kandy:1.05,galle:1,jaffna:0.95,negombo:0.92};
  const complexity={low:0.75,medium:1,high:1.45};
  const wiring={concealed_conduit:0.18,surface_conduit:0,trunking:0.12,armoured:0.25};
  const base=(features.floorAreaM2||100)*22;
  const total=base*(regional[features.region||'galle']||1)*(complexity[features.complexity||'medium']||1)*(1+(wiring[features.wiringMethod||'surface_conduit']||0));
  const inferred=(features.inferredCount||0);
  return {total_usd:+total.toFixed(2),confidence:Math.max(60,95-inferred*3)};
}
