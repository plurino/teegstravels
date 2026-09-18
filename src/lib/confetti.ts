import confetti from 'canvas-confetti';

export function fireSupportConfetti() {
  if (typeof window === 'undefined') return;

  confetti({
    particleCount: 50,
    spread: 65,
    origin: { y: 0.7 },
    colors: ['#f59e0b', '#fb7185', '#38bdf8', '#10b981', '#fcd34d'],
    disableForReducedMotion: true,
    scalar: 1.1,
  });
}
