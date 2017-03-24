$(document).ready(function()
{

function validateForm()
{
  var name=$("#userreg").val();
  var email1=$("#emailreg").val();
  var password=$("#passreg").val();
  var repass=$("#repassreg").val();
  var nameval=/^[A-Za-z]+$/;;
  var passval=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;
  var emailval=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var inputVal= new Array(name,email1,password,repass);
  var inputMessage = new Array("name", "email", "password", "repass");
  var flag = true;
   $('.error').hide();

      if(inputVal[0] == ""){
          $('#userreg').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
          flag =false;
      }
      else if(!nameval.test(name)){
          $('#userreg').after('<span class="error"> Letters only</span>');
          flag=false;
      }
      if(inputVal[1] == ""){
    $('#emailreg').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
      flag=false;
      }
      else if(!emailval.test(email1)){
  $('#emailreg').after('<span class="error"> Please enter a valid email address</span>');
    flag=false;
      }

      if(inputVal[2] == ""){
          $('#passreg').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
          flag=false;
      }
      else if(!passval.test(password)){
          $('#passreg').after('<span class="error">atleast one alphabet,specialsymbol,numeric,uppercase Letters</span>');
          flag=false;
      }

      if(inputVal[3] != inputVal[2]){
          $('#repassreg').after('<span class="error">please enter correct password </span>');
          flag=false;
      }
      return flag;
}
$("#register").click(function(){
if(validateForm())
{
  var name=$("#userreg").val();
  var email1=$("#emailreg").val();
  var password=$("#passreg").val();
  var repass=$("#repassreg").val();
     var temp=[];
   var userdetail={};
   sessionStorage.name1=name;
   sessionStorage.email=email1;
   sessionStorage.password=password;
   sessionStorage.repassword=repass;
   userdetail.name1 =name;
   userdetail.email=email1;
   userdetail.password=password;
  // temp[temp.length]=userdetail;
   console.log(JSON.stringify(temp));
   abc=JSON.parse(sessionStorage.getItem("user11"));
   if(abc!==null)
   {
     temp=abc;
     temp[temp.length]=userdetail;
      if (typeof(Storage) !== undefined) {
sessionStorage.setItem('user11',JSON.stringify(temp));
}
}else {
   temp[temp.length]=userdetail;
    if (typeof(Storage) !== undefined) {
   sessionStorage.setItem('user11',JSON.stringify(temp));
}
}
alert("data inserted successfully");
$('#register').attr("type","reset");
}
});

function validatelogin()
{
  pqr=JSON.parse(sessionStorage.getItem("user11"));
  flag=true;
  console.log(pqr);
  for(var i=0;i<pqr.length;i++)
  {
     //$('.error').hide();
    var emailid=$('#emaillog').val();
    var password11=$('#passlog').val();
    //console.log(emailid);
    //console.log(password11);
    console.log(pqr[i].email);
    console.log(pqr[i].password);
 $('.error').hide();

     if(pqr[i].email!=emailid)
     {
         $('#emaillog').after('<span class="error">please enter correct email id </span>');
         flag=false;
     }
     if(pqr[i].password!=password11)
     {
         $('#passlog').after('<span class="error">please enter correct password </span>');
         flag=false;
     }
     if(pqr[i].email==emailid && pqr[i].password==password11)
     {
       flag=true;
       break;
     }
   }
  return flag;
}
function nextPage()
{
  $.ajax({
    url:"/template/welcome.html",
    type:"GET",
    datatype:'html',
    success:function(response)
    {
    console.log('page was not loaded',response);
    $('body').html(response);
  },
  error:function(error){
    console.log('page was not loaded',error);
  },
  complete:function(xhr,status)
  {
    console.log('request is completed');
  }
});
}
function nextLogin()
{
  $.ajax({
    url:"/template/login.html",
    type:"GET",
    datatype:'html',
    success:function(response)
    {
    console.log('page was not loaded',response);
    $('body').html(response);
  },
  error:function(error){
    console.log('page was not loaded',error);
  },
  complete:function(xhr,status)
  {
    console.log('request is completed');
  }
});
}
function nextSignup()
{
  $.ajax({
    url:"/template/signup.html",
    type:"GET",
    datatype:'html',
    success:function(response)
    {
    console.log('page was not loaded',response);
    $('body').html(response);
  },
  error:function(error){
    console.log('page was not loaded',error);
  },
  complete:function(xhr,status)
  {
    console.log('request is completed');
  }
});
}

$('#login11').click(function()
{
  if(validatelogin())
  {
    nextPage();
  alert("login successfully");
  }
});
$('#login').click(function()
{
  nextLogin();
});
$('#signup').click(function(){
  nextSignup();
});
});
