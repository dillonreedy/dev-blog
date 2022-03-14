
const fs = require('fs');
const inquirer = require('inquirer');

const postTemplateFileName = 'post-template.md'

function getFormattedDate() {
    const dateString = new Date().toISOString();
    const timeIndex = dateString.indexOf('T');
    const formattedDateString = dateString.substring(0, timeIndex);
    return formattedDateString;
}

function getFileContents() {
    try {
        const data = fs.readFileSync(`./file-scripts/${postTemplateFileName}`, 'utf8')
        return data;
      } catch (err) {
        console.error(err)
      }
}

const createFile = (async (formattedInputs, data) => {
    fs.writeFile(formattedInputs.postTitle, data, function (err) {
        if (err) throw err;               
        
        console.log('Results Received');
    });
});

inquirer
.prompt([
    {
    name: 'title',
    message: 'What is the title of your post?'
    },
    {
        name: 'description',
        message: 'Describe your post:'
    },
])
.then(answers => {
    const genericFileContents = getFileContents();
    answers['formattedTitle'] = answers.title.toLowerCase().replace(/\s/g, '-');
    answers['formattedDate'] = getFormattedDate();
    answers['postTitle'] = `./_posts/${answers.formattedDate}-${answers.formattedTitle}.md`;
    const replacedFileContents = genericFileContents.replace('{ { title } }', answers.title)
                                                    .replace('{ { description } }', answers.description);

    createFile(answers, replacedFileContents);
});


