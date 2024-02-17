let wordsdata = []

class Word {
    constructor(x,y,text){
        this.x = x;
        this.y = y;
        this.text = text;
    }
}

let mode = ""; 
let speed = 3.5;
let hp = 0;
let score = 0

let typeWord = "";

let textColor = []

let bonuswords = 'Incomprehensibilities Interdisciplinary Inconsequential Subdermatoglyphic Uncopyrightable Sesquipedalianism Disestablishment Counterintuitive Connecticutian Massachusetts Electromaganectic-spectrum ParkerIsBad Noah&SichengR$mart JioWehFihkejkgfqWv `l0|`'

let ifBonus = 100
let bonus = false;
let bonusX = 0;
let bonusWord = '';
let bonusRGB = [200,100,0]

function setup() {
    createCanvas(windowWidth,windowHeight-50);
    background(220);
    word1 = new Word(random(50,width-50),50,getRandomWord(sortWords()));
    word2 = new Word(random(50,width-50),50,getRandomWord(sortWords()));
    word3 = new Word(random(50,width-50),50,getRandomWord(sortWords()));
    wordsdata.push(word1);
    wordsdata.push(word2);
    wordsdata.push(word3);

    mode = "Medium";
    hp = 50;
    score = 0;
    textColor = [250,200,0];
}

function windowResized() {
    setup();
}

function getRandomWord(list){
    return random(list);
}

function getArray(start,end) {
    randomnums = [];
    for (let index = start; index < end; index++) {
        append(randomnums,index);
    }
    return randomnums;
}


function sortWords() {
    var impossible = []
    var hardcore = []
    var hard = []
    var medium = []
    var easy = []
    let words = "At what point does a herd What of the must to the or in order for the to fade away and life to to Since the start of the the that many have has been 60 to 70 That range is still cited by the World and is often of the of the it is to know with what the limit will be until we reach it and a good is It gives a sense of when we can hope to a to whom of look for Dr. S. an to both the Trump and the Biden has begun his In the early days, Dr. Fauci to cite the same 60 to 70 that most did. About a month ago, he began '70, 75 in And last week, in an with CNBC News, he said '75, 80, 85 and '75 to In a the next day, Dr. Fauci that he had but been the goal He is doing so, he said, based on new and on his gut that the is ready to hear what he Hard as it may be to hear, he said, he that it may take close to 90 to bring the virus to a halt, as much as is to stop a Asked about Dr. said that he might be The early range of 60 to 70 was too low, they said, and the virus is more so it will take herd to stop it. Dr. Fauci said that weeks ago, he had to raise his many about which they would need to in order for the to herd Now that some polls are that many more are even for he said he felt he could the tough that the to might take than 'When polls said only about half of all would take a I was herd would take 70 to 75 Dr. Fauci said. when newer said 60 or more would take it, I 'I can nudge this up a bit,' so I went to 80, 85.' 'We need to have some he 'We don't know what the real is. I think the real range is 70 to 90 But, I'm not going to say 90 Also, Dr. Fauci a at 90 or above is in the range of the of 'I'd bet my house that Covid isn't as as he said. with the of herd to the a range of some of which were in line with Dr. They also came with a All are 'You tell me what to put in my and I'll give you the said Marc an at T.H. Chan of 'But you can't tell me the knows The that it would take 60 to 70 to stop the was based on early data from China and Dr. and Dr. with Dr. Fauci that the level of herd to stop could be 85 or 'But a Dr. WHO still cite the older 60 to 70 Dr. the of said that she now that range was too low. She to what the one might be. 'We'd be very thin reeds if we tried to say what level of would be to it,' she said. 'We say we just don't know. And it won't be a world or even It will on what you live in.', country achieve portion acquire through disease normal? offered percent. repeated disease. Although estimate breathe millions Anthony adviser incoming raising percent estimate experts percent' percent' 80-plus science, feeling country finally thinks. believes percent immunity measles Fauci's percent becoming greater immunity publicly estimate because hesitant country achieve showing deliver message vaccine, immunity surveys percent thought, humility between percent. percent measles. immunity produced Fauci's. warning: answers numbers answer,' Health. numbers, because original percent immunity disease experts Lipsitch immunity Covid-19 percent higher. Lipsitch Although percent O'Brien, agency's director thought declined estimate correct leaning against vaccine coverage achieve national number. immunity? population resistance coronavirus, either infection vaccination, return pandemic, figure epidemiologists Health Organization during discussions future course impossible certainty transmission stops, having important: Americans freely again. Recently, figure Americans guidance: Fauci, administration administration, incrementally herd-immunity estimate. pandemic's tended saying television interviews. interview percent.' telephone interview acknowledged slowly deliberately moving posts. partly partly really almost needed outbreak. conclusions, prominent epidemiologists proven right. almost undoubtedly transmissible, hesitated Americans seemed vaccines, accept almost universally immunity. Americans ready, eager, vaccines, return normal longer anticipated. Americans saying percent,' 'Then, here,' added. really number somewhere percent.' noted, herd-immunity figure infectiousness contagious measles,' Interviews epidemiologists regarding degree needed defeat coronavirus estimates, merely 'guesstimates.' equations, Lipsitch, epidemiologist Harvard's School Public nobody them.' assumption Italy, health noted. Morens agreed needed that's guesstimate,' emphasized. scientists sometimes estimate, Katherine immunization, higher needed should depend community";
    for (let each = 0; each < words.split(" ").length; each++) {
        if ((words.split(" ")[each].includes("?") || words.split(" ")[each].includes(",") || words.split(" ")[each].includes(".") || words.split(" ")[each].includes("!") || words.split(" ")[each].includes("'") || words.split(" ")[each].includes('"') || words.split(" ")[each].includes("%")) && words.split(" ")[each].length >= 5 ) {
            hardcore.push(words.split(" ")[each])
        } else if ((words.split(" ")[each].includes("?") || words.split(" ")[each].includes(",") || words.split(" ")[each].includes(".") || words.split(" ")[each].includes("!") || words.split(" ")[each].includes("'") || words.split(" ")[each].includes('"') || words.split(" ")[each].includes("%")) || words.split(" ")[each].length >= 6 ) {
            hard.push(words.split(" ")[each])
        } else if (words.split(" ")[each].length > 3) {
            impossible.push(words.split(" ")[each])
        } else if (words.split(" ")[each].length > 3 || words.split(" ")[each].length < 6) {
            medium.push(words.split(" ")[each])
        } else if (words.split(" ")[each].length <= 4) {
            easy.push(words.split(" ")[each])
        }
    }
    if (mode == "Impossible") {
        return impossible
    } else if (mode == "Hardcore") {
        return hardcore
    } else if (mode == "Hard") {
        return hard
    } else if (mode == "Medium") {
        return medium
    } else if (mode == "Easy") {
        return easy
    }
}

function showWord(w,x,y,color){
    textSize(20);
    fill(color);
    text(w,x,y);
}

function resetWorld(){
    for (let word = 1; word < wordsdata.length; word++) {
        wordsdata[word].text =  getRandomWord(sortWords()[0]);
        wordsdata[word].x = random(50,width-50);
        wordsdata[word].y = 50;
    }
}

function drawRect(txt,x,y,fillColor,size,textcolor) {
    textSize(15)
    fill(fillColor)
    rect(x,y,2*size,size)
    fill(textcolor)
    text(txt,x+5,y+25)
}

function draw(){
    background(220);
    bonis = random(getArray(1,1000));
    if (bonis == 1) {
        bonus = true;
    }
    bonusx += 3;

    drawRect(`HP: ${hp}`,50,10,[200,0,0],40,250)
    drawRect(`Score: ${score}`,150,10,[250,100,250],40,250)
    drawRect("Easy",350,10,[107,215,105],40,250)
    drawRect("Medium",450,10,[250,200,0],40,250)
    drawRect("Hard",550,10,[250,0,0],40,250)
    drawRect("Hardcore",650,10,[120,9,2],40,250)
    drawRect("Impossible",750,10,[5,5,5],40,250)
    for (let i = 1; i < wordsdata.length; i++) {
        showWord(wordsdata[`word${i}`]["text"],wordsdata[`word${i}`]["x"],wordsdata[`word${i}`]["y"],"rgb(0,102,153)");
    }
    showWord(typeWord,width/2,height-100,textColor);
    for (let i = 1; i < wordsdata.length; i++) {
        wordsdata[`word${i}`]["text"] =  getRandomWord(sortWords()[0]);
        wordsdata[`word${i}`]["x"] = random(50,width-50);
        if (wordsdata[`word${i}`]["y"] < height) {
            wordsdata[`word${i}`]["y"] += speed
        } else {
            resetWorld()
            hp -= 1
        }
    }
    if (bonus == true) {
        fill(bonusrgb);
        text(bonusword,bonusx,100);
        if (bonusx >= width) {
            bonus = false;
            bonis = random(getArray(1,1000));
            bonusx = 0;
            bonusword = random(bonuswords.split(' '));
            bonusrgb = [random(5,245),random(5,245),random(5,245)];
        }
        if (bonusword == typeWord) {
            bonus = false;
            bonis = random(getArray(1,1000));
            bonusx = 0;
            hp += random([5,10]);
            score += random([15,30]);
            bonusword = random(bonuswords.split(' '));
            message = '';
            bonusrgb = [random(5,245),random(5,245),random(5,245)];
        }
    }

    if (mouseIsPressed) {
        if (mouseX > 350 && mouseX < 430 && mouseY > 10 && mouseY < 50) {
            resetWorld();
            speed = 2.5;
            mode = "Easy";
            hp = 100;
            textColor = [107,215,105];
            wordsdata = {}
            addWord("word1")
            addWord("word2")
        } else if (mouseX > 450 && mouseX < 530 && mouseY > 10 && mouseY < 50) {
            resetWorld();
            speed = 3.5;
            mode = "Medium";
            hp = 50;
            textColor = [250,200,0];
            wordsdata = {}
            addWord("word1")
            addWord("word2")
            addWord("word3")
        } else if (mouseX > 550 && mouseX < 630 && mouseY > 10 && mouseY < 50) {
            resetWorld();
            speed = 4;
            mode = "Hard";
            hp = 20;
            textColor = [250,0,0];
            wordsdata = {}
            addWord("word1")
            addWord("word2")
            addWord("word3")
        } else if (mouseX > 650 && mouseX < 730 && mouseY > 10 && mouseY < 50) {
            resetWorld();
            speed = 5.5;
            mode = "Hardcore";
            hp = 10;
            textColor = [120,9,2];
            wordsdata = {}
            addWord("word1")
            addWord("word2")
            addWord("word3")
            addWord("word4")
        } else if (mouseX > 750 && mouseX < 830 && mouseY > 10 && mouseY < 50) {
            resetWorld();
            speed = 20;
            mode = "Impossible";
            hp = 1;
            textColor = [5,5,5];
            wordsdata = {}
            addWord("word1")
            addWord("word2")
            addWord("word3")
            addWord("word4")
            addWord("word5")
            addWord("word6")
            addWord("word7")
        }
    }
    if (hp < 0) {
        background(255,0,0);
        fill(0)
        textSize(100);
        text('GAME OVER',width/2-300,height/2);
        textSize(40);
        text('Refresh to restart.',width/2-150,height/2+100);
    } else if (score >= 100) {
        speed = 0
        background(0,255,0);
        textSize(40);
        text(`You did it!\n`,width/2-250,height/2-100);
        text(`Refresh to restart.`,width/2-270,height/2-50);
    }

}

function addWord(word) {
    wordsdata[`${word}`] = {
        "text": "",
        "x": 0,
        "y": 50
    }
    print(wordsdata)
}

function keyTyped() {
    if (keyCode === BACKSPACE || keyCode === DELETE){
        typeWord = typeWord.slice(0,-1);
        
    } else if (key == 'Enter') {
        typeWord = ""
    } else {
        if (key != 'Space') {
            typeWord += key;
        }   
    }
    for (let i = 1; i < wordsdata.length; i++) {
        if (wordsdata[`word${i}`]["text"] == typeWord) {
            resetWorld()
            typeWord = ""
            score += 1
        }
    }   
}


