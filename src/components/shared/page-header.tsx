export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="container-wide pt-32 text-center sm:pt-36">
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-purple-2">
          {eyebrow}
        </span>
      )}
      <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-muted">{subtitle}</p>
      )}
    </div>
  );
}
