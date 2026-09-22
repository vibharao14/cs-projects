const opt1Button = document.getElementById("option1");
const opt2Button = document.getElementById("option2");
const storyResult = document.getElementById("storyResult");
const currentLine = document.getElementById("currentLine");
const question = document.getElementById("question");
const answerChoices = document.getElementById("answerChoices");
const quizSection = document.getElementById("quizSection");
const storySteps = [
    {
        id: "start",
        line: "After a long day at work, you want to pick some food up instead of cooking at home.",
        choices: [{
            text: "Pick the cheaper fast-food place to grab a quick meal to go. No utensils provided. You have to do your own dishes.",
            nextStepID: "cheapRestaurant",
            storyResult: "You chose the cheaper fast-food place. You get to enjoy some delicious, inexpensive food at home."
        }, {
            text: "Pick the equally delicious but more nutritious expensive restaurant to dine in. You don't have to do anything but eat and pay.",
            nextStepID: "expensiveRestaurant",
            storyResult: "You chose the expensive restaurant. You get to enjoy some delicious, nutritious food without the added burden of extra chores"
        }],     
    },
    {
        id: "cheapRestaurant",
        line: "You order your food, and after five agonizing minutes, the worker hands it to you at the drive-thru. But wait...this isn't what you ordered. Instead of your favorite food, it's your least favorite food! The worker shares that it's her first day on the job and asks if she did a good job.",
        choices: [{
            text: "Tell the worker that this isn't what you ordered.",
            nextStepID: "requestNewOrderCheap",
            storyResult: "You kindly inform the worker that your order was incorrect. She apologizes and hands you the correct order."
        }, {
            text: "Accept your fate.",
            nextStepID: "freeDessert",
            storyResult: "You tell the worker that everything's good and that she did an amazing job. Before you can leave, the worker informs you that the previous customer didn't want their dessert, so you can have it for free! You questioned why the person in front of you in the line wasn't offered the dessert, and the worker admitted that that person was being very rude to the entire staff. "
        }],     
    },
    {
        id: "expensiveRestaurant",
        line: "You order your food, and after twenty agonizing minutes, it arrives at your table. But wait...this isn't what you ordered. Instead of your favorite food, it's your least favorite food! A waiter comes over to ask how everything's going.",
        choices: [{
            text: "Tell the waiter that this isn't what you ordered.",
            nextStepID: "angryCustomer",
            storyResult: "You kindly inform the worker that your order was incorrect. She apologizes and hands you the correct order."
        }, {
            text: "Accept your fate.",
            nextStepID: "goHomeExpensive",
            storyResult: "You tell the waiter that everything's good. You take a bite to prove it. You head home feeling no more satiated despite the newfound lightness in your wallet."
        }],     
    },

    {
        id: "angryCustomer",
        line: "Another patron overheard you asking for the correct order and called you an entitled, rude, stingy customer. They complain that if you're rich enough to eat here, you can tolerate a wrong order.",
        choices: [{
            text: "Confront the other patron.",
            nextStepID: "fightRecovery",
            storyResult: "You calmly (you think) tell the patron that they're mistaken, that you weren't trying to be rude and simply wanted your correct order. A fistfight commences.",
        }, {
            text: "Ignore the patron",
            nextStepID: "guiltyDinner",
            storyResult: "You continue to eat without acknowledging the other patron. Other people stare at you eat, and you feel embarrassed. You didn't mean to cause a scene.",
        }],
        question: "If you are a highly logical person, is the prefrontal cortex the most important player in your brain during conflict or confrontation?",
        answerChoices: ["No. Regardless of your personality, a variety of brain regions, such as the insula, ACC, and amygdala, can be involved in processing conflict", "Yes. The more logical you are, the more other parts of your brain tend to shrink or deactivate.", "Highly logical people never have conflict."],
        correctAnswer: 0        
    },
    {
        id: "fightRecovery",
        line: "Post-fight, your ego (and a little more of you) is totally bruised. The patron is now doing a victory dance in the corner.",
        choices: [{
            text: "Join the dance.",
            nextStepID: "ending",
            storyResult: "You realize the patron's got some great moves and decide to join them. They forgive you and you dance together."
        }, {
            text: "Go home and sleep.",
            nextStepID: "ending",
            storyResult: "The sight of the victory dance is too much for you after that chaotic night. You pack it up and head home for a good night of rest and recovery."
        }],     
    },
    {
        id: "guiltyDinner",
        line: "As you finish your dinner, you can't get the patron's critiques out of your head. Maybe there was an inkling of truth to what they said. You decide to take action.",
        choices: [{
            text: "Join a charity organization.",
            nextStepID: "ending",
            storyResult: "After much effort, you eventually become president of a charity organization, spreading good and kindness to others. The patron still hates you, but you know you're not a rude, stingy person."
        }, {
            text: "Internalize the message and double-down",
            nextStepID: "ending",
            storyResult: "You decide you're never going to be anything other than a rude, stingy customer. You go about the rest of your life berating service workers."
        }],     
    },
    {
        id: "ending",
        line: "The end.",
        choices: [{
            text: "You made it.",
            nextStepID: "ending",
            storyResult: ""
        }, {
            text: "Congrats.",
            nextStepID: "ending",
            storyResult: ""
        }],     
    },
    {
        id: "goHomeExpensive",
        line: "You decide the rest of the night calls for low-effort relaxation. But before you finally succumb to the night...CRASH! You're jolted awake by an unfamiliar sound coming from your front door.",
        choices: [{
            text: "Check the front doorbell camera.",
            nextStepID: "checkCam",
            storyResult: "You decide to check your front doorbell camera to identify the source of the commotion. It's a person holding up a sign reading 'COME TALK TO ME'."
        }, {
            text: "Call a friend.",
            nextStepID: "friendCall",
            storyResult: "You decide to call your brave friend, who also happens to be your neighbor. They come to your front door to check out the commotion. They inform you that it was simply a lost rabbit, which they managed to send back to a safer patch of grass."
        }],
        question: "Why did the crash immediately catch your attention?",
        answerChoices: ["The prefrontal cortex floods your body with adrenaline as soon as you detect the loud noise, causing your attention to narrow.", "Your brain detects startling sounds and quickly directs attention towards them so you can scan for potential threats", "Vestigial cortexes prioritize attention to anything that sounds like a meteor approaching."],
        correctAnswer: 1       
    },
    {
        id: "checkCam",
        line: "The masked person points insistently at their sign, beckoning directly at the camera for you to come join them.",
        choices: [{
            text: "Go talk to the person.",
            nextStepID: "ending",
            storyResult: "You carefully go downstairs and ask the person what they want through the window. They're a tired traveler and want your recommendation for what restaurant to choose. You tell them to go for the cheap one, and they gratefully leave."
        }, {
            text: "Barricade yourself.",
            nextStepID: "ending",
            storyResult: "You stack pillows, books, and boxes against your door. You scatter loose charging cables around your bedroom floor and tip over an armchair. Then, you go to bed, your fortress protecting your sleeping body from all threats."
        }],     
    },
    {
        id: "friendCall",
        line: "You see that your friend has also brought food and games. They hesitate at the doorstep after you laugh off the rabbit.",
        choices: [{
            text: "Invite your friend in for a sleepover.",
            nextStepID: "ending",
            storyResult: "You and your friend stay up all night snacking, playing video games, and hanging out. Despite how tired you feel, you have a great time."
        }, {
            text: "Go back to bed.",
            nextStepID: "ending",
            storyResult: "You promise to catch up with your friend in the morning. You immediately crash on the bed and fall asleep within moments."
        }],     
    },
    {
        id: "requestNewOrderCheap",
        line: "You take your correct order home and realize it's way spicier than you expected it to be. Your face starts getting hot and tears fill your eyes. You're unable to bear the heat. ",
        choices: [{
            text: "Climb two flights of stairs to get to the basement, where you know you have honey stored on the third shelf.",
            nextStepID: "basement",
            storyResult: "After an additional five minutes of pain and fumbling in the dark basement, you finally manage to retrieve the honey and squirt it directly on to your tongue. Relief comes almost instantly."
        }, {
            text: "Grab one of two white unlabeled containers in front of you that either contain salt or sugar.",
            nextStepID: "salt",
            storyResult: "Unfortunately, the white substance you poured onto your tongue was salt, not sugar, as expected. You automatically spit it out and scramble for the sugar in the other container. Relief comes slowly but surely."
        }],
        question: "Would you have reacted differently if you had been expecting that level of spice going in?",
        answerChoices: ["Yes. If you had expected the spice, your brain would've been prepared and the physical pain would be slightly neutralized.", "No. The only factor involved in your reaction is the level of spice.", "Probably. Expectations can influence your perception of pain. Losing the surprise factor can allow your brain to reduce the initial panic response and make the physical sensation feel more manageable."],
        correctAnswer: 2     
    },
    {
        id: "salt",
        line: "After your mouth no longer feels like it's burning, you take a long look at the two white, unlabeled containers on the counter. They look totally out of place in your kitchen, where all of the containers fit clearly with your underwater kitchen vibe and are clearly labeled. ",
        choices: [{
            text: "Get out your glue, paint, fake corals, and fake seaweed. It's decoration time. ",
            nextStepID: "ending",
            storyResult: "You spend the rest of your evening focusing your energy on making sure your containers look like they came straight from Atlantis. You have too much creative energy to let those canvasses remain blank! The perfect fake seaweed to coral ratio is an area where nobody can critique your expertise. Nothing can distract you as you mix those shades of blue. Only when your masterpiece is complete do you allow yourself to go to sleep."
        }, {
            text: "Get out your sticker labels and sharpie. ",
            nextStepID: "ending",
            storyResult: "You stick those sticker labels right on the containers and use your sharpie to clearly label which container has salt and which has sugar. When you're done, you're able to go to sleep fully assured that you'll never be ambushed during a spice attack ever again."
        }],     
    },
    {
        id: "basement",
        line: "After your mouth no longer feels like it's burning, you realize that the basement is an absolute mess! You spot random dusty storage boxes, old board game pieces, and even that missing walkie-talkie your friend gave you for your birthday! ",
        choices: [{
            text: "Clean the basement. ",
            nextStepID: "ending",
            storyResult: "The dust in the basement is no match for you. After a couple hours of meticulous sweeping, lifting, discarding, and reorganizing, your basement is as good as new. You even uncover a perfectly functional, comfortable couch with a built in TV. It's so comfortable that you go to sleep right there between the cushions instead of making the treacherous trek back upstairs."
        }, {
            text: "Try the walkie-talkie. ",
            nextStepID: "ending",
            storyResult: "You try saying 'hello' into the walkie-talkie a couple times to no avail. However, that's not surprising since it had been a few months since you and your friend has successfully communicated with them last. However, on the fifth try, a voice finally does respond. But it's not your friend's. It's the worker from the drive-thru, saying that your friend left their walkie-talkie behind and needed to come pick it up. You decide that's a problem for tomorrow."
        }],     
    },
    {
        id: "freeDessert",
        line: "You accept the dessert, and it ends up being so good that it makes up for your terrible meal. However, the person in front of you gets out of his car, spots you, and angrily demands to know what's happening.",
        choices: [{
            text: "Tell the truth",
            nextStepID: "lifeStory",
            storyResult: "The man instantly softens his tone and sincerely apologizes to the staff. He then pulls you aside and admits that he's been having a terrible day, as it's the anniversary of the day he bought his pet rolly polies, but he couldn't do anything to celebrate because all of his friends have a severe phobia of all crustaceans. "
        }, {
            text: "Say that they gave it to you because it was your birthday, and the hat says 'free' because you are finally free from the prison of being a year younger.",
            nextStepID: "hisBirthday",
            storyResult: "The man exclaims that it's his birthday as well and requests that the staff give him the same dessert. The staff, along with the other impatient cars in line, finally manage to chase the man away. The worker who gave you the free dessert shot you a brief annoyed look before admitting that it wasn't your fault."
        }],     
    },

    {
        id: "lifeStory",
        line: "You feel bad for the guy. Yes, he made a mistake, but he owned up to it and it was clear he was under a lot of stress.",
        choices: [{
            text: "Offer to celebrate with the man",
            nextStepID: "ending",
            storyResult: "The man lights up as he talks your ear off about the roly polies once you reach his house. The two of you split the dessert and you end up learning more about those tiny crustaceans than you ever expected to. You have a great time and agree meet up again for 'insect day' at the local park. "
        }, {
            text: "Recommend coping strategies",
            nextStepID: "ending",
            storyResult: "You give the man your favorite tips for dealing with stress and tell him to do it for the roly polies. He is skeptic but thanks you for the advice. You throw in a piece of the dessert for good measure. Once you reach home, you're feeling very proud of yourself. Initially, you were planning on going straight to bed, but the interaction with the man reminded you that you should probably engage in those coping exercises as wekk."
        }], 
        question: "What are mirror neurons?",
        answerChoices: ["Brain cells that fire when you do an action or when you watch someone else perform an action", "Brain cells that identify your own reflection when you look at a reflective surface. They help with depth-perception and prevent you from thinking there are two of you", "They are neurons you inherit from people you spend significant time with"],
        correctAnswer: 0         
    },

    {
        id: "hisBirthday",
        line: "Feeling guilty about your disastrous lie, you decide to stop by the local park. Watching the ducks swim in the pond always calms you down. However, your usual bench is occupied by the same man from the drive-thru. He's watching the ducks too, singing happy birthday to himself.",
        choices: [{
            text: "Sit next to him.",
            nextStepID: "ending",
            storyResult: "The man eyes you suspiciously as you occupy the empty seat on the bench next to him. He opens his mouth to say something but rethinks it. You quietly hand over a small piece of your dessert before watching the ducks in silence together."
        }, {
            text: "Find a new spot.",
            nextStepID: "ending",
            storyResult: "You decide to sit on the bench directly across from the man, because surely that's less awkward. The man freezes when he sees you before running away, terrified. He thought you'd chased him down from the drive-thru. Now, you can enjoy the ducks in peace."
        }],
        question: "You put a lot of thought about how the man may react to your decision. What describes a group of brain regions that activate when people think about others' internal intentions and mental states?",
        answerChoices: ["The Theory of Mind Network", "The Neural Mirroring Centers", "The Social Activation System"],
        correctAnswer: 0  
    },

];

//function to add the multiple choice options to a quiz question
function createAnswers(currentQ){
    //for each answer choice in the array of answer choices
    currentQ.answerChoices.forEach((answer, index)=> {
        //add buttons for each multiple choice option
        const btn = document.createElement("button");
        btn.innerText = answer;
        //give answer feedback once the user selects a multiple choice option
        btn.addEventListener("click", function(){
            if (index == currentQ.correctAnswer){
                btn.classList.add("correctAnswerClicked");
            } else{
                btn.classList.add("wrongAnswerClicked");
            }
                disableButtons();
        });
        answerChoices.appendChild(btn);
    });
};

//disable every multiple choice question button from being clicked
function disableButtons(){
    const allButtons = answerChoices.querySelectorAll("button");
    allButtons.forEach(btn =>{
        btn.disabled = true;
    });
};
function loadStep(){
    const currentStep = storySteps.find(step => step.id === currentStepID);
    storyResult.textContent = "";
    question.textContent = "";
    answerChoices.innerHTML = "";
    quizSection.classList.add("hideAnswers");

    opt1Button.textContent = currentStep.choices[0].text;
    opt2Button.textContent = currentStep.choices[1].text;
    currentLine.textContent = currentStep.line;

    //if the current step comes with a quiz question, show the question and generate the multiple choice answers.
    if (currentStep.question){
        question.textContent = currentStep.question;
        quizSection.classList.remove("hideAnswers");
        createAnswers(currentStep);
    };
};

//Initialize the story
let currentStepID = "start";
loadStep();

const nextButton = document.getElementById("next");
opt1Button.addEventListener("click", function(){
    const currentStep = storySteps.find(step => step.id === currentStepID);
    storyResult.textContent = currentStep.choices[0].storyResult;
    if (currentStepID != "ending"){
        currentStepID = currentStep.choices[0].nextStepID;
    }

});
opt2Button.addEventListener("click", function(){
    const currentStep = storySteps.find(step => step.id === currentStepID);
    storyResult.textContent = currentStep.choices[1].storyResult;
    if (currentStepID != "ending"){
        currentStepID = currentStep.choices[1].nextStepID;
    }
});


nextButton.addEventListener("click", function(){
    loadStep();
});

