
'use strict';

/* ----------------------------------- */
/* Model */
/* ----------------------------------- */

var quiz = quiz || {};

quiz.model = {
    questions: [],
    answers: [],
    correctAnswers: [],
    currentQuestion: 0,
    correct: 0,
    initialize : function () {
        this.currentQuestion = 0;
        this.correct = 0;
    },

    isFirstQuestion : function() {
        return this.currentQuestion === 0;
    },
    getQuestion : function () {
        return this.questions[this.currentQuestion];
    },
    incrementCurrentQuestion: function() {
        this.currentQuestion++;
    },
    isQuizOver: function() {
        return this.currentQuestion >= this.questions.length;
    },

    getAnswers : function () {
        return this.answers[this.currentQuestion];
    },
    verifyAnswer : function(id) {        // id may be a string
        if (this.correctAnswers[this.currentQuestion] == id) {
            this.correct++;
            return true;
        }
        return false;
    },
    getCorrectAnswer : function() {
        return this.correctAnswers[this.currentQuestion];
    },

    getQuestionsAnswered : function() {
        return this.currentQuestion;
    },
    getCorrectAnswers : function() {
        return this.correct;
    }
};
