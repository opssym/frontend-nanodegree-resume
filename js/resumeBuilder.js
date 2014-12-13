var bio = {
  "name": "Alexander Usov",
  "role": "Web Developer",
  "contacts": {
    "email": "opssym@gmail.com",
    "github": "opssym",
    "location": "Chelyabinsk",
    "twitter": "foobar",
    "mobile": "+795147XXXXX"
  },
  "welcomeMessage": "Well done! You reading my resume.",
  "skills": [
  "Linux", "HTML", "Bootstrap", "JavaScript", "CoffeScript", "NodeJS"
  ],
  "bioPic": "images/i.jpg"
}

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  $("#header").prepend(formattedName + " " + formattedRole);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedMobileobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedTwitterwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

  $("#topContacts, #footerContacts").append(formattedEmail);
  $("#topContacts, #footerContacts").append(formattedGitHub);
  $("#topContacts, #footerContacts").append(formattedLocation);
  $("#topContacts, #footerContacts").append(formattedMobileobile);
  $("#topContacts, #footerContacts").append(formattedTwitterwitter);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
}

var education = {
  schools: [
  {
    "name": "Chelyabinsk State University",
    "location": "Chelyabinsk",
    "degree": "BS",
    "major": ["Physics"],
    "dates": "2007",
    "url": "http://www.csu.ru/en"
  }
  ],
  onlineCourses: [
  {
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "dates": "2014",
    "url": "https://www.udacity.com/course/nd001"
  },
  {
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "dates": "2014",
    "url": "https://www.udacity.com/course/ud304"
  },
  {
    "title": "JavaScript Basics",
    "school": "Udacity",
    "dates": "2014",
    "url": "https://www.udacity.com/course/ud804"
  },
  {
    "title": "Intro to jQuery",
    "school": "Udacity",
    "dates": "2014",
    "url": "https://www.udacity.com/course/ud245"
  },
  {
    "title": "JavaScript Road Trip Part 1",
    "school": "Udacity",
    "dates": "2014",
    "url": "https://www.codeschool.com/courses/javascript-road-trip-part-1"
  },
  {
    "title": "JavaScript Road Trip Part 2",
    "school": "Code School",
    "dates": "2014",
    "url": "https://www.codeschool.com/courses/javascript-road-trip-part-2"
  },
  {
    "title": "JavaScript Road Trip Part 3",
    "school": "Code School",
    "dates": "2014",
    "url": "https://www.codeschool.com/courses/javascript-road-trip-part-3"
  },
  {
    "title": "JavaScript Best Practices",
    "school": "Code School",
    "dates": "2014",
    "url": "https://www.codeschool.com/courses/javascript-best-practices"
  },
  {
    "title": "Front-end Foundations",
    "school": "Code School",
    "dates": "2014",
    "url": "https://www.codeschool.com/courses/front-end-foundations"
  }
  ]
}

education.display = function(){
  $("#education").append(HTMLschoolStart);
  $("#education").before(HTMLeducationButton);
  for (school in this.schools) {
    var inst = this.schools[school];

    var formattedSchoolName = HTMLschoolName.replace("%data%", inst.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", inst.degree);
    $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", inst.dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", inst.location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", inst.major);
    $(".education-entry:last").append(formattedSchoolMajor);
  }

  $(".education-entry:last").append(HTMLonlineClasses);
  for (course in this.onlineCourses) {
    var inst = this.onlineCourses[course];

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", inst.title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", inst.school);
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", inst.dates);
    $(".education-entry:last").append(formattedOnlineDates);
    var formattedOnlineURL = HTMLonlineURL.replace(/%data%/g, inst.url);
    $(".education-entry:last").append(formattedOnlineURL);
    $(".education-entry:last").append($("<hr/>"));
  }
}

var projects = {
  "projects": [
  {
    "title": "Udacity - Mockup to Website",
    "dates": "2014",
    "description": "Udacity - Mockup to Website",
    "images": [
    "images/page-mock.png"
    ]
  }
  ]
}

projects.display = function() {
  for (project in this.projects) {
    $("#projects").append(HTMLprojectStart);

    $("#projects").before(HTMLprojectButton);

    var inst = projects.projects[project];

    var formattedTitle = HTMLprojectTitle.replace("%data%",inst.title);
    var formattedDates = HTMLprojectDates.replace("%data%",inst.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",inst.description);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);

    if (inst.images.length > 0) {
      for (image in inst.images) {
        var formattedImage = HTMLprojectImage.replace("%data%", inst.images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

var work = {
  jobs: [
  {
    "employer": "Badoo",
    "title": "Senior NOC engieneer",
    "description": "Senior NOC engieneer",
    "dates": "September 2010 - December 2012",
    "location": "Moscow"
  }
  ]
}

work.display = function() {
  for (job in this.jobs) {
    $("#workExperience").append(HTMLworkStart);

    $("#workExperience").before(HTMLworkButton);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",  work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",  work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

bio.display();
education.display();
projects.display();
work.display();

$(function (){
  $(".toHome").click(function(){
    $("html,body").animate({"scrollTop" : 0},1000);
  });
  $("#workExperienceButton").click( function(){
    $("#workExperience").fadeToggle();
  });
  $("#projectsButton").click( function(){
    $("#projects").fadeToggle();
  });
  $("#educationButton").click( function(){
    $("#education").fadeToggle();
  });
  $("#mapDivButton").click( function(){
    $("#mapDiv").fadeToggle();
  });
});

$("#mapDiv").append(googleMap);
$("#mapDiv").before(HTMLmapButton);
