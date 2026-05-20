export const recalcRouteLength=(pts)=>pts.reduce((s,p,i)=>i?s+Math.abs(p.x-pts[i-1].x)+Math.abs(p.y-pts[i-1].y):0,0);
export const snapToManhattan=(p1,p2)=>[p1,{x:p2.x,y:p1.y},p2];
export function addRouteWaypoint(points,newPoint,insertAfterIndex){const out=[...points];out.splice(insertAfterIndex+1,0,newPoint);return out;}
export const updateRouteLengths=(circuits)=>circuits.map(c=>({...c,length_m:recalcRouteLength(c.route_points_m),length_with_tails_m:recalcRouteLength(c.route_points_m)+(c.symbols.length*0.3)+0.5}));
