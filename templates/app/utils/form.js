var _ = require('underscore');
var $ = require('jquery');

var mailFunction = {

    /**
     * Return arr with input selected by user
     * @param inputName
     * @returns {Array}
     */
    checkboxArray : function(inputName){
        var arr = [];
        _.each($("input[name*='"+inputName+"']"), function(input, key){
            input.checked ? arr.push(input.value) : null;
        });
        return arr;
    },

    /**
     * Return value of selected radio input
     * @param inputName
     * @returns {string}
     */
    radioValue : function(inputName){
        var value = '';
        _.each($("input[name*='"+inputName+"']"), function(input, key){
            if(input.checked === true){
                value = input.value;
            }
        });
        return value;
    },

    /**
     * Verify email
     * @param mail
     * @returns {boolean}
     */
    checkMail : function(mail){
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(mail);
    }

};

module.exports = mailFunction;