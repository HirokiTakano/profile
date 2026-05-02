export function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.94),rgba(15,23,42,0.86),rgba(10,10,20,0.96))]" />
      <div className="absolute inset-0 bg-radial-grid bg-[length:34px_34px] opacity-40" />
      <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute right-[-8%] top-[18%] h-96 w-96 rounded-full bg-violet-500/16 blur-3xl" />
      <div className="absolute bottom-[-18%] left-[35%] h-96 w-96 rounded-full bg-cyan-500/12 blur-3xl" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,rgba(125,211,252,0.5)_0_1px,transparent_1px),radial-gradient(circle_at_80%_20%,rgba(196,181,253,0.45)_0_1px,transparent_1px),radial-gradient(circle_at_60%_75%,rgba(34,211,238,0.4)_0_1px,transparent_1px)] [background-size:180px_180px,220px_220px,260px_260px]" />
    </div>
  );
}
