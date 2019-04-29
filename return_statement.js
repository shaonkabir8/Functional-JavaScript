/********************************************
            Functional JavaScript
                class - 4
    All Credit goes to HM Nayem (Twincle Cats)
        Topic : Return Statement.

==> Leaning Things :
1.Every Function must have a Return Statement else that functin won't give output accurately.

*********************************************/

function welcomeFunction(firstName,lastName,gender,age) {
    var output;

        if (gender === "male" && age >= 18 ){
            output = "Welcome Mr. " + ' ' +firstName +' '+ lastName +". You are Awesome and Young Man"
        } else if ( gender === "male" && age >= 15 ){
            output = "Welcome Mr. " + ' ' +firstName +' '+ lastName +". You are Awesome and cute Boy"
        } else if ( gender === "female" && age >= 18 ){
            output = "Welcome Mrs. " + ' ' +firstName +' '+ lastName +". You are Awesome and Matured Girl"
        } else if ( gender === "female" && age >= 15 ){
            output = "Welcome Mrs. " + ' ' +firstName +' '+ lastName +". You are Awesome and cute Girl"
        } else {
            output = "No Data Match. Try Again"
        }

    return output ;
};

console.log(welcomeFunction("Shaon","kabir","male","22"));

// Another Function Return Example ==>

function returnExample() {
    var smartObj = {
        name: 'Shaon Kabir',
        address: 'Baganchara College Road , Sharsha , Jessore',
        phoneNumber: 0215454545,
        print:function() {
            console.log(this.name,this.address,this.phoneNumber);
        }
    
    };
    return smartObj;
};
var result = returnExample();
console.log(result);