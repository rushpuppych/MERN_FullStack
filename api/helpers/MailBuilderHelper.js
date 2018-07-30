
const privates = {
    options: {
        template: 'DefaultTemplate',
        resources: [],
        blocks: []
    },

    getBase64Image: (path) => {
        return '';
    },

    addResource: (resource) => {
        privates.options.resources.push(resource);
        return privates.options.resources.length - 1;
    },

    getResource: (index) => {
        return privates.options.resources[index];
    }
}

const mailBuilderHelper = {
    setMailTemplate: (template) => {
        privates.options.template = template;
    },

    setBackgroundImage: (path) => {
        const image = privates.getBase64Image(path);
        // todo: Set image to HTML Background
    },

    getHtmlCode: () => {
        // todo: Return HTML Formated Email
    },

    getPlainText: () => {
        // todo: Return Plain Text Formated Email
    },
};
  
module.exports = mailBuilderHelper;