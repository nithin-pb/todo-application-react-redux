import {useState} from 'react';
import {validateEmail, validatePhoneNumber} from "../helper/utilities";


export default function useValidation(initialValues: any) {
    const [state, setState] = useState(initialValues)
    return ([
            state, (name: string, status: boolean) => {
                let validationFunction = (e: any) => Boolean(e)
                if (name === 'email') validationFunction = validateEmail
                else if (name === 'phone') validationFunction = validatePhoneNumber
                setState({
                    ...state, [name]: validationFunction(status)
                })
            }
        ]
    )
}