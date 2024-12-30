const brands = [
    { name: 'Fysac', logo: '/logos/fysac.png' },
    { name: 'Fysac', logo: '/logos/logoipsum-338.svg' },
    { name: 'Fysac', logo: '/logos/logoipsum-334.svg' },
    { name: 'Fysac', logo: '/logos/logoipsum-323.svg' },
    { name: 'Fysac', logo: '/logos/logoipsum-297.svg' },
    { name: 'Fysac', logo: '/logos/logoipsum-286.svg' },
    { name: 'Fysac', logo: '/logos/logoipsum-285.svg' },
];

const LogoMarquee = () => {
    return (
        <div className="relative bg-primary py-8 overflow-hidden">
            <h2 className="text-center text-white font-bold text-3xl mb-4">
                Trusted By The World’s Most Successful Brands
            </h2>
            <div className="marquee">
                <div className="marquee-inner">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="w-32 h-32 flex justify-center items-center mx-4 transition-transform hover:scale-110"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-w-full max-h-full object-contain filter invert brightness-0 hover:filter-none"
                            />
                        </div>
                    ))}
                    {/* Duplicate for seamless scrolling */}
                    {brands.map((brand, index) => (
                        <div
                            key={index + brands.length}
                            className="w-32 h-32 flex justify-center items-center mx-4 transition-transform hover:scale-110"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-w-full max-h-full object-contain filter invert brightness-0 hover:filter-none"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoMarquee;
