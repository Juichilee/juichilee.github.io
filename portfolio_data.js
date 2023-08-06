{
var portfolio_data = [
    {
        id: 0,
        title: "MR Inspection Tool (Hololens 2)",
        info: {
            category: "VR-MR",
            date: "June, 2022",
            client: "OSU College of Engineering"
        },
        summary: "The goal of the MR (Mixed-Reality) Inspection Tool is to augment human cognition \
                    in manufacturing scenarios through the utilization of special hardware, such as \
                    a MR headset, specialized camera, and a backend server. <br><br>MR Inspection Tool brings\
                    together the separate functionalities of these components together to create a seamless\
                    user experience. <br>With this system, users can be more informed of their surroundings \
                    thanks to the real-time predictive capabilities of the machine-learning server, the accuracy of \
                    the machine-learning result derived 3D projections, and the natural and intuitive methods of \
                    controller-less interactions facilitated by the MR headset which can read certain hand gestures as input.",
        img_path: "assets/img/portfolio/MR_Inspection_Tool/Hololens_Demo_Thumbnail.png",
        swiper_images: [
            ["Final Demo Video", "https://www.youtube.com/embed/XJZkBpjPINg"],
            ["Demo Thumbnail", "assets/img/portfolio/MR_Inspection_Tool/Hololens_Demo_Thumbnail.png"],
            ["OSU Engineering Expo Poster", "assets/img/portfolio/MR_Inspection_Tool/MR_Inspection_Tool_Poster.jpg"],
            ["Test Demo Video", "https://www.youtube.com/embed/WaGFP-GvLN8"]

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
            category: "ML/NLP",
            date: "June, 2023",
            client: "Self Development"
        },
        summary: "I like seals 2",
        img_path: "assets/img/portfolio/Yelp_Review_Sentiment_Analyzer/yelp-reviews-filtered.png",
        swiper_images: [
            ["Yelp Review Examples", "assets/img/portfolio/Yelp_Review_Sentiment_Analyzer/yelp-reviews-filtered.png"],
            ["Input Data", "assets/img/portfolio/Yelp_Review_Sentiment_Analyzer/input_data_example.png"],
            ["Example Run", "assets/img/portfolio/Yelp_Review_Sentiment_Analyzer/example_run.png"]
        ],
        links: {
            github: ["GitHub Repo Link", "https://github.com/Juichilee/Yelp-Review-Sentiment-Analyzer"]
        },
        details_path: "portfolio-details.html?id=1"
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

    portfolioInfo.innerHTML = infoHTML;
    portfolioLinks.innerHTML = linkHTML;
    portfolioSwiper.innerHTML = swiperHTML;
    portfolioDesc.innerHTML = 
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
    portfolio_row.innerHTML = row_html;
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
