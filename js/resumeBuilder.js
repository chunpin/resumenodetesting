// bio information
var bio = {
    "name" : "CHUN PIN CHEN" ,
    "role" : "Front End Developer",
    "contact": {
      "mobile":"0800-123-4567",
      "email" :"james19840628@gmail.com",
      "github": "CHUN PIN",
      "blog":"james chen",
      "location": "Rosenheim Germany"
    },
    "welcome_message": "Ich bin gebürtiger Taiwaner, habe in meinem Heimatland “Information & Kommunikation” studiert,In meiner Heimat arbeitete ich 4 Jahre lang in einem damals sehr bekanntem Medien-DesignStudio",
    "skills": [
      "web design", "saving the world", "speaking different languages"
    ],
    "bioPic" :"images/persoanl_picture.jpg"
};

//display name
bio.display= function(){
  //display role
    var formattedRole = HTMLheaderRole.replace('%data%' ,bio.role);
    $("#header").prepend(formattedRole);
    //display name
    var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").prepend(formattedHeaderName);
    
    //display contact
    var formattedContact = HTMLmobile.replace("%data%", bio.contact.mobile);
    $("#header:last").append(formattedContact);
    //display email
    var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
    $("#header:last").append(formattedEmail);
    //display email
    var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
    $("#header:last").append(formattedGithub);
    //display Blog
    var formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
    $("#header:last").append(formattedBlog);
    //display Location
    var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
    $("#header:last").append(formattedLocation);

    //bioPic & Welcome Massage
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header:last").append(formattedBioPic);
    var formattedWelcomMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome_message);
    $("#header:last").append(formattedWelcomMsg);


    //display Skills
    $("#header").append(HTMLskillsStart);

    for(skill in bio.skills){
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header:last").append(formattedSkills);
    };
};

bio.display();





// education section
var education = {
  "schools" : [ 
   {
    "name":"Leader University",
    "location": "Tainan City, TAIWAN",
    "years":"2002-2007",
    "degree":"Bachlor",
    "major": "Information Communication"
   },   
   {
    "name": "Kung Shang Hight School",
    "location": "Tainan City, TAIWAN",
    "years":"1999-2002",
    "degree":"Heigh School",
    "major": "Electornic Engernering"
   }  
  ],
  "onlineCourse" : [
      {
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": 2015,
        "url" :"http://www.udacity.com/course/ud804"
      },
      {
        "title": "Responsive Web Design Fundamental",
        "school": "Udacity",
        "dates": 2015,
        "url" :"https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
      },
      {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": 2015,
        "url" :"https://www.udacity.com/course/responsive-images--ud882"
      }
  ]
}; 


education.school_Display = function(){
  $("#education").append(HTMLschoolStart);

  for(school in education.schools){
      var formattedschoolName =  HTMLschoolName.replace("%data%", education.schools[school].name); 
      $(".education-entry:last").append(formattedschoolName);
      var formattedschoolDegree =  HTMLschoolDegree.replace("%data%",education.schools[school].degree) ;
      $(".education-entry:last").append(formattedschoolDegree);
      var formattedschoolDates =  HTMLschoolDates.replace("%data%",education.schools[school].years);
      $(".education-entry:last").append(formattedschoolDates);
      var formattedschoolLocation =  HTMLschoolLocation.replace("%data%",education.schools[school].location); 
      $(".education-entry:last").append(formattedschoolLocation);
      var formattedschoolMajor =  HTMLschoolMajor.replace("%data%",education.schools[school].major);
      $(".education-entry:last").append(formattedschoolMajor);
  };
};

education.onlineCourse_Display = function(){
  $(".education-entry:last").append(HTMLonlineClasses);

  for(course in education.onlineCourse){
      var formattedOnlineTitle =  HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title); 
      $(".education-entry:last").append(formattedOnlineTitle);
      var formattedOnlineSchool =  HTMLonlineSchool.replace("%data%",education.onlineCourse[course].school) ;
      $(".education-entry:last").append(formattedOnlineSchool);
      var formattedOnlineDates =  HTMLonlineDates.replace("%data%",education.onlineCourse[course].dates);
      $(".education-entry:last").append(formattedOnlineDates);
      var formattedOnlineURL =  HTMLonlineURL.replace("%data%",education.onlineCourse[course].url); 
      $(".education-entry:last").append(formattedOnlineURL);
  };
};

education.school_Display();
education.onlineCourse_Display();







//work.jobs sections
var work = {
    "jobs":[
        {"employer":"Ironman Design",
        "title":"Web Interface Designer",
        "dates":"2006 bis 2010",
        "location":"Tainan City,Taiwan",
        "description":"Write original copy, artwork, layouts, and production"
       },
       {"employer":"Area Reversal Design",
        "title":"Web Interface Designer",
        "dates":"2005 bis 2006",
        "location":"Tainan City,Taiwan",
        "description":"Designed and produced brochures, catalogs, logos, and direct mail pieces."
       },
       {"employer": "The Rimrock Resort Hotel",
        "title":"Housekeeping & Roomboy,Kellner und Weinkellner",
        "dates":"2011 bis 2012",
        "location":"Banff, Canada",
        "description":"Serving Gasts"
       },
       {"employer": "Happinger Hof",
        "title":"Housekeeping & Roomboy",
        "dates":"",
        "location":"Rosenheim,Deutschland",
        "description":"Clearning Hotel"
       }
    ]
};
//display jobs in work Object
work.display = function(){  
  $('#workExperience').append(HTMLworkStart);

  for(job in work.jobs){
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    $(".work-entry:last").append(formattedWorkEmployer);    
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedWorkTitle);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDescription);
  };
};

work.display();

//projects Sections
var projects = {
    "project":[
        {"Title" :"Ironman Design Studio",
         "Dates":"2009",
         "Description":"The web-entry of design studio",
         "Images":["images/ironman_01.jpg",
                   "images/ironman_02.jpg",
                   "images/ironman_03.jpg"
                  ]
        },
        {"Title" :"Tainan Fitness",
         "Dates":"2015",
         "Description":"This is a fitness website",
         "Images":["images/Tainan_Fitness_01.jpg",
                   "images/Tainan_Fitness_02.jpg",
                   "images/Tainan_Fitness_03.jpg"
                  ]
        },
        
        {"Title" :"PaoHuang Technology",
         "Dates":"2009",
         "Description":"PaoHuang Technology",
         "Images":["images/PaoHuang_01.jpg"]
        }
    ]
};

projects.display = function(){
  $("#projects").append(HTMLprojectStart);

  for(project in projects.project){
    var formattedProjectTitle =  HTMLprojectTitle .replace("%data%", projects.project[project].Title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates =  HTMLprojectDates .replace("%data%", projects.project[project].Dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription =  HTMLprojectDescription .replace("%data%", projects.project[project].Description);
    $(".project-entry:last").append(formattedProjectDescription);
    
    for(image in projects.project[project].Images){
        var formattedProjectImage =  HTMLprojectImage .replace("%data%", projects.project[project].Images[image]);
        $(".project-entry:last").append(formattedProjectImage);
    }
  }
};

projects.display();






//create a google map
//$("#mapDiv").append(googleMap);
