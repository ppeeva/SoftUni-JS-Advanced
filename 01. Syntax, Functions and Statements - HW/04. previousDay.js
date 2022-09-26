function getPreviousDay(year, month, day) {
    const date = new Date(year, month-1, day);
    const previousDate = new Date(date.setDate(date.getDate() - 1));    
    console.log(`${previousDate.getFullYear()}-${previousDate.getMonth()+1}-${previousDate.getDate()}`);
}

getPreviousDay(2016, 9, 30);
// 2016-9-29

getPreviousDay(2016, 10, 1);
// 2016-9-30


getPreviousDay(2022, 3, 1);
// 2016-9-30