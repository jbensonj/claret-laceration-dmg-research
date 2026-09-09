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
  squareDisplayedValuePrediction: 2068 * 1.5 ** 2,
  marginalGainExamples: [1.5, 3].map(l => ({
    startingBonus: l, addedBonus: 0.25,
    beforeDoubleFactor: (1 + l) ** 2,
    afterDoubleFactor: (1 + l + 0.25) ** 2,
    relativeDoubleHitGainPercent: (((1 + l + 0.25) / (1 + l)) ** 2 - 1) * 100,
    scope: 'Hypothetical fixed additive bonus applied at both stages; excludes event probabilities, uptime, opportunity costs and rotation damage.'
  })),
  nearestRoundingBaseInterval: nearest,
  floorRoundingBaseInterval: floor,
  commonBaseCompatibleWithFinalFloor: floor.lowInclusive < floor.highExclusive,
  illustrativeBase: 2067.9,
  illustrativeRoundedTiers: factors.map(f => Math.round(2067.9 * f)),
  assumptions: ['Same underlying unrounded base for all three tiers', 'Only final rounding', 'Fixed 150% Laceration bonus', 'No varying damage modifiers'],
  limitation: 'This is a compatibility calculation fitted to observations, not an absolute-damage prediction or a proof of the engine rounding rule.'
}, null, 2));
