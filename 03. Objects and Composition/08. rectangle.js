function rectangle(width, height, color) {
    const result = {width, height, color };
   
    result.color = color[0].toUpperCase() + color.substring(1, color.length);

    result.calcArea = () => {
        return result.width * result.height;
    };

    return result;
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

/*
4
5
Red
20
*/