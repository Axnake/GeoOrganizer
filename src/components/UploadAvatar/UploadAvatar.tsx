import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import styles from './UploadAvatar.module.scss'
import Avatar from "react-avatar-edit";
interface IUploadAvatarProps {
    preview: string | null,
    setPreview: Dispatch<SetStateAction<null>>;
}
const UploadAvatar:FC<IUploadAvatarProps> = ({preview, setPreview}) => {
    const [src, setSrc] = useState(undefined)
    const onClose = () => {
        setPreview(null)
    }
    const onCrop = (view) => {
        setPreview(view)
    }
    useEffect( () => {
        console.log(preview)
    }, [preview])

    return (
        <div className={styles.avatar}>
            <Avatar
                width={500}
                height={400}
                imageWidth={500}
                onCrop={onCrop}
                onClose={onClose}
                src={src}
            />

            <div className={styles.preview}>
                {preview && <img src={preview} alt='alt'/>}
            </div>
        </div>
    );
}

export default UploadAvatar;