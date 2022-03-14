
const fs = require('fs');
const inquirer = require('inquirer');

const postTemplateFileName = 'page-template.md'

function getFileContents() {
    try {
        const data = fs.readFileSync(`./file-scripts/${postTemplateFileName}`, 'utf8')
        return data;
      } catch (err) {
        console.error(err)
      }
}

const createFile = (async (formattedInputs, data) => {
    fs.writeFile(formattedInputs.pagePath, data, function (err) {
        if (err) throw err;               
        
        console.log('Results Received');
    });
});

inquirer
.prompt([
    {
        name: 'title',
        message: 'What is the title of your page?'
    },
    {
        name: 'description',
        message: 'Describe your post:'
    },
    {
        name: 'image',
        message: 'Provide banner image file name in assets/images (must be a .jpg file):'
    }
])
.then(answers => {
    const genericFileContents = getFileContents();
    answers['formattedTitle'] = answers.title.toLowerCase().replace(/\s/g, '_');
    answers['pagePath'] = `./${answers.formattedTitle}.md`;
    const replacedFileContents = genericFileContents.replace('{ { title } }', answers.title)
                                                    .replace('{ { description } }', answers.description)
                                                    .replace('{ { image } }', `assets/images/${answers.image}.jpg`);

    createFile(answers, replacedFileContents);
});


