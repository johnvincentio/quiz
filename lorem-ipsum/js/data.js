
'use strict';

var quiz = quiz || {};
quiz.data = quiz.data || {};

quiz.data.addTestData = function(state) {     // set initial data state
    state.questions[0] = 'Q1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ut porro, nihil!';
    state.correctAnswers[0] = 2;
    state.answers[0] = [];
    state.answers[0][0] = 'A1. Voluptatem quia accusamus atque enim illo, nam sint molestias sapiente id voluptates quae';
    state.answers[0][1] = 'A1. epudiandae magnam quisquam, autem a nobis doloribus sit. Consequuntur';
    state.answers[0][2] = 'A1. dolore quos praesentium eos velit placeat nam perspiciatis';
    state.answers[0][3] = 'A1. Facere, doloremque, perferendis eos ducimus fugiat ratione';

    state.questions[1] = 'Q2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ut porro, nihil!';
    state.correctAnswers[1] = 1;
    state.answers[1] = [];
    state.answers[1][0] = 'A2. Voluptatem quia accusamus atque enim illo, nam sint molestias sapiente id voluptates quae';
    state.answers[1][1] = 'A2. epudiandae magnam quisquam, autem a nobis doloribus sit. Consequuntur';
    state.answers[1][2] = 'A2. dolore quos praesentium eos velit placeat nam perspiciatis';
    state.answers[1][3] = 'A2. Facere, doloremque, perferendis eos ducimus fugiat ratione';
    state.answers[1][4] = 'A2. quos praesentium eos velit placeat nam perspiciatis. Laborum deleniti illo';

    state.questions[2] = 'Q3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ut porro, nihil!';
    state.correctAnswers[2] = 0;
    state.answers[2] = [];
    state.answers[2][0] = 'A3. Voluptatem quia accusamus atque enim illo, nam sint molestias sapiente id voluptates quae';
    state.answers[2][1] = 'A3. epudiandae magnam quisquam, autem a nobis doloribus sit. Consequuntur';

    state.questions[3] = 'Q4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ut porro, nihil!';
    state.correctAnswers[3] = 2;
    state.answers[3] = [];
    state.answers[3][0] = 'A4. Voluptatem quia accusamus atque enim illo, nam sint molestias sapiente id voluptates quae';
    state.answers[3][1] = 'A4. epudiandae magnam quisquam, autem a nobis doloribus sit. Consequuntur';
    state.answers[3][2] = 'A4. dolore quos praesentium eos velit placeat nam perspiciatis';

    state.questions[4] = 'Q5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ut porro, nihil!';
    state.correctAnswers[4] = 4;
    state.answers[4] = [];
    state.answers[4][0] = 'A5. Voluptatem quia accusamus atque enim illo, nam sint molestias sapiente id voluptates quae';
    state.answers[4][1] = 'A5. epudiandae magnam quisquam, autem a nobis doloribus sit. Consequuntur';
    state.answers[4][2] = 'A5. dolore quos praesentium eos velit placeat nam perspiciatis';
    state.answers[4][3] = 'A5. Facere, doloremque, perferendis eos ducimus fugiat ratione';
    state.answers[4][4] = 'A5. quos praesentium eos velit placeat nam perspiciatis. Laborum deleniti illo';
};
