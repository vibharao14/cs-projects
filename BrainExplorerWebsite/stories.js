const opt1Button = document.getElementById("option1");
const opt2Button = document.getElementById("option2");
const storyResult = document.getElementById("storyResult");
const currentLine = document.getElementById("currentLine");
const brainExplain = document.getElementById("brainExplain");
let step = 0;
const storyStepsOpt2 = [
    ["Pick the cheaper fast-food place to grab a quick meal to go. No utensils provided. You have to do your own dishes.", "Pick the equally delicious but more nutritious expensive restaurant to dine in. You don't have to do anything but eat and pay."], 
    ["You tell the waiter that everything's good. You take a bite to prove it.", "You tell the waiter that this isn't what you ordered."]
];
const storyStep = {
    line: "",
    choices: [],
    choice1result: "",
    choice2result: "",
    choice1BrainExplain: "",
    choice2BrainExplain: "",
};
const nextButton = document.getElementById("next");
opt1Button.addEventListener("click", function(){
    storyResult.textContent = "idk man";
    brainExplain.textContent = "brain stuff bro";
});
opt2Button.addEventListener("click", function(){
    storyResult.textContent = "You chose the expensive restaurant. You get to enjoy some delicious, nutritious food without the added burden of extra chores.";
    brainExplain.textContent = "Your prefrontal cortex was involved in weighing the merits of more nutritious food given the higher cost. Your reward and motivation pathways help motivate you to invest more money and time into the dining experience. Your anterior cingulate cortex also was involved in resolving the tension between the two choices. In the end, your brain determined that the delicious, nutritious food was worth the higher cost.";
});

nextButton.addEventListener("click", function(){
    step +=1;
    storyResult.textContent = "";
    brainExplain.textContent = "";
    opt1Button.textContent = storyStepsOpt2[step][0];
    opt2Button.textContent = storyStepsOpt2[step][1];
    currentLine.textContent = "You order your food, and after twenty agonizing minutes, it arrives at your table. But wait...this isn't what you ordered. Instead of your favorite food, it's your least favorite food! A waiter comes over to ask how everything's going. ";
});