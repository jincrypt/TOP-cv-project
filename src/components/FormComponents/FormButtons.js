export default function Button({ buttonName, buttonEvent, classAppend="" }) {
    return (
        <button onClick={buttonEvent} className={"waves-effect waves-light btn-small " + classAppend}>{buttonName}</button>
    )
}