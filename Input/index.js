
const InputField = (props) => {   
    return (
        <input 
            type="text" 
            disabled={false} 
            name={props.fieldName} 
            value={props.fieldValue} 
            onChange={(event) => props.onChange(props.fieldName, event.target.value)}
        />
    )
};

export default InputField;
