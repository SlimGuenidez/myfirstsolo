// this will hide at first the list,then the button of go back,then the text and finally the input
$(".prg").hide()
$("#btn3").hide()
$("#txt").hide()
$("#myinput").hide()

//when I click on the button start it will show the input ,hide button start , show button next and show the pictures of class A1
$("#btn1").click(function(){
    $("#myinput").show()
    $("#btn1").hide()
    $("#btn2").hide()
    $("#btn4").show()
    $(".A1").show()
    
})
//button rules will show the list of rules , hide button start , show button go back, hide button rules and hide the input

$("#btn2").click(function(){
    $('.prg').show()
    $("#btn1").hide()
    $("#btn3").show()
    $("#btn2").hide()
    $("#myinput").hide()

})
//button 3 will hide the list of rules ,show button start and show button rules 

$("#btn3").click(function(){
    $(".prg").hide()
    $("#btn1").show()
    $("#btn2").show()
    $("#btn3").hide()
})
//here I will hide all the pictures
$(".A1").hide()
$(".A2").hide()
$(".A3").hide()
$(".A4").hide()
$(".A5").hide()
$(".A6").hide()
$(".A7").hide()
$(".A8").hide()
$(".A9").hide()
$(".A10").hide()


// I created variable k and give it number 1 so when I type A+k the class will be incrimented +1 to the A then I did counter so everytime the user guess the correct answer the counter will add +1 //

var k = 1 
var counter=0
$("#btn4").hide()
$("#btn4").click(function(){

    $(".A"+k).hide()
    
    $(".A"+k).hide()

    //
if(k==1)
{
if($("#myinput").val()=="Spiderman"){
    counter++
        alert("You Win")
    }
else 
alert("You Lose ")
}
if(k==2)
{
if($("#myinput").val()=="Matrix"){
    counter++
        alert("You Win")
    }
else 
alert("You Lose ")
}
if(k==3)
{
if($("#myinput").val()=="Titanic"){
    counter++
        alert("You Win")
    }
else 
alert("You Lose ")
}
if(k==4)
{
if($("#myinput").val()=="Cinderella"){
    counter++
        alert("You Win")
    }
else 
alert("You Lose ")
}
if(k==5)
{
if($("#myinput").val()=="Jhon Wick"){
    counter++
        alert("You Win")
    }
else 
alert("You Lose ")
}
if(k==6)
{
if($("#myinput").val()=="Joker"){
    counter++
        alert("You Win")
    }
else 
alert("You Lose ")
}
if(k==7)
{
if($("#myinput").val()=="Madmax"){
    counter++
        alert("You Win")
    }
else 
alert("You Lose ")
}
if(k==8)
{
if($("#myinput").val()=="kingkong"){
    counter++
        alert("You Win")
    }
else 
alert("You Lose ")
}
if(k==9)
{
if($("#myinput").val()=="Hangover"){
    counter++
        alert("You Win")
    }
else 
alert("You Lose ")
}
if(k==10)
{
if($("#myinput").val()=="Fast and furious"){
counter++
    alert("You Win")
}
else 
alert("You Lose ")
}
k++
$(".A"+k).show()
$(".A"+k).show()
if(k==11){
    $("#myinput").hide()
    $("#btn4").hide()
    $("#txt").text("This is your result "+ counter)
    $("#txt").show()


}




})


