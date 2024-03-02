var triangleType = function (nums) {
    let [a, b, c] = nums
    let equilateral = (a == b && b == c && c == a)
    let isosceles = (a == b || b == c || c == a)
    let triangle = ((a + b) > c) && ((a + c) > b) && ((b + c) > a)
    if (triangle) {
        if (equilateral) {
            return 'equilateral'
        } else if (isosceles) {
            return 'isosceles'
        } else {
            return 'scalene'
        }
    } else {
        return 'none'
    }
};