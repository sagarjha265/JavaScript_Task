function findFirstJanSunday(){

    for (let year =2014 ; year <=2050 ; year ++ ){

        let date = new Date(year , 0 , 1);

        if(date.getDay() ===0){

            console.log(`${year} this year on ist januray ist day are sunday`);
        }
    }
}
findFirstJanSunday()