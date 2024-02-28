// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.

class WritingImplements { // this is a super class for writing implements 
    constructor(name, waterprooflevel) {
    this.name = name // this is the name of the writing implement
    this.waterprooflevel = waterprooflevel // this is how waterproof is it,  options will be not, somewhat and very
    }

    describe() {
        return `A ${this.name} is ${this.waterprooflevel} waterproof.`
    }
}

class Menu { // this drives the app and our chouice
    constructor() {
        this.items = [ ] // this is array to hold the writing implements

        const defaultItems = [  // this creates 3 default items 
            new WritingImplements("Pencil", "somewhat"),
            new WritingImplements("Micron Pen", "very"),
            new WritingImplements("Flair Marker", "not")
        ];
        this.items.push(...defaultItems); // this adds the default items to the empty array using the .push method

    }

showMenuOptions() {  // below is what will be displayed in the alert window
    return prompt (`
    0) exit
    1) create new writing implement
    2) view a writing implement
    3) delete a writing implement
    4) display all writing implements
    `)
}    

createWritingImplement() {  // this is how you create a writing implement
    const name = prompt('Enter the name of the writing implement') // this prompts user to enter name
    const waterproofLevel = prompt('Enter how waterproof the item is (options are - not, somewhat, very):') // this prompts user to enter how waterproof the item is
    const implement = new WritingImplements(name, waterproofLevel) // this creates a new writing implement
    this.items.push(implement) // this addes it to the items array
    alert('Writing implement added') // this alerts the user the item has been added
}

viewWritingImplement(){ // this is how you view items that have been added to the items array
    const index = prompt('Enter the number of the writing implement you wish to view') - 1 // this prompts the user to pick a number to view - note the - 1 corrects the index so it starts with 1 instead of 0
    if (index >= 0 && index < this.items.length ) { // this checks to see if the number entered in included in the array index
        alert(this.items[index].describe()) // this returns the items description in an alert window
    } else {
        alert('Invalid index') // this is returned is the number entered is not included in item array
    }
}

deleteWritingImplement() { // this is how you delete an implement
    const index = prompt('Enter the number for the writing impplement you wish to delete') - 1 // prompts user to enter the number to be deleted - not - 1 corrects the index so it starts with 1 instead of 0
    if (index >=0 && index < this.items.length) { // this checks to see if the number entered in included in the array index
        this.items.splice(index, 1) // this removes the item number from the items array
    }else { 
        alert('Invalid number.') // this is returned is the number entered is not included in item array
    }
}

displayWritingImplements () { // this will display all writing implements stored in the items array
    if (this.items.length === 0) {  // this checks to see if the items array is empty
        alert('No writing implements to display') // and alerts the user if the items array is empty
    } else {
        let implementList = 'Writing Implements:\n' // this initializes a string variable with header line which displays at the top of the items list
        this.items.forEach((implement, index) => { // this iterates over the items array using the forEach method - which is simplier than writing a for loop
            implementList += `${index + 1}: ${implement.describe().trim()} \n` // this addes the index number to the description and .trim and \n corrects the formatting so it displays nicely
        })
        alert(implementList.trim()) // this displays an alert with list of items 
     }
}

    start() { // this defines the start method which is the entry point to the app
        let selection = this.showMenuOptions() // this call the showMenuOptions method so the user can add information
        while (selection != 0) {  // this initiates a loop as long as the user does not enter a 0
            switch(selection) { // this switch includes the possible menu selections
                case '1' :
                    this.createWritingImplement()  // this allow user to add an item
                    break
                case '2':
                    this.viewWritingImplement() // this allows user to view a specific item
                    break
                case '3':
                    this.deleteWritingImplement() // this allows user to delete an item
                    break
                case '4':
                    this.displayWritingImplements() // this allow user to see all of the items in the items array
                    break
                default:
                    alert('Invalid selection. Please enter a number corresponding to the menu options.')
            }
        selection = this.showMenuOptions() // this reprompts user for a menu selection after completing the last selection
        }
        alert('Goodbye') // displays goodbye alert when 0 is selected
    }
}    

const menu = new Menu () // this instantiates the new Menu base on the Menu class at the beginning
menu.start() // this call the start method on the Menu object to run the app

    
    
    
  
