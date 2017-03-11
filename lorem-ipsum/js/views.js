
'use strict';

/* ----------------------------------- */
/* Views */
/* ----------------------------------- */

var quiz = quiz || {};

quiz.views = {
    renderQuestion: function(state, element) {
        var template = '<h3 class="left">{{1}}</h3>'.replace('{{1}}', state.getQuestion());
        element.html(template);
    },
    renderAnswer: function(answer, id) {
        var template = '<button class="answer-button" data-item-id="{{1}}" type="button">{{2}}</button>';
        return template.replace('{{1}}', id).replace('{{2}}', answer);
    },
    renderAnswers: function(state, element) {
        var answers = state.getAnswers();
        var template = '<div>';
        for (var id = 0; id < answers.length; id++) {
            template += this.renderAnswer(answers[id], id);
        }
        template += '</div>';
        element.html(template);
    },
};
