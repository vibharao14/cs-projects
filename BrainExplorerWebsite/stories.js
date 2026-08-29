const opt1Button = document.getElementById("option1");
const opt2Button = document.getElementById("option2");
const storyResult = document.getElementById("storyResult");
const currentLine = document.getElementById("currentLine");
const brainExplain = document.getElementById("brainExplain");


const storySteps = [
    {
        id: "start",
        line: "After a long day at work, you want to pick some food up instead of cooking at home.",
        choices: [{
            text: "Pick the cheaper fast-food place to grab a quick meal to go. No utensils provided. You have to do your own dishes.",
            nextStepID: "cheapRestaurant",
            storyResult: "You chose the cheaper fast-food place. You get to enjoy some delicious, inexpensive food at home.",
            brainExplain: ""
        }, {
            text: "Pick the equally delicious but more nutritious expensive restaurant to dine in. You don't have to do anything but eat and pay.",
            nextStepID: "expensiveRestaurant",
            storyResult: "You chose the expensive restaurant. You get to enjoy some delicious, nutritious food without the added burden of extra chores",
            brainExplain: ""
        }],     
    },
    {
        id: "cheapRestaurant",
        line: "You order your food, and after five agonizing minutes, the worker hands it to you at the drive-thru. But wait...this isn't what you ordered. Instead of your favorite food, it's your least favorite food! The worker shares that it's her first day on the job and asks if she did a good job.",
        choices: [{
            text: "Tell the worker that this isn't what you ordered.",
            nextStepID: "requestNewOrderCheap",
            storyResult: "You kindly inform the worker that your order was incorrect. She apologizes and hands you the correct order.",
            brainExplain: "brain stuff about pointing out an incorrect order."
        }, {
            text: "Accept your fate.",
            nextStepID: "goHomeCheap",
            storyResult: "You tell the worker that everything's good and that she did an amazing job.",
            brainExplain: "brain stuff about accepting the wrong order."
        }],     
    },
    {
        id: "expensiveRestaurant",
        line: "You order your food, and after twenty agonizing minutes, it arrives at your table. But wait...this isn't what you ordered. Instead of your favorite food, it's your least favorite food! A waiter comes over to ask how everything's going.",
        choices: [{
            text: "Tell the waiter that this isn't what you ordered.",
            nextStepID: "angryCustomer",
            storyResult: "You kindly inform the worker that your order was incorrect. She apologizes and hands you the correct order.",
            brainExplain: "brain stuff about pointing out an incorrect order."
        }, {
            text: "Accept your fate.",
            nextStepID: "goHomeExpensive",
            storyResult: "You tell the waiter that everything's good. You take a bite to prove it. You head home feeling no more satiated despite the newfound lightness in your wallet.",
            brainExplain: "brain stuff about accepting the wrong order."
        }],     
    },

    {
        id: "angryCustomer",
        line: "Another patron overheard you asking for the correct order and called you an entitled, rude, stingy customer. They complain that if you're rich enough to eat here, you can tolerate a wrong order.",
        choices: [{
            text: "Confront the other patron.",
            nextStepID: "fightRecovery",
            storyResult: "You calmly (you think) tell the patron that they're mistaken, that you weren't trying to be rude and simply wanted your correct order. A fistfight commences.",
            brainExplain: ""
        }, {
            text: "Ignore the patron",
            nextStepID: "guiltyDinner",
            storyResult: "You continue to eat without acknowledging the other patron. Other people stare at you eat, and you feel embarrassed. You didn't mean to cause a scene.",
            brainExplain: ""
        }],     
    },
    {
        id: "fightRecovery",
        line: "Post-fight, your ego (and a little more of you) is totally bruised. The patron is now doing a victory dance in the corner.",
        choices: [{
            text: "Join the dance.",
            nextStepID: "ending",
            storyResult: "You realize the patron's got some great moves and decide to join them. They forgive you and you dance together.",
            brainExplain: ""
        }, {
            text: "Go home and sleep.",
            nextStepID: "ending",
            storyResult: "The sight of the victory dance is too much for you after that chaotic night. You pack it up and head home for a good night of rest and recovery.",
            brainExplain: ""
        }],     
    },
    {
        id: "ending",
        line: "The end.",
        choices: [{
            text: "You made it.",
            nextStepID: "ending",
            storyResult: "",
            brainExplain: ""
        }, {
            text: "Congrats.",
            nextStepID: "ending",
            storyResult: "",
            brainExplain: ""
        }],     
    },
    {
        id: "goHomeExpensive",
        line: "You decide the rest of the night calls for low-effort relaxation. But before you finally succumb to the night...CRASH! You're jolted awake by an unfamiliar sound coming from your front door.",
        choices: [{
            text: "Go to sleep",
            nextStepID: "checkCam",
            storyResult: "You decide to check your front doorbell camera to identify the source of the commotion. It's a person holding up a sign reading 'COME TALK TO ME'.",
            brainExplain: ""
        }, {
            text: "",
            nextStepID: "",
            storyResult: "",
            brainExplain: ""
        }],     
    },
    {
        id: "requestNewOrderCheap",
        line: "",
        choices: [{
            text: "",
            nextStepID: "",
            storyResult: "",
            brainExplain: ""
        }, {
            text: "",
            nextStepID: "",
            storyResult: "",
            brainExplain: ""
        }],     
    },
    {
        id: "goHomeCheap",
        line: "You arrive home, eat your disgusting dinner, and wash the dishes.",
        choices: [{
            text: "",
            nextStepID: "",
            storyResult: "",
            brainExplain: ""
        }, {
            text: "",
            nextStepID: "",
            storyResult: "",
            brainExplain: ""
        }],     
    },

];

function loadStep(){
    const currentStep = storySteps.find(step => step.id === currentStepID);
    storyResult.textContent = "";
    brainExplain.textContent = "";
    opt1Button.textContent = currentStep.choices[0].text;
    opt2Button.textContent = currentStep.choices[1].text;
    currentLine.textContent = currentStep.line;
};

//Initialize the story
let currentStepID = "start";
loadStep();

const nextButton = document.getElementById("next");
opt1Button.addEventListener("click", function(){
    const currentStep = storySteps.find(step => step.id === currentStepID);
    storyResult.textContent = currentStep.choices[0].storyResult;
    brainExplain.textContent = currentStep.choices[0].brainExplain;
    if (currentStepID != "ending"){
        currentStepID = currentStep.choices[0].nextStepID;
    }

});
opt2Button.addEventListener("click", function(){
    const currentStep = storySteps.find(step => step.id === currentStepID);
    storyResult.textContent = currentStep.choices[1].storyResult;
    brainExplain.textContent = currentStep.choices[1].brainExplain;
    if (currentStepID != "ending"){
        currentStepID = currentStep.choices[1].nextStepID;
    }
});


nextButton.addEventListener("click", function(){
    loadStep();
});