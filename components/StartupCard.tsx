import Image from "next/image";
import Link from "next/link";
import { EyeIcon } from "lucide-react";

import { ButtonSkeleton, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn, formartDate } from "@/lib/utils";
import { Startup, Author } from "@/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className="group list-none">
      <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/5 bg-white/90 p-5 shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl">
        <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
          <p className="rounded-full bg-secondary px-3 py-1 font-medium text-foreground/70">
            {formartDate(_createdAt)}
          </p>

          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 font-medium text-foreground/80">
            <EyeIcon className="size-4 text-foreground/60" />
            <span>{views}</span>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="flex-1">
            <Link href={`/user/${author?._id}`}>
              <span className="text-sm font-medium text-muted-foreground hover:text-foreground">
                {author?.name}
              </span>
            </Link>

            <Link href={`/start-up/${_id}`}>
              <h3 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-foreground">
                {title}
              </h3>
            </Link>
          </div>

          <Link href={`/user/${_id}`}>
            <Image
              src={author?.image ?? ""}
              alt={author?.name ?? ""}
              height={200}
              width={200}
              className="h-14 w-14 rounded-2xl object-cover ring-1 ring-black/5 transition duration-300 group-hover:scale-[1.03]"
            />
          </Link>
        </div>

        <Link href="/" className="mt-4 block">
          <p className="line-clamp-1 text-sm leading-6 text-muted-foreground sm:text-base">
            {description}
          </p>

          <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-black/5 bg-secondary">
            <Image
              src={image ?? ""}
              alt={author?.name ?? ""}
              width={400}
              height={400}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        <div className="mt-6 flex items-center justify-between gap-3">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "px-4 text-[11px] font-semibold uppercase tracking-[0.18em]"
            )}
          >
            {category}
          </Link>

          <Link href="/create/user" className={buttonVariants({ size: "sm" })}>
            Details
          </Link>
        </div>
      </article>
    </li>
  );
};

const StartupCardSkeleton = () => {
  return (
    <li className="list-none">
      <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/5 bg-white/90 p-5 shadow-lg ring-1 ring-black/5">
        <div className="flex items-center justify-between gap-3">
          <Skeleton className="h-7 w-32 rounded-full" />
          <Skeleton className="h-7 w-20 rounded-full" />
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1 space-y-3">
            <Skeleton className="h-4 w-28 rounded-full" />
            <Skeleton className="h-7 w-4/5 rounded-xl" />
            <Skeleton className="h-7 w-2/3 rounded-xl" />
          </div>

          <Skeleton className="h-14 w-14 rounded-2xl" />
        </div>

        <div className="mt-4 space-y-2">
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-4 w-3/4 rounded-full" />
        </div>

        <Skeleton className="mt-5 h-56 w-full rounded-[1.5rem]" />

        <div className="mt-6 flex items-center justify-between gap-3">
          <ButtonSkeleton size="sm" className="w-24" />
          <ButtonSkeleton size="sm" className="w-20" />
        </div>
      </article>
    </li>
  );
};

const StartupCardListSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <StartupCardSkeleton key={index} />
      ))}
    </ul>
  );
};

export { StartupCardListSkeleton, StartupCardSkeleton };
export default StartupCard;
