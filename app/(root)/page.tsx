import { Suspense } from "react";

import { StartupFeedSkeleton } from "@/components/PageSkeletons";
import Particles from "@/components/Particles";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { StartUpQuery } from "@/sanity/lib/query";
import { auth } from "@/auth";

const StartupFeed = async ({ query }: { query?: string }) => {
  const params = { search: query || null };
  const session = await auth();

  console.log(session?.id)
  const { data: posts } = await sanityFetch({
    query: StartUpQuery,
    params,
  });

  return (
    <section className="section-shell pt-0 sm:pt-2">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <span className="page-label">Community directory</span>

          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {query ? `Search results for "${query}"` : "All Startups"}
            </h2>

            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              {query
                ? `Showing founders and products related to "${query}".`
                : "A curated feed of founders, startup ideas, and community projects."}
            </p>
          </div>
        </div>

        <div className="surface-panel flex items-center gap-3 px-4 py-3">
          <span className="text-sm font-medium text-muted-foreground">
            Results
          </span>
          <span className="text-2xl font-semibold tracking-tight text-foreground">
            {posts.length}
          </span>
        </div>
      </div>

      {posts.length > 0 ? (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((post: StartupTypeCard) => (
            <StartupCard key={post._id} post={post} />
          ))}
        </ul>
      ) : (
        <div className="surface-panel mt-8 flex min-h-60 items-center justify-center px-6 py-12 text-center">
          <div className="max-w-md space-y-3">
            <p className="text-xl font-semibold text-foreground">
              No startups found
            </p>
            <p className="text-muted-foreground">
              Try a broader keyword or clear the current search.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  return (
    <main className="relative flex flex-1 flex-col pb-16">
      <section className="pt-6 sm:pt-8">
        <div className="section-shell pt-0 sm:pt-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-neutral-950 px-6 py-12 shadow-2xl sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute inset-0 opacity-75">
              <Particles
                className="h-full w-full"
                particleColors={["#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
              />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)]" />
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur">
                Discover startup stories
              </span>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Lets connect our soul from the start,
                <span className="block text-white/70">from the scratch</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
                You don&apos;t have to be great to start, but you have to start
                to be great.
              </p>

              <div className="w-full justify-center flex items-center">
                <SearchForm query={query} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense key={query ?? "all"} fallback={<StartupFeedSkeleton />}>
        <StartupFeed query={query} />
      </Suspense>

      <SanityLive />
    </main>
  );
};

export default page;
