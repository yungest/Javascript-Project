let database = [
  {
	Username: "Shololagbolahan",
	Password: "christ"
  },

  {
	Username: "Favour",
	Password: "123232"
  },

  {
	Username: "Sally",
	Password: "dude"
  }
  
  ];

let newsfeed = [
		{
			Username: "Sammy",
			Timelines: " I love to sing more than anything!"
		},

		{
			Username: " nobemistake",
			Timelines: " Game of throne is a must watch for everyone!"
		},

		{
			Username: "Dayo",
			Timelines: " Looking like is gonna rain!"
		}
];



function isUserValid (username,password)
{
	for( var i=0; i < database.length; i++)
	{
	 if (database[i].Username === username &&
	 	 database[i].Password === password )
	 {
	 	return true;
	}
		return false;
	} 
}

// function isUserValid (username,password){
// 	for(var i=0; i<database.length; i++)
// 	{
// 		if ( username === database[i].Username &&
// 		 password === database[i].Password) {
// 		 	return true;
// 		 }
// 		 return false;
//  	}
	
// }

 
function signin( user,pass) {
	if (isUserValid(user,pass))
	{
	 console.log(newsfeed);
	}
	else {
		alert("wrong Username and Password")
	}
}

var usernamePrompt = prompt("Input your username");
var passwordPrompt = prompt("Input your password");

signin( usernamePrompt, passwordPrompt);