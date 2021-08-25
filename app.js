"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/


// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
     selectSearch()
      
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}



function selectSearch(people) {
let searchResults = people

while(searchResults.length >1){
  let searchChoice = promptFor('Which trait would you like to search for?\n1. gender\n2. dob\n3. eye color\n4. height\n5. weight') 
  switch(searchoice){ 
  case '1':
    serachResults = searchByGender(people) 
    break; 
    case '2': 
    searchResults = searchByDob(people) 
    break; 
    case '3': 
    searchResults = searchByEyeColor(people) 
    break; 
    case '4': 
    searchResults = searchByHeight(people)
    break; 
    case '5':
    searchResults = searchByWeight(people) 
    break;
}

}
return searchResults
}  

function searchByGender(people){
  let gender = promptFor("What is the person's gender", chars);

  let foundPerson = people.filter(function(person){
    if(person.gender === gender) {
      return true;
    }
    else{
      return false;
    }
  })
  
  return foundPerson;
}

function searchByDob(people){
  let dob = promptFor("What is the person's dob", chars);

  let foundPerson = people.filter(function(person){
    if(person.dob === dob) {
      return true;
    }
    else{
      return false;
    }
  })
  
  return foundPerson;
} 

function searchByEyeColor(people){
  let eyeColor = promptFor("What is the person's eye color", chars);

  let foundPerson = people.filter(function(person){
    if(person.eyeColor === eyeColor ) {
      return true;
    }
    else{
      return false;
    }
  })
  
  return foundPerson;
}
function searchByHeight(people){
  let height = promptFor("What is the person's heigt", chars);
  let foundPerson = people.filter(function(person){
    if(person.height === height) {
      return true;
    }
    else{
      return false;
    }
  })
  
  return foundPerson;
}
function searchByWeight(people){
  let weight = promptFor("What is the person's weight", chars);
  let foundPerson = people.filter(function(person){
    if(person.weight === weight) {
      return true;
    }
    else{
      return false;
    }
  })
  
  return foundPerson;
}