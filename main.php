<?php
//如果沒有登入就跳到 html
if(!isset($_SESSION['user'])){
    header('Location: c.html');
    // exit();
    die();
}
$user = $_SESSION['user'];