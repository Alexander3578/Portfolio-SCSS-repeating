import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import {CustomLink} from '../../../components/link/CustomLink.tsx';
import './Contacts.scss'

export const Contacts = () => {
    return (
        <section className={'contactsSection'}>
            <div className={'contactsContainer'}>
                <SectionTitle title={'Contacts'}/>
                <form className={'contactsForm'}>
                    <div className={'inputsWrapper'}>
                        <div className="formItem">
                            <label htmlFor="inputText"
                                   className="formLabel">Name</label>
                            <input type="text"
                                   name={'Name'}
                                   className={'contactsField fieldName'}
                                   id="inputText"
                                   placeholder={'Example'}/>
                        </div>
                        <div className="formItem">
                            <label htmlFor="inputEmail"
                                   className="formLabel">Email</label>
                            <input type="email"
                                   name={'Email'}
                                   className={'contactsField fieldEmail'}
                                   id="inputEmail"
                                   placeholder={'example@mail.ru'}/>
                        </div>
                        <div className="formItem">
                            <label htmlFor="formTextarea"
                                   className="formLabel">Mensaje</label>
                            <textarea name={'Message'}
                                      className={'contactsField'}
                                      id="formTextarea"
                                      placeholder={'Your message'}/>
                        </div>
                    </div>
                    <CustomLink type="submit"
                                className={'contactsBtn'}
                                title={'Submit'}
                                as={'button'}
                                size={'lg'}
                                variant={'primary'}/>
                </form>
            </div>
        </section>
    );
};

