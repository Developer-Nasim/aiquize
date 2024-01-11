export default function Input({type,...rest}) {
    return ( <input type={type?type:'text'} {...rest}/> )
}