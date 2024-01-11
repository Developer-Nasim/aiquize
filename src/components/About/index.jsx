import style from './style.module.css'
export default function BlockWithImg({img,children}) {
    return (
        <div className={style.BlockWithImg}>
            <div className={style.BlockWithImg_content}>
                {children}
            </div>

            {img ? 
                <div className={style.BlockWithImg_img}>
                    <img src={img} alt="Banner" />
                </div>
                : ""
            }
        </div>
    )
}