import Image from 'next/image'
import Link from 'next/link'


export default function HeroSection() {
    return (
        <>
            <section className="py-8">
                <div className="container mx-auto w-full px-5 sm:px-10 md:px-12 lg:px-5">
                    <div className="mx-auto text-center max-w-full">
                        <h1 className="relative font-semibold max-w-max mx-auto pb-2 font-display text-3xl sm:text-4xl md:text-5xl text-gray-800 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:bg-gray-800 after:w-4">
                            Elevate Your Shopify Store
                        </h1>
                    </div>
                    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-14 gap-y-8 md:items-end">
                        <div className="space-y-4 md:space-y-6 md:col-span-2 lg:col-span-1 w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
                            <h1 className="font-display font-semibold text-2xl md:text-3xl text-gray-900">
                                Revolutionize Your Shopify Store
                            </h1>
                            <div className="text-gray-700 space-y-3 mx-auto max-w-2xl lg:max-w-none">
                                <p>Unlock the full potential of your Shopify store with our powerful extensions designed to elevate your eCommerce business.</p>
                                <p>From enhanced functionality to improved user experience, discover the tools you need to stay ahead of the competition.</p>
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <Link href="#" className="px-6 h-11 flex items-center rounded-lg bg-primary text-white text-sm transition ease-linear hover:bg-gray-900">
                                    Explore Our Apps
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 w-full">
                                <div>
                                    <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800">10+ Services</h2>
                                    <span className="text-gray-600">Tailored for You</span>
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800">95%</h2>
                                    <span className="text-gray-600">Customer Satisfaction</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-full relative">
                                {/* Background gradients */}
                                <span className="absolute inset-x-0 top-16 bottom-0 rounded-lg scale-[1.04] bg-gradient-to-b from-gray-200" />
                                <span className="absolute inset-x-0 bottom-0 top-16 rounded-lg bg-gray-100" />

                                {/* Main image */}
                                <Image
                                    src="/dev-with-c.webp"
                                    width={1240}
                                    height={1376}
                                    alt="Developer with laptop smile"
                                    className="relative w-full h-auto max-h-96 lg:max-h-[26rem]"
                                />
                                <Image
                                    src="/security-icon.svg"
                                    width={120}
                                    height={120}
                                    alt="Security icon"
                                    className="absolute top-4 left-4 w-10 h-10 drop-shadow-md motion-safe:animate-float"
                                />
                                <Image
                                    src="/target-icon.svg"
                                    width={120}
                                    height={120}
                                    alt="Target icon"
                                    className="absolute top-1/2 left-0 w-10 h-10 drop-shadow-md motion-safe:animate-float"
                                />
                                <Image
                                    src="/discount-icon.svg"
                                    width={120}
                                    height={120}
                                    alt="Discount icon"
                                    className="absolute bottom-4 right-4 w-10 h-10 drop-shadow-md motion-safe:animate-float"
                                />
                                <Image
                                    src="/filters-icon.svg"
                                    width={120}
                                    height={120}
                                    alt="Filters icon"
                                    className="absolute top-20 right-4 w-10 h-10 drop-shadow-md motion-safe:animate-float"
                                />
                            </div>
                        </div>

                        <div className="space-y-3 lg:space-y-6">
                            <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-gray-50 border border-gray-100/80 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold group hover:text-orange-500">
                                <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200 border border-gray-100/70 group-hover:text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24} className="w-6 h-6 group-hover:text-orange-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 text-lg group-hover:text-orange-500">Optimize Performance</span>
                                    <p className="text-gray-700">
                                        Enhance store speed and functionality with cutting-edge solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-gray-50 border border-gray-100/80 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold group hover:text-orange-500">
                                <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200 border border-gray-100/70 group-hover:text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24} className="w-6 h-6 group-hover:text-orange-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 text-lg group-hover:text-orange-500">Tailored for Growth</span>
                                    <p className="text-gray-700">
                                        Boost sales and conversions with apps built for success.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-gray-50 border border-gray-100/80 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold group hover:text-orange-500">
                                <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200 border border-gray-100/70 group-hover:text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24} className="w-6 h-6 group-hover:text-orange-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 text-lg group-hover:text-orange-500">Seamless Integration</span>
                                    <p className="text-gray-700">
                                        Easy to use, install, and manage within your Shopify dashboard.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}