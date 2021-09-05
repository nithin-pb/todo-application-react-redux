import {useState} from 'react';


export default function useForm(initialValues: any) {
    const [state, setState] = useState(initialValues)
    return ([
            state, (e: any) => setState({
                ...state, [e.target.name]: e.target.value
            })
        ]
    )
}