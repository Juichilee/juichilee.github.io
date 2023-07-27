
// Array storing timeline data
var timeline_data = [
    {
        title: "Travel/Hiatus (Jan. - Jun. 2023)",
        desc: [
            "Family reunion with relatives in Taiwan to celebrate Chinese New Year, personal\
             time off for maintaining and learning new skills and hobbies, personal project \
             development, and travelling to tourist hot spots."
        ],
        img_path: "assets/img/travel_timeline_photo.jpg"
    },
    {
        title: "Software Engineer Intern @ Intel (Jun. - Dec. 2022)",
        desc: [
            "Collaborated with firmware security architect and manager to develop a functional\
             proof-of-concept for a planned product feature that involved utilizing a custom \
             machine-learning pipeline to aid in FPGA design debugging.",
            "Designed and implemented a highly customizable machine learning pipeline using \
            Scikit-Learn, NumPy, and Pandas that preprocesses input data, trains and optimizes\
             a list of classifiers, and exports trained models and test scores.",
            "Led presentation and demo of machine learning prototype to senior firmware engineers, \
            managers, and architects.",
            "Worked with 2 firmware engineer mentors on FPGA firmware security-related projects, \
            following scrum and OKR.",
            "Wrote, validated, and debugged firmware system and unit tests using GoogleTest C++ Library."
        ],
        img_path: "assets/img/intel_timeline_photo.jpg"
    },
    {
        title: "Senior Capstone Project @ OSU (Sep. - Jun. 2022)",
        desc: [
            "Collaborated with project partner and 2 other capstone project members to research and develop\
             a mixed-reality system empowered by machine learning for augmenting human cognition across \
             manufacturing domains.",
            "Volunteered as team lead and communicator between team and project partner.",
            "Designed and implemented the system using Unity3D, Docker, Microsoft Mixed Reality Tool Kit, GitHub,\
             and specialized hardware such as Intel RealSense and Microsoft HoloLens 2.",
            "Performed requirements analysis, component research, architect design, prototyping, and testing and \
            debugging.",
            "Presented finalized project at OSU’s 2022 Engineering Expo; during the 5-hour event, performed duties \
            such as providing project background, live demonstrations, and fielding questions from attendees and company judges."
        ],
        img_path: "assets/img/work-2.jpg"
    },
    {
        title: "sample 2",
        desc: [
            "less seals 2",
            "more seals 2"
        ],
        img_path: "assets/img/work-2.jpg"
    },
    {
        title: "sample 2",
        desc: [
            "less seals 2",
            "more seals 2"
        ],
        img_path: "assets/img/work-2.jpg"
    }
];

// JavaScript for handling dynamic timeline container generation
var timeline_container = document.getElementById("timeline-container");
var count = 0;
var container_html = ""
for (let i = 0; i < timeline_data.length; i++){
    let desc_arr = timeline_data[i].desc;
    let pos = 'right';
    let less_desc = ""
    let more_desc = ""
    let read_more_btn = ""
    if (desc_arr.length == 1){
        less_desc = desc_arr[0];
    }else if (desc_arr.length > 1){
        less_desc = `<li>${desc_arr[0]}</li>`;
        more_desc = `<span class="dots">...</span><span class="more">`
        for (let j = 1; j < desc_arr.length; j++){
        more_desc = more_desc + `<li>${desc_arr[j]}</li>`
        }
        more_desc = more_desc + "</span>"
        read_more_btn = `<button onclick="ReadMore(this)" class="Btn">Read more</button>`
    }

    if (count % 2 == 0){
        pos = 'left'
    }

    container_html = container_html +
        `<div class="container-timeline ${pos}">
            <div class="content">
                <img class="content-img" src="${timeline_data[i].img_path}">
                <h2>${timeline_data[i].title}</h2>
                <ul class="card-text" style="text-align: left;">
                ${less_desc} 
                ${more_desc}
                </ul>
                ${read_more_btn}
            </div>
        </div>`;
    count += 1;
}
timeline_container.innerHTML = container_html
