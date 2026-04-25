const page = () => {
  return (
    <main className="section-shell flex flex-1 items-center justify-center">
      <div className="surface-panel w-full max-w-3xl px-6 py-16 text-center sm:px-10">
        <span className="page-label">Profile</span>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          User profile
        </h1>

        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          This page now shares the same reusable spacing, surface, and type
          scale as the homepage and startup detail views.
        </p>
      </div>
    </main>
  );
};

export default page;
