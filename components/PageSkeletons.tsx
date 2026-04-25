import { SearchFormSkeleton } from "@/components/SearchForm";
import { StartupCardListSkeleton } from "@/components/StartupCard";
import { ButtonSkeleton } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const StartupFeedSkeleton = () => {
  return (
    <section className="section-shell pt-0 sm:pt-2" aria-label="Loading startups">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <Skeleton className="h-8 w-56 rounded-full bg-white/80" />

          <div className="space-y-3">
            <Skeleton className="h-10 w-72 max-w-full rounded-xl" />
            <Skeleton className="h-5 w-[34rem] max-w-full rounded-full" />
            <Skeleton className="h-5 w-80 max-w-full rounded-full" />
          </div>
        </div>

        <div className="surface-panel flex items-center gap-3 px-4 py-3">
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-8 w-10 rounded-xl" />
        </div>
      </div>

      <StartupCardListSkeleton count={6} />
    </section>
  );
};

const HomePageSkeleton = () => {
  return (
    <main className="relative flex flex-1 flex-col pb-16" aria-label="Loading page">
      <section className="pt-6 sm:pt-8">
        <div className="section-shell pt-0 sm:pt-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-neutral-950 px-6 py-12 shadow-2xl sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)]" />

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
              <Skeleton className="h-8 w-60 rounded-full bg-white/10" />

              <div className="mt-6 w-full space-y-3">
                <Skeleton className="mx-auto h-12 w-[42rem] max-w-full rounded-2xl bg-white/10" />
                <Skeleton className="mx-auto h-12 w-[28rem] max-w-full rounded-2xl bg-white/10" />
              </div>

              <div className="mt-6 w-full space-y-2">
                <Skeleton className="mx-auto h-5 w-[34rem] max-w-full rounded-full bg-white/10" />
                <Skeleton className="mx-auto h-5 w-80 max-w-full rounded-full bg-white/10" />
              </div>

              <div className="flex w-full items-center justify-center">
                <SearchFormSkeleton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StartupFeedSkeleton />
    </main>
  );
};

const StartupDetailSkeleton = () => {
  return (
    <main className="pb-16" aria-label="Loading startup">
      <section className="section-shell pb-0">
        <div className="surface-panel relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
          <div className="relative mx-auto max-w-4xl text-center">
            <Skeleton className="mx-auto h-8 w-44 rounded-full bg-white/80" />
            <Skeleton className="mx-auto mt-5 h-12 w-[40rem] max-w-full rounded-2xl" />
            <Skeleton className="mx-auto mt-3 h-12 w-[28rem] max-w-full rounded-2xl" />
            <Skeleton className="mx-auto mt-5 h-5 w-[34rem] max-w-full rounded-full" />
            <Skeleton className="mx-auto mt-2 h-5 w-80 max-w-full rounded-full" />
          </div>
        </div>
      </section>

      <section className="section-shell pb-0">
        <Skeleton className="h-[360px] w-full rounded-[2rem] sm:h-[480px]" />
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="surface-panel relative flex items-center gap-4 p-5">
            <Skeleton className="h-16 w-16 rounded-2xl" />

            <div className="min-w-0 flex-1 space-y-3">
              <Skeleton className="h-4 w-24 rounded-full" />
              <Skeleton className="h-7 w-56 max-w-full rounded-xl" />
              <Skeleton className="h-4 w-36 rounded-full" />
            </div>

            <ButtonSkeleton
              size="sm"
              className="absolute right-5 top-10 hidden w-24 sm:inline-flex"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const SimplePanelSkeleton = () => {
  return (
    <main className="section-shell flex flex-1 items-center justify-center" aria-label="Loading page">
      <div className="surface-panel w-full max-w-3xl px-6 py-16 text-center sm:px-10">
        <Skeleton className="mx-auto h-8 w-28 rounded-full bg-white/80" />
        <Skeleton className="mx-auto mt-5 h-10 w-72 max-w-full rounded-2xl" />
        <Skeleton className="mx-auto mt-4 h-5 w-[30rem] max-w-full rounded-full" />
        <Skeleton className="mx-auto mt-2 h-5 w-80 max-w-full rounded-full" />
      </div>
    </main>
  );
};

export {
  HomePageSkeleton,
  SimplePanelSkeleton,
  StartupDetailSkeleton,
  StartupFeedSkeleton,
};
