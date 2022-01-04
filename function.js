
/**
 * for age cal
 * @param {*} name 
 * @param {*} year 
 */
function ageCal(gender,year){

    let date = new Date();
    // to find age
    let age = date.getFullYear() - year;
    // store status function in var
    let stat = ageStatus(age);

    output.innerHTML = `<p class="alert alert-${stat.color}">you are ${age} year old & ${gender == 'Male' ? stat.male : stat.female }</p>`
}


// to find age status and bg color
function ageStatus(age){

    if(age > 0 && age <= 18){
        return{
            male   : 'tumi bacca,tumar biyar boyos hoynai',
            female :'tumi bacca,tumar biyar boyos hoynai',
            color  : 'danger'
        }
    }else if( age > 18 && age <= 20){
        return{
            male   : 'Apner biyar boyos hoyni',
            female : 'Apner biyar boyos hoyese',
            color : 'info'
        }
    }else{
        return{
            male   : 'Apner biyar boyos hoyese',
            female : 'Apner biyar boyos hoyese',
            color : 'success'
        }
    }
}