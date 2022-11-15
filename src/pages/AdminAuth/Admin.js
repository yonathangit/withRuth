import { Button } from "@mantine/core";
import React from "react";


function AdminButton(){
    const navigate = useNavigate();
  function handleClick () {
    navigate("/")
  }
    return(
        <button onClick={handleClick}>
        Admin Login
    </button> 
    )
   
}