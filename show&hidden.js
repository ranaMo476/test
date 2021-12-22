
 function show_hidden(){
    var flag= $("#hidden").text();
     if (flag == 1){
        $(".wa-chat-box").show(200);
      $("#hidden").text("0");
      console.log("succe" +flag);
     }
     else {
        $(".wa-chat-box").hide(200);
        $("#hidden").text("1");
        console.log("succe" +flag);
     }
     
     
 } 