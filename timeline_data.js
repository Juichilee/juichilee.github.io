{
// Array storing timeline data
var timeline_data = [
    {
        title: "Travel/Hiatus (Jan. - Jun. 2023)",
        desc: [
            "Family reunion with relatives in Taiwan to celebrate Chinese New Year, personal\
             time off for maintaining and learning new skills and hobbies, personal project \
             development, and travelling to tourist hot spots."
        ],
        img_path: "assets/img/travel-timeline.jpg"
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
        img_path: "assets/img/intel-timeline.jpg"
    },
    {
        title: "Project Lead for Mixed Reality Inspection Tool Hololens 2, and Graduation @ OSU (Sep. - Jun. 2022)",
        desc: [
            "Collaborated with project partner and 2 other capstone project members to research and develop\
             a project called called Mixed Reality Inspection Tool, which aimed to augment human cognition \
             through combining VR/MR technologies and Machine Learning, specifically computer vision, targeted for \
             enterprise use in manufacturing domains.",
            "Volunteered as team lead and communicator between team and project partner.",
            "Implemented the system using C#, Unity3D, Docker, Microsoft MRTK,\
             and specialized hardware such as Intel RealSense and Microsoft HoloLens 2 and their respective APIs.",
            "Performed requirements analysis, component research, architect design, prototyping, and testing and \
            debugging.",
            "Presented finalized project at OSU's 2022 Engineering Expo; during the 5-hour event, performed duties \
            such as providing project background, live demonstrations, and fielding questions from attendees and company judges."
        ],
        img_path: "assets/img/mr-inspection-tool-timeline.jpg"
    },
    {
        title: "Software Developer Intern @ Portland General Electric (Apr. - Sep. 2021)",
        desc: [
            "Worked with 2 senior application development mentors to design, develop, test, and deploy various tools \
            for supporting internal company workflows.",
            "Designed and Developed a server-less application hosted on AWS that extracts, pre-processes, and stores data from PGE's local \
            Oracle database to DynamoDB database and S3 and sends automated custom emails to update managers on \
            the status of critical outages.",
            "Detected and reported defects in the ETL pipeline",
            "Designed and Developed an intuitive Python3 RESTful web application utilizing Flask, Boto3, AWS Lambda, DynamoDB, EC2, \
            and API Gateway that enables non-IT employees to perform CRUD operations on internal database entries on the cloud",
            "Led presentation of team's projects and their benefits to company officers, managers, and stakeholders",
        ],
        img_path: "assets/img/pge-timeline.jpg"
    },
    {
        title: "Unity VR Research Developer (Oct. 2019 - Dec. 2021)",
        desc: [
            "Collaborated with 2 project managers on a sponsored manufacturing research grant to develop an interactive VR training \
            simulation to teach users how to utilize a caliper in construction properly for the Oculus Quest",
            "Assisted graduate students in developing an interactive VR training simulation for teaching users how to construct \
            a light frame wall and a VR application for viewing the movement of network packets between endpoints in a 3D space",
            "Wrote application logic in C# and integrated model, texture, and data assets in scenes",
            "Actively participated in the communication between project leads and clients in negotiating technical requirements and\
            project timeline",
            "Actively participated in the communication between project leads and clients as the application developer"
        ],
        img_path: "assets/img/unity-vr-research-timeline.jpg"
    },
    {
        title: "VR Research Assistant (Jul. - Oct. 2019)",
        desc: [
            "Conducted research and developed various vehicle and AI-related simulations in Unreal4 using Blueprints",
            "Developed coding project tutorials to teach students how to set up autonomous entities in Unreal4",
            "Developed a construction simulation in VR in Unity that replicated nailing wooden studs"
        ],
        img_path: "assets/img/vr-research-assistant-timeline.jpg"
    },
    {
        title: "Computer Science Major @ OSU (Sep. 2018)",
        desc: [
            "Began my undergrad studies at Oregon State University majoring in computer science specializing in \
            artificial intelligence and graphics."
        ],
        img_path: "assets/img/oregon-state.jpg"
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
timeline_container.innerHTML = timeline_container.innerHTML + container_html
}

