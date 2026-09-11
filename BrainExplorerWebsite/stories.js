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
            nextStepID: "freeDessert",
            storyResult: "You tell the worker that everything's good and that she did an amazing job. Before you can leave, the worker informs you that the previous customer didn't want their dessert, so you can have it for free! You questioned why the person in front of you in the line wasn't offered the dessert, and the worker admitted that that person was being very rude to the entire staff. ",
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
        id: "guiltyDinner",
        line: "As you finish your dinner, you can't get the patron's critiques out of your head. Maybe there was an inkling of truth to what they said. You decide to take action.",
        choices: [{
            text: "Join a charity organization.",
            nextStepID: "ending",
            storyResult: "After much effort, you eventually become president of a charity organization, spreading good and kindness to others. The patron still hates you, but you know you're not a rude, stingy person.",
            brainExplain: ""
        }, {
            text: "Internalize the message and double-down",
            nextStepID: "ending",
            storyResult: "You decide you're never going to be anything other than a rude, stingy customer. You go about the rest of your life berating service workers.",
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
            text: "Check the front doorbell camera.",
            nextStepID: "checkCam",
            storyResult: "You decide to check your front doorbell camera to identify the source of the commotion. It's a person holding up a sign reading 'COME TALK TO ME'.",
            brainExplain: ""
        }, {
            text: "Call a friend.",
            nextStepID: "friendCall",
            storyResult: "You decide to call your brave friend, who also happens to be your neighbor. They come to your front door to check out the commotion. They inform you that it was simply a lost rabbit, which they managed to send back to a safer patch of grass.",
            brainExplain: ""
        }],     
    },
    {
        id: "checkCam",
        line: "The masked person points insistently at their sign, beckoning directly at the camera for you to come join them.",
        choices: [{
            text: "Go talk to the person.",
            nextStepID: "ending",
            storyResult: "You carefully go downstairs and ask the person what they want through the window. They're a tired traveler and want your recommendation for what restaurant to choose. You tell them to go for the cheap one, and they gratefully leave.",
            brainExplain: ""
        }, {
            text: "Barricade yourself.",
            nextStepID: "ending",
            storyResult: "You stack pillows, books, and boxes against your door. You scatter loose charging cables around your bedroom floor and tip over an armchair. Then, you go to bed, your fortress protecting your sleeping body from all threats.",
            brainExplain: ""
        }],     
    },
    {
        id: "friendCall",
        line: "You see that your friend has also brought food and games. They hesitate at the doorstep after you laugh off the rabbit.",
        choices: [{
            text: "Invite your friend in for a sleepover.",
            nextStepID: "ending",
            storyResult: "You and your friend stay up all night snacking, playing video games, and hanging out. Despite how tired you feel, you have a great time.",
            brainExplain: ""
        }, {
            text: "Go back to bed.",
            nextStepID: "ending",
            storyResult: "You promise to catch up with your friend in the morning. You immediately crash on the bed and fall asleep within moments.",
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
        id: "freeDessert",
        line: "You accept the dessert, and it ends up being so good that it makes up for your terrible meal. However, the person in front of you gets out of his car, spots you, and angrily demands to know what's happening.",
        choices: [{
            text: "Tell the truth",
            nextStepID: "lifeStory",
            storyResult: "The man instantly softens his tone and sincerely apologizes to the staff. He then pulls you aside and admits that he's been having a terrible day, as it's the anniversary of the day he bought his pet rolly polies, but he couldn't do anything to celebrate because all of his friends have a severe phobia of all crustaceans. ",
            brainExplain: ""
        }, {
            text: "Say that they gave it to you because it was your birthday, and the hat says 'free' because you are finally free from the prison of being a year younger.",
            nextStepID: "hisBirthday",
            storyResult: "The man exclaims that it's his birthday as well and requests that the staff give him the same dessert. The staff, along with the other impatient cars in line, finally manage to chase the man away. The worker who gave you the free dessert shot you a brief annoyed look before admitting that it wasn't your fault.",
            brainExplain: ""
        }],     
    },

    {
        id: "lifeStory",
        line: "You feel bad for the guy. Yes, he made a mistake, but he owned up to it and it was clear he was under a lot of stress.",
        choices: [{
            text: "Offer to celebrate with the man",
            nextStepID: "ending",
            storyResult: "The man lights up as he talks your ear off about the roly polies once you reach his house. The two of you split the dessert and you end up learning more about those tiny crustaceans than you ever expected to. You have a great time and agree meet up again for 'insect day' at the local park. ",
            brainExplain: ""
        }, {
            text: "Recommend coping strategies",
            nextStepID: "ending",
            storyResult: "You give the man your favorite tips for dealing with stress and tell him to do it for the roly polies. He is skeptic but thanks you for the advice. You throw in a piece of the dessert for good measure. Once you reach home, you're feeling very proud of yourself. Initially, you were planning on going straight to bed, but the interaction with the man reminded you that you should probably engage in those coping exercises as wekk.",
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