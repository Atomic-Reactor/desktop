const gulp = require('gulp');
const runElectron = require('gulp-run-electron');

module.exports = (tasks, config) => {
    const tasksOverride = {
        postServe: () => {
            gulp.src('.').pipe(runElectron());
        },
    };

    return {
        ...tasks,
        ...tasksOverride,
    };
};
