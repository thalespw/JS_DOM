
function addContact() {
    const section = document.getElementById('contacts-list')
    const listTitle = document.createElement('h3')

    listTitle.innerText = 'Jhon'
    section.appendChild(listTitle)

    const ul = document.createElement('ul')

    function createInput(labelName, inputName) {
        const li = document.createElement('li')
        const label = document.createElement('label')
        label.innerText = labelName

        const input = document.createElement('input')
        input.type = 'text'
        input.name = inputName

        
        li.appendChild(label)
        li.appendChild(input)
        ul.appendChild(li)
    }
    



    section.appendChild(ul)
    createInput('Age: ','age')
    createInput('Phone: ','phone')
    createInput('Address: ','address')
    
}


function removeContact(){
    const section = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')
    
    if (titles.length > 0) {
        section.removeChild(titles[titles.length -1])
        section.removeChild(contacts[contacts.length -1])
    } else {
        alert('There is no contact created')
    }
    
}
