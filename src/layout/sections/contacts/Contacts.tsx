import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import {CustomLink} from '../../../components/link/CustomLink.tsx';
import './Contacts.scss'
import {useForm} from 'react-hook-form';

type ContactsField = {
    name: string
    email: string
    message: string
}

export const Contacts = () => {

    const {
        handleSubmit,
        register,
        reset,
        formState: {errors}
    } = useForm<ContactsField>()

    console.log(errors)
    const onSubmit = (data: ContactsField) => {
        console.log(data)
        reset()
    }

    return (
        <section id={'contacts'}
                 className={'contactsSection'}>
            <div className={'contactsContainer'}>
                <SectionTitle title={'Contacts'}/>
                <form className={'contactsForm'}
                      onSubmit={handleSubmit(onSubmit)}>
                    <div className={'inputsWrapper'}>

                        <div className="formItem">
                            <label
                                htmlFor="inputName"
                                className="formLabel"
                            >
                                Name
                            </label>

                            <input
                                type="text"
                                id="inputName"
                                placeholder="Name"
                                className={`contactsField ${
                                    errors.email ? 'error' : ''
                                }`}
                                {...register('name', {
                                    required:
                                        'Name is required',
                                    minLength: {
                                        value: 3,
                                        message:
                                            'Minimum 3 symbols'
                                    }
                                })}
                            />
                            {errors.name && (
                                <span className="fieldError">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        <div className="formItem">
                            <label
                                htmlFor="inputEmail"
                                className="formLabel"
                            >
                                Email
                            </label>

                            <input
                                type="email"
                                id="inputEmail"
                                placeholder="example@mail.ru"
                                className={`contactsField ${
                                    errors.email ? 'error' : ''
                                }`}
                                {...register('email', {
                                    required:
                                        'Email is required',
                                    pattern: {
                                        value:
                                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message:
                                            'Invalid email'
                                    }
                                })}
                            />

                            {errors.email && (
                                <span className="fieldError">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className="formItem">
                            <label
                                htmlFor="formTextarea"
                                className="formLabel"
                            >
                                Message
                            </label>

                            <textarea
                                id="formTextarea"
                                placeholder="Your message"
                                className={`contactsField ${
                                    errors.message ? 'error' : ''
                                }`}
                                {...register('message', {
                                    required:
                                        'Message is required',
                                    maxLength: {
                                        value: 100,
                                        message:
                                            'Count of symbols was limited'
                                    }
                                })}
                            />

                            {errors.message && (
                                <span className="fieldError">
                                    {errors.message.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <CustomLink className={'contactsBtn'}
                                title={'Submit'}
                                as={'button'}
                                customSize={'lg'}
                                variant={'primary'}/>
                </form>
            </div>
        </section>
    );
};

