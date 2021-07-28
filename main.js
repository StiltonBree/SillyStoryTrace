
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
//arrays
let insertx = ["Willy the Goblin","Big Daddy","Father Christmas"];
let inserty = ["the soup kitchen" ,"Disneyland" ,"the White House"];
let insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

    let newStory;
    newStory = storyText;

    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);

    //replacing the string variables
    newStory = newStory.replace(":insertx:",xItem);
   
    newStory = newStory.replace(":inserty:",yItem);
    
    newStory = newStory.replace(":insertz:",zItem);
   
    newStory = newStory.replace(":insertx:",xItem);
    
  if(customName.value !== '') {
    let name = customName.value;
    //replace bob with custom name
    newStory = newStory.replace("Bob", name);
   
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300.0/14.0)+' stone';
    let temperature =  Math.round((94-32)*(5.0/9.0))+' centigrade';
    //replace us temps with uk measurements
 
    newStory = newStory.replace("94 fahrenheit", temperature);
    
    newStory = newStory.replace("300 pounds", weight);
   
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
