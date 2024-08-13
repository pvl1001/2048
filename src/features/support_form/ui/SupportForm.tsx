import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import {select, useAppSelector} from "app/store";
import {Field, Form, Formik, FormikProps} from "formik";
import {useValidationSchema} from "shared/lib/hooks";
import {StringUtils} from "shared/lib/StringUtils";
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {TextArea} from "shared/ui/textarea";
import {SupportDropzone} from "./support_dropzone/SupportDropzone";
import s from './SupportForm.scss';
import {supportOptions} from "../lib/consts";
import {useSetProfileEmail, UseSetProfileEmail} from "../lib/useSetProfileEmail";
import {useSupportSubmit, UseSupportSubmit} from "../lib/useSupportSubmit";
import {TSupportFile, TSupportForm} from "../types";


export function SupportForm() {
    const {formikRef}: UseSetProfileEmail = useSetProfileEmail();
    const [searchParams] = useSearchParams();
    const validate = useValidationSchema();
    const {maxSupportMsgLength} = useAppSelector(select.config._designInt);
    const [files, setFiles] = useState<TSupportFile[]>([]);
    const [fileError, setFileError] = useState('');
    const [category] = useState(() => {
        const category = searchParams.get('category');
        return supportOptions.find(option => option.value === category);
    });
    const {onSubmit, isPending}: UseSupportSubmit = useSupportSubmit(files);

    const hasFileErrors: boolean = files.some(file => file.error);
    const validateFileError: boolean = !!fileError && !RegExp(/Maximum/).test(fileError) || hasFileErrors;

    const initialValues: TSupportForm = {
        email: '',
        category: category || {title: '', value: ''},
        question: '',
    };

    return (
        <Formik
            innerRef={formikRef}
            initialValues={initialValues}
            validationSchema={validate.support}
            onSubmit={onSubmit}
        >
            {(formik: FormikProps<typeof initialValues>) => {
                return <Form className={s.form}>
                    <Field
                        as={Input}
                        name={'email'}
                        label={'Your e-mail'}
                        placeholder={'name@q.com'}
                        error={(formik.errors.email && formik.touched.email) && formik.errors.email}
                    />
                    <Field
                        as={Select}
                        name={'category'}
                        label={'Questions category'}
                        placeholder={'Select category'}
                        options={supportOptions}
                        setFieldValue={formik.setFieldValue}
                        error={formik.errors.category && formik.touched.category}
                    />
                    <Field
                        as={TextArea}
                        name={'question'}
                        label={'Ask a question or describe your situation'}
                        placeholder={'Enter text...'}
                        value={StringUtils.removeSpaces(formik.values.question)}
                        error={formik.errors.question && formik.touched.question}
                        maxLength={maxSupportMsgLength}
                        validate={(value: string) => RegExp(/^[\n ]+$/).test(value)}
                    />

                    <SupportDropzone
                        files={files}
                        setFiles={setFiles}
                        errorMessage={fileError}
                        setErrorMessage={setFileError}
                    />

                    <Button
                        type={'submit'}
                        className={s.submit_button}
                        isPending={isPending}
                        disabled={!(formik.dirty && formik.isValid) || validateFileError}
                    >Send</Button>
                </Form>;
            }}
        </Formik>
    );
}
