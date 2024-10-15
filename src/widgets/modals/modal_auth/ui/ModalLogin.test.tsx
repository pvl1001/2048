import {screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import {renderWithProviders, store} from "app/store";
import {registrationActions} from "features/auth";
import {thunkGetGlobalConfig} from "shared/model/global_config";
import {ModalLogin} from "./ModalLogin";


describe('test ModalLogin step 1', () => {
    beforeAll(() => {
        store.dispatch(thunkGetGlobalConfig());
    });

    const renderAndBaseTestForm = async () => {
        const {container, getByText, getByRole} = renderWithProviders(<ModalLogin/>);
        const submitBtn = getByRole('button') as Element;
        const inputCountry = container.querySelector('input[name=country]') as Element;
        const inputPhone = container.querySelector('input[name=phone]') as Element;
        const selectOption = getByText('Russia');

        expect(submitBtn).toBeDisabled();

        await userEvent.type(inputCountry, 'russia');
        expect(inputCountry).toHaveValue('russia');
        await userEvent.click(selectOption);

        expect(submitBtn).toBeDisabled();

        return {container, submitBtn, inputCountry, inputPhone, selectOption};
    };

    it('check wrong input phone', async () => {
        const {submitBtn, inputPhone} = await renderAndBaseTestForm();
        await userEvent.type(inputPhone, '1'.repeat(8));
        expect(inputPhone).toHaveValue('1'.repeat(8));
        expect(submitBtn).toBeDisabled();

        await userEvent.type(inputPhone, '1'.repeat(100));
        expect(inputPhone).toHaveValue('1'.repeat(10));
        expect(submitBtn).not.toBeDisabled();
    });

    it('check validate form step1', async () => {
        const {submitBtn, inputPhone} = await renderAndBaseTestForm();

        await userEvent.type(inputPhone, '1'.repeat(10));

        expect(submitBtn).not.toBeDisabled();

        await userEvent.click(submitBtn);

        expect(screen.getByRole('heading', {name: RegExp(/code|sms/i)})).toBeInTheDocument();
    });

});

describe('test ModalLogin step 2', () => {
    beforeEach(() => {
        store.dispatch(registrationActions.setStep(2));
    });

    it.each([
        {count: 5, expected: false},
        {count: 6, expected: true},
        {count: 12, expected: true},
    ])('validation form step2 with count $count / 6 $expected', async ({count, expected}) => {
        const {container} = renderWithProviders(<ModalLogin/>);
        const input = container.querySelector('input') as Element;
        const button = container.querySelector('button[type=submit]') as Element;

        expect(button).toBeDisabled();

        await userEvent.type(input, '1'.repeat(count));
        expect(expected).toEqual(button.getAttribute('disabled') === null);
    });
});

