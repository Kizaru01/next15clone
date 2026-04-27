import StartupForm from "@/components/StartupForm";

const page = () => {
  return (
    <main className="section-shell flex flex-1 items-center justify-center">
      <div className="surface-panel w-full max-w-3xl px-6 py-16 text-center sm:px-10">
        <span className="page-label">Create</span>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Create startup
        </h1>

        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          This route now uses the same layout shell, spacing, and typography as
          the rest of the application.
        </p>
        
      <StartupForm />
      </div>
    </main>
  );
};

export default page;
