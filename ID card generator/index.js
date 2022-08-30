 function generateIDCard() {
    let inputName = document.getElementById("name");
    let inputNameValue = inputName.value;
    document.getElementById("Name").innerHTML = inputNameValue;
    
    let inputBranchName = document.getElementById("branchName");
    let inputBranchNameValue = inputBranchName.value;
    document.getElementById("BranchName").innerHTML = inputBranchNameValue;
    
    let inputCollegeName = document.getElementById("collegename");
    let inputCollegeNameValue = inputCollegeName.value;

    document.getElementById("collegeName").innerHTML = inputCollegeNameValue;
    
    document.getElementById("idCard").style.display = "block";
}