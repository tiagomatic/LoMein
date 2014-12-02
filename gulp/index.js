'use strict';

var gulp = require( 'gulp' ),
    fs = require( 'fs' ),
    tasks = fs.readdirSync( './gulp/tasks/' ),
    $ = require( 'gulp-load-plugins' )();

tasks.forEach(function( task ){
  require( './tasks/' + task )( $, gulp );
});
