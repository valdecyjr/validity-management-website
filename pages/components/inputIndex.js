export default function InputIndex({field, typeInput})
{
    return <div>
        <label>{field}</label>
        <input type={typeInput}/>
    </div>
}