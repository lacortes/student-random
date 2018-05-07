$(document).ready(function () {
    function changeText() {
        let firstLen;
        let secondLen;
    
        if (names.length > 0) {
            let name = getRandomName().split(" ");

            console.log(name);

            // Change html
            $(".word").first().text(name[0]);
            $(".word").last().text(name[1]);

            firstLen = name[0].length;
            secondLen = name[1].length;

        } else {
            names = namesCopy.slice();
        }

        // Wrap each letter in its own span
        $('.name-display').each(function () {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });

        // Animate
        let animate = anime.timeline({
                        loop: true
                    }).add({
                        targets: '.name-display .letter',
                        scale: [4, 1],
                        opacity: [0, 1],
                        translateZ: 0,
                        easing: "easeOutExpo",
                        duration: 950,
                        delay: function (el, i) {
                            return 70 * i;
                        }
                    }).add({
                        targets: '.name-display',
                        opacity: 0,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000
                    });
        

        window.setTimeout(function () {
            let firstName = "";
            let lastName = "";

            // Get each letter
            $('.name-display .letter').each(function (index) {
                console.log($(this).text());
                
                let count = index % (firstLen + secondLen) + 1;

                if (count <= firstLen) {
                    firstName  = firstName + $(this).text();
                } else {
                    lastName = lastName + $(this).text();
                }

            });

            // Remove span elements (letters)
            $('.name-display').empty();

            // Bring back only 2 spans
            $('.name-display').html('<span class="word first-name">'+firstName+" "+'</span>' 
                                    + '<span class="word last-name">'+lastName+'</span>');
        }, 3000);
    
    }

    function getRandomName() {
        names.sort(function (a, b) { return 0.5 - Math.random() });
        let name = names.pop();
        return name;
    }

    let names = [
        "First1 Last1",
        "First2 Last2",
        "First3 Last3",
        "First4 Last4"
    ];

    let namesCopy = names.slice();
    $("#random-button").click(changeText);

});

