const resume=[{
"objective":`Analytical, insightful professional looking for
 work in a globally competitive environment on challenging 
 assignments that shall yield the twin benefits for job 
 satisfaction and a steady pace of professional growth`,
 "Name":"Apra Khanna",
 "DateOfBirth":`23.04.1996`,
"Email":`apra.khanna2304@gmail.com`,
 "Education" : "Btech",
 "SoftwareLanguagesKnown":["HTML","CSS" ,"JAVASCRIPT"],
 "Experience":"2.5years",
 "Languagesknown":["English", "Hindi"],
 "Marital Status":"Married",
 "Nationality":"Indian",
 "Hobbies":["Singing", "Dancing", "Badminton"]
}]
//for loop
for(var i=0;i<resume.length; i++){
    console.log(resume[i])
}
//for in
for(var k in resume){
    console.log(resume[k])

}

//for of
for(var j of resume){
    console.log(j)
}
