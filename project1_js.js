const passwd_length = 6;

const commonRules = {
    nameIsNotEmpty: {
        apply: (form) => form.name.length !== 0,
        error: 'Name cant be emtpy',
        relatedField: 'Name',
    },
    nameContainsOnlyLetters: {
        apply: (form) => 'dsdasda'.test(form.name),
        error: 'Name cat contain letters only',
        realtedField: 'name',
    },
    
    passwordMatchesConfirmation: {
        apply: (form) => form.passwd === form.passwordConfirmation,
        error: 'Password confirmation is invalid',
        relatedField: ''
    }
}

function checkFormMatchesRules(form, rules) {
    Object.entries(rules)
        .map(([ruleName, rule]) => [!rule.check(form), rule.error])
        .filter(([isPresent, errorText]) => isPresent)
        .map(([isPresent, errorText]) => errorText);
}

function readForm() {
    return {
        firstName: person_info.elements.name.value,
        lastName: person_info.elements.lastname.value,
        phone: person_info.elements.phone.value,
        email: person_info.elements.email.value,
        passwd: person_info.elements.password.value,
        confirmPasswd: person_info.elements.passwordConfirmation.value,
    }
}

function submitForm() {
    const values = readForm();
    console.log('name', is_name_valid(values.firstName));
    console.log('lastname', is_lastname_valid(values.lastName));
    console.log('phone', is_phone_valid(values.phone));
    console.log('mail ', is_mail_valid(values.email));
    console.log('passwd ', is_passwd_valid(values.passwd));
    console.log('confirm passwd ', is_confirmpasswd_valid(values.passwd, values.confirmPasswd));
}


function is_name_valid(str) {
    return isOnlyLetters(str);
}

function is_lastname_valid(str) {
    return isEmpty(str) || isOnlyLetters(str);
}

function is_phone_valid(str) {
    return isPhoneStandart(str);
}

function is_mail_valid(str) {
    return /(\w+@[a-z]+)/.test(str);
}

function is_passwd_valid(passwd) {
    return passwd.length >= passwd_length;
    
}

function is_confirmpasswd_valid(passwd1, passwd2) {
    return passwd1 === passwd2;
}

function isEmpty(string) {
    return string.trim().length == 0;
}

function isPhoneStandart(string) {
    return (/\d\d\d-\d\d-\d\d/).test(string);
}

function isOnlyLetters(string) {
    return /^[a-z]+$/.test(string) || /^[а-яё]+$/.test(string);
}

