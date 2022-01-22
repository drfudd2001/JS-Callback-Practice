// Create the inventory 'div' and place at the bottom of the screen at 100% width
const inventory = newInventory()
move(inventory).to(0, 0)

// Create character that will eventually be movable with largest zIndex
const character = newImage('./assets/green-character/static.gif')
character.style.zIndex = 2;

// Change the image used according to the direction of travel
function handleDirectionChange(direction){
    if(direction === null){
        character.src = './assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = './assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = './assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = './assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = './assets/green-character/south.gif'
    }
}

// Moves the green character with arrow keys
move(character).withArrowKeys(100, 250, handleDirectionChange)

// Create an array of objects, containing all information for initial placement
let imgData = [
    {id: "tree", leftOffset: 200, bottomOffset: 450, imgPath: './assets/tree.png'},
    {id: "pillar", leftOffset: 350, bottomOffset: 250, imgPath: './assets/pillar.png'},
    {id: "pine-tree", leftOffset: 450, bottomOffset: 350, imgPath: './assets/pine-tree.png'},
    {id: "crate", leftOffset: 150, bottomOffset: 350, imgPath: './assets/crate.png'},
    {id: "well", leftOffset: 500, bottomOffset: 575, imgPath: './assets/well.png'}
]

// Use the imgData array to create and place the images
let lengthImgData = imgData.length
for (let i = 0; i < lengthImgData; i++) {
    move(newImage(imgData[i].imgPath)).to(imgData[i].leftOffset, imgData[i].bottomOffset)
}

// Create an array of objects, containing all information for initial placement
let itemData = [
    {id: "sword", leftOffset: 500, bottomOffset: 555, imgPath: './assets/sword.png'},
    {id: "shield", leftOffset: 165, bottomOffset: 335, imgPath: './assets/shield.png'},
    {id: "staff", leftOffset: 600, bottomOffset: 250, imgPath: './assets/staff.png'}
]

// Use the itemData array to create and place inventory items that can be clicked to move to inventory
let lengthItemData = itemData.length
for (let i = 0; i < lengthItemData; i++) {
    move(newItem(itemData[i].imgPath)).to(itemData[i].leftOffset, itemData[i].bottomOffset)
}