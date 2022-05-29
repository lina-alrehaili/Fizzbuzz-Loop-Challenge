
function FizzBuzz(){
    for (let i = 1; i <= 100; i++) { 
        if(i%3==0 && i%5==0)
            document.write("<p>FizzBuzz</p>");
        if(i%3==0)
            document.write("<p>Fizz</p>");
        if(i%5==0)
            document.write("<p>Buzz</p>");
        else
            document.write("<p>"+i+"</p>");
    }   
}
FizzBuzz();