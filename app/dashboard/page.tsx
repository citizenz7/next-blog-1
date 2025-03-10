import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { BlogPostCard } from "@/components/general/BlogPostCard";

async function getData(userId: string) {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const data = await prisma.blogPost.findMany({
        where: {
            authorId: userId,
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    return data;
}

export default async function DashboardRoute() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    const data = await getData(user?.id);

    // count articles
    const count = await prisma.blogPost.count({
        where: {
            authorId: user.id
        }
    });

    return (
        <div>
            <div className="flex items-center justify-between my-4 border-b border-gray-100 pb-3">
                <h2 className="text-2xl font-bold">Les articles de votre Blog ({count})</h2>
                <Link href="/dashboard/create" className={buttonVariants()}>Ajouter un article</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <BlogPostCard data={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}