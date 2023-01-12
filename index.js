const inventory = newInventory()
move(inventory).to(0, 0)                             

const character = newImage('assets/green-character/static.gif')
move(character).to(100, 250)

function handleDirectionChange(direction){
    if(direction === null){
        character.src = `assets/green-character/static.gif`
    }
    if(direction === 'west'){
        character.src = `assets/green-character/west.gif`
    }
    if(direction === 'north'){
        character.src = `assets/green-character/north.gif`
    }
    if(direction === 'east'){
        character.src = `assets/green-character/east.gif`
    }
    if(direction === 'south'){
        character.src = `assets/green-character/south.gif`
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/well.png')).to(600, 400)
move(newItem('assets/sword.png')).to(400, 475)
move(newItem('assets/shield.png')).to(165, 335) 
move(newItem('assets/staff.png')).to(600, 250)

let backGround = document.createElement('img')
backGround.src = 'assets/grass.png'
backGround.style.position = 'fixed'
backGround.style.left = '0px'
backGround.style.bottom = '0px'
backGround.style.width = "100%"
backGround.style.height = "70%"
backGround.style.zIndex = -1;
document.body.append(backGround)

let Sky = document.createElement('img')
Sky.src = 'assets/sky.png'
Sky.style.position = 'fixed'
Sky.style.width = '100%'
Sky.style.height = '30%'
Sky.style.left = '0px'
Sky.style.top = '0px'
Sky.style.zIndex = -1;
document.body.append(Sky)