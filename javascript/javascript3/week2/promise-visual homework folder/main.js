const redCircle = document.querySelector('ul.marks li:nth-child(1)');
const blueCircle = document.querySelector('ul.marks li:nth-child(2)');
const greenCircle = document.querySelector('ul.marks li:nth-child(3)');

// translateOneByOne function 

function translateOneByOne() {
    moveElement(redCircle, {
            x: 20,
            y: 300
        })
        .then(() => {
            console.log('bluecircle moved from random start to its target position');
        })
        .then(() => moveElement(blueCircle, {
            x: 400,
            y: 300
        }))
        .then(() => {
            console.log('bluecircle moved from random start to its target position');
        })
        .then(() => moveElement(greenCircle, {
            x: 400,
            y: 20
        }))
        .then(() => {
            console.log('greencircle moved from random start to its target position');
        });
}
translateOneByOne();//Each circle moved one by one


// translateAllAtOnce function

function translateAllAtOnce() {
    Promise.all([
        moveElement(redCircle, {
            x: 20,
            y: 300
        }),
        moveElement(blueCircle, {
                x: 400,
                y: 300
            },
            moveElement(greenCircle, {
                x: 400,
                y: 20
            })),
    ]).then(() => console.log('All circles have been moved from their random start position to their target positions'));
}

translateAllAtOnce(); // calling all translation at once 





