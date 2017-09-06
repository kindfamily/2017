// Lesson3 append

var name = "bill";

var forMattedName = HTMLheaderName.replace("%data%", name);

var role = "branch master";
var forMattedRole = HTMLheaderRole.replace("%data%", role);

$('#header').prepend(forMattedRole);
$('#header').prepend(forMattedName);

console.log(awesomeThoughts);






// Lesson3 12 increase the value of the last number [0, 0, 7] -> [0 ,0 ,8] 
 
var sampleArray = [0,0,7];

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}

conslole.log(incrementLastArrayElement(sampleArray));


// Lesson3 13 "AlbERt EINstEiN" -> "Albert EINSTEIN".
// answer 1( by my self )
var name = "AlbERt EINstEiN";

function nameChanger(oldName){
    var finalName = oldName;
    
    var newArray = [];
    var newArray2 = [];
    
    newArray = finalName.slice(0, 6);
    newArray = newArray.toLowerCase();
    newArray = newArray.slice(1, 6);
    newArray = "A" + newArray;
    
    newArray2 = finalName.slice(7, 15);
    newArray2 = newArray2.toUpperCase();    
    
    finalName = newArray + " " + newArray2;
    
    return finalName;
}

console.log(nameChanger(name));

// answer 2 ( Udacity solved ) 
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

console.log(nameChanger(name));

// Lesson3 Object

var skills = ["awesomeness", "programming", "teaching", "JS"];

var bio = {
    "name" : "James",
    "age" : 32,
    "skills" : skills
};

$("#main").append(bio.name);

// Lesson3 Biography Quiz  , how to use array and jquery .append or prepend
var skills = ["awesomeness", "programming", "teaching", "JS"];

var bio = {
    "name" : "bill",
    "role" : 32,
    "contactinfo" : 010-4905-5202,
    "pictureURL" : "https://accounts.google.com/SignOutOptions?hl=ko&continue=https://www.google.co.kr/_/chrome/newtab%3Fei%3DPTUeWZX-L4qd0gSChrv4Ag%26espv%3D2%26yv%3D2",
    "skills" : skills,
    "welcomeMessage" : "Thanks"
};

$("#workExperience").prepend(bio.name);
$("#workExperience").append(bio.role);
$("#workExperience").append(bio.contactinfo);

// Lesson3 JSON

var education = {
 "schools": [ //array
     { //object 0
        "cities": "bill",
        "major": ["fineArt"],
        "minors": "no", 
        "graduationyears": "2011"
     },
     { //object 2
        "cities": "bill",
        "major": ["fineArt"],
        "minors": "no", 
        "graduationyears": "2011"
     }
 ]
}

// Lesson4 Protecting the Resume
//

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};



//Lesson5 for loops

for (var i=0; i<9; i++){
    console.log(i);
}


//Lesson5 Flow Control For-in Loops

var work = {
    jobs: [
        {
            "name": "디지털헤럴드",
            "city": "Seoul",
            "employer": "Samsung"
        },
        {
            "name": "튼튼영어",
            "city": "gimpo",
            "employer": "Hyundai"
        }
    ]
};

for (job in work){
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    
    $(".work-entry:last").append(formattedEmployerTitle);
    // last reference W3school https://www.w3schools.com/jquery/sel_last.asp
}


//Lesson5 Flow Control
//collecting Click Lacations with jQuery
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
});


//jQuery

Lesson 1:
The Basics: the DOM, $, and Selectors
 1. Course Introduction
 2. Why Does jQuery Exist?
 3. Quiz: What is jQuery actually
 4. Money, Money, Money (the $)
 5. How to Use the $
 6. Quiz: DOM Inspiration
 7. How Is jQuery Included in a Page?
 8. Quiz: Select by Tags
 9. Quiz: Select by Classes Quiz
 10. Quiz: Select by IDs
 11. Family Tree Revisited
 12. Quiz: Filters Quiz
 13. High Five!

//Lesson1
// index.html
<!DOCTYPE html>
<!--

This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
    <div class="container">
        <header class="header">
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>
                    <li class="nav-item"><a href="#4">Item #4</a></li>
                    <li class="nav-item"><a href="#5">Item #5</a></li>
                    <li class="nav-item"><a href="#6">Item #6</a></li>
                </ul>
            </nav>
        </header>
        <div class="articles">
            <input id="input" value="Cool Articles" type="text">
            <h1>Cool Articles</h1>
            <ul class="article-list">
                <li class="article-item">
                    <header>Article #1</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
                    <h3>Sample Image Title here</h3>
                    <img src="http://placehold.it/350x150" alt="Placeholder Image">
                    <ul>
                        <li class="bold">James</li>
                        <li>Lily</li>
                        <li>Harry</li>
                    </ul>
                    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
                </li>
                <li class="article-item featured">
                    <header>Article #2</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi ipsum, incidunt mollitia modi cum, eum ex doloremque rerum quod, maiores quisquam, enim quam unde cumque! Quam, doloremque. Voluptatum, maxime!</p>
                    <p>Numquam et quae, quasi. Reiciendis nemo mollitia eveniet alias, debitis facere atque excepturi et beatae laudantium commodi optio unde amet vitae libero quas cupiditate, nam porro minus. Quisquam, odit non.</p>
                </li>
                <li class="article-item">
                    <header>Article #3</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ratione, cum doloremque molestias labore amet at dicta reiciendis repudiandae fuga atque adipisci pariatur distinctio suscipit perferendis provident, facere ad aut.</p>
                    <p>Temporibus sapiente odio eveniet enim perferendis maxime, ratione, accusantium suscipit alias, soluta architecto culpa pariatur. Cupiditate nam eaque dolore voluptatem necessitatibus corporis iusto adipisci, dignissimos error, vitae quam, aliquid eius!</p>
                </li>
                <li class="article-item">
                    <header>Article #4</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, est soluta eos voluptates eum! Modi sit quia ipsum fugiat nesciunt, assumenda deleniti consequuntur molestias reprehenderit. Voluptate corporis illum nam?</p>
                    <p>Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa, reprehenderit sit a dolore fuga placeat magni culpa ipsam quas id aut veniam rerum pariatur enim harum recusandae quo odio consequuntur. Maxime, aperiam.</p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>
// app.js
// selecting by class name
/*
For this quiz, use a jQuery class selector to grab all of the elements of class 'article-item' on the page!
*/
// don't change this variable!
var articleItems;

articleItems = $('.article-item');// your code goes here!
console.log(articleItems);
     
// selecting by id name
/*
For this quiz, use a jQuery class selector to grab all the element with id 'nav' on the page!
*/

// don't change this variable!
var nav;

nav = $('nav');// your code goes here!
console.log(nav);
                    

                    
                    
//Lesson1-12 filter quiz
//index.html
<!DOCTYPE html>
<!--

This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
    <div class="container">
        <header class="header">
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>
                    <li class="nav-item"><a href="#4">Item #4</a></li>
                    <li class="nav-item"><a href="#5">Item #5</a></li>
                    <li class="nav-item"><a href="#6">Item #6</a></li>
                </ul>
            </nav>
        </header>
        <div class="articles">
            <input id="input" value="Cool Articles" type="text">
            <h1>Cool Articles</h1>
            <ul class="article-list">
                <li class="article-item">
                    <header>Article #1</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
                    <h3>Sample Image Title here</h3>
                    <img src="http://placehold.it/350x150" alt="Placeholder Image">
                    <ul>
                        <li class="bold">James</li>
                        <li>Lily</li>
                        <li>Harry</li>
                    </ul>
                    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
                </li>
                <li class="article-item featured">
                    <header>Article #2</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi ipsum, incidunt mollitia modi cum, eum ex doloremque rerum quod, maiores quisquam, enim quam unde cumque! Quam, doloremque. Voluptatum, maxime!</p>
                    <p>Numquam et quae, quasi. Reiciendis nemo mollitia eveniet alias, debitis facere atque excepturi et beatae laudantium commodi optio unde amet vitae libero quas cupiditate, nam porro minus. Quisquam, odit non.</p>
                </li>
                <li class="article-item">
                    <header>Article #3</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ratione, cum doloremque molestias labore amet at dicta reiciendis repudiandae fuga atque adipisci pariatur distinctio suscipit perferendis provident, facere ad aut.</p>
                    <p>Temporibus sapiente odio eveniet enim perferendis maxime, ratione, accusantium suscipit alias, soluta architecto culpa pariatur. Cupiditate nam eaque dolore voluptatem necessitatibus corporis iusto adipisci, dignissimos error, vitae quam, aliquid eius!</p>
                </li>
                <li class="article-item">
                    <header>Article #4</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, est soluta eos voluptates eum! Modi sit quia ipsum fugiat nesciunt, assumenda deleniti consequuntur molestias reprehenderit. Voluptate corporis illum nam?</p>
                    <p>Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa, reprehenderit sit a dolore fuga placeat magni culpa ipsam quas id aut veniam rerum pariatur enim harum recusandae quo odio consequuntur. Maxime, aperiam.</p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>
                                 
//app.js
/*
For this quiz, use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

// Start with these variable!
var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 = articleList.siblings(h1);// Your code goes here!

kids = articleList.find('*');// Your code goes here!

parents = articleList.parents('div');// Your code goes here!

console.log(h1, kids, parents);

                    
//Lesson2-2 toggleClass
//index.html
<!DOCTYPE html>
<!--

This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
    <div class="container">
        <header class="header">
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>
                    <li class="nav-item"><a href="#4">Item #4</a></li>
                    <li class="nav-item"><a href="#5">Item #5</a></li>
                    <li class="nav-item"><a href="#6">Item #6</a></li>
                </ul>
            </nav>
        </header>
        <div class="articles">
            <input id="input" value="Cool Articles" type="text">
            <h1>Cool Articles</h1>
            <ul class="article-list">
                <li class="article-item">
                    <header>Article #1</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
                    <h3>Sample Image Title here</h3>
                    <img src="http://placehold.it/350x150" alt="Placeholder Image">
                    <ul>
                        <li class="bold">James</li>
                        <li>Lily</li>
                        <li>Harry</li>
                    </ul>
                    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
                </li>
                <li class="article-item featured">
                    <header>Article #2</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi ipsum, incidunt mollitia modi cum, eum ex doloremque rerum quod, maiores quisquam, enim quam unde cumque! Quam, doloremque. Voluptatum, maxime!</p>
                    <p>Numquam et quae, quasi. Reiciendis nemo mollitia eveniet alias, debitis facere atque excepturi et beatae laudantium commodi optio unde amet vitae libero quas cupiditate, nam porro minus. Quisquam, odit non.</p>
                </li>
                <li class="article-item">
                    <header>Article #3</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ratione, cum doloremque molestias labore amet at dicta reiciendis repudiandae fuga atque adipisci pariatur distinctio suscipit perferendis provident, facere ad aut.</p>
                    <p>Temporibus sapiente odio eveniet enim perferendis maxime, ratione, accusantium suscipit alias, soluta architecto culpa pariatur. Cupiditate nam eaque dolore voluptatem necessitatibus corporis iusto adipisci, dignissimos error, vitae quam, aliquid eius!</p>
                </li>
                <li class="article-item">
                    <header>Article #4</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, est soluta eos voluptates eum! Modi sit quia ipsum fugiat nesciunt, assumenda deleniti consequuntur molestias reprehenderit. Voluptate corporis illum nam?</p>
                    <p>Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa, reprehenderit sit a dolore fuga placeat magni culpa ipsam quas id aut veniam rerum pariatur enim harum recusandae quo odio consequuntur. Maxime, aperiam.</p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>
                    
                    
//app.js
/*
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/

// don't change this variable!
var featuredArticle;

featuredArticle = $('.featured');

featuredArticle.toggleClass('featured');

                    

// jQuery [U] L2-11

var family1, family2, bruce, madison, hunter;

family1 = $('#family1');

family2 = $('<div id="family2"><h1>Family 2</h1></div>');

bruce = $('<div id ="bruce"><h2>Bruce</h2></div>');

madison = $('<div id ="madison"><h3>Madison</h3></div>');

hunter = $('<div id ="hunter"><h3>Hunter</h3></div>');
    
family2.insertAfter(family1);

family2.append(bruce);

bruce.append(madison);

bruce.append(hunter);

                    
// jQuery [U] L2-12
function numberAdder () {
// 
    var text, number;
// $(this)  to select current element in a loop 요소안에 텍스트를 전부 선택
    text = $(this).text();
// 텍스트의 길이를 센다
    number = text.length;
                    
    $(this).text(text + " " + number);
}
// p태그를 반복적으로 선택하고 .each 안에 있는 함수를 반복적으로 실행
$('p').each(numberAdder);







