import style from './style.module.css'
export default function HStep({num,content,classes}) {

    const RightModeDiv = classes ? {
        marginLeft:'auto',
        marginRight:0,
        paddingLeft: "45px",
        textAlign:'left'
    }: null;
    const RightModeNum = classes ? {
        right:'auto',
        left:'-15px',
    }: null;

    return (
        <div className={style.single_step} style={RightModeDiv}>
            <span style={RightModeNum}>{num}</span>
            <p>{content}</p>
        </div>
    )
}