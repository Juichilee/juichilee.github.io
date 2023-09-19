{
// Array storing timeline data
var timeline_data = [
    {
        title: "Travel/Hiatus (Jan. - Jun. 2023)",
        desc: [
            "Family reunion with relatives in Taiwan to celebrate Chinese New Year and personal\
             time off for learning new skills and hobbies, and new project \
             development"
        ],
        img_path: "assets/img/travel-timeline.jpg"
    },
    {
        title: "Software Engineer Intern @ Intel (Jun. - Dec. 2022)",
        desc: [
            "Collaborated with FPGA security architect and manager to develop a working prototype \
            machine learning pipeline to automate the process of debugging customer FPGA designs, \
            improving team productivity and project timelines.",
            "Developed machine learning pipeline using Python3, Scikit-learn, NumPy, and Pandas, \
            generating models with 86%-90% accuracy on test housing dataset.",
            "Worked on firmware for securely loading and testing experimental features on FPGAs, \
            ensuring client FPGA designs are safe from hackers.",
            "Wrote and reenabled GoogleTest system and unit tests on the CI pipeline to validate production \
            firmware features.",
            "Participated in code reviews, improving overall code quality."
        ],
        img_path: "assets/img/intel-timeline.jpg"
    },
    {
        title: "Project Lead for Mixed Reality Inspection Tool Hololens 2, and Graduation @ OSU (Sep. - Jun. 2022)",
        desc: [
            "Collaborated with project partner and 2 other capstone project members to research and develop a \
            mixed-reality system informed by machine learning, improving the ability for humans to accurately \
            detect certain objects.",
            "Volunteered as team lead and communicator between team and project partner, iterating design based \
            on project partner’s vision and feedback and completing every project deadline.",
            "Performed requirements analysis, component research, architect design, prototyping, and testing and \
            debugging, ensuring that the user experience was consistent and bug-free.",
            "Implemented the system using Unity3D, Microsoft Mixed Reality ToolKit, OpenXR, Docker, and specialized \
            hardware such as Intel RealSense and Microsoft HoloLens 2.",
            "Presented finalized project at OSU’s 2022 Engineering Expo; during the 5-hour event, performed duties \
            such as providing project background and live demonstrations, drawing in and educating attendees on MR technologies."
        ],
        img_path: "assets/img/mr-inspection-tool-timeline.jpg"
    },
    {
        title: "Software Developer Intern @ Portland General Electric (Apr. - Sep. 2021)",
        desc: [
            "Implemented a serverless AWS application that pre-processes migrating data from PGE’s local Oracle \
            database to DynamoDB and S3 and sends custom outage emails to managers, greatly reducing response time \
            to critical outages.",
            "Implemented a Python3 RESTful web application utilizing Flask that performs CRUD operations on the \
            DynamoDB databases for storing settings, removing unnecessary overhead for authorized employees to \
            modify database settings.",
            "Designed and implemented an internal tool using SMTP, MIME, and Twilio API that automatically sends \
            templatized emails and text messages to a list of clients, keeping them updated on outages",
            "Designed and Developed an intuitive Python3 RESTful web application utilizing Flask, Boto3, AWS \
            Lambda, DynamoDB, EC2, \
            and API Gateway that enables non-IT employees to perform CRUD operations on internal database \
            entries on the cloud",
            "Assisted senior developers in updating Jenkins CI/CD pipeline files and automating the deployment \
            process",
        ],
        img_path: "assets/img/pge-timeline.jpg"
    },
    {
        title: "Unity VR Research Developer (Oct. 2019 - Dec. 2021)",
        desc: [
            "Collaborated with 2 project managers on a sponsored manufacturing research project to \
            develop an interactive VR training simulation using Unity and Oculus Quest, teaching \
            manufacturing apprentices how to properly use a caliper",
            "Assisted graduate student in developing a light frame wall construction VR simulation for \
            teaching manufacturing apprentices",
            "Assisted graduate student in developing a VR application for viewing the movement of \
            network packets between endpoints in VR, helping a group of researchers working in quantum \
            computing",
            "Wrote application logic in C#, integrating physics and model, texture, and data assets in \
            scenes",
            "Actively participated in the communication between project leads and clients in negotiating \
            technical requirements and project timeline, ensuring that the client is satisfied and the \
            project is completed in a timely manner"
        ],
        img_path: "assets/img/unity-vr-research-timeline.jpg"
    },
    {
        title: "VR Research Assistant (Jul. - Oct. 2019)",
        desc: [
            "Developed a physics-based VR construction simulation using Unity and C# that simulated \
            nailing wooden studs for the Oculus Quest, assisting a graduate student with their VR manufacturing \
            thesis",
            "Conducted research and developed various vehicle and AI-related simulations in Unreal4 using Blueprints",
            "Developed coding project tutorials to teach students how to set up autonomous entities in Unreal4"
        ],
        img_path: "assets/img/vr-research-assistant-timeline.jpg"
    },
    {
        title: "Computer Science Major @ OSU (Sep. 2018)",
        desc: [
            "Began my undergrad studies at Oregon State University majoring in computer science specializing in \
            artificial intelligence and VR simulations."
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

