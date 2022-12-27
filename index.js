// Write your solution in this file!

const employee={name:"Ali",streetAddress:5667};


function updateEmployeeWithKeyAndValue(employee,key,value){
    const newobj={...employee};
     newobj[key]=value;
     return newobj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
     employee[key]=value;
     return employee;
}

function deleteFromEmployeeByKey(employee,key,value){
    const newobj={...employee};
     delete newobj[key];
     return newobj;
}

function destructivelyDeleteFromEmployeeByKey(employee,key,value){
     delete employee[key];
     return employee;
}




