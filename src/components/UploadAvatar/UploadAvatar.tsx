import {useEffect, useState} from "react";
import styles from './UploadAvatar.module.scss'
import Avatar from "react-avatar-edit";
function UploadAvatar() {
    const [src, setSrc] = useState(null)
    const [preview, setPreview] = useState(null)
   ;
    const onClose = () => {
        setPreview(null)
    }
    const onCrop = view => {
        setPreview(view)
    }
    useEffect( () => {
        console.log(preview)
    }, [preview])

    return (
        <div className={styles.avatar}>
            <Avatar
                imageWidth={600}
                onCrop={onCrop}
                onClose={onClose}
                src={src}
            />

            <div className={styles.preview}>
                {preview && <img width={300} src={preview} alt='alt'/>}
            </div>
        </div>
    );
}

export default UploadAvatar;