function bmicheck() {
   var hh=parseInt( document.getElementById("hei").value);
   var  ww=parseInt( document.getElementById("wei").value);
   var  gg=parseInt( document.getElementById("age").value);
   var bb = (ww)/((hh/100)*(hh/100));
   document.getElementById("result1").value=parseInt(bb);
   if (bb<19) {
    document.getElementById("result4").value="Under weight";
   }
   else if (bb<25) {
     document.getElementById("result4").value="Normal weight";
   }
   else if (bb<30) {
      document.getElementById("result4").value="Over weight";
   }
   else if (bb>30) {
      document.getElementById("result4").value="Obese";
   }
   else
   document.getElementById("result4").value=alert("You miss enter value of height or weight or both");
   
   var c=(66+(ww*13.7)+(5*hh)-(6.8*gg));
   var w=(655+(ww*9.6)+(1.8*hh)-(4.7*gg));
   var pwm=parseInt((48+(1.1*(hh-(150)))));
   var pww=parseInt((45+(0.9*(hh-(150)))));
  if (document.getElementById("s1").value==0 && document.getElementById("s1").checked && document.getElementById("e1").value==2 && document.getElementById("e1").checked) {
       document.getElementById("result2").value=parseInt(c*1.25);
       document.getElementById("result5").value=pwm;
       document.getElementById("result6").value=parseInt(c*1.25-(500));
       document.getElementById("result7").value=parseInt(c*1.25-(1000));
       document.getElementById("result8").value=parseInt(ww*2.2);
       document.getElementById("result9").value=parseInt(c*1.25/8);
    }
    else if (document.getElementById("s1").value==0 && document.getElementById("s1").checked && document.getElementById("e2").value==3 && document.getElementById("e2").checked) {
       document.getElementById("result2").value=parseInt(c*1.375);
       document.getElementById("result5").value=pwm;
       document.getElementById("result6").value=parseInt(c*1.375-(500));
       document.getElementById("result7").value=parseInt(c*1.375-(1000));
       document.getElementById("result8").value=parseInt(ww*2.2);
       document.getElementById("result9").value=parseInt(c*1.375/8);
    }
    else if (document.getElementById("s1").value==0 && document.getElementById("s1").checked && document.getElementById("e3").value==4 && document.getElementById("e3").checked) {
       document.getElementById("result2").value=parseInt(c*1.550);
       document.getElementById("result5").value=pwm;
       document.getElementById("result6").value=parseInt(c*1.550-(500));
       document.getElementById("result7").value=parseInt(c*1.550-(1000));
       document.getElementById("result8").value=parseInt(ww*2.2);
       document.getElementById("result9").value=parseInt(c*1.550/8);
    }
     else if (document.getElementById("s1").value==0 && document.getElementById("s1").checked && document.getElementById("e4").value==5 && document.getElementById("e4").checked) {
       document.getElementById("result2").value=parseInt(c*1.725);
       document.getElementById("result5").value=pwm;
       document.getElementById("result6").value=parseInt(c*1.725-(500));
       document.getElementById("result7").value=parseInt(c*1.725-(1000));
       document.getElementById("result8").value=parseInt(ww*2.2);
       document.getElementById("result9").value=parseInt(c*1.725/8);
    }
     else if (document.getElementById("s2").value==1 && document.getElementById("s2").checked && document.getElementById("e1").value==2 && document.getElementById("e1").checked) {
       document.getElementById("result2").value=parseInt(w*1.25);
       document.getElementById("result5").value=pww;
       document.getElementById("result6").value=parseInt(w*1.25-(500));
       document.getElementById("result7").value=parseInt(w*1.25-(1000));
       document.getElementById("result8").value=parseInt(ww*2.2);
       document.getElementById("result9").value=parseInt(w*1.25/8);
    }
    else if (document.getElementById("s2").value==1 && document.getElementById("s2").checked && document.getElementById("e2").value==3 && document.getElementById("e2").checked) {
       document.getElementById("result2").value=parseInt(w*1.375);
       document.getElementById("result5").value=pww;
       document.getElementById("result6").value=parseInt(w*1.375-(500));
       document.getElementById("result7").value=parseInt(w*1.375-(1000));
       document.getElementById("result8").value=parseInt(ww*2.2);
       document.getElementById("result9").value=parseInt(w*1.375/8);
              }
    else if (document.getElementById("s2").value==1 && document.getElementById("s2").checked && document.getElementById("e3").value==4 && document.getElementById("e3").checked ) {
       document.getElementById("result2").value=parseInt(w*1.550);
       document.getElementById("result5").value=pww;
       document.getElementById("result6").value=parseInt(w*1.550-(500));
       document.getElementById("result7").value=parseInt(w*1.550-(1000));
       document.getElementById("result8").value=parseInt(ww*2.2);
       document.getElementById("result9").value=parseInt(w*1.550/8);
              }
    else if (document.getElementById("s2").value==1 && document.getElementById("s2").checked &&  document.getElementById("e4").value==5 && document.getElementById("e4").checked ) {
       document.getElementById("result2").value=parseInt(w*1.725);
       document.getElementById("result5").value=pww;
       document.getElementById("result6").value=parseInt(w*1.725-(500));
       document.getElementById("result7").value=parseInt(w*1.725-(1000));
       document.getElementById("result8").value=parseInt(ww*2.2);
       document.getElementById("result9").value=parseInt(w*1.725/8);
    }
    else 
    document.getElementById("result2").value=alert("You miss enter value of gender or exercise or both");
    
   if (document.getElementById("age").value==''|| document.getElementById("age").value==undefined) {
        alert("You miss enter the value of age ");
       document.getElementById("age").value.focus();
       document.getElementById("age").value.select();
       return false;
       }
       else{
       return true ;
       }
 }



