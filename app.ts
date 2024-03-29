import Typed from "typed.js"
/* INIT */

// pre-load the list of available images in assets
const all_available_images: string[] = [
    // gecko garage
    'rick-the-roller.png',
    'caroline-the-crane.png',
    'max-the-monster-truck.png',
    'helen-the-helicopter.png',
    'bobby-the-bus.png',
    'sammy-the-schoolbus.png',
    'celia-the-cementmixer.png',
    'george-the-giantdumptruck.png',
    'dylan-the-dumptruck.png',
    'ryan-the-wreckingballcrane.png',
    'andy-the-animalambulance.png',
    'amber-the-ambulance.png',
    'vicky-the-icecreamvan.png',
    'chelsea-the-cherrypicker.png',
    'rebecca-the-recyclingtruck.png',
    'fiona-the-firetruck.png',
    'tony-the-taxi.png',
    'sophie-the-sportscar.png',
    'mally-the-motorcycle.png',
    'trevor-the-tractor.png',
    'evie-the-ev.png',
    'eric-the-excavator.jpeg',
    'danny-the-digger.png',
    'larry-the-lorry.png',
    'gecko-baby-truck.png',
    'gecko-video-1.png',
    'gecko-muddy-trucks.png',
    'oscar-the-oldbus.png',
    'tilly-the-towtruck.png',
    'bobby-stuck-in-snow.png',
    'mia-the-minidigger.png',
    'leo-the-limousine.png',
    'polly-the-littlebus.png',
    'five-green-buses.png',
    'maggie-the-minifiretruck.png',
    'celia-muddy-truck.png',
    'sophie-larry-muddy.png',
    'icecream-truck-smoothie.png',
    'maisie-the-mower.png',
    'babytruck-halloween.png',
    'bobby-samy-muddy.png',
    'gecko-garage-all.png',
    'florence-the-forklift.png',
    'mummy-bus.png',
    'bobby-bus-thermometer.png',
    'dot-the-babybus.png',
    'max-jump.png',
    'harry-the-babybus.png',
    'gecko-construction-vehicles.png',
    'bobby-bus-moody.png',
    'gecko-respray-machine.png',
    'max-different-colours.png',
    'gecko-mechanicals-sleeping.png',
    'max-halloween-monster.png',
    'five-baby-trucks.png',
    'celia-cement-vicky.png',
    'gecko-xmas-tree.png',
    'gecko-halloween-characters.png',
    'gecko-looking-atyou.png',
    'gecko-the-vampire.png',
    'christmas-toy-workshop.png',
    'helen-fetching-rick.png',
    'gecko-garage-rainbow.png',
    'gecko-with-drpoppy.png',
    'tilly-becomes-caroline.png',
    'gecko-with-mrweasel.png',
    'fiona-jumps-birthday.png',
    'babytruck-surprise-dinner.png',
    'mechanical-with-snowman.png',
    'gecko-mechanical-abc.png',
    'baby-truck-jump.png',
    'bobby-babytruck-colourful.png',
    'super-mechanical-adventure.png',
    'rick-ryan-zoo.png',
    // 'bounce-patrol-babyshark.png',
    // 'bouncepatrol-halloween-mummyshark.png',
    // 'bouncepatrol-christmas-mummyshark.png',
    // 'bouncepatrol-christmas-grandmashark.png',
    // 'bouncepatrol-halloweeen-oldmacs.png',
    // 'olaf.png',
    // // 'elsa.png',
    // 'bouncepatrol-learning-songs.png',
    // 'bouncepatrol-bunny-hop.png',
    // 'bouncepatrol-halloween-pumpkin.png',
    // 'bouncepatrol-fivelittle-pigs.png',
    // 'bouncepatrol-12345-songs.png',
    // 'bouncepatrol-old-macdonald.png',
    // 'little-babybum-sandcastle.png',
    // 'little-babybum-umbrella.png',
    // 'little-babybum-wheelsonbus.png',
    // 'little-babybum-toys.png',
    // 'bounce-patrol-danceparty.png',
    // 'bounce-patrol-logo.png',
    // 'bouncepatrol-pumpkin-mommy.png',
    // 'bouncepatrol-pink-ball.png',
    // 'bouncepatrol-fire-fighters.png',
    // 'bouncepatrol-skeleton-house.png',
    // 'bouncepatrol-pig-song.png',
    // 'bouncepatrol-fire-trucks.png',
    // 'chuchutv-surprise-eggs.png',
    // 'emergency-vehicles-firetruck.png',
    // 'emergency-vehicles-accident.png',
    // 'construction-vehicles-excavator.png',
    // 'construction-vehicles-crane.png',
    // 'construction-vehicles-legocrane.png',
    // 'construction-vehicles-wreckingballcrane.png',
    // 'construction-vehicles-cementmixer.png',
];

const NUM_IMAGES_TO_SHOW = 20;
// const NUM_IMAGES_TO_SHOW = all_available_images.length; // change num images accordingly, show all by default.
const NUM_ROWS = 2; // change number of rows accordingly

/* MAIN */
let quiz_img:string;
let game_ended:boolean;
let images_to_show = getRandomThumbnails(all_available_images, NUM_IMAGES_TO_SHOW) as string[];
let num_cols:number;

/* NAME PLACEHOLDERS */
const placeholder_names: string[] = [
    'Arthur', 'Charlotte', 'Audrey', 'Allysa',
    'Ocean', 'Anahi', 'Natalie', 'Isabel',
    'Gwendolyn', 'Manimoli', 'Josiah', 'Bethany',
    'Adam', 'Jayden', 'Nathan'
];
const name_placeholder = new Typed('#greeting-name', {
    strings: placeholder_names,
    typeSpeed: 50,
    backSpeed: 50,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true,
    backDelay: 1000,
    shuffle: true
});

/* AUDIO */
const wrong_audio: HTMLAudioElement = new Audio('assets/audio/wrong.wav');
const correct_audio: HTMLAudioElement = new Audio('assets/audio/correct.wav');
const tada_audio: HTMLAudioElement = new Audio('assets/audio/tada.wav');

addEventListeners();
reloadGame(images_to_show);

/* FUNCTION DEFINITIONS */

// randomly retrieve desired number of thumbnails from list
function getRandomThumbnails(arr:string[], num:number): string[] | string {
    let result = new Array(num);
    let len = arr.length;
    let taken = new Array(len);
    
    if (num > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (num--) {
        const x = Math.floor(Math.random() * len);
        result[num] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    
    // if num is 1, return just the first element, else return an array
    return num === 1 ? result[0] : result;
}

function paintImagesInGrid(images:string[]) {
    num_cols = Math.ceil(images_to_show.length / NUM_ROWS);

    const instructions = document.getElementById("instructions") as HTMLDivElement;
    instructions.innerHTML = "Use the arrow keys (↑, ↓, ←, →) to find your favourite vehicle, press End to randomise image locations";

    // set number of rows and columns in CSS
    const gallery = document.getElementById("gallery") as HTMLDivElement;
    gallery.innerHTML = ""; // clear the gallery before painting

    gallery.style.gridTemplateRows = `repeat(${NUM_ROWS}, 300px)`;
    gallery.style.gridTemplateColumns = `repeat(${num_cols}, 400px)`;
    
    images.forEach((filename: string, index: number) => {
        // produce the following: <div id="${index}" class="grid-item"><img src="assets/${filename}"></div>
        
        const gallery_item = document.createElement("div") as HTMLDivElement;
        gallery_item.id = (index + 1).toString();  // add 1 to the index to process our calculation
        gallery_item.className = "grid-item";
        
        const image = document.createElement("img") as HTMLImageElement;
        image.src = `assets/${filename}`;
        gallery_item.appendChild(image);
        
        gallery.appendChild(gallery_item);

        // if this is the first image, set it as active
        if(index === 0) {
            gallery_item.className += " active";
            gallery_item.scrollIntoView();
        }
    });
}

function paintQuiz(img: string) {
    const quiz = document.getElementById("quiz") as HTMLDivElement;
    quiz.style.display = "flex"; // show it again because it gets hidden when game ends
    const quiz_img = document.getElementById("quiz_img") as HTMLImageElement;
    quiz_img.src = `assets/${img}`;
}

function reloadGame(images:string[]) {
    game_ended = false;
    quiz_img = getRandomThumbnails(images_to_show, 1) as string;
    paintImagesInGrid(images_to_show);
    paintQuiz(quiz_img);
}

function endGame() {
    game_ended = true;
    tada_audio.play();
    const instructions = document.getElementById("instructions") as HTMLDivElement;
    instructions.innerHTML = "You win! Press any key to restart.";

    // hide the gallery
    const gallery = document.getElementById("gallery") as HTMLDivElement;
    gallery.innerHTML = "";

    // hide the quiz section
    const quiz = document.getElementById("quiz") as HTMLDivElement;
    quiz.style.display = "none";
}

function addEventListeners() {
    window.onkeydown = (ev: KeyboardEvent): any => {
        if(ev.defaultPrevented) return;
        processKey(ev.key);
        
        function processKey(key: string) {
            if(game_ended) {
                // if game has ended, press any key to restart.
                images_to_show = getRandomThumbnails(all_available_images, NUM_IMAGES_TO_SHOW) as string[];
                reloadGame(images_to_show);
            }

            const current_index = +document.getElementsByClassName("active")[0].id;
            let new_index;
            
            if(key === "ArrowUp" && current_index - num_cols > 0) {
                new_index = current_index - num_cols;
                toggleActive(current_index, new_index);
            }
            else if(key === "ArrowDown" && current_index + num_cols <= images_to_show.length) {
                new_index = current_index + num_cols;
                toggleActive(current_index, new_index);
            }
            else if(key === "ArrowLeft" && current_index % num_cols != 1 && num_cols !== 1) {
                new_index = current_index - 1;
                toggleActive(current_index, new_index);
            }
            else if(key === "ArrowRight" && current_index % num_cols != 0 && current_index + 1 <= images_to_show.length) {
                new_index = current_index + 1;
                toggleActive(current_index, new_index);
            }
            else if(key === "Enter") {
                const current_image = images_to_show[current_index-1];

                // if filename matches, remove thumbnail. end game when there are no more images
                if (current_image == quiz_img) {
                    images_to_show.splice(current_index-1, 1);
                    images_to_show.length == 0 ? endGame() : reloadGame(images_to_show);
                    correct_audio.play();
                } else {
                    wrong_audio.play();
                }
            }
            else if(key === "End") {
                // if user presses End, refresh page to randomise images again.
                // we use End to provide convenience to users because it's near the arrow keys on my keyboard.
                images_to_show = getRandomThumbnails(all_available_images, NUM_IMAGES_TO_SHOW) as string[];
                reloadGame(images_to_show)
            }
            else if(key.match(/^[a-z0-9]$/i) || key === " " || key === "Backspace") {
                // if user presses anything alphanumeric, assume they are typing a name and start populating the textfield
                // pressing Backspace will reduce one character from the textfield, while all other alphanumeric will be appended to the textfield up to a maximum of 10 characters.
                const current_text = (document.getElementById('greeting-name') as HTMLInputElement).value;
                (document.getElementById('greeting-name') as HTMLInputElement).value = (key === "Backspace" ? current_text.slice(0, -1) : current_text.concat(key).slice(0,10));
            }
        }
        
        function toggleActive(index_to_remove:number, index_to_add:number) {
            document.getElementById(index_to_remove.toString())?.classList.remove("active");
            document.getElementById(index_to_add.toString())?.classList.add("active");
            document.getElementById(index_to_add.toString())?.scrollIntoView();
        }
    }
}