export const updateObject = (oldObject, updatedProperties) =>{
    return{
        ...oldObject,
        ...updatedProperties
    }
}

export const checkValidation = (value, rules) => {
    let isValid = true;
    if (rules) {
        if (rules.required) {
            isValid = isValid && value.trim() !== '';
        }

        if (rules.minLength) {
            isValid &= value.length >= rules.minLength;
        }
        if (rules.maxLength) {
            isValid = isValid && value.length <= rules.maxLength;
        }
        if (rules.isEmail) {
            // eslint-disable-next-line
            const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            isValid = isValid && pattern.test(value);
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = isValid && pattern.test(value);
        }
    }
    return isValid;
}