
// Create Tamagotchi Class
    // create sub classes for each tamagotchi

// Prompt Function
    // When clicked prompt asks you to name your pet.
    // The prompt inputs name into text box.

// Start Button Function
    // When clicked game begins:
        // time begins to decrement
        // age begins to increment 
        // meters begin to increment

// Timer function
    // set initial time
    // associate increment to milliseconds

// Meter Functions
    // If any of the meter bars reach 10 animate flashing, Alerty "You Have Killed Your Pet!"
    // Hungry Meter bar increments plus six every two seconds
    
    // Bordom Meter bar increments plus five every three seconds

    // Sleepy Meter bar increments plus three every three seconds
    

// Button Functions
    // Munchy Time button decrements hungry meter by 3% with every click.
    // Exercise Time button decrements bordom meter by 2% with every click
    // Sleepy Time button decrements sleepy meter by 3% with every click

// Tamagotchi Functions
    // after 20 seconds, hatch egg
        // populate baby yoshi on screen (opacity)
    // start countdown
    // years, and new older yoshi appears on screen.
    // When senior yoshi's times expires switch to sunset backdrop and animate fading into the distance. 
        // Alert: "As your pet walks quietly into the night, know you have loved and care for them with all your heart."

// End Of Game Function
    // when any of the three meters reach 100% your Tamagochi dies and you lose the game
    // Alert: "You have neglected "pet name" and they have DIED!!!"
 //---------------------- Global Variables -----------------------
       
let timer = 0;
const tamArray = []

//------------------------ Create Classes -----------------------
    class Tamagotchi {
        constructor() {
            this.hunger = 0;
            this.bored = 0;
            this.sleepy = 0;
            this.age = 0;
        }
       
    };

    const yoshi = new Tamagotchi();


//-------------------------- Prompt Function -------------------
    
let $prompt = prompt('Please Name Your Pet','Pet Name:');
     // The prompt inputs value into text box.
    if ($prompt != null) {
        $('.name').val($prompt);
    };
   
//-------------------------Timer Function------------------------
// timer count up starting at zero increment by 1000 ms

const timeStart = function() {
    const count = setInterval(function() {
        timer++;
        $('#time').text(`Timer: ${timer}s`);
        ageFunc();
        hungryFunc();
        bordomFunc();
        sleepyFunc();
        fadeFunc();
        sunsetFunc();
        // loserFunc();
    },1000);
    return count;
};

//------------------------Age Function-----------------------
// Write age function in a variable
// Age increases by 

const ageFunc = function() {
// increment age by 1 year after 20 seconds
    if (yoshi.age === 0 &&  timer === 20) {
            yoshi.age++
// increment age by 1 year every 60 seconds  
    } if (yoshi.age > 0 && timer % 60 === 0) {
        yoshi.age++
    }
    $('.age').text(`Age: ${yoshi.age}yrs`);
};

//------------------------Hungry Function----------------------
// Hungry Meter bar increments plus six every two seconds

const hungryFunc = function() {
//    console.log(yoshi.hunger);
   if (yoshi.hunger < 60) {
       yoshi.hunger++
       $('.hunger').css('width', '+=6')
   }else {
    alert('YOU HAVE KILLED YOUR PET!!  SHAME ON YOU!!');
}
};

//------------------------Bordom Function----------------------
// Bordom Meter bar increments plus five every three seconds

const bordomFunc = function() {
//    console.log(yoshi.bored);
    if (yoshi.bored < 60) {
        yoshi.bored++
        $('.bordom').css('width', '+=5');
    } else {
        alert('YOU HAVE KILLED YOUR PET!!  SHAME ON YOU!!');
    }
};

//------------------------Sleepy Function----------------------
// Sleepy Meter bar increments plus 3 every 3 seconds

const sleepyFunc = function() {
    // console.log(yoshi.sleepy);
    if (yoshi.sleepy < 60) {
        yoshi.sleepy++
        $('.sleepy').css('width', '+=3');
    } else {
        alert('YOU HAVE KILLED YOUR PET!!  SHAME ON YOU!!');
    }
};

//-------------------------- Start Button ----------------------
// use on click to initiate clock, age, and meters

$('.start').on('click', function() {
    timeStart();
});

//-------------------------- Munchy Time Button------------------
// Munchy Time button decrements hungry meter by 3% with every click.

const munchyT = $('.feed').on('click', function() {
    $('.hunger').css('width', '-=3%');
});

//-------------------------- Exercise Time Button ---------------
// Exercise Time button decrements bordom meter by 5% with every click

const exerciseT = $('.exercise').on('click', function() {
    $('.bordom').css('width', '-=5%');
});

//-------------------------- Sleepy Time Button -----------------
 // Sleepy Time button decrements sleepy meter by 3 with every click

const sleepT = $('.sleep').on('click', function() {
    $('.sleepy').css('width', '-=6%');
})

//-------------------- Tamagotchi Fade Out Function -------------
// characters fade out as thier age increases

const fadeFunc = function() {
    if (timer >= 20) {
        $('#egg').css('opacity', 0);
    }if (timer > 20 && timer <= 60) {
        $('#baby').css('opacity', 1);
    }else {
        $('#baby').css('opacity', 0);
    }
    if (timer > 60 && timer <= 120) {
        $('#kid').css('opacity', 1); 
    }else{
        $('#kid').css('opacity', 0); 
    }
    if (timer >= 120 && timer <= 180) {
        $('#adult').css('opacity', 1);
    }else {
        $('#adult').css('opacity', 0);
    }
    if (timer > 180 ) {
        $('#old').css('opacity', 1);
    }else {
        $('#old').css('opacity', 0);
    }
};

//--------------------- Sunset Function ------------------------
   // change background from sun to sunset when timer reads 239

const sunsetFunc = function() {
        if (timer > 239) {
        let $sunset = $('body').css('background-image', 'url("/Users/benjaminclosson/sei/deliverables/Tamagotchi-Project/images/pixel mountain sunset.jpeg")');
        $sunset;
        }
     };

//--------------------- Lose Function --------------------------

