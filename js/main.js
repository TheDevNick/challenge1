// for (i = 0; i <= 10; i++) {
//     console.log(`This is turn number ${i}`)
// }

// let i = 1

// while (i <= 10) {
//     console.log(`This is turn #${i}`)
//     i++;
// }


// add event listener
document.getElementById('showResults').addEventListener('click', showResults)



// create function for the results

function showResults() {
    // get the input from the user
    let userPick = document.getElementById('userPick').value
    let i = 1

    while (i <= userPick) {
        console.log(`Turn #${i}`)
        // create a section
        const newSection = document.createElement('section')

        // add content to the section
        const newContent = document.createTextNode(`Turn #${i}`)

        // add the text to the new created section
        newSection.appendChild(newContent)

        // add sections into the DOM
        const testSection = document.getElementById('test')
        document.body.insertBefore(newSection, testSection)
        i++
    }
    
}