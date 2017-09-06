///*
//This is empty on purpose! Your code to build the resume will go here.
// */
////var formattedRole = HTMLheaderRole.replace()
////var awesomeThoughts = " I am bill and I am AWESOME!";
////var funThoughts = awesomeThoughts.replace("AWESOME", "fun");
////$('#main').append(funThoughts);
//var name = "bill";
//
//var forMattedName = HTMLheaderName.replace("%data%", name);
//
//var role = "branch master";
//var forMattedRole = HTMLheaderRole.replace("%data%", role);
//
//
//
//$('#header').prepend(forMattedRole);
//$('#header').prepend(forMattedName);
//$('#workExperience').prepend(bio.name);
//
//
//
////console.log(awesomeThoughts);
////
////var email = "tuntunkimpo@naver.com";
////
////var newEmail = email.replace("naver", "gmail");
////
////console.log(email);
////console.log(newEmail);


var bio = {
    "name": "william bill",
    "role": "tuntun branch master",
    "contact": {
        "mobile": "01049055202",
        "email": "tuntunkimpo@naver.com"
    },
    "skills" : [
        "awesomeness", "programming", "teaching", "JS"
    ],
    "welcomeMessage" : "Thanks",
    "bioPic": "images/fry.jpg"
};


var education = {
    "school": [
        {
            "name": "Nova Southeastern University",
            "city": "Seoul",
            "degree": ["CS"],
            "dates": 2013,
            "url": "https://example.com"
        },
        {
            "name": "Eckerd College",
            "city": "Seoul",
            "degree": ["CS"],
            "dates": 2013,
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascirpt Crash Course",
            "school": "Udacity",
            "dates": 2014,
            "url": "http://example.com"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "Planet Express",
            "title": "Dalivery Boy",
            "dates": "January 3000 - Future",
            "description": "HTML is the foundation of web development. HTML is used to format text, create hyperlinks, tables, lists, forms, display images and more. By mastering HTML you will be able to develop and maintain web pages unlimited to a particular software program's features. The HTML Developer Certificate proves fundamental knowledge of web development using HTML5."
            
        },
        {
            "employer": "Planet Express",
            "title": "Dalivery Boy",
            "dates": "January 3000 - Future",
            "description": "HTML is the foundation of web development. HTML is used to format text, create hyperlinks, tables, lists, forms, display images and more. By mastering HTML you will be able to develop and maintain web pages unlimited to a particular software program's features. The HTML Developer Certificate proves fundamental knowledge of web development using HTML5."
        }
    ]
};
        
var projects = {
    "projects": [
        {
            "title": "Dalivery Boy",
            "dates": "January 3000 - Future",
            "description": "HTML is the foundation of web development. HTML is used to format text, create hyperlinks, tables, lists, forms, display images and more. By mastering HTML you will be able to develop and maintain web pages unlimited to a particular software program's features. The HTML Developer Certificate proves fundamental knowledge of web development using HTML5.",
            "images": [
                "https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                "https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            ]
        
        }
    ]
};

function displayWork() {

// bio객체에 skills가 있는지 확인하고 있다면 ID가 header인 div에 
    for (job in work.jobs) {
        // create new div for wrok experience
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);


        var formattedDescription = HTMLworkDescription.replace("%data", work.jobs[job].description);

        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDescription;

        $(".work-entry:last").append(formattedEmployerTitle);
        // last reference W3school https://www.w3schools.com/jquery/sel_last.asp
        }
    }

displayWork();




var forMattedName = HTMLheaderName.replace("%data%", bio.name);
$('#header').append(forMattedName);
  

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $('#header').append(formattedRole);      


var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $('#header').append(formattedBioPic);  


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $('#skills').append(formattedSkill);
    
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $('#skills').append(formattedSkill);
    
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $('#skills').append(formattedSkill);
    
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $('#skills').append(formattedSkill);
};

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
});


$("#main").append(internationalizeButton);

// lesson5-11 internationalize Name button
function inName(name){
    // remove space 
      name = name.trim().split(" ");
      console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

//lesson5-12 Encapsulation(캡슐화)
//1
var displayProjects = function(){
    // code goes here
};
//함수는 객체다, 자바스크립트의 거의 모든것은 객체
//2 projects 객체 내에 display 함수를 가지고 있는 것


projects.display = function () {
    for (project in projects.projects)
    $("#projects").append(HTMLprojectStart);
    
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);    
    
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
    
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
    
        if(projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
}

projects.display();





      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

