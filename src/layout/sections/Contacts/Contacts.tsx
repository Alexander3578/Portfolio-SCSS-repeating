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
                        <input className={'contactsField fieldName'}
                               type="text"
                               name={'Name'}
                               placeholder={'Example'}/>
                        <input className={'contactsField fieldEmail'}
                               type="email"
                               name={'Email'}
                               placeholder={'example@mail.ru'}/>
                        <textarea className={'contactsField'}
                                  name={'Message'}
                                  placeholder={'Message'}/>
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

