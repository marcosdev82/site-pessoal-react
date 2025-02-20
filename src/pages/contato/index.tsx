import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Helmet } from 'react-helmet-async';
import { EntryTitle } from './styles';

const Contato = () => {
    return (
        <>
            <Helmet>
                <title>Contato - Marcos Tavares Desenvolvedor Fullstack</title>
                <meta name="description" content="Entre em contato com Marcos Tavares, desenvolvedor fullstack especializado em JavaScript. Transforme suas ideias em soluções digitais inteligentes com aplicações robustas, escaláveis e intuitivas." />
                <link rel="canonical" href="https://marcostavares.dev.br/contato" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="desenvolvedor fullstack, desenvolvimento web, contato, aplicações escaláveis, criação de sites, sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador fullstack, Marcos Tavares" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contato - Marcos Tavares Fullstack" />
                <meta property="og:description" content="Entre em contato com Marcos Tavares, desenvolvedor fullstack especializado em JavaScript. Transforme suas ideias em soluções digitais inteligentes." />
                <meta property="og:url" content="https://marcostavares.dev.br/contato" />
                <meta property="og:site_name" content="Marcos Tavares FullStack" />
                <meta property="article:publisher" content="https://www.facebook.com/marcostavares.dev" />
            </Helmet>

            <EntryTitle>
                <h1>Contato</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'O campo de e-mail é obrigatório.';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Por favor, insira um e-mail válido.';
                        }
                        if (!values.password) {
                            errors.password = 'O campo de senha é obrigatório.';
                        } else if (values.password.length < 6) {
                            errors.password = 'A senha deve ter no mínimo 6 caracteres.';
                        }
                        return errors;
                    }}
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
                                <label htmlFor="email">E-mail:</label>
                                <Field type="email" name="email" id="email" placeholder="Digite seu e-mail" aria-label="E-mail" />
                                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                            </div>

                            <div>
                                <label htmlFor="password">Senha:</label>
                                <Field type="password" name="password" id="password" placeholder="Digite sua senha" aria-label="Senha" />
                                <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                            </div>

                            <button type="submit" disabled={isSubmitting}>
                                Enviar
                            </button>
                        </Form>
                    )}
                </Formik>
            </EntryTitle>
        </>
    );
}

export default Contato;
