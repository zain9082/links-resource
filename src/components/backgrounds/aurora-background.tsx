export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg-900" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* Aurora blobs */}
      <div className="absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-purple/20 blur-[120px] animate-aurora" />
      <div
        className="absolute -right-40 top-20 h-[36rem] w-[36rem] rounded-full bg-blue/20 blur-[120px] animate-aurora"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full bg-pink/15 blur-[120px] animate-aurora"
        style={{ animationDelay: "-12s" }}
      />
      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg-900 to-transparent" />
    </div>
  );
}
