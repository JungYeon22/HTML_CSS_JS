// 빈 객체로 생성
var calc = {}

// 멤버변수 추가
calc.x = 0;
calc.y = 0;

// 멤버변수
calc.setValue = function(x,y){
    this.x = x;
    this.y = y;
}

calc.plus = function(){
    return this.x + this.y;
}
calc.minus = function(){
    return this.x - this.y;
}
calc.result = function(){
    var sum = this.plus();
    var sub = this.minus();

    document.write("<div>덧셈 : " + sum +"</div>");
    document.write("<div>뺄셈 : " + sub +"</div>");
}