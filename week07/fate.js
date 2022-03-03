var job = ["FBI", "Artist", "Writer", "Accountant", "Counselor"];
var city = ["Kansas", "Irving", "Houston", "Austin", "Atlanta"];
var spouse = ["Cheyenne", "Crystal", "Stacy", "Faith", "Sharon"];
var numberKids = [0,1,2,3,4];
var xx = Math.floor(Math.random() * 5);
function future(job,city,spouse,numberKids) {
document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numberKids + " kids.");
}
future (job[xx],city[xx],spouse[xx],numberKids[xx])