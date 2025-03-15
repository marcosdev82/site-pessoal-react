import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Helmet } from 'react-helmet-async';
import EntryTitle  from '../../components/entrytitle';
import { ContactForm, Content } from './styles';


interface FormValues {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.name) {
        errors.name = 'O campo de nome é obrigatório.';
    } else if (values.name.length < 3) {
        errors.name = 'O nome deve ter pelo menos 3 caracteres.';
    }

    if (!values.email) {
        errors.email = 'O campo de e-mail é obrigatório.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Por favor, insira um e-mail válido.';
    }

    if (!values.phone) {
        errors.phone = 'O campo de telefone é obrigatório.';
    } else if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(values.phone)) {
        errors.phone = 'Formato inválido. Use (XX) XXXXX-XXXX.';
    }

    if (!values.message) {
        errors.message = 'O campo de mensagem é obrigatório.';
    } else if (values.message.length < 10) {
        errors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
    }

    return errors;
};

const Contato = () => {
    return (
        <>
            <Helmet>
                <title>Contato - Marcos Tavares Desenvolvedor Fullstack</title>
                <meta name="description" content="Entre em contato com Marcos Tavares, Whatsapp desenvolvedor fullstack especializado em JavaScript. Aproveite e faça um orçamento." />
                <link rel="canonical" href="https://marcostavares.dev.br/contato" />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <EntryTitle title='Contato' />

            <Content> 
                <ContactForm>
                    <Formik
                            initialValues={{ name: '', email: '', phone: '', message: '' }}
                            validate={validate}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div>
                                        <label htmlFor="name">Nome:</label>
                                        <Field type="text" name="name" id="name" placeholder="Digite seu nome" />
                                          <ErrorMessage name="name">
                                            {msg => <div style={{ color: '#f16262' }} className='error' aria-live="polite">{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div>
                                        <label htmlFor="email">E-mail:</label>
                                        <Field type="email" name="email" id="email" placeholder="Digite seu e-mail" />
                                        <ErrorMessage name="email">
                                            {msg => <div style={{ color: '#f16262' }} className='error' aria-live="polite">{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div>
                                        <label htmlFor="phone">Telefone:</label>
                                        <Field type="text" name="phone" id="phone" placeholder="(XX) XXXXX-XXXX" />
                                        <ErrorMessage name="phone">
                                            {msg => <div style={{ color: '#f16262' }} className='error'  aria-live="polite">{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div>
                                        <label htmlFor="message">Mensagem:</label>
                                        <Field as="textarea" name="message" id="message" placeholder="Digite sua mensagem" />
                                        <ErrorMessage name="message">
                                            {msg => <div style={{ color: '#f16262' }} className='error' aria-live="polite">{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <button type="submit" disabled={isSubmitting}>
                                        <span>Enviar</span>
                                    </button>
                                </Form>
                            )}
                    </Formik>
                </ContactForm>
            </Content>

        </>
    );
}

export default Contato;


