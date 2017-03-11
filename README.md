# Quiz App

Quiz about Lorem Ipsum

## Running the application

index.html

### Mockups

Using balsamiq:

mockups/Quiz App.bmpr

## Notes

A practical problem requiring use of jQuery.

```
Built the html skeleton.
Added enough content to look like the app.
Started with mobile.
Added enough css to made it look like the mockup.
Added testing buttons for each event, so could test each user event separately.
Added basic jQuery code.
With mocked up data, got each event to basically work.
Added model class. Define properties.
Added view class. Render views.
Wired rendering to use the model.
Added test data to the model.
Removed html sections that were now rendered dynamically.
Separated events by introducing custom events. Allowed the application to control by an application defined event rather than a browser event.
Handled answered question. Increasing the size of the buttons created layout problems.
Moved code to use quiz global object. Thus also have quiz.model, quiz.views and quiz.data.


```

### Lessons
```
Started on desktop.
Only when app was somewhat functional did I consider responsive. 
This was a mistake.
Should have started with mobile, got it basically functional.
Then added responsive. 
Get app functioning correctly.
Only then should I have considered more detailed css.

Spent way too much time with the css. 
Much better if I focused on the app and then concerned myself with layout.

If wish to change size of an element dynamically, consider this when laying out the app to begin with.
Consider doing this after initial mockup.

Disabling buttons with .prop("disabled") had some bad side effects, mostly due to my no longer having any control over their behaviour.

$('.answer-button').click(function() {return false;});
worked much better as it changes the behaviour but not it's rendering. Thus I was still able to change the rendering of the button.

Careful with numbers and strings.
Getting the answer id
$(this).attr('data-item-id')
returned a string, whereas the id of the correct answer stored in the model in a number.

var answerId = parseInt($(this).attr('data-item-id'));
makes the answer id and the correct answer id numbers.
When the types are the same the code flows a little bit easier.

Use case requires that, when the user has selected an answer, the button should look inactive. Thus I had to disable :hover.
However, javascript cannot control pseudo class and so the hover efftect could not be implemented with css.

Hover functionality was implemented with mouseenter, mouseleave events and a css class.

$('#quiz').on('mouseenter', '.answer-button', function() {      // mimic .answer-button:hover
    if ($('.answer-button.js-correct-answer').length < 1) { // only hover when answering the question.
        $(this).addClass('answer-button-hover');
    }
});
$('#quiz').on('mouseleave', '.answer-button', function() {
    $(this).removeClass('answer-button-hover');
});

.answer-button-hover {
    background-color: #80dfff;
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
}

Tried to move all code and data into one Global object. The basic structure employed is:
	var quiz = quiz || {};
	quiz.model = {


```
