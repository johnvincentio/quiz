
'use strict';

/*
TODO:
1. try to switch background image for each question...

3. use shades.

4. use diamond shaped buttons

5. use fadeIn()?
6. transition hover etc
*/

var quiz = quiz || {};

$(function() {

/* ----------------------------------- */
/* Application events */
/* ----------------------------------- */

    $('#quiz').on('app-init', function() {      /* Initial state */
        $('#js-init-status').show();
        $('#js-update-status').hide();
        $('.js-another-quiz').hide();
        $('#quiz').hide();
        quiz.model.initialize();                // model setup
        quiz.data.addTestData(quiz.model);      // add questions and answers
    });

    $('#quiz').on('ask-question', function() {  /* Ask a question */
//        console.log(">>> ask-question");
        if (quiz.model.isQuizOver()) {      // handle quiz is over
            $('#quiz').hide();                  // hide the last quiz
            $('.js-another-quiz').show();       // show another quiz button
            return;
        }
        $('#js-init-status').hide();
        if (! quiz.model.isFirstQuestion()) {
            $('#js-update-status').show();
        }
        $('#quiz').show();
        $('.js-next-question').hide();
        quiz.views.renderQuestion (quiz.model, $('.question'));
        quiz.views.renderAnswers (quiz.model, $('.answers'));
//        console.log("<<< ask-question");
    });

    $('#quiz').on('mouseenter', '.answer-button', function() {      // mimic .answer-button:hover
        if ($('.answer-button.js-correct-answer').length < 1) { // only hover when answering the question.
            $(this).addClass('answer-button-hover');
        }
    });
    $('#quiz').on('mouseleave', '.answer-button', function() {
        $(this).removeClass('answer-button-hover');
    });

/* ----------------------------------- */
/* User events */
/* ----------------------------------- */

/* User clicked 'Start Quiz' */

    $('.js-start-quiz').on('click', function() {
        $('#quiz').trigger('ask-question');     // trigger event to Ask the next Question
    });

/* User clicked 'Next Question' */

    $('#quiz').on('click', '.js-next-question', function() {
        $('#quiz').trigger('ask-question');
    });

/* User clicked Answer button */

    $('#quiz').on('click', '.answer-button', function() {
//        console.log(".answer-button");
//        $('.answer-button').prop("disabled", true);     // disable all answer buttons, bad side effects.
        $('.answer-button').click(function() {return false;});  // disable all answer buttons
//        $('.answer-button').hover(function(event) {       // cannot change css pseudo class
//            console.log("in hover");
//            event.preventDefault();
//            return true;
//        });  // disable hover for all answer buttons

// get id of user's answer
        var answerId = parseInt($(this).attr('data-item-id'));  // make a number for consistency
//        console.log("answerId "+answerId);

        quiz.model.verifyAnswer(answerId);      // check the answer
        var correctId = quiz.model.getCorrectAnswer();  // get id of correct answer
//        console.log("correctId "+correctId);

        for (var cnt = 0; cnt < quiz.model.getAnswers().length; cnt++) {
            console.log("cnt :"+cnt+":");
            if (cnt === correctId) {
                $('[data-item-id='+cnt+']').addClass('js-correct-answer');
            }
            else if (cnt === answerId) {
                $('[data-item-id='+cnt+']').addClass('js-wrong-answer');
            }
            else {
                $('[data-item-id='+cnt+']').addClass('js-other-answer');
            }
        }

/* change characteristics of the answer buttons */
//        $('#quiz .answer-button').addClass('js-other-answer');
//        $('[data-item-id='+correctId+']').removeClass('js-other-answer').addClass('js-correct-answer');
//        if (answerId !== correctId) {
//            $('[data-item-id='+answerId+']').removeClass('js-other-answer').addClass('js-wrong-answer');
//        }

        quiz.model.incrementCurrentQuestion();      // increment to next question
        var status = quiz.model.getCorrectAnswers() + ' out of '+quiz.model.getQuestionsAnswered() +
            ' questions have been answered correctly';
        $('#js-update-status h3').text(status);     // set status message
        $('.js-next-question').show();              // show next question button
    });

/* User clicked 'Another Quiz' */

    $('.js-another-quiz').on('click', function() {
        $('#quiz').trigger('app-init');     // trigger event to initialize the app
    });

    $('#quiz').trigger('app-init');     // trigger event to initialize the app

});
