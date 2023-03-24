export default function(props) {
    return (
    <label>
        {props.label}:
        <input name={props.name} type="text" value={state.firstname} onChange={handleChange} />
    </label>
    )
}