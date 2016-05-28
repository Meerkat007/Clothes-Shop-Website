$(document).ready(function () {
    'use strict';
    $('my-footer').click(function () {
        console.log($(this).data('id'));
    });
    $('my-footer').on('show.bs.collapse', '#collapse1', function () {
        $('#collapse-1-icon')
            .removeClass("glyphicon-chevron-down")
            .addClass("glyphicon-chevron-up");
    });
    $('my-footer').on('hide.bs.collapse', '#collapse1', function () {
        $('#collapse-1-icon')
            .removeClass("glyphicon-chevron-up")
            .addClass("glyphicon-chevron-down");
    });
    $('my-footer').on('show.bs.collapse', '#collapse2', function () {
        $('#collapse-2-icon')
            .removeClass("glyphicon-chevron-down")
            .addClass("glyphicon-chevron-up");
    });
    $('my-footer').on('hide.bs.collapse', '#collapse2', function () {
        $('#collapse-2-icon')
            .removeClass("glyphicon-chevron-up")
            .addClass("glyphicon-chevron-down");
    });
    $('my-footer').on('show.bs.collapse', '#collapse3', function () {
        $('#collapse-3-icon')
            .removeClass("glyphicon-chevron-down")
            .addClass("glyphicon-chevron-up");
    });
    $('my-footer').on('hide.bs.collapse', '#collapse3', function () {
        $('#collapse-3-icon')
            .removeClass("glyphicon-chevron-up")
            .addClass("glyphicon-chevron-down");
    });
});
