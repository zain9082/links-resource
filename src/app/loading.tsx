export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative size-16">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-purple border-r-blue" />
        <div className="absolute inset-2 animate-pulse rounded-full bg-gradient-purple opacity-40 blur-md" />
      </div>
    </div>
  );
}
