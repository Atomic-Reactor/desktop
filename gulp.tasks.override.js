'use strict';

const del = require('del');
const path = require('path');
const gulp = require('gulp');
const fs = require('fs-extra');
const run = require('gulp-run');
const runSequence = require('run-sequence');
const runElectron = require('gulp-run-electron');

global.electroned = false;

module.exports = (tasks, config) => {
    const tasksOverride = {
        'electron:clean': done => {
            fs.ensureDirSync(path.normalize(config.dest.electron));
            fs.emptyDirSync(path.normalize(config.dest.electron));
            done();
        },
        'electron:prep': () => {
            return run('npm install --production-only').exec();
        },
        'electron:build': done => {
            fs.copySync('public', path.join(config.dest.electron, 'public'));
            fs.copySync(
                'index.js',
                path.join(config.dest.electron, 'index.js'),
            );
            done();
        },
        electron: done => {
            runSequence(
                ['electron:clean'],
                ['electron:prep'],
                ['electron:build'],
                done,
            );
        },
        postServe: done => {
            if (global.electroned) {
                done();
            } else {
                global.electroned = true;
                return gulp.src('.').pipe(runElectron(['--development']));
            }
        },
    };

    return {
        ...tasks,
        ...tasksOverride,
    };
};
