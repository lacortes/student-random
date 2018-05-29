$(document).ready(function () {
    function changeText() {
        let firstLen;
        let secondLen;
    
        if (names.length > 0) {

            let randomButton = $("#random-button");
            if (randomButton.text() == "Go Again") {
                randomButton.text("Choose");

                cssSelector = anime({
                    targets: '.spin-me',
                    scale: 1,
                    rotate: '2turn'
                });
            }

            let name = getRandomName().split(" ");

            console.log(name);

            // Change html
            $(".word").first().text(name[0]);
            $(".word").last().text("");

            firstLen = name[0].length;
            // secondLen = name[1].length;

        } else {
            console.log("DONE");

            $('#random-button').text("Go Again");
            $('.first-name').text("Again?");

            cssSelector = anime({
                targets: '.spin-me',
                scale: 2,
                rotate: '2turn'
            });

            names = namesCopy.slice();
        }

        // Wrap each letter in its own span
        // $('.name-display').each(function () {
        //     $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        // });

        // Animate
        // let animate = anime.timeline({
        //                 loop: false,
        //                 autoplay: true
        //             }).add({
        //                 targets: '.name-display .letter',
        //                 scale: [4, 1],
        //                 opacity: [0, 1],
        //                 translateZ: 0,
        //                 easing: "easeOutExpo",
        //                 duration: 950,
        //                 delay: function (el, i) {
        //                     return 70 * i;
        //                 }
        //             }).add({
        //                 targets: '.name-display',
        //                 opacity: 0,
        //                 duration: 1000,
        //                 easing: "easeOutExpo",
        //                 delay: 1000
        //             });
        

        // window.setTimeout(function () {
        //     let firstName = "";
        //     let lastName = "";

        //     // Get each letter
        //     $('.name-display .letter').each(function (index) {
        //         console.log($(this).text());
                
        //         let count = index % (firstLen + secondLen) + 1;

        //         if (count <= firstLen) {
        //             firstName  = firstName + $(this).text();
        //         } else {
        //             lastName = lastName + $(this).text();
        //         }

        //     });

        //     // Remove span elements (letters)
        //     $('.name-display').empty();

        //     // Bring back only 2 spans
        //     $('.name-display').html('<span class="word first-name">'+firstName+" "+'</span>' 
        //                             + '<span class="word last-name"> </span>');
        // }, 2000);
    
    }

    function getRandomName() {
        names.sort(function (a, b) { return 0.5 - Math.random() });
        let name = names.pop();
        return name;
    }

    let names = [
        "Brandon",
        "Guadalupe",
        "Alexandra",
        "Christopher", 
        "Charles",
        "Dezire",
        "Malei'a",
        "Hayden",
        "Draven",
        "Andres",
        "Phillip",
        "London",
        "Michael",
        "Ayla",
        "Olivia",
        "Justin",
        "Aiden",
        "Eliana",
        "Eddie",
        "Zaylee",
        "Emily"
    ];

    let namesCopy = names.slice();
    $("#random-button").click(changeText);

});

