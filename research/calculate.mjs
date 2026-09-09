// Run: node research/calculate.mjs
// Displayed observations are not assumed to be unrounded game values.
const observations = [2068, 5170, 12924];
const factors = [1, 2.5, 6.25];
const nearestIntervals = observations.map((d, i) => [(d - 0.5) / factors[i], (d + 0.5) / factors[i]]);
const floorIntervals = observations.map((d, i) => [d / factors[i], (d + 1) / factors[i]]);
const intersect = intervals => ({ lowInclusive: Math.max(...intervals.map(x => x[0])), highExclusive: Math.min(...intervals.map(x => x[1])) });
const nearest = intersect(nearestIntervals), floor = intersect(floorIntervals);
console.log(JSON.stringify({
  withinClipRatios: { A: 5170 / 2068, B: 12924 / 5170 },
  crossClipRatio: 12924 / 2068,
  displayedAnchorPredictions: factors.map(f => 2068 * f),
  additiveFinalPrediction: 2068 * (1 + 2 * 1.5),
  nearestRoundingBaseInterval: nearest,
  floorRoundingBaseInterval: floor,
  commonBaseCompatibleWithFinalFloor: floor.lowInclusive < floor.highExclusive,
  illustrativeBase: 2067.9,
  illustrativeRoundedTiers: factors.map(f => Math.round(2067.9 * f)),
  assumptions: ['Same underlying unrounded base for all three tiers', 'Only final rounding', 'Fixed 150% Laceration bonus', 'No varying damage modifiers'],
  limitation: 'This is a compatibility calculation fitted to observations, not an absolute-damage prediction or a proof of the engine rounding rule.'
}, null, 2));
