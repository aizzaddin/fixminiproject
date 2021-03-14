
$("#Reply1").click(function() {
 
   var lable = $("#Reply1").attr("value");
 
  //alert(lable);

   if(lable == "Show") {
     $("#Reply1").attr("value", "Hide");
     $("#inputReply1").show();
   }
   else {
     $("#Reply1").attr("value", "Show");
     $("#inputReply1").hide();
   }
 });


 
$("#Reply2").click(function() {
 
   var lable = $("#Reply2").attr("value");
 
  //alert(lable);

   if(lable == "Show") {
     $("#Reply2").attr("value", "Hide");
     $("#inputReply2").show();
   }
   else {
     $("#Reply2").attr("value", "Show");
     $("#inputReply2").hide();
   }
 });