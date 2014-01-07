var ejs = require('ejs');

module.exports = function(BasePlugin) {

    return BasePlugin.extend({
        name: 'ejs',
        render: function(options){
            if(options.inExtension === 'ejs'){
                try {
                    options.content = ejs.render(options.content || '', options.templateData);
                }
                catch(error){
                    return error;
                }
            }
            return true;
        }
    });
};
