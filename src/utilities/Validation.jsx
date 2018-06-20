//@ts-check


    export const isPasswordValid = (pass) => {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})");
        if (strongRegex.test(pass)) {
            return true;
        }
        return false;
    }

    export const isEmailValid = (email) => {
        const strongRegex = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$");
        if (strongRegex.test(email)) {
            return true;
        }
        return false;
    }

    export const isNameValid = (name) => {
        if(name.length>0 && name.length<30){
            return true;
        }
        return false;
    }

    export const isContactValid = (contact) => {
        if(!isNaN(Number(contact)) && contact.length === 10 ){
            return true;
        }
        return false;
    }

    export const isClassValid = (std) => {

    }

    export const isBoardValid = (board) => {

    }


