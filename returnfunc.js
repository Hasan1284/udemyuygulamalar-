// return functions

function Question(hobby){

    switch(hobby){
        
        case 'car':
            return function(name){
                console.log(name +' do you have a car ?');
            }
            
            break;
            
            case 'book':
                return function(name){
                    console.log(name +
                        ' what is you favorite book ?');
                }
                
            break;
            
            case 'software':
                        return function(name,type){
                            console.log(name +
                                ' are you interested  ' +type+ '?');
                        }
                        
            break;
                        
            default :
                        return function(name){
                            console.log(name +' how are you ?');
                        }
        
            
    }
}

var carQuestion = Question('car');

carQuestion('hasan');
carQuestion('huseyin');

var softwareQuestion = Question('software');

softwareQuestion('hasan','nodejs');