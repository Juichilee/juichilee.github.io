{
var portfolio_data = [
    {
        id: 0,
        title: "MR Inspection Tool (Hololens 2)",
        info: {
            category: "VR-AR",
            date: "June, 2022",
            client: "OSU College of Engineering"
        },
        summary: "Capstone Project for College of Engineering at Oregon State University. The goal of the MR (Mixed-Reality) Inspection Tool is to augment human cognition \
                    in manufacturing scenarios through the utilization of special hardware, such as \
                    a MR headset, specialized camera, and a backend server. <br><br>MR Inspection Tool brings\
                    together the separate functionalities of these components together to create a seamless\
                    user experience. <br>With this system, users can be more informed of their surroundings \
                    thanks to the real-time predictive capabilities of the machine-learning server, the accuracy of \
                    the machine-learning result derived 3D projections, and the natural and intuitive methods of \
                    controller-less interactions facilitated by the MR headset which can read certain hand gestures as input.",
        img_path: "assets/img/portfolio/0/thumbnail.png",
        swiper_images: [
            ["Final Demo Video", "https://www.youtube.com/embed/XJZkBpjPINg"],
            ["Test Demo Video", "https://www.youtube.com/embed/WaGFP-GvLN8"],
            ["Demo Thumbnail", "assets/img/portfolio/0/thumbnail.png"],
            ["OSU Engineering Expo Poster", "assets/img/portfolio/0/MR_Inspection_Tool_Poster.jpg"]

        ],
        links: {
            test: ["Test Demo Link", "https://youtu.be/WaGFP-GvLN8"],
            final: ["Final Demo Link", "https://www.youtube.com/watch?v=XJZkBpjPINg"],
            github: ["GitHub Repo Link", "https://github.com/Extended-reality-Lab/MR-Inspection-Tool-Hololens"]
        },
        details_path: "portfolio-details.html?id=0"
    },
    {
        id: 1,
        title: "Yelp Review Sentiment Analyzer",
        info: {
            category: "ML-NLP",
            date: "June, 2023",
            client: "Personal Development"
        },
        summary: "Project demonstrating skills with implementing Naive Bayes ML Model for NLP on real reviews. \
                    Written in Python3, this program trains the Naive Bayes Model on a text file containing reviews \
                    and their classification which, in this case, is sentiment (0=negative, 1=positive). Then, it calculates \
                    the trained model's accuracy by testing it on the data it was trained on and test data. Afterwards, \
                    it enables the user to enter a sentence to be classified by the trained model, returning a sentiment.",
        img_path: "assets/img/portfolio/1/thumbnail.png",
        swiper_images: [
            ["Yelp Review Examples", "assets/img/portfolio/1/thumbnail.png"],
            ["Input Data", "assets/img/portfolio/1/input_data_example.png"],
            ["Example Run", "assets/img/portfolio/1/example_run.png"],
            ["Out Result Text", "assets/img/portfolio/1/results.png"]
        ],
        links: {
            github: ["GitHub Repo Link", "https://github.com/Juichilee/Yelp-Review-Sentiment-Analyzer"]
        },
        details_path: "portfolio-details.html?id=1"
    },
    {
        id: 2,
        title: "3D Magic Lens on Cat Model",
        info: {
            category: "3D Graphics",
            date: "March, 2022",
            client: "Personal Development"
        },
        summary: "This project utilizes the vertex and fragment shader to give the illusion of a magic lens on a 3D \
                    object. The user can select a part of an object using the 3D magic lens and manipulate \
                    its position, scale, color, and texture. In the improved version, the user can rotate \
                    the selected part using quaternions. ",
        img_path: "assets/img/portfolio/2/thumbnail.png",
        swiper_images: [
            ["Demo", "https://www.youtube.com/embed/fmwKkZz7KS4"],
            ["Improved Demo with Rotation", "https://www.youtube.com/embed/ghQwHdGgeWg"],
            ["3D Magic Lens Translation", "assets/img/portfolio/2/thumbnail.png"],
            ["3D Magic Lens Scale", "assets/img/portfolio/2/scale.png"],
            ["3D Magic Lens Rotation", "assets/img/portfolio/2/rotation.png"]
        ],
        links: {
            demo: ["Demo", "https://youtu.be/fmwKkZz7KS4"],
            final: ["Improved Demo (rotation)", "https://youtu.be/ghQwHdGgeWg"]
        },
        details_path: "portfolio-details.html?id=2"
    },
    {
        id: 3,
        title: "Elliptical Dots",
        info: {
            category: "3D Graphics",
            date: "January, 2022",
            client: "Personal Development"
        },
        summary: "This project implements graphics for lighting, drawing textures, color blending, and alpha. \
                    The equation for an ellipse is implemented for drawing ellipses on the sphere obj using \
                    ST coordinates. Light is calculated using by calculating the dot product between the eye \
                    to plane vector and the vertex normal.",
        img_path: "assets/img/portfolio/3/thumbnail.png",
        swiper_images: [
            ["Step and Blended-Edged Demo", "https://www.youtube.com/embed/psqhrUpJwZk"],
            ["Noisy Elliptical Dots and Alpha Demo", "https://www.youtube.com/embed/0Be8kpFr29M"],
            ["Vector Elliptical Dots", "assets/img/portfolio/3/thumbnail.png"],
            ["Increase Spacing", "assets/img/portfolio/3/spacing.png"],
            ["Decrease Spacing", "assets/img/portfolio/3/spacing2.png"],
            ["Increase Tolerance", "assets/img/portfolio/3/tolerance.png"],
            ["Increase Noise Amplitude", "assets/img/portfolio/3/noise.png"],
            ["Increase Noise Frequency", "assets/img/portfolio/3/noise2.png"],
            ["Decrease Alpha", "assets/img/portfolio/3/alpha.png"]
        ],
        links: {
            demo: ["Step and Blended-Edged Demo", "https://youtu.be/psqhrUpJwZk"],
            demo2: ["Noisy Elliptical Dots and Alpha Demo", "https://youtu.be/0Be8kpFr29M"],
        },
        details_path: "portfolio-details.html?id=3"
    },
    {
        id: 4,
        title: "Displacement and Bump Mapping on Curtain",
        info: {
            category: "3D Graphics",
            date: "January 2022",
            client: "Personal Development"
        },
        summary: "This project implements graphics for displacement mapping, bump mapping, and lighting. \
                    The z displacement is calculated using a pleat equation and added to the original \
                    z position. The surface normal is recalculated based on the change in x and y positions \
                    from the pleat equation. The fragment shader handles the lighting based on the new normals \
                    and modifies the normals using a noise texture for bump mapping. In the end, it \
                    calculates and puts together the ambient, diffuse, and specular lighting.",
        img_path: "assets/img/portfolio/4/thumbnail.png",
        swiper_images: [
            ["Demo", "https://www.youtube.com/embed/p5NKQZE7QtY"],
            ["Flat Quad", "assets/img/portfolio/4/regular.png"],
            ["Increase pleat z", "assets/img/portfolio/4/thumbnail.png"],
            ["Increase pleat frequency", "assets/img/portfolio/4/pleat2.png"],
            ["Include noise bump mapping", "assets/img/portfolio/4/noise.png"],
            ["Quad noise bump map interacting w/ light", "assets/img/portfolio/4/bumpmap.png"]
        ],
        links: {
            demo: ["Demo", "https://youtu.be/p5NKQZE7QtY"]
        },
        details_path: "portfolio-details.html?id=4"
    },
    {
        id: 5,
        title: "Cube Mapping and Reflective Refractive Curtain",
        info: {
            category: "3D Graphics",
            date: "February 2022",
            client: "Personal Development"
        },
        summary: "This project implements graphics for cube mapping, reflection, and refraction. \
                    In the vertex shader, an equation is used to re-calculate the z \
                    displacement for creating the pleats for the quad and the new normal using the x \
                    and y tangent vectors. In the fragment shader, the inputted normal and \
                    eye vector from the vertex shader are normalized, the noise textures are used \
                    to rotate the normals on the pleat, and the reflect and refract vectors are calculated \
                    using reflect and refract equations. The reflect and refract colors are calculated \
                    from sampling the bump map utilizing the prior vectors, mixed, and then outputted to \
                    gl_FragColor. ",
        img_path: "assets/img/portfolio/5/thumbnail.png",
        swiper_images: [
            ["Demo", "https://www.youtube.com/embed/fD3dJDrpdYU"],
            ["Reflection", "assets/img/portfolio/5/thumbnail.png"],
            ["Noisy Reflection", "assets/img/portfolio/5/noise.png"],
            ["Refraction", "assets/img/portfolio/5/refraction.png"]
        ],
        links: {
            demo: ["Demo", "https://youtu.be/psqhrUpJwZk"]
        },
        details_path: "portfolio-details.html?id=5"
    },
    {
        id: 6,
        title: "OpenGL/OpenCL Simple Particle System",
        info: {
            category: "3D Graphics",
            date: "June, 2022",
            client: "Personal Development"
        },
        summary: "This project utilizes OpenGL and OpenCL to create a particle system that is capable \
                    of calculating and rendering over a million particles by leveraging parallel processing \
                    power from the GPU. The GPU handles the processing of each particle's position, velocity, \
                    collision detection, and color which are read and stored on vertex, color, and velocity \
                    buffers.",
        img_path: "assets/img/portfolio/6/thumbnail.png",
        swiper_images: [
            ["Demo", "https://www.youtube.com/embed/J_wtDHOSR9M"],
            ["Particles Falling", "assets/img/portfolio/6/thumbnail.png"]
        ],
        links: {
            demo: ["Demo", "https://youtu.be/psqhrUpJwZk"]
        },
        details_path: "portfolio-details.html?id=6"
    },
    {
        id: 7,
        title: "Animated World Model Vertex and Texture Transformations",
        info: {
            category: "3D Graphics",
            date: "November, 2022",
            client: "Personal Development"
        },
        summary: "This project utilizes animation timestep in conjunction with vertex and fragment shaders. \
                    The vertex shader modifies the Earth model, scaling the vertex position from bottom to top \
                    as the uniform value controlled by the timestep increases. \
                    The fragment shader is similar to the vertex shader, but instead of scaling \
                    the vertex position, it replaces the Earth texture with a solid color.",
        img_path: "assets/img/portfolio/7/thumbnail.png",
        swiper_images: [
            ["Demo", "https://www.youtube.com/embed/k4rNhKeJTPs"],
            ["Modifying Texture and Vertex", "assets/img/portfolio/7/thumbnail.png"],
            ["Modifying Just Texture", "assets/img/portfolio/7/texture.png"],
            ["Modifying Just Vertex", "assets/img/portfolio/7/vertex.png"]
        ],
        links: {
            demo: ["Demo", "https://youtu.be/psqhrUpJwZk"]
        },
        details_path: "portfolio-details.html?id=7"
    },
    {
        id: 8,
        title: "2D Magic Lens",
        info: {
            category: "3D Graphics",
            date: "February, 2022",
            client: "Personal Development"
        },
        summary: "This project implements a couple image processing techniques on a \
                    given texture. The 2D magic lens allows the user to apply and control some \
                    transforms on a given area of a texture. These transforms include \
                    translation, magnification, rotation, and sharpening. ",
        img_path: "assets/img/portfolio/8/thumbnail.png",
        swiper_images: [
            ["Demo", "https://www.youtube.com/embed/7w_hfJWD9SM"],
            ["Magnification", "assets/img/portfolio/8/thumbnail.png"]
        ],
        links: {
            demo: ["Demo", "https://youtu.be/7w_hfJWD9SM"]
        },
        details_path: "portfolio-details.html?id=8"
    },
    {
        id: 9,
        title: "Stoplight Simulation",
        info: {
            category: "3D Graphics",
            date: "December, 2022",
            client: "Personal Development"
        },
        summary: "This project attempts to simulate a car driving down a street at night. \
        The project would touch on some of the graphics tools and concepts \
        such as 3D object drawing, transformations, animation, texture mapping, and lighting. \
        Moreover, the car can be controlled using key presses and the camera can follow and \
        rotate around the car.",
        img_path: "assets/img/portfolio/9/thumbnail.png",
        swiper_images: [
            ["Demo", "https://www.youtube.com/embed/swyfZdtyz0E"],
            ["Starting View", "assets/img/portfolio/9/thumbnail.png"],
            ["Intersection Front", "assets/img/portfolio/9/intersection.png"],
            ["Intersection Back", "assets/img/portfolio/9/intersection2.png"],
            ["Street View", "assets/img/portfolio/9/street.png"]
        ],
        links: {
            demo: ["Demo", "https://youtu.be/psqhrUpJwZk"]
        },
        details_path: "portfolio-details.html?id=9"
    },
    {
        id: 10,
        title: "Quantizing 3D Cat Model",
        info: {
            category: "3D Graphics",
            date: "March, 2022",
            client: "Personal Development"
        },
        summary: "This project allows the user to quantize a cat model by using a \
                    geometry shader, which can increase the \
                    model's geometry and apply a quantize function to each vertex position, which \
                    rounds each coordinate to the nearest whole number factor based on a uniform quantize variable. \
                    In addition, it also allows the user to switch between quantizing from model view \
                    or from screen view. ",
        img_path: "assets/img/portfolio/10/thumbnail.png",
        swiper_images: [
            ["Demo", "https://www.youtube.com/embed/VwjED3XUh2M"],
            ["Model View Quantize", "assets/img/portfolio/10/thumbnail.png"],
            ["Changing Light Position", "assets/img/portfolio/10/lightchange.png"],
            ["Original Model", "assets/img/portfolio/10/regular.png"]
        ],
        links: {
            demo: ["Demo", "https://youtu.be/psqhrUpJwZk"]
        },
        details_path: "portfolio-details.html?id=10"
    },
    {
        id: 11,
        title: "Revenge of the Baby Harp Seals",
        info: {
            category: "3D Graphics",
            date: "October, 2022",
            client: "Personal Development"
        },
        summary: "This project experiments with a couple of OpenGL's built-in light parameters\
                    how those lights interact with different material parameters. The two lights \
                    used are point lights and spotlights and the materials are set to range \
                    from dull to shiny. This project also includes some animation \
                    to test the dynamic lighting. ",
        img_path: "assets/img/portfolio/11/thumbnail.png",
        swiper_images: [
            ["Demo", "https://www.youtube.com/embed/jQjoxV03QMs"],
            ["Scene", "assets/img/portfolio/11/thumbnail.png"]
        ],
        links: {
            demo: ["Demo", "https://youtu.be/psqhrUpJwZk"]
        },
        details_path: "portfolio-details.html?id=11"
    },
    {
        id: 12,
        title: "Alien Spacecraft Geometric Modeling w/ Bezier Curves",
        info: {
            category: "3D Graphics",
            date: "November, 2022",
            client: "Personal Development"
        },
        summary: "This project utilizes OpenGL's built-in functions to draw a spacecraft using bezier curves. \
                    The bezier curves are drawn using line strips and each curve have 4 control points used \
                    to specify the position, curve, and direction of the line. The spacecraft is also animated \
                    to rotate around the y axis and the lines and points used to calculate the bezier curve can \
                    be revealed or hidden. ",
        img_path: "assets/img/portfolio/12/thumbnail.png",
        swiper_images: [
            ["Demo", "https://www.youtube.com/embed/nzKDF6g8BV0"],
            ["Front View", "assets/img/portfolio/12/thumbnail.png"],
            ["Top View", "assets/img/portfolio/12/top.png"],
            ["Points Revealed", "assets/img/portfolio/12/points.png"],
            ["Lines Revealed", "assets/img/portfolio/12/lines.png"],
            ["Points and Lines Revealed", "assets/img/portfolio/12/pointsandlines.png"]
        ],
        links: {
            demo: ["Demo", "https://youtu.be/psqhrUpJwZk"]
        },
        details_path: "portfolio-details.html?id=12"
    },
    {
        id: 13,
        title: "Caliper VR Simulation",
        info: {
            category: "3D Graphics",
            date: "December, 2021",
            client: "Oregon Manufacturing Innovation Center R&D"
        },
        summary: "Sponsored by Oregon Manufacturing Innovation Center R&D, the goal of this project is to teach users \
                    how to use a caliper for measuring objects using VR. This project was \
                    developed using Unity3D and OpenXR and scripted in C#. The objects in the scene are manipulated \
                    through rigidbody components and colliders with gravity enabled to simulate a real-environment. ",
        img_path: "assets/img/portfolio/13/thumbnail.png",
        swiper_images: [
            ["Test Demo", "https://www.youtube.com/embed/54vnLJFdRAM"],
            ["Prototype(1) Demo", "https://www.youtube.com/embed/q4G8E99KDPs"],
            ["Prototype(2) Demo", "https://www.youtube.com/embed/dta6HqvbyJM"],
            ["Measuring Plate", "assets/img/portfolio/13/thumbnail.png"],
            ["Tutorial Screen", "assets/img/portfolio/13/tutorial.png"],
            ["Tutorial Test Question", "assets/img/portfolio/13/test.png"],
            ["Tutorial Test Complete", "assets/img/portfolio/13/complete.png"]
        ],
        links: {
            test_demo: ["Test Demo", "https://youtu.be/54vnLJFdRAM"],
            demo1: ["Prototype(1) Demo", "https://youtu.be/q4G8E99KDPs"],
            demo2: ["Prototype(2) Demo", "https://youtu.be/dta6HqvbyJM"]
        },
        details_path: "portfolio-details.html?id=13"
    }
];

var fullPath = window.location.pathname;
var whatPage = fullPath.split("/").pop();
var queryDict = parseQuery(window.location.search);

if (whatPage == 'index.html'){
    populatePortfolioRow();
}

if (whatPage == 'portfolio-details.html' && queryDict){
    populatePortfolioDetails(queryDict);
}

function populatePortfolioDetails(queryDict){
    let portfolioTitles = document.querySelectorAll('.portfolio-title');
    let portfolioSwiper = document.querySelector('.swiper-wrapper');
    let portfolioInfo = document.querySelector('.info-list');
    let portfolioLinks = document.querySelector('.portfolio-links');
    let portfolioDesc = document.querySelector('.portfolio-description');
    let data = portfolio_data[queryDict.id];
    portfolioTitles.forEach(element => {
        element.innerHTML = data.title;
    });

    let infoHTML = "";
    for (const [key, value] of Object.entries(data.info)){
        infoHTML += `<li><strong>${capitalizeFirstLetter(key)}</strong>: ${capitalizeFirstLetter(value)}</li>`;
    }
    infoHTML += "<li><strong>Links</strong>: </li>";
    let linkHTML = "";
    for (const value of Object.values(data.links)){
        linkHTML += `<li><a href="${value[1]}"><i>- ${value[0]}</i></a></li>`
    }

    let swiperHTML = "";
    data.swiper_images.forEach(image_array => {
        let image_title = image_array[0];
        let image_path = image_array[1];
        let inner = `<img class="swiper-images" src="${image_path}" alt="">`;
        if (image_path.includes("https://www.youtube.com")){
            inner = 
            `<iframe src=${image_path} class="swiper-videos"
            title="YouTube video player" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowfullscreen></iframe>`;
        }
        swiperHTML += 
        `<div class="swiper-slide">
            <div class="swiper-img-title">
                <h2>${image_title}</h2>
            </div>
            ${inner}
        </div>`;
    });

    portfolioInfo.innerHTML = portfolioInfo.innerHTML + infoHTML;
    portfolioLinks.innerHTML = portfolioLinks.innerHTML + linkHTML;
    portfolioSwiper.innerHTML = portfolioSwiper.innerHTML + swiperHTML;
    portfolioDesc.innerHTML = portfolioDesc.innerHTML +
    `<h2>Summary</h2>
    <p>
        ${data.summary}
    </p>`;

}

function populatePortfolioRow(){
    let portfolio_row = document.getElementById("portfolio-row");
    let row_html = "";
    
    for (let i = 0; i < portfolio_data.length; i++){
        let title = portfolio_data[i].title;
        let category = portfolio_data[i].info.category;
        let date = portfolio_data[i].info.date;
        let img_path = portfolio_data[i].img_path;
        let details_path = portfolio_data[i].details_path;
    
        row_html = row_html + 
        `<div class="col-md-4">
            <div class="work-box">
            <a href="${img_path}" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                    <img src="${img_path}" alt="" class="img-fluid">
                </div>
            </a>
            <div class="work-content">
                <div class="row">
                <div class="col-sm-8">
                    <h2 class="w-title">${title}</h2>
                    <div class="w-more">
                        <span class="w-ctegory">${category}</span> / <span class="num-like">${date}</span>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="w-like">
                        <a href="${details_path}"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>`;
    }
    row_html = row_html + 
    `<div class="col-md-4">
        <div class="work-box">
            <div class="work-content">
                <div class="row">
                    <div class="col-sm-8">
                        <h2 class="w-title" style="font-weight: bold;">And More...</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    portfolio_row.innerHTML = portfolio_row.innerHTML + row_html;
}

/**
     * parses a query string and returns a dictionary
     */
function parseQuery(queryString) {
    let query = {};
    let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
}
