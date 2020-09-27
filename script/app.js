
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
    // If any of the meter bars reach 10 animate flashing, Alerty "You Have Killed Your Pet!" and end game.

    // Hungry Meter bar increments plus six px every second
    
    // Bordom Meter bar increments plus five px every second

    // Sleepy Meter bar increments plus three px every second
    

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


 //---------------------- Global Variables ---------------------   

 let timer = 0;
let count = 0;

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
    count = setInterval(function() {
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
        if (yoshi.hunger < 51.4) {
            yoshi.hunger++
            $('.hunger').css('width', '+=5px');
        }else {
            clearInterval(count);
        alert('YOU HAVE KILLED YOUR PET!!  SHAME ON YOU!!');
        }
};

//------------------------Bordom Function----------------------
// Bordom Meter bar increments plus five every three seconds

const bordomFunc = function() {
//    console.log(yoshi.bored);
    if (yoshi.bored < 64.25) {
        yoshi.bored++
        $('.bordom').css('width', '+=4px');
    } else {
        clearInterval(count);
        alert('YOU HAVE KILLED YOUR PET!!  SHAME ON YOU!!');
    }
};

//------------------------Sleepy Function----------------------
// Sleepy Meter bar increments plus 3 every 3 seconds

const sleepyFunc = function() {
    // console.log(yoshi.sleepy);
    if (yoshi.sleepy < 85.67) {
        yoshi.sleepy++
        $('.sleepy').css('width', '+=3px');
    } else {
        clearInterval(count);
        alert('YOU HAVE KILLED YOUR PET!!  SHAME ON YOU!!');
    }
};

//-------------------------- Start Button ----------------------
// use on click to initiate clock, age, and meters

$('.start').on('click', function() {
    timeStart();
});

//-------------------------- Munchy Time Button------------------
// Munchy Time button decrements hungry meter by 3px with every click.

const munchyT = $('.feed').on('click', function() {
    yoshi.hunger -= 3;
    $('.hunger').css('width', '-=3px');
});

//-------------------------- Exercise Time Button ---------------
// Exercise Time button decrements bordom meter by 5px with every click

const exerciseT = $('.exercise').on('click', function() {
    yoshi.bored -= 5;
    $('.bordom').css('width', '-=5px');
});

//-------------------------- Sleepy Time Button -----------------
 // Sleepy Time button decrements sleepy meter by 3px with every click only when lights are out

const sleepT = $('.sleep').on('click', function() {
    yoshi.sleepy -= 6;
    $('.sleepy').css('width', '-=6px');
});

//-------------------------- Lights Button -----------------
// I found resources on Stack Overflow to create this functionality

// Lights button changes background to night time on click and back to daytime on second click
 $(function() {
    let isDay = true;

    const lights = $('.lights').on('click', function() {
        if (isDay) {
            $('body').css('background-image', 'url("/Users/benjaminclosson/sei/deliverables/Tamagotchi-Project/images/pixel mountain night.jpg")');
        } else {
            $('body').css('background-image', 'url("/Users/benjaminclosson/sei/deliverables/Tamagotchi-Project/images/pixel grass mountains.jpeg")');
        }
        isDay = !isDay;
    });
});
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
        if (timer >= 245) {
            alert("As your pet walks quietly into the night, know you have loved and care for them with all your heart.")
            clearInterval(count);
        }
     };


