$("*") - Wildcard: selects every element on the page.
$(this) - Current: selects the current element being operated on within a function.
$("p") - Tag: selects every instance of the <p> tag.
$(".example") - Class: selects every element that has the example class applied to it.
$("#example") - Id: selects a single instance of the unique example id.
$("[type='text']") - Attribute: selects any element with text applied to the type attribute.
$("p:first-of-type") - Pseudo Element: selects the first <p>.


click()- Click: executes on a single mouse click.
hover() - Hover: executes when the mouse is hovered over an element. mouseenter() and mouseleave() apply only to the mouse entering or leaving an element, respectively.
submit() - Submit: executes when a form is submitted.
scroll() - Scroll: executes when the screen is scrolled.
keydown() - Keydown: executes when you press down on a key on the keyboard.



var newP = $("<p>");
        newP.text("The crocodiles have eaten this ENTIRE PAGE!");
        newP.addClass("crocodile");
        $("h2").text("CROCODILE ATTACK!");
        $("p").html("The crocodiles are coming - <strong>oh noess</strong>!!");
        $("p").css("color", "green");
        $("h2").addClass("crocodile");
        $("a").attr("href", "https://en.wikipedia.org/wiki/Crocodile");
        $("img").attr("src", "https://www.kasandbox.org/programming-images/animals/crocodiles.png");