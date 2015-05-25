<?php
session_start();

// Check if user isn't logged in
if( empty( $_SESSION ) || false === array_key_exists('logged_in', $_SESSION) ) {

    // Check for Login attempt
    if(     empty( $_POST )
        || !array_key_exists('uName', $_POST)
        || !array_key_exists('uPassword', $_POST)
        || $_POST['uName'] != 'admin@example.com'
        || $_POST['uPassword'] != 'letmein' )
    {
        // User tried to login and fucking failed
        $_SESSION['message'] = 'Incorrect user credentials'; 
        header('Location: ./index.php');
    }
    else
    {
        $_SESSION['logged_in'] = true;
        unset( $_SERVER['message'] );
    }
}

header('Location: ./pages/index.php')
?>