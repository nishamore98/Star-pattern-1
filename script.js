function generatePattern1(){
    let str = "";
    for(let i=1; i<=5; i++) {
         for(let j=1; j<=i; j++){
            str = str.concat('* ');
        }
        str = str.concat('<br />');
    }
    document.getElementById('pattern1').innerHTML  = str;
}