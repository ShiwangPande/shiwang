import React from 'react';

function AllProjects() {
    const projects = [
        { href: "https://kartmatch.vercel.app/", src: "https://i.postimg.cc/dV34sJRN/image.png", alt: "Kartmatch" },
        { href: "https://rampupkolkata.vercel.app/", src: "https://i.postimg.cc/WzNBNQ1N/image.png", alt: "Ramp Up Kolkata" },
        { href: "https://adoptdog.vercel.app/", src: "https://i.postimg.cc/L6YpJFV5/image.png", alt: "Pet Adoption" },
        { href: "https://www.abhijitenterprises.co.in/", src: "https://i.postimg.cc/QCnK0ZBV/image.png", alt: "abhijit enterprises" },
        { href: "https://ekstepapp.vercel.app/", src: "https://i.postimg.cc/zGdDhFgX/image.png", alt: "Ekstep" },
        { href: "https://vegan-hub.vercel.app/", src: "https://i.postimg.cc/SscJcz4T/image.png", alt: "vegan-hub" },
        { href: "https://www.kaalsarpdoshpujamahakal.com/", src: "https://i.postimg.cc/TYdJYTqM/image.png", alt: "chota mahakal" },
        { href: "https://drishtimesa.vercel.app/", src: "https://i.postimg.cc/QtVrr24p/image.png", alt: "drishti" },
        { href: "https://website-tutorial.vercel.app/", src: "https://i.postimg.cc/rFTtNTfn/image.png", alt: "" },
        { href: "https://new-library.vercel.app/", src: "https://i.postimg.cc/4x77J3y3/image.png", alt: "" },
        { href: "https://professional-ethics.vercel.app/", src: "https://i.postimg.cc/dtKw7t51/image.png", alt: "" },
        { href: "https://meet-shiwang.vercel.app/", src: "https://i.postimg.cc/8PTxQFyh/image.png", alt: "" },
        { href: "https://parking-system-app.vercel.app/", src: "https://i.postimg.cc/j5QvZcYB/image.png", alt: "" },
        { href: "https://e-commerce-plot-website.vercel.app/", src: "https://i.postimg.cc/ZK13vN1N/image.png", alt: "" },
        { href: "https://sumit-chaudhary.vercel.app/", src: "https://i.postimg.cc/Qt9KMx0m/image.png", alt: "" },
        { href: "https://shiwang-weather-app.netlify.app/", src: "https://i.postimg.cc/L673S5Ry/image.png", alt: "" },
        { href: "https://shiwang-calci.netlify.app/", src: "https://i.postimg.cc/MT2j3f7B/image.png", alt: "" }
    ];

    return (
        <div className=''>
            <h1 className='text-center pt-10 '>
                <span className="text-3xl lg:text-5xl tracking-normal about"> All </span>
                <span className="text-3xl lg:text-5xl text-[#00e6e6] tracking-normal about">Projects</span>
            </h1>
            <div className="grid grid-cols-1 mx-4 mt-14 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index}>
                        <a href={project.href}>
                            <img className="h-auto max-w-full rounded-lg" src={project.src} alt={project.alt} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProjects;
