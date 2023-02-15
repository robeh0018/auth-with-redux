import { useState } from "react";

export const useForm = (initialState={}) => {

    const [ formState, setFormState ] =  useState( initialState );

    const onInputChange = ({ target }) => {

        const { value , name } = target;

        setFormState({
            ...formState,
            [ name ]: value,
        });
    };

    return {
        ...formState,
        formState,
        onInputChange,
    }
}