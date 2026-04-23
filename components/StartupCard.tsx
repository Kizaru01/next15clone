import { EyeIcon } from "lucide-react"

import { Startup, Author } from "@/types";
import { formartDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard}) => {
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
    <li className="bg-white border-[5px_8px_10px_5px]  border-black py-6 px-5 rounded-[22px] shadow-xl hover:border-red-800 transition-all duration-500 hover:shadow-xl hover:bg-red-200 ">
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold">{formartDate(_createdAt)}</p>
        <div className="flex gap-2">
          <EyeIcon className="size-5 text-pink-500"/>
          <span className="font-semibold">{views}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-2.5">
          <div className="flex-1">
            <Link href={`/user/${author?._id}`}>
              <span className="font-mono text-sm">{author?.name}</span>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className="text-2xl font-sans font-bold">{title}</h3>
            </Link>
          </div>
          <Link href={`/user/${_id}`}>
            <Image
              src={author?.image ?? ""}
              alt={author?.name ?? ""}
              height={200}
              width={200}
              className="rounded-full w-12 h-12 object-cover "
            />
          </Link>
      </div>
      <Link href="/">
        <p className="line-clamp-1 mb-2">{description}</p>
        <Image
          src={image ?? ""}
          alt={author?.name ?? ""}
          width={400}
          height={400}
          className="rounded-[10px] object-cover "
        />
      </Link>
      <div className="flex items-center justify-between mt-2">
        <Link href='/'>
          <h2 className="px-3 py-2 bg-gray-500 rounded-xl border-white border-2 text-[12px] text-white">{category}</h2>
        </Link>
        <Link href='/create/user'>
          <h2 className="bg-black text-white px-3 py-2 rounded-xl text-[12px] border-white border-2">Details</h2>
        </Link>
      </div>
    </li>
  )
}

export default StartupCard