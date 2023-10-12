document.addEventListener("DOMContentLoaded", function () {
    //part 1 email and name
    const email= document.getElementById("email");
    const name= document.getElementById("name");
    //part 1 register button
    const registerButton= document.getElementById("register");
    //option part 2
    const option1= document.getElementById("op1");
    const option2= document.getElementById("op2");
    const option3= document.getElementById("op3");
    
    
    function register() {
        const CHECK= "@";
        if(email.value.includes(CHECK) && name.value.trim() != "") {
            document.getElementById("part1").style.display= "none";
            document.getElementById("part2").style.display= "block";
        }
        else if(name.value.trim() == ""){
            alert("Please introduce your name")
        }
        
        else {
            alert("Please introduce a valid email");
        }
    }
    
    registerButton.addEventListener("click", register);
    
    //part 2 code-------------------------------------------
    
    let topic;
    
    function chooseOP1() {
        let option= "Software Development";
        document.getElementById("part2").style.display= "none";
        document.getElementById("part3").style.display= "block";
        
    return option;
    }
    
    function chooseOP2() {
        let option= "User Experience";
        document.getElementById("part2").style.display= "none";
        document.getElementById("part3").style.display= "block";
        
    return option;
    }
    
    function chooseOP3() {
        let option= "Graphic Design";
        document.getElementById("part2").style.display= "none";
        document.getElementById("part3").style.display= "block";
    
    return option;    
    }
    
    option1.addEventListener("click", function() {
        topic= chooseOP1();
        result();
        console.log("Selected topic: " + topic);
    

        
    });
    option2.addEventListener("click", function() {
        topic= chooseOP2();
        result();
        console.log("Selected topic: " + topic);

    });
    option3.addEventListener("click", function() {
        topic= chooseOP3();
        result();
        console.log("Selected topic: " + topic);

    });
    
    //Part 3---------------------------------------------------
    function result() {
        const nameResult= document.getElementById("nameResult");
        const emailResult= document.getElementById("emailResult");
        const topicResult= document.getElementById("topicResult");
        
        nameResult.append(name.value);
        emailResult.append(email.value);
        topicResult.append(topic);
    }
    
    const nameResult= document.getElementById("nameResult");
    
    nameResult.append(name.value);
    
});