import {useEffect, useMemo, useState} from "react";


export const useForm = (initialState={}, validationForms = {}) => {

    const [ formState, setFormState ] =  useState( initialState );
    const [ formValidation, setFormValidation ] = useState({});


    useEffect(() => {
        createFormsValidation();
    }, [ formState ]);

    const isFormValid = useMemo(() => {
        for (const field of Object.keys(formValidation) ) {
            if ( formValidation[ field ] !== null ) return false;
        }

        return true;

    }, [ formValidation ]);


    const onInputChange = ({ target }) => {

        const { value , name } = target;

        setFormState({
            ...formState,
            [ name ]: value,
        });
    };


    const createFormsValidation = () => {

        let validationChecked = {};

        for (const field of Object.keys( validationForms )) {
            const [ fn, errorMessage ] = validationForms[ field ];

            validationChecked[ `${field}Valid` ] = fn( formState[ field ] ) ? null : errorMessage;
        }

        setFormValidation( validationChecked );

    };


    return {
        ...formState,
        formState,
        onInputChange,
        isFormValid,
        ...formValidation
    };
};
