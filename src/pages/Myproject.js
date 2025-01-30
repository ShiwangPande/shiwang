import React from 'react';

function AllProjects() {

    const url = 'https://res.cloudinary.com/dfgbr3v7a/image/upload/'
    const projects = [
        { href: "https://echowave.shiwang.tech/", src: `${url}v1738204644/c927969f-f26c-4390-af57-8a1df1959a34.png`, alt: "echowave" },
        { href: "https://clashdeckpro.shiwang.tech/", src: `${url}v1738204012/132d3ce4-396c-43c1-b159-4828fe3ca93f.png`, alt: "clashdeckpro" },
        { href: "https://vakyagen.vercel.app/", src: `${url}v1738204537/d4516ca3-79aa-4a5e-9eca-8fafa91db218.png`, alt: "vakyagen" },
        { href: "https://kartmatch.in/", src: `${url}v1738202723/c35cc818-6a75-4f58-ad7b-07b1d3dead38.png`, alt: "Kartmatch" },
        { href: "https://rampupkolkata.vercel.app/", src: `${url}v1738202802/image_l4xjmm.png`, alt: "Ramp Up Kolkata" },
        { href: "https://adoptdog.vercel.app/", src: `${url}v1738202881/image_y6usou.png`, alt: "Pet Adoption" },
        { href: "https://encryptdecrypt.shiwang.tech/", src: `${url}v1738203704/82a844d9-8e4c-4520-9542-8984fa99972c.png`, alt: "abhijit enterprises" },
        { href: "https://abhijitenterprises.vercel.app/", src: `${url}v1738202989/image_eoe4wq.png`, alt: "abhijit enterprises" },
        { href: "https://ekstepapp.vercel.app/", src: `${url}v1738203011/image_dmmamr.png`, alt: "Ekstep" },
        { href: "https://vegan-hub.vercel.app/", src: `${url}v1738203027/image_k3i5a7.png`, alt: "vegan-hub" },
        { href: "https://www.kaalsarpdoshpujamahakal.com/", src: `${url}v1738203040/image_cj9qnf.png`, alt: "chota mahakal" },
        { href: "https://drishtimesa.vercel.app/", src: `${url}v1738203057/image_vxttij.png`, alt: "drishti" },
        { href: "https://website-tutorial.vercel.app/", src: `${url}v1738203074/image_bpomc7.png`, alt: "" },
        { href: "https://new-library.vercel.app/", src: `${url}v1738203088/image_kaunjh.png`, alt: "" },
        { href: "https://professional-ethics.vercel.app/", src: `${url}v1738203104/image_k0jopz.png`, alt: "" },
        { href: "https://meet-shiwang.vercel.app/", src: `${url}v1738203121/image_jlacml.png`, alt: "" },
        { href: "https://parking-system-app.vercel.app/", src: `${url}v1738203138/image_e21dxi.png`, alt: "" },
        { href: "https://e-commerce-plot-website.vercel.app/", src: `${url}v1738203155/image_cdcvlq.png`, alt: "" },
        { href: "https://sumit-chaudhary.vercel.app/", src: `${url}v1738203180/image_cprbyw.png`, alt: "" },
        { href: "https://shiwang-weather-app.netlify.app/", src: `${url}v1738203201/image_mhoo2i.png`, alt: "" },
        { href: "https://shiwang-calci.netlify.app/", src: `${url}v1738203216/image_f8vdnf.png`, alt: "" }
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
