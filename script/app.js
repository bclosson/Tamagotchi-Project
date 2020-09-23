
// Create Tamagotchi Class
    // create sub classes for each tamagotchi

// Create Meter Class

// Create Button Class

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
    // reset timer to 60 seconds
    // start countdown
    // after each time the timer reaches zero age increases by 5 years, and new older yoshi appears on screen.
    // When senior yoshi's times expires switch to sunset backdrop and animate fading into the distance. 
        // Alert: "As your pet walks quietly into the night, know you have loved and care for them with all your heart."

// Meter Functions
    // If any of the meter bars reach 10 animate flashing, Alerty "You Have Killed Your Pet!"
    // Hungry Meter bar increments plus one every two seconds
    
    // Bordom Meter bar increments plus two every three seconds

    // Sleepy Meter bar increments plus one every second
    

// Button Functions
    // Munchy Time button decrements hungry meter by .25 with every click.
    // Exercise Time button decrements bordom meter by .1 with every click
    // Sleepy Time button decrements sleepy meter by 3 with every click


//------------------------ Create Classes -----------------------
    class Tamagotchi {
        constructor() {

        }
    };

    class Meter {
        constructor() {

        }
    };

    class Button {
        constructor() {

        }
    };

//-------------------------- Prompt Function -------------------
   
        // The prompt inputs value into text box.
    
    let timer = 0;
    let age = 0;
    let $prompt = prompt('Please Name Your Pet','Pet Name:');
    
    if ($prompt != null) {
        $('.name').val($prompt);
    }
   
//-------------------------Timer Function------------------------
// timer count up starting at zero increment by 1000 ms
const timeStart = function() {
    const count = setInterval(function() {
        timer++;
        $('#time').text(`Timer: ${timer}s`);
        ageFunc();
    },1000);
    return count;
    
}
//------------------------Age Function-----------------------
// Write age function in a variable
// Age increases by 
const ageFunc = function() {
    // increment age by 1 year after 20 seconds
    if (age === 0 &&  timer === 20) {
            age++
    }
    // increment age by 1 year every 60 seconds

    
    $('.age').text(`Age: ${age}yrs`);
};
//------------------------Hungry Function----------------------

const hungry = function() {

}
//------------------------Bordom Function----------------------

const bordom = function() {

}
//------------------------Sleepy Function----------------------

const sleepy = function() {

}

//-------------------------- Start Button ----------------------
// use on click to initiate clock, age, and meters

$('.start').on('click', function() {
    timeStart();
    
});

