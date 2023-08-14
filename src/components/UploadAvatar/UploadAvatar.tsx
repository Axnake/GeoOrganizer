import { useEffect, useState} from "react";
import styles from './UploadAvatar.module.scss'
import Avatar from "react-avatar-edit";

interface IUploadAvatarProps {
    preview: string | null,
    setPreview: (preview: any) => void
}
const UploadAvatar = ({preview, setPreview}: IUploadAvatarProps) => {
    const [src, setSrc] = useState(undefined)
    const onClose = () => {
        setPreview(null)
    }
    const onCrop = (view: string) => {
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