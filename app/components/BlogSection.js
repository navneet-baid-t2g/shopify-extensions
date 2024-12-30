import Image from "next/image"
import Link from "next/link"

const BlogCard = ({ cover, author, published_at, title, summary }) => {
    const getInitials = (name) => {
        const names = name.split(" ");
        if (names.length === 1) return names[0][0].toUpperCase();
        return names[0][0].toUpperCase() + names[1][0].toUpperCase();
    };

    return (
        <div className="bg-white  border border-gray-200  px-px rounded-xl">
            <div className="rounded-[11px] bg-gray-200  relative">
                <Image src={cover} alt="article cover" width={1400} height={800} className="rounded-[7px] w-full aspect-video object-cover" placeholder="empty" />
                <div className="absolute -bottom-8 z-10 flex inset-x-2 rounded-lg bg-gray-100 border border-gray-200 p-2">
                    <div className="flex items-center gap-x-4">
                        {!author.avatar && <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold text-lg">
                            {getInitials(author.name)}
                        </div>}
                        {author.avatar && <Image src={author.avatar} alt="" width={800} height={800} className="w-10 h-10 object-cover rounded-full" />}
                        <div>
                            <p className="text-gray-800 font-semibold">{author.name}</p>
                            <span className="text-primary font-semibold text-sm">{published_at}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-14 px-5 pb-5 space-y-4">
                <h2 className="text-gray-900  text-xl font-semibold">
                    {title}
                </h2>
                <p className="text-gray-700  line-clamp-2">
                    {summary}
                </p>
                <Link href="#" className="flex items-center gap-x-2 text-orange-600 hover:text-orange-500 hover:underline underline-offset-4 transition ease-in  duration-300">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
const posts = [
    {
        id: 1,
        cover: "/sidebiew.webp",
        author: {
            avatar: "",
            name: "Author",
            role: "Web Developer"
        },
        title: "Top 5 Features in Shopify's Latest Update",
        summary: "Discover the new features introduced in Shopify's latest platform update, designed to enhance your store's performance and user experience.",
        published_at: "Dec 22, 2024"
    },
    {
        id: 2,
        cover: "/sidebiew.webp",
        author: {
            avatar: "",
            name: "Navneet Baid",
            role: "Web Developer"
        },
        title: "How to Maximize Sales with Shopify's AI-Powered Tools",
        summary: "Learn how to utilize Shopify's AI tools to drive more sales and create personalized shopping experiences for your customers.",
        published_at: "Dec 22, 2024"
    },
    {
        id: 3,
        cover: "/sidebiew.webp",
        author: {
            avatar: "/sidebiew.webp",
            name: "Admin",
            role: "Web Developer"
        },
        title: "Boost Your Store's SEO with Shopify's New Integrations",
        summary: "Explore how Shopify's new SEO integrations can help you rank higher on search engines and attract more organic traffic.",
        published_at: "Dec 22, 2024"
    },
]
const BlogSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
                <div className="text-center max-w-2xl mx-auto space-y-5">
                    <span className="pl-5 relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-primary text-primary">
                        News
                    </span>
                    <h2 className="text-3xl font-semibold md:text-4xl xl:text-5xl leading-tight">From our latest Blog Post</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        posts.map(post => (
                            <BlogCard key={post.id} {...post} />
                        ))
                    }
                </div>
                <div className="flex justify-center mt-2">
                    <Link href="#" className="px-5 py-2.5 rounded-xl flex items-center rounded-lg bg-primary text-white transition ease-linear hover:bg-gray-900 flex items-center gap-x-3">
                        See More   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default BlogSection