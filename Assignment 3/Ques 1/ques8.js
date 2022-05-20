/*const myperson = { 
    fname: 'Sudesh',
    lname: 'Kamalanathan',
    age: 23,
    skills: ['communication', 'Teamwork', 'Adaptation Skills'],
    address: {
        City: 'Chennai',
        pincode: 600126
    },
    dateOfBirth:"1998-06-16" ,
    Married:false,
    Profession:"software developer"
};
const text = JSON.parse(myperson);
*/

function person(fname,lname,age,skills,dateofbirth,address,married,profession)
   {
     this.fname = fname;
     this.lname = lname;
     this.age=age;
     this.skills = skills;
     this.dateofbirth = dateofbirth;
     this.address = address;
     this.married = married;
     this.profession = profession;
   }
let person1=new person("Nikhil","Ramesh",32,["c"],"24/10/1986",{city:"bangalore",pincode:"565485"},"true","sr analyst")
let person2=new person("Harish","kumar",25,"HTML","08/04/1996",{city:"cochin",pincode:"679038"},"true","jr analyst")
print=function(person)
{
    console.log(person1);
    console.log(person2);
}
