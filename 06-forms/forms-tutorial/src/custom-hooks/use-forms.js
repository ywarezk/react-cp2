/**
 * custom hooks for managing the state of the forms
 * handleChange
 */

import {useState} from "react";

export default function useForms(initialValues) {

    const [formState, setFormState] = useState(initialValues);

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    return [formState, handleChange]
}