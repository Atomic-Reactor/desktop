const gulp = require('gulp');
const runElectron = require('gulp-run-electron');

global.electroned = false;

module.exports = (tasks, config) => {
    const tasksOverride = {
        postServe: done => {
            if (global.electroned) {
                done();
            } else {
                global.electroned = true;
                return gulp.src('.').pipe(runElectron());
            }
        },
    };

    return {
        ...tasks,
        ...tasksOverride,
    };
};
