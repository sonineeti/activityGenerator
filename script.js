const text=document.getElementById("activity");
const type=document.getElementById("activity-type");
const participant=document.getElementById("participant");
const activity_link=document.getElementById("link");


const getNewActivity = async () =>
{
    //api for quotes
    var url="https://www.boredapi.com/api/activity/";    

    // fetch the data from api
    const response=await fetch(url);
    //console.log(typeof response);
    //convert response to json and store it in quotes array
    const allActivities = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allActivities.length);

    //Store the activity present at the randomly generated index
    const activity=allActivities.activity;
    const activity_type=allActivities.type;
    const activity_participant=allActivities.participants;
    const activity_lnk=allActivities.link;

    //function to dynamically display the activity
    text.innerHTML=activity;
    type.innerHTML=activity_type;
    participant.innerHTML=activity_participant;
    activity_link.innerHTML=activity_lnk;
}
getNewActivity();