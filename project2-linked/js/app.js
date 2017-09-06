//ORIGIN//
//(function (window) {
//	'use strict';
//    
//	// Your starting point. Enjoy the ride!
// 
//	var user = {
//        "name": "william",
//        "subName": "bill",
//        "logPic": "image/Logo.jpg",
//        "headerImg": "http://via.placeholder.com/1820x400",
//        "contact": {
//            "mobile": "01049055202",
//            "email": "tuntunkimpo@naver.com",
//            "github": "https://github.com/tuntunkimpo/"
//        },
//        "skills" : [
//            "awesomeness", "programming", "teaching", "JS"
//        ],
//        "welcomeMessage" : "Thanks"
//    };
//    
//var projects = {};
//projects.headerfooter = function(){
//        var HTMLheaderName = '<h1 id="name" class="supertitle text-uppercase"><strong>%data%</strong></h1>';
//        var HTMLheaderSubName = '<h2 id="subname" class="supertitle text-uppercase">%data%</h2>';
//        var HTMLheaderLogo = '<img src="%data%" class="img-responsive logo" alt="logo image">';
//        var HTMLheaderImg = '<img src="%data%" class="img-responsive placeholdimg" alt="header image">';
//        
//        var HTMLgithub ='<h4>%data%</h4>';
//    
//    
//        // var forMattedName = HTMLheaderName.replace("%data%", edu.school[0].name);
//        var forMattedName = HTMLheaderName.replace("%data%", user.name);
//        var forMattedSubName = HTMLheaderSubName.replace("%data%", user.subName);
//        var forMattedLogo = HTMLheaderLogo.replace("%data%", user.logPic);
//        var forMattedHeaderImg = HTMLheaderImg.replace("%data%", user.headerImg);
//
//        var forMattedGithub = HTMLgithub.replace("%data%", user.contact.github);
//    
//        $('#header').append(forMattedName);
//        $('#header').append(forMattedSubName);
//        $('#logo').append(forMattedLogo);
//        $('#headerimg').append(forMattedHeaderImg);
//        
//        $('#github').append(forMattedGithub);
//    };
//})(window);


//MODIFIY//
(function (window) {
	'use strict';
   
	// Your starting point. Enjoy the ride!
    var sns = {
        "kakaostory": "9"
        };
	
var projects = {};
projects.headerfooter = function(){
        var HTMLheaderName = '<h1>카카오스토리<span class="badge">%data%</span></h1>';

		var forMattedName = HTMLheaderName.replace("%data%", sns.kakaostory);
   
        $('#header').append(forMattedName);
    };

projects.headerfooter();    

})(window);