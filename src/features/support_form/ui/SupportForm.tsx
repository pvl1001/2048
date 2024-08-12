import {select, useAppSelector} from "app/store";
import {Field, Form, Formik, FormikProps} from "formik";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useValidationSchema} from "shared/lib/hooks";
import {StringUtils} from "shared/lib/StringUtils";
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {TextArea} from "shared/ui/textarea";
import {supportOptions} from "../lib/consts";
import {useSetProfileEmail, UseSetProfileEmail} from "../lib/useSetProfileEmail";
import {useSupportSubmit, UseSupportSubmit} from "../lib/useSupportSubmit";
import {TSupportFile, TSupportForm} from "../types";
import {SupportDropzone} from "./support_dropzone/SupportDropzone";
import s from './SupportForm.scss';


export function SupportForm() {
    let {formikRef}: UseSetProfileEmail = useSetProfileEmail();
    let [searchParams] = useSearchParams();
    let validate = useValidationSchema();
    let {maxSupportMsgLength} = useAppSelector(select.config._designInt);
    let [files, setFiles] = useState<TSupportFile[]>([]);
    let [fileError, setFileError] = useState('');
    let [category] = useState(() => {
        let category = searchParams.get('category');
        return supportOptions.find(option => option.value === category);
    });
    let {onSubmit, isPending}: UseSupportSubmit = useSupportSubmit(files);

    let hasFileErrors: boolean = files.some(file => file.error);
    let validateFileError: boolean = !!fileError && !RegExp(/Maximum/).test(fileError) || hasFileErrors;

    let initialValues: TSupportForm = {
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
