import Image from "next/image";
import { headers } from "next/headers";
import styles from "./page.module.css";
import {
  ShareIcon,
  WhatsappIcon,
  InstaIcon,
} from "@/components/ShareIcons/ShareIcons";
import { Linkedin, Github } from "lucide-react";
import CopyToClipboard from "@/components/CopyToClipboard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LastPrevPost from "@/components/Posts/LastPrevPost";
import Link from "next/link";

const socialMediaIcons = {
  LinkedIn: <Linkedin color="#333" width={24} height={24} />,
  Whatsapp: <WhatsappIcon />,
  Instagram: <InstaIcon />,
  GitHub: <Github color="#333" width={24} height={24} />,
};

interface SocialMedia {
  provider: string;
  url: string;
}

interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  createdAt: string;
  tags: string[];
  authorId: string;
  authorProps: {
    name: string;
    image: string;
    socialMedia: {
      provider: string;
      url: string;
    }[];
  };
}

function dateFormat(dateString: string) {
  const date = new Date(dateString);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const mounth = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${mounth}/${year}`;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetch(`http://3.141.194.138:3000/posts/${params.slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  const post: Post = await data.json();
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";

  return (
    <div>
      <Navbar />
      <div className="flex h-[40vw] w-[95vw] mx-auto border-solid rounded-3xl justify-center items-center relative overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-wrap justify-center my-12 mx-auto">
        {post.tags.map((tag) => {
          return (
            <div key={tag} className="p-5 my-auto">
              <div className="py-2 px-6 border-solid border-black rounded-3xl border-2">
                <h2 className="text-[10px] text-[#5C5C5C] text-center">
                  {tag}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
      <article className="my-11 flex justify-center">
        <h1 className="text-4xl text-[#333333] text-center">{post.title}</h1>
      </article>

      <div className="flex flex-wrap justify-center items-center gap-10 m-3">
        <div className="flex items-center gap-2">
          <Avatar className="shadow-2xl">
            <AvatarImage
              width={28}
              src={post.authorProps.image}
              alt={post.authorProps.name}
            />
            <AvatarFallback>VTS</AvatarFallback>
          </Avatar>
          <section className="">
            por <strong>{post.authorProps.name}</strong>
          </section>
        </div>
        <section className="">
          Último update: {dateFormat(post.createdAt)}
        </section>
      </div>

      <div className="flex justify-center items-center gap-3 mx-auto my-3">
        {post.authorProps.socialMedia.map((socialMedia: SocialMedia) => {
          return (
            <Link href={socialMedia.url} key={socialMedia.provider}>
              {
                socialMediaIcons[
                  socialMedia.provider as keyof typeof socialMediaIcons
                ]
              }
            </Link>
          );
        })}
        <CopyToClipboard url={fullUrl} />
      </div>

      <article className="container mx-auto my-20">
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className={styles.UserContent}
        ></div>
      </article>
      <hr className="flex container mx-auto my-6 border-solid border-gray-300 rounded-full border" />
      <LastPrevPost postId={post.id} />
      <Footer />
    </div>
  );
}
