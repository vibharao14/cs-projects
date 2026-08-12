const mathScenario = {
    button: "math",
    name: "Solving a math problem",
    brainRegion: "Prefrontal Cortex",
    explanation: "While you're solving a math problem, a network across your frontal and parietal lobes becomes active. Your prefrontal cortex contributes to the logical planning, managing multiple steps of calculations, and your working memory. Your parietal cortex proceses the numbers, quantities, and their relationships. Your hiccocampus may help you recall past information you learned to help you solve the problem.",
    image: "https://www.ncbi.nlm.nih.gov/books/NBK554483/bin/Prefrontal__cortex.jpg" 
};
const noiseScenario = {
    button: "noise",
    name: "You hear a loud noise at night",
    brainRegion: "Amygdala",
    explanation: "When you hear a loud sound unexpectedly in the middle of the night, your auditory system first processes the sound. Your brain then evaluates the sensory information, and your amygdala may become involved if the sound is perceived as a possible threat. Your body may respond with increased alertness in order for you to prepare to respond.",
    image: "https://media.gettyimages.com/id/1607068572/vector/amygdaloid-body-illustration.jpg?s=2048x2048&w=gi&k=20&c=BdDjhFvdE-07k4-KSX9MR8hM7uHZPL0pxzgDSaWB6wM="
};
const coldScenario = {
    button: "cold",
    name: "You're shivering in a winter storm",
    brainRegion: "Insula",
    explanation: "When you're shivering in a winter storm, it's because your body has detected a change in temperature, and your brain starts responding in order to maintain your core temperature. Your hypothalamus is involved in regulating your body temperature, and your motor pathways become involved in causing your muscles to rapidly contract and relax, producing shivering to generate heat. Your insula is involved in interpreting the bodily sensations so you actually feel physically cold.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Insula_structure.png"
};

const scenarios = [mathScenario, noiseScenario, coldScenario]
function displayScenario(scenario){
    const button = document.getElementById(scenario.button);
    button.addEventListener("click", function(){
        document.getElementById("brainRegion").textContent = scenario.brainRegion;
        document.getElementById("explanation").textContent = scenario.explanation;
        document.getElementById("brainImage").src = scenario.image;
    });
};
scenarios.forEach(scenario => {
    displayScenario(scenario);
});