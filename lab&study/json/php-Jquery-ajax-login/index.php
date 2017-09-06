<?php   
 session_start();  
 ?>  
 <!DOCTYPE html>  
 <html>  
      <head>  
           <title>Webslesson Tutorial | Make Login Form by Using Bootstrap Modal with PHP Ajax Jquery</title>  
           <script src="jquery.js"></script>  
           <link rel="stylesheet" href="bootstrap.css" />  
           <script src="bootstrap.js"></script>  
      </head>  
      <body>  
           <br />  
           <div class="container" style="width:700px;">  
                <h3 align="center">Make Login Form by Using Bootstrap Modal with PHP Ajax Jquery</h3><br />  
                <br />  
                <br />  
                <br />  
                <br />  
                <br />  
                <?php  
                if(isset($_SESSION['username']))  
                {  
                ?>  
                <div align="center">  
                     <h1>Welcome - <?php echo $_SESSION['username']; ?></h1><br />  
                     <a href="#" id="logout">Logout</a>  
                </div>  
                <?php  
                }  
                else  
                {  
                ?>  
                <div align="center">  
                     <button type="button" name="login" id="login" class="btn btn-success" data-toggle="modal" data-target="#loginModal">Login</button>  
                </div>  
                <?php  
                }  
                ?>  
           </div>  
           <br />  
      </body>  
 </html>  
 <div id="loginModal" class="modal fade" role="dialog">  
      <div class="modal-dialog">  
   <!-- Modal content-->  
           <div class="modal-content">  
                <div class="modal-header">  
                     <button type="button" class="close" data-dismiss="modal">&times;</button>  
                     <h4 class="modal-title">Login</h4>  
                </div>  
                <div class="modal-body">  
                     <label>Username</label>  
                     <input type="text" name="username" id="username" class="form-control" />  
                     <br />  
                     <label>Password</label>  
                     <input type="password" name="password" id="password" class="form-control" />  
                     <br />  
                     <button type="button" name="login_button" id="login_button" class="btn btn-warning">Login</button>  
                </div>  
           </div>  
      </div>  
 </div>  
 <script>  
 $(document).ready(function(){  
      $('#login_button').click(function(){  
           var username = $('#username').val();  
           var password = $('#password').val();  
           if(username != '' && password != '')  
           {  
                $.ajax({  
                     url:"action.php",  
                     method:"POST",  
                     data: {username:username, password:password},  
                     success:function(data)  
                     {  
                          //alert(data);  
                          if(data == 'No')  
                          {  
                               alert("Wrong Data");  
                          }  
                          else  
                          {  
                               $('#loginModal').hide();  
                               location.reload();  
                          }  
                     }  
                });  
           }  
           else  
           {  
                alert("Both Fields are required");  
           }  
      });  
      $('#logout').click(function(){  
           var action = "logout";  
           $.ajax({  
                url:"action.php",  
                method:"POST",  
                data:{action:action},  
                success:function()  
                {  
                     location.reload();  
                }  
           });  
      });  
 });  
 </script>  