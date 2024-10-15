import {renderWithProviders, store} from "app/store";
import {RegistrationPhone} from "features/auth";
import {thunkGetGlobalConfig} from "shared/model/global_config";


describe('test RegistrationPhone', () => {
    beforeAll(() => {
        store.dispatch(thunkGetGlobalConfig());
    });

    it('should render title', () => {
        const {getByRole} = renderWithProviders(<RegistrationPhone
            title={'title test'}
            nextStep={console.log}
            isPending={false}
            onSubmit={() => ({} as any)}
        />);

        expect(getByRole('heading', {name: 'title test'})).toBeInTheDocument();
    });
});
