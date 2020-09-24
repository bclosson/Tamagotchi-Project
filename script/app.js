
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

// Tamagotchi Functions
    // after 20 seconds, hatch egg
        // populate baby yoshi on screen (opacity)
    // start countdown
    // years, and new older yoshi appears on screen.
    // When senior yoshi's times expires switch to sunset backdrop and animate fading into the distance. 
        // Alert: "As your pet walks quietly into the night, know you have loved and care for them with all your heart."

// Meter Functions
    // If any of the meter bars reach 10 animate flashing, Alerty "You Have Killed Your Pet!"
    // Hungry Meter bar increments plus six every two seconds
    
    // Bordom Meter bar increments plus five every three seconds

    // Sleepy Meter bar increments plus three every three seconds
    

// Button Functions
    // Munchy Time button decrements hungry meter by 3% with every click.
    // Exercise Time button decrements bordom meter by 2% with every click
    // Sleepy Time button decrements sleepy meter by 3 with every click


//------------------------ Create Classes -----------------------
    class Tamagotchi {
        constructor() {

        }
    };

 


//---------------------- Global Variables -----------------------
       
    let timer = 0;
    let age = 0; 


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
    },1000);
    return count;
    
};
//------------------------Age Function-----------------------
// Write age function in a variable
// Age increases by 
const ageFunc = function() {
    // increment age by 1 year after 20 seconds
    if (age === 0 &&  timer === 20) {
            age++
// increment age by 1 year every 60 seconds  
    } if (age > 0 && timer % 60 === 0) {
        age++
    }
    $('.age').text(`Age: ${age}yrs`);
};
//------------------------Hungry Function----------------------
// Hungry Meter bar increments plus six every two seconds
const hungryFunc = function() {
    let $hungry = $('.hunger').css('width', '+=6%');
    if (timer % 2 === 0 && $hungry < '100%') {
      $hungry++
    }
    return $hungry;
};


//------------------------Bordom Function----------------------
// Bordom Meter bar increments plus five every three seconds
const bordomFunc = function() {
    let $bored = $('.bordom').css('width', '+=5%');
    if (timer % 3 === 0 && $bored < '100%') {
        $bored++
    }
    return $bored;
};
//------------------------Sleepy Function----------------------
// Sleepy Meter bar increments plus 3 every 3 seconds
const sleepyFunc = function() {
    let $sleepy = $('.sleepy').css('width', '+=3%');
    if (timer % 3 === 0 && $sleepy < '100%') {
        $sleepy++
    }
    return $sleepy;
};

//-------------------------- Start Button ----------------------
// use on click to initiate clock, age, and meters

$('.start').on('click', function() {
    timeStart();
});

//-------------------------- Munchy Time Button------------------
const munchyT = $('.feed').on('click', function() {
    $('.hunger').css('width', '-=3%');
});

//-------------------------- Exercise Time Button ---------------
const exerciseT = $('.exercise').on('click', function() {
    $('.bordom').css('width', '-=5%');
});
//-------------------------- Sleepy Time Button -----------------
const sleepT = $('.sleep').on('click', function() {
    $('.sleepy').css('width', '-=6%');
})