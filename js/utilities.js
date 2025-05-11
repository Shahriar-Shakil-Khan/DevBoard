function updateTaskCounts1() {
            const twentyThree = document.getElementById("twenty-three");
            const Five = document.getElementById("five");
            const completedBtn = document.getElementById("completedBtn");

            twentyThree.textContent++;   
            Five.textContent--; 
            completedBtn.disabled = true; 
            completedBtn.classList.add("completedBtn");
            alert("Board Added Successfully")
        }

function updateTaskCounts2() {
            const twentyThree = document.getElementById("twenty-three");
            const Five = document.getElementById("five");
            const completedBtn2 = document.getElementById("completedBtn2");

            twentyThree.textContent++;   
            Five.textContent--; 
            completedBtn2.disabled = true; 
            completedBtn2.classList.add("completedBtn2");
            alert("Board Added Successfully")
        }


