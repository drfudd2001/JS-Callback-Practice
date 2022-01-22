function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    // Allows for the movement of the green character with the use of the arrow keys
    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        // By making use of the image array, this allows the green caharacter to walk behind or in front of the images on screen
        function changeCharacterZindex(){
            //Tree
            if(imgData[0].leftOffset - 40 < x && x < imgData[0].leftOffset + 120){
                if (imgData[0].bottomOffset < y && y < imgData[0].bottomOffset + 165){
                    character.style.zIndex = 0;
                }
            } 
            //Pillar
            else if(imgData[1].leftOffset - 40 < x && x < imgData[1].leftOffset + 60){
                if (imgData[1].bottomOffset < y && y < imgData[1].bottomOffset + 200){
                    character.style.zIndex = 0;
                }
            } 
            //Pine-tree
            else if(imgData[2].leftOffset - 40 < x && x < imgData[2].leftOffset + 145){
                if (imgData[2].bottomOffset < y && y < imgData[2].bottomOffset + 207){
                    character.style.zIndex = 0;
                }
            } 
            //Crate
            else if(imgData[3].leftOffset - 40 < x && x < imgData[3].leftOffset + 20){
                if (imgData[3].bottomOffset < y && y < imgData[3].bottomOffset + 25){
                    character.style.zIndex = 0;
                }
            } 
            //Well
            else if(imgData[4].leftOffset - 40 < x && x < imgData[4].leftOffset + 95){
                if (imgData[4].bottomOffset < y && y < imgData[4].bottomOffset + 100){
                    character.style.zIndex = 0;
                }
            } 
            //Designates green character as having the largest zIndex
            else {
                character.style.zIndex = 2;
            }
        }

        setInterval(changeCharacterZindex, 1)

        //Limits the screen area that the green character is allowed to move in
        function moveCharacter(){ 
            if(direction === 'west' && x > 0){
                x-=1
            }
            if(direction === 'north' && y < window.innerHeight - 75){
                y+=1
            }
            if(direction === 'east' && x < window.innerWidth - 50){
                x+=1
            }
            if(direction === 'south' && y > 100){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        //Event Listener that detects the use of arrow keys for the movement of the green character
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            if(callback) {
                callback(direction)
            }
        })
        
        //Event Listener that detects when user stops pressing arrow keys to stop the movement of the green character
        document.addEventListener('keyup', function(e){
            direction = null
            if(callback){
                callback(direction)
            }
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}