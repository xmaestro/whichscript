var whichscript = (function(){

    var scripts = {

        requirejs : false,
        nodejs: false,
        commonjs:false,
        jquery: false,
        mootools:false,
        jqueryui:false,
        underscorejs:false,
        prototypejs:false,
        dojo:false,
        kendoui:false,
        backbonejs:false

    };

    return {

        detect:function(){

            if ( typeof define === "function" && define.amd ) {

                scripts.requirejs = true;

            }

            if(typeof _ === 'function') {

                scripts.underscorejs = true;

            }

            if(typeof jQuery != 'undefined'){

                scripts.jquery = true;

            }

            if(typeof jQuery.ui != 'undefined'){

                scripts.jqueryui = true;

            }

            if (typeof exports !== 'undefined') {

                scripts.nodejs = true;
                scripts.commonjs = true;

            }

            if (window.Prototype && Prototype.Version) {

                scripts.prototypejs = true;

            }

            if(typeof Backbone === "function"){

                scripts.backbonejs = true;

            }

            if(window.angular){

                scripts.angular = true;

            }

            if(window.MooTools){

                scripts.mootools = true;
            }

            if(window.kendo){

                scripts.kendoui = true;

            }

            if(window.dojo){

                scripts.dojo = true;
            }

            return scripts;

        }


    };

}(document, window));