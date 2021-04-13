// index receivesAFunction(callback) receives a function and calls it:
function receivesAFunction(callback){
    console.log(callback());
}


//index returnsANamedFunction() 
function returnsANamedFunction(name){
    return function somethingElse(){

    }
}

//index returnsAnAnonymousFunction()
function returnsAnAnonymousFunction(){
    return function (){
        
    }
}
