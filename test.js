// test helper for SuggestButton local development
// Exposes a simple suggestion generator used during UI iterations.
export function generateSuggestions(seed = '') {
  const base = [
    "I appreciate your effort — could you clarify the last point?",
    "Thanks for sharing — one thing I liked was the structure.",
    "Could you expand a bit on how this affects the user?",
    "Nice work! Maybe add a short example to illustrate.",
    "I noticed a minor typo in the second paragraph.",
  ];
  if (!seed) return base.slice(0, 3);
  // deterministic pseudo-random pick based on seed string
  let idx = 0;
  for (let i = 0; i < seed.length; i++) idx = (idx * 31 + seed.charCodeAt(i)) >>> 0;
  return [
    base[idx % base.length],
    base[(idx + 1) % base.length],
    base[(idx + 2) % base.length],
  ];
}
