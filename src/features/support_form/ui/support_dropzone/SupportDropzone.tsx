import {Dispatch, memo, SetStateAction, useEffect} from "react";
import {DropzoneState, useDropzone} from "react-dropzone";
import cn from "classnames";
import attachIcon from 'shared/assets/icons/attach.png';
import {TooltipError} from "shared/ui/tooltip_error";
import {v4 as uuidv4} from 'uuid';
import FileCard from "./file_card/FileCard";
import s from "./SupportDropzone.scss";
import {TSupportFile} from "../../types";


const mb: number = 10;
const maxFiles: number = 3;

export type SupportDropzoneProps = {
    files: TSupportFile[]
    setFiles: Dispatch<SetStateAction<TSupportFile[]>>
    errorMessage: string
    setErrorMessage: Dispatch<SetStateAction<string>>
}

export function SupportDropzone({files, setFiles, errorMessage, setErrorMessage}: SupportDropzoneProps) {
    const {getRootProps, getInputProps, open, isDragActive}: DropzoneState = useDropzone({
        accept: {
            'image/jpeg': ['.png'],
            'video/*': ['.mov', '.mp4', '.avi', '.wmv'],
        },
        noClick: true,
        disabled: files.length >= maxFiles,
        onDrop: (acceptedFiles: File[]) => {
            if (acceptedFiles.length) {
                const supportFiles: TSupportFile[] = checkSizeFiles(acceptedFiles);

                setFiles(prev => {
                    if (supportFiles.length > maxFiles - prev.length) {
                        setErrorMessage(`Maximum ${maxFiles} files`);
                        return prev;
                    }
                    return [...prev, ...supportFiles];
                });
            }
        },
    });

    function checkSizeFiles(files: File[]): TSupportFile[] {
        return files.map(file =>
            file.size > mb * 1e6
                ? {file, id: uuidv4(), error: `File is larger than ${mb}MB`}
                : {file, id: uuidv4()}
        );
    }

    function removeCard(id: string) {
        setFiles(prev => prev.filter((file) => file.id !== id));
    }

    function resetError() {
        const hasErrors: boolean = files.some(f => {
            if (f.error) {
                setErrorMessage(f.error);
            }
            return !!f.error;
        });
        if (!hasErrors) {
            setErrorMessage('');
        }
    }

    useEffect(() => {
        resetError();
    }, [files]);

    return (
        <div {...getRootProps()}
             className={cn(s._, {
                 [s.active]: isDragActive,
             })}
        >
            <input {...getInputProps()} />

            {errorMessage && <TooltipError content={errorMessage} className={s.error}/>}

            {files.length
                ? <ul className={s.file_list}>
                    {Array(3).fill(undefined).map((_, i) => {
                            const item = files[i] as TSupportFile | undefined;
                            if (item) {
                                const {file, error, id} = item;
                                const name = file.name.replace(/^.+\./g, `${i + 1}.`);
                                return <FileCard
                                    key={id}
                                    name={name}
                                    error={error}
                                    size={file.size}
                                    removeCard={() => removeCard(id)}
                                />;
                            }
                            return <FileCard
                                key={'empty-' + i}
                                open={open}
                            />;
                        }
                    )}
                </ul>
                : <div className={s.attach}>
                    <p className={s.attach_title} onClick={open}>
                        <img src={attachIcon} alt="attach"/>
                        Attach file
                    </p>
                    <p className={s.description}>
                        Drag the file here or click what to upload
                    </p>
                </div>
            }

            <div className={s.footer}>
                <div/>
                <p className={s.footer__text}>maximum weight of 1 file {mb}MB</p>
                <div className={s.counter}>{files.length}/{maxFiles}</div>
            </div>
        </div>
    );
}

export default memo(SupportDropzone);

