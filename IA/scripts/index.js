// DOM: Finding all the elements needed for successful login process
const login_content0 = document.getElementsByClassName("login-content")[0]
const login_content1 = document.getElementsByClassName("login-content")[1]
const logout_button = document.getElementById("logout-button")
const collegefinder_button = document.getElementById("collegefinder_button")
const apvsib_button = document.getElementById("apvsib_button")
const landing_page = document.getElementById("landing-page")
const login_page = document.getElementById("login-page")

// Login function
function login () {
    login_content0.style.display = "none"
    login_content1.style.display = "none"
    logout_button.style.display ="block"
    collegefinder_button.style.display = "block"
    apvsib_button.style.display = "block"
    landing_page.style.display = "block"
    login_page.style.display = "none"
}

// User Verification
var activeuser = null
var users = []
const loginButton = document.getElementById("loginButton")
const usernameField = document.getElementById("username")
const passwordField = document.getElementById("password")
const usersReference = database.ref("users/")

// Event once the login button is pressed
loginButton.addEventListener("click", (e) => {
    var username = usernameField.value
    var password = passwordField.value
    usersReference.once("value",(snapshot) => {
        users = snapshot.val()
        for (let key in users) {
            if ((users[key]["username"] === username) && (users[key]["password"] === password)) {
                login()
                activeUser = username
            }
        }
    })
})

// SignUp Process
document.getElementById("SignUpButton").addEventListener("click", (e) => {
    var newusername = document.getElementById("newuser").value
    var newusernameconfirm = document.getElementById("confirmuser").value
    var newpassword = document.getElementById("newpass").value
    var newpasswordconfirm = document.getElementById("confirmpass").value
    usersReference.once("value", (snapshot) => {
        users = snapshot.val()
    }).then(function () {
        for (let key in users) {
            if ((users[key]["username"] === newusername)) {
                console.log("User exists")
                return -1
            } else {
                break
            }
        }
        if ((newusername === "") || (newusernameconfirm === "") || (newpassword === "") || (newpasswordconfirm === "")) {
            console.log("You cannot submit an empty field")
        } else {
            if ((newusername === newusernameconfirm) && (newpassword === newpasswordconfirm)) {
                var dict = {
                    "username": newusername,
                    "password": newpassword
                }
    
                database.ref("users/").push(dict)
            } else {
                console.log("Invalid input: There is a difference confirmation and original fields.")
            }
        }
    })
})
   
// Logout Function 
function logout(){
    login_page.style.display= "block"
    landing_page.style.display ="none"
    document.getElementById("quiz-page").style.display ="none"
    document.getElementsByClassName("login-content")[0].style.display = "block"
    document.getElementsByClassName("login-content")[1].style.display = "block"
    document.getElementById("logout-button").style.display = "none"
    document.getElementById("collegefinder_button").style.display = "none"
    document.getElementById("apvsib_button").style.display = "none"
    document.getElementById("collegefinderUS_page").style.display = "none"
    document.getElementById("collegefinderUK_page").style.display = "none"
}
  
  
  // LogoutCode
  logout_button.addEventListener("click", (e) => {
    
    logout()
  })
  
  //Quiz Page function

  function quiz_page(){
    document.getElementById("login-page").style.display= "none"
    document.getElementById("landing-page").style.display ="none"
    document.getElementById("quiz-page").style.display = "block"
    document.getElementsByClassName("login-content")[0].style.display = "none"
    document.getElementsByClassName("login-content")[1].style.display = "none"
    document.getElementById("logout-button").style.display = "block"
    document.getElementById("collegefinder_button").style.display = "block"
    document.getElementById("apvsib_button").style.display = "none"
    document.getElementById("collegefinderUS_page").style.display = "none"
    document.getElementById("collegefinderUK_page").style.display = "none"


  }
  
  // Quiz Page 

  const quiz_button = document.getElementById("apvsib_button")
  
  quiz_button.addEventListener("click", (e) => {

    quiz_page()
  })

  //AP vs IB Code

  document.getElementById("qbutton").addEventListener("click", (e) => {
  e.preventDefault()
  var college = document.getElementById("college").value
  var tvp = document.getElementById("tvp").value
  var courses= document.getElementById("courses").value
  var TOK = document.getElementById("TOK").value
  var where= document.getElementById("where").value
  
  var total = 0
  total = Number(college) + Number(tvp) + Number(courses) + Number(TOK) + Number(where)
  
  if (total<8){

    result = document.getElementById("result").innerHTML = "YOU ARE MORE SUITED FOR THE IB PROGRAM"
  }

    
  if (total>8 && total <12){

    result = document.getElementById("result").innerHTML = "YOU ARE SUITED FOR BOTH PROGRAMS"

  }

  if(total>12){

    result = document.getElementById("result").innerHTML = "YOU ARE SUITED FOR THE AP PROGRAM"
  }

  

})



  //InputBox()

  function InputBoxSAT(){

        inputBox = ` <div id = "inputbox" class = container>
          
                    <label for="satinput">Please enter your SAT Score</label>
                    <input type="text" name="input" id="satinput"> 


                    `;

        
      const ib = document.getElementById("satdisplay")

      newDiv = document.createElement("div")
      newDiv.innerHTML = inputBox;
      ib.appendChild(newDiv)

  }


  //SAT Input Box FUNCTION

    document.getElementById("sat").addEventListener("click", (e) => {
    document.getElementById("act").disabled = true
  
    InputBoxSAT()
                   
    })

//ACTInputBox
  function InputBoxACT(){

  inputBox = ` <div id = "inputbox1" class = container>

          <label for="actinput">Please enter your ACT Score</label>
          <input type="text" name="input" id="actinput"> 


          `;


  const ib = document.getElementById("actdisplay")

  newDiv = document.createElement("div")
  newDiv.innerHTML = inputBox;
  ib.appendChild(newDiv)

}


//ACT FUNCTION

  document.getElementById("act").addEventListener("click", (e) => {
  document.getElementById("sat").disabled = true

  InputBoxACT()

})


  



  
  
  //College Finder US Page Function
function collegefinderUS(){

  document.getElementById("login-page").style.display= "none"
  document.getElementById("landing-page").style.display ="none"
  document.getElementById("quiz-page").style.display = "none"
  document.getElementsByClassName("login-content")[0].style.display = "none"
  document.getElementsByClassName("login-content")[1].style.display = "none"
  document.getElementById("logout-button").style.display = "block"
  document.getElementById("collegefinder_button").style.display = "block"
  document.getElementById("apvsib_button").style.display = "block"
  document.getElementById("collegefinderUS_page").style.display = "block"
  document.getElementById("collegefinderUK_page").style.display = "none"


}




   

  //College Finder US Page

  
document.getElementById("US").addEventListener("click", (e) => {

  collegefinderUS()
})

  
  // College Finder UK Page Function

function collegefinderUK(){
    document.getElementById("login-page").style.display= "none"
    document.getElementById("landing-page").style.display ="none"
    document.getElementById("quiz-page").style.display = "none"
    document.getElementsByClassName("login-content")[0].style.display = "none"
    document.getElementsByClassName("login-content")[1].style.display = "none"
    document.getElementById("logout-button").style.display = "block"
    document.getElementById("collegefinder_button").style.display = "block"
    document.getElementById("apvsib_button").style.display = "block"
    document.getElementById("collegefinderUK_page").style.display = "block"
    document.getElementById("collegefinderUS_page").style.display = "none"

}
  
  
  // College Finder UK Page
document.getElementById("UK").addEventListener("click", (e) => {

  collegefinderUK()
})


  


  // Percent Change Function

function percchange(a,b){

    s = a/b
        percentchange = (s* 100) - 100
    /* console.log(percentchange
    absolutepercentchange = Math.abs(percentchange) */
return percentchange
  }
  
  
  
  clglist = []



  //Create Card Function

function Createcard(a,b){  
    card = `
  <div class="col s12 m6">
   <div class="card">
     <div class="card-content ${b}-text">
       <span class="card-title">${a}</span>
     </div>
 </div>
 </div>
     `;

     return card
}

  //Display it to the page


  /* newDiv = document.createElement("div")
  newDiv.innerHTML = card;
  c_display.appendChild(newDiv)
 */


   



  
  
  
  
  
  
  
  // College Finder US Function

  


  function collegeUSfunction(){

    c = percchange(collegesat,satscore)
    d = percchange(collegegpa,gpascore)

    averagenominalpercentchange = c+d /2
    averageabsolutepercentchange = Math.abs(averagenominalpercentchange)

    dict1 = {"collegename":collegename, "avgprc":averageabsolutepercentchange, "prc": averagenominalpercentchange}

    clglist.push(dict1)
    
    
    return clglist


    
  
    
    
  }

var color = ""
var c_display = document.getElementById("college_display")
function createCards (a) {
    for (let i = 0; i < a.length; i = i + 1) {
        color = ""
        college_name = a[i]["collegename"]
        percentchange = a[i]["prc"]
        if (percentchange <3 && percentchange>-3){
            color = "green"
        } else if (percentchange<-3){
            color = "blue"
        } else if (percentchange >3){
            color = "red"
        }
        var currentCard = Createcard(college_name, color)
        var newVariable = newVariable + currentCard
    }
    c_display.innerHTML = newVariable
}
  
  
  // College Finder US Button

document.getElementById("USsubmit-button").addEventListener("click", (e) => {    
    satscore = document.getElementById("satinput").value
    gpascore = document.getElementById("gpainput").value
    // actscore = document.getElementById("actinput").value
    database.ref("college/").once("value",(snapshot) => {
        college = snapshot.val()
        
    }).then(function () {
        for (let key in college) {
            collegename = key
            collegesat = college[key]["SAT"]
            collegegpa = college[key]["GPA"]
            collegeact = college[key]["ACT"]
            collegeUSfunction()
        }
        for (let j = 0; j < clglist.length; j = j + 1) {
            for (let i = 0; i < clglist.length-j-1; i = i + 1) {
                if(clglist[i]["avgprc"] > clglist[i + 1]["avgprc"]) {
                    temp = clglist[i]
                    clglist[i] = clglist[i + 1]
                    clglist[i + 1] = temp
                }
            }
        }
        createCards(clglist)
    })
});

    //Everything related to UK colleges

    hlfit= []
    hlunfit=[]
    //Function HL
    function HL(a,b){

        for (i = 0; i< a.length; i = i+1){
            console.log(b[i])
            
            if (Number(a[i]) < Number(b[i])){
              dict2 = {"UKcollegename":UKcollegename, "HLscores":b, "IBscores":collegeIB}
              hlunfit.push(dict2)
              return hlunfit
              
              
                

            }
          }
      dict3= {"UKcollegename":UKcollegename, "HLscores": b, "IBscores": collegeIB}
      hlfit.push(dict3)
      return hlfit
    }

    
    
    function sort(a,b){

        for (j = 0; j< a.length; j+= 1){

          for(i =0; i< a.length-j-1; i+=1){

          
          
          if (Math.abs(Number(a[i]["IBscores"])-b) > Math.abs(Number(a[i+1]["IBscores"])-b)){

              temp = a[i]
              a[i] = a[i+1]
              a[i+1] = temp


            }

            }
          }
        }
  // College UK 
const uksubmitbtn = document.getElementById("uksubmit-button")

uksubmitbtn.addEventListener("click", (e) => {
    hlscores = document.getElementById("hlinput").value
    strhlscores = hlscores.toString()
    console.log(strhlscores)
    ibscores = document.getElementById("ibinput").value
    database.ref("Ukcollege/").once("value",(snapshot) => {
        UKcollege = snapshot.val()
    }).then(function () {
        for (let key in UKcollege){       
            UKcollegename = key
            collegeHL = UKcollege[key]["HLScore"]
            collegeHLstr = collegeHL.toString()
            collegeIB = UKcollege[key]["IBtotal"]
            console.log(collegeHL)
            HL(strhlscores,collegeHLstr)
        }
        sort(hlfit,ibscores)
        sort(hlunfit,ibscores)
        // console.log(hlunfit.length)
        
        for (i=0; i<hlunfit.length; i+=1){

            hlfit.push(hlunfit[i])
        }

        var ukcollegerankings = ""

        for (i=0; i<hlfit.length; i+=1){

            ukcollegerankings += i+1 + "." + hlfit[i]["UKcollegename"] + "\n"

        }

        document.getElementById("ukcollegeranked").innerHTML = ukcollegerankings
        hlfit = []
        hlunfit = []
      





    })
    
})