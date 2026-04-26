import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn, formartDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { StartUpQueryId } from "@/sanity/lib/query";
import markdownit from 'markdown-it'
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";

const md = markdownit();
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const posts = await client.fetch(StartUpQueryId, { id });
  const parsedContent = md.render(posts?.pitch || '')
  return (
    <main className="pb-16">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 pb-0">
        <div className="surface-panel relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.05),transparent_32%)]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <span className="page-label">{formartDate(posts?._createdAt)}</span>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {posts.title}
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              {posts.description}
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pb-0">
        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-xl ring-1 ring-black/5">
          {posts.image && (
            <Image
              src={posts.image}
              alt={posts.title ?? "Startup image"}
              height={400}
              width={400}
              className="h-auto max-h-[620px] w-full object-cover"
            />
          )}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
          <Link
              href={`/user/${posts.author?._id}`}
              className="rounded-[1.75rem] border border-black/5 bg-white/80 shadow-lg ring-1 ring-black/5 backdrop-blur flex items-center gap-4 p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
              <Image
              src={posts.author.image}
              alt={posts.author.name}
              width={200}
              height={200}
              className="h-16 w-16 rounded-2xl object-cover ring-1 ring-black/5"
              />

              <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Founder
                  </p>
                  <p className="mt-2 truncate text-2xl font-semibold tracking-tight text-foreground">
                      {posts.author.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                      @{posts.author.username}
                  </p>
              </div>
              <span
              className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "pointer-events-none absolute top-10 right-5"
              )}
              >
              {posts.category}
              </span>
          </Link>
        </div>
        <h3 className="text-4xl font-bold mt-4 ml-2 ">
          Pitch Details
        </h3>
        {parsedContent ? (
          <article className="mt-4 ml-6 p max-w-4xl break-all"
            dangerouslySetInnerHTML={{ __html: parsedContent}}
          />
        ) : (
          <p className="text-black text-sm font-normal">No details provided</p>
        )}
      </section>
      <hr className="border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto"/>

      <Suspense fallback={<Skeleton className="view-skeleton"/>}>
        <View id={id}/>
      </Suspense>
    </main>
  );
};


export default page