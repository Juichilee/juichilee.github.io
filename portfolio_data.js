var portfolio_data = [
    {
        id: 0,
        title: "MR Inspection Tool (Hololens 2)",
        category: "VR/MR",
        date: "June 2022",
        client: "",
        summary: "",
        img_path: "assets/img/portfolio/Hololens_Demo_Thumbnail.png",
        swiper_images: [""],
        links: [""],
        details_path: "portfolio/portfolio-details.html?id=0"
    },
    {
        id: 1,
        title: "Lorem impsum dolor 2",
        category: "Web Design 2",
        date: "18 Sep. 2019",
        client: "",
        summary: "",
        img_path: "assets/img/work-2.jpg",
        swiper_images: [""],
        links: [""],
        details_path: "portfolio/portfolio-details.html?id=1"
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

function populatePortfolioDetails(){
    var portfolioTitle = document.querySelector('.portfolio-title');
    portfolioTitle.innerHTML = "SEALS";
}

function populatePortfolioRow(){
    var portfolio_row = document.getElementById("portfolio-row");
    var row_html = "";
    
    for (var i = 0; i < portfolio_data.length; i++){
        var title = portfolio_data[i].title;
        var category = portfolio_data[i].category;
        var date = portfolio_data[i].date;
        var img_path = portfolio_data[i].img_path;
        var details_path = portfolio_data[i].details_path;
    
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
                        <span class="w-ctegory">${category}</span> / <span class="${date}">18 Sep. 2018</span>
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
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
  }

