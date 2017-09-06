//var edu = {
//    "school": [
//        {
//            "name": "Nova Southeastern University",
//            "city": "Seoul",
//            "degree": "CS",
//            "dates": 2013,
//            "url": "https://example.com"
//        },
//        {
//            "name": "Eckerd College",
//            "city": "Seoul",
//            "degree": "CS",
//            "dates": 2013,
//            "url": "http://example.com"
//        }
//    ],
//    "onlineCourses": [
//        {
//            "title": "Javascirpt Crash Course",
//            "school": "Udacity",
//            "dates": 2014,
//            "url": "http://example.com"
//        }
//    ]
//};


(function (window) {
	'use strict';
/* 헤더부분 */
    var user = {
        "number": "14",
        "subName": "bill",
    };
	
/* li 반복적으로 뿌려주는 부분 */	
var quz = {
    "questions": [
        { 
            "booksImg" : "김포",
            "description" : "https://story.kakao.com/tuntungimpo" 
        },
        { 
            "booksImg" : "마포성산",
            "description" : "https://story.kakao.com/tuntunmapo" 
        },
        { 
            "booksImg" : "마포성산",
            "description" : "https://story.kakao.com/tuntunmapo" 
        },
        { 
            "booksImg" : "마포성산",
            "description" : "https://story.kakao.com/tuntunmapo" 
        },
        { 
            "booksImg" : "강서마곡",
            "description" : "https://story.kakao.com/ch/tuntunmagok" 
        }
    ]
};

var projects = {};
projects.headerfooter = function(){
        var HTMLheaderName = '<h1>카카오스토리<span class="badge">%data%</span></h1>';
    
        // var forMattedName = HTMLheaderName.replace("%data%", edu.school[0].name);
        var forMattedName = HTMLheaderName.replace("%data%", quz.questions.length + 2);
    
        $('#header').append(forMattedName);
	};
projects.headerfooter();



projects.question = function () {
        var qu = 0;
        for (qu in quz.questions){
        $('#book').append('<ul class="col-md-4"></ul>');
            
        var HTMLQImg = '<li class="list">%data%</li>';
        var forMattedQImg = HTMLQImg.replace("%data%", quz.questions[qu].booksImg);
        $('.col-md-4:last').append(forMattedQImg);
			
        var HTMLQDescription = '<a src="%data%"><img src="./img/kakaostrorylogo.png" alt=""></a>'; 
        var forMattedQDescription = HTMLQDescription.replace("%data%", quz.questions[qu].description); 
        $('.list:last').append(forMattedQDescription);    
        };
};
    
projects.question();
	
})(window);
