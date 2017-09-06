(function (window) {
	'use strict';
    
	// Your starting point. Enjoy the ride!
    var user = {
        "name": "william",
        "subName": "bill",
        "logPic": "image/Logo.jpg",
        "headerImg": "http://via.placeholder.com/1820x400",
        "contact": {
            "mobile": "01049055202",
            "email": "tuntunkimpo@naver.com",
            "github": "https://github.com/tuntunkimpo/"
        },
        "skills" : [
            "awesomeness", "programming", "teaching", "JS"
        ],
        "welcomeMessage" : "Thanks"
    };
    
var projects = {};
projects.headerfooter = function(){
        var HTMLheaderName = '<h1 id="name" class="supertitle text-uppercase"><strong>%data%</strong></h1>';
        var HTMLheaderSubName = '<h2 id="subname" class="supertitle text-uppercase">%data%</h2>';
        var HTMLheaderLogo = '<img src="%data%" class="img-responsive logo" alt="logo image">';
        var HTMLheaderImg = '<img src="%data%" class="img-responsive placeholdimg" alt="header image">';
        
        var HTMLgithub ='<h4>%data%</h4>';
    
    
        // var forMattedName = HTMLheaderName.replace("%data%", edu.school[0].name);
        var forMattedName = HTMLheaderName.replace("%data%", user.name);
        var forMattedSubName = HTMLheaderSubName.replace("%data%", user.subName);
        var forMattedLogo = HTMLheaderLogo.replace("%data%", user.logPic);
        var forMattedHeaderImg = HTMLheaderImg.replace("%data%", user.headerImg);

        var forMattedGithub = HTMLgithub.replace("%data%", user.contact.github);
    
        $('#header').append(forMattedName);
        $('#header').append(forMattedSubName);
        $('#logo').append(forMattedLogo);
        $('#headerimg').append(forMattedHeaderImg);
        
        $('#github').append(forMattedGithub);
    };
//myObj = {
//    "name":"John",
//    "age":30,
//    "cars": [
//        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
//        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
//        { "name":"Fiat", "models":[ "500", "Panda" ] }
//    ]
//}
//
//for (i in myObj.cars) {
//    x += "<h2>" + myObj.cars[i].name + "</h2>";
//    for (j in myObj.cars[i].models) {
//        x += myObj.cars[i].models[j] + "<br>";
//    }
//}
    
projects.headerfooter();
    
    
var quz = {
    "questions": [
        { 
            "booksImg" : "http://via.placeholder.com/600x150",
            "title" : "Q1",
            "description" : "http://www.naver.com" 
        },
        { 
            "booksImg" : "http://via.placeholder.com/600x150",
            "title" : "Q2",
            "description" : "http://www.naver.com" 
        },
        { 
            "booksImg" : "http://via.placeholder.com/600x150",
            "title" : "Q3",
            "description" : "http://www.naver.com" 
        },
        { 
            "booksImg" : "http://via.placeholder.com/600x150",
            "title" : "Q3",
            "description" : "http://www.naver.com" 
        }
    ]
};

  
projects.question = function () {
        var qu = 0;
        for (qu in quz.questions){
        $('#book').append('<div class="col-md-4"></div>');
            
        var HTMLQImg = '<img src="%data%" class="img-responsive placeholdimg" data- toggle="modal" data-target="#myModal1" alt="">';
        var forMattedQImg = HTMLQImg.replace("%data%", quz.questions[qu].booksImg);
        $('.col-md-4:last').append(forMattedQImg);
                
        var HTMLQTitle = '<h4 class="text-uppercase">%data%</h4>';
        var forMattedQTitle = HTMLQTitle.replace("%data%", quz.questions[qu].title);
        $('.col-md-4:last').append(forMattedQTitle); 
            
        var HTMLQDescription = '<p>%data%</p>';
        var forMattedQDescription = HTMLQDescription.replace("%data%", quz.questions[qu].description); 
        $('.col-md-4:last').append(forMattedQDescription);    
        };
};

    
    
projects.question();

})(window);
